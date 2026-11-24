/* Ocupacional 3D — interações
   Tudo funciona sem JavaScript (links, conteúdo, menu visível);
   este arquivo só melhora a experiência. */
(function () {
  'use strict';

  var root = document.documentElement;
  var WHATSAPP = '5581984592258';
  var EMAIL = 'ocupacional3d@gmail.com';

  function store(key, value) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (e) { /* modo privado ou armazenamento bloqueado: segue sem salvar */ }
  }

  var statusEl = document.querySelector('[data-a11y-status]');
  function announce(msg) {
    if (!statusEl) return;
    // limpa antes para o leitor de tela repetir anúncios iguais
    statusEl.textContent = '';
    window.setTimeout(function () { statusEl.textContent = msg; }, 60);
  }

  /* ---------- Tamanho do texto ---------- */
  var LEVELS = [100, 115, 130, 150];
  var levelEl = document.querySelector('[data-fs-level]');
  var fsButtons = {
    down: document.querySelector('[data-fs-action="down"]'),
    reset: document.querySelector('[data-fs-action="reset"]'),
    up: document.querySelector('[data-fs-action="up"]')
  };

  function currentLevel() {
    var v = parseInt(root.getAttribute('data-fs') || '0', 10);
    return isNaN(v) ? 0 : Math.min(Math.max(v, 0), LEVELS.length - 1);
  }

  function renderLevel(idx) {
    if (levelEl) levelEl.textContent = LEVELS[idx] + '%';
    // aria-disabled (e não disabled) para o foco não se perder no limite
    if (fsButtons.down) fsButtons.down.setAttribute('aria-disabled', String(idx === 0));
    if (fsButtons.up) fsButtons.up.setAttribute('aria-disabled', String(idx === LEVELS.length - 1));
    if (fsButtons.reset) fsButtons.reset.setAttribute('aria-pressed', String(idx === 0));
  }

  function setLevel(idx, opts) {
    idx = Math.min(Math.max(idx, 0), LEVELS.length - 1);
    if (idx === 0) root.removeAttribute('data-fs');
    else root.setAttribute('data-fs', String(idx));
    store('o3d-tamanho-texto', idx === 0 ? null : String(idx));
    renderLevel(idx);
    if (!opts || !opts.silent) {
      var msg = 'Tamanho do texto: ' + LEVELS[idx] + '%';
      if (idx === 0) msg += ', padrão';
      if (idx === LEVELS.length - 1) msg += ', máximo';
      announce(msg + '.');
    }
    updateToolbarHeight();
  }

  Object.keys(fsButtons).forEach(function (action) {
    var btn = fsButtons[action];
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (btn.getAttribute('aria-disabled') === 'true') {
        announce(action === 'up' ? 'O texto já está no tamanho máximo.' : 'O texto já está no tamanho mínimo.');
        return;
      }
      var idx = currentLevel();
      if (action === 'down') setLevel(idx - 1);
      else if (action === 'up') setLevel(idx + 1);
      else setLevel(0);
    });
  });
  renderLevel(currentLevel());

  /* ---------- Alto contraste ---------- */
  var contrastBtn = document.querySelector('[data-contrast-toggle]');
  function renderContrast() {
    var on = root.getAttribute('data-contrast') === 'high';
    if (contrastBtn) contrastBtn.setAttribute('aria-pressed', String(on));
    return on;
  }
  if (contrastBtn) {
    contrastBtn.addEventListener('click', function () {
      var on = root.getAttribute('data-contrast') !== 'high';
      if (on) root.setAttribute('data-contrast', 'high');
      else root.removeAttribute('data-contrast');
      store('o3d-alto-contraste', on ? '1' : null);
      renderContrast();
    });
  }
  renderContrast();

  /* ---------- Altura real da barra fixa (para âncoras não ficarem escondidas) ---------- */
  var toolbar = document.querySelector('[data-toolbar]');
  function updateToolbarHeight() {
    if (!toolbar) return;
    root.style.setProperty('--toolbar-h', toolbar.offsetHeight + 'px');
  }
  if (toolbar) {
    updateToolbarHeight();
    if ('ResizeObserver' in window) new ResizeObserver(updateToolbarHeight).observe(toolbar);
    else window.addEventListener('resize', updateToolbarHeight);
  }

  /* ---------- Menu ---------- */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navList = document.querySelector('[data-nav-list]');
  function setMenu(open, returnFocus) {
    if (!navToggle || !navList) return;
    navToggle.setAttribute('aria-expanded', String(open));
    navList.classList.toggle('is-open', open);
    if (!open && returnFocus) navToggle.focus();
  }
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });
    navList.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
  }

  /* Destaca no menu a seção visível */
  var navLinks = navList ? Array.prototype.slice.call(navList.querySelectorAll('a[href^="#"]')) : [];
  if ('IntersectionObserver' in window && navLinks.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = byId[entry.target.id];
        if (link) link.setAttribute('aria-current', 'location');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
  }

  /* Ao seguir uma âncora, o foco vai para a seção (leitores de tela e teclado) */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    var target = id && document.getElementById(id);
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    window.setTimeout(function () { target.focus({ preventScroll: true }); }, 0);
  });

  /* ---------- Acordeão (padrão WAI-ARIA) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-accordion]'), function (acc) {
    var triggers = Array.prototype.slice.call(acc.querySelectorAll('.accordion__trigger'));
    triggers.forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      panel.hidden = btn.getAttribute('aria-expanded') !== 'true';
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(open));
        panel.hidden = !open;
      });
      btn.addEventListener('keydown', function (e) {
        var i = triggers.indexOf(btn), next = null;
        if (e.key === 'ArrowDown') next = triggers[(i + 1) % triggers.length];
        else if (e.key === 'ArrowUp') next = triggers[(i - 1 + triggers.length) % triggers.length];
        else if (e.key === 'Home') next = triggers[0];
        else if (e.key === 'End') next = triggers[triggers.length - 1];
        if (next) { e.preventDefault(); next.focus(); }
      });
    });
  });

  /* ---------- Formulário de contato → WhatsApp ou e-mail ---------- */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var summary = form.querySelector('[data-error-summary]');
    var summaryTitle = form.querySelector('[data-error-summary-title]');
    var summaryList = form.querySelector('[data-error-list]');
    var statusBox = form.querySelector('[data-form-status]');
    var rules = [
      { id: 'nome', label: 'Seu nome', empty: 'Escreva seu nome para sabermos como chamar você.', min: 2, short: 'O nome precisa ter pelo menos 2 letras.' },
      { id: 'assunto', label: 'Assunto', empty: 'Escolha um assunto na lista.' },
      { id: 'mensagem', label: 'Mensagem', empty: 'Escreva uma mensagem curta contando sua necessidade.', min: 5, short: 'A mensagem está muito curta. Escreva pelo menos 5 letras.' }
    ];
    var submitter = 'whatsapp';

    function errorEl(id) { return document.getElementById(id + '-erro'); }

    function validateField(rule) {
      var field = document.getElementById(rule.id);
      var value = (field.value || '').trim();
      var msg = '';
      if (!value) msg = rule.empty;
      else if (rule.min && value.length < rule.min) msg = rule.short;
      var err = errorEl(rule.id);
      if (msg) {
        field.setAttribute('aria-invalid', 'true');
        err.textContent = msg;
        err.hidden = false;
      } else {
        field.removeAttribute('aria-invalid');
        err.textContent = '';
        err.hidden = true;
      }
      return msg;
    }

    // Revalida ao sair do campo só depois de um erro já mostrado (não interrompe quem digita)
    rules.forEach(function (rule) {
      var field = document.getElementById(rule.id);
      field.addEventListener(field.tagName === 'SELECT' ? 'change' : 'input', function () {
        if (field.getAttribute('aria-invalid') === 'true') validateField(rule);
      });
    });

    Array.prototype.forEach.call(form.querySelectorAll('[data-submit]'), function (b) {
      b.addEventListener('click', function () { submitter = b.getAttribute('data-submit'); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (e.submitter && e.submitter.hasAttribute('data-submit')) submitter = e.submitter.getAttribute('data-submit');
      statusBox.textContent = '';

      var errors = [];
      rules.forEach(function (rule) {
        var msg = validateField(rule);
        if (msg) errors.push({ id: rule.id, label: rule.label, msg: msg });
      });

      if (errors.length) {
        summaryList.innerHTML = '';
        errors.forEach(function (err) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.href = '#' + err.id;
          a.textContent = err.label + ': ' + err.msg;
          a.addEventListener('click', function (ev) {
            ev.preventDefault();
            document.getElementById(err.id).focus();
          });
          li.appendChild(a);
          summaryList.appendChild(li);
        });
        summaryTitle.textContent = errors.length === 1
          ? 'Falta 1 campo. Revise antes de enviar:'
          : 'Faltam ' + errors.length + ' campos. Revise antes de enviar:';
        summary.hidden = false;
        summary.focus();
        return;
      }
      summary.hidden = true;

      var data = new FormData(form);
      var paraQuem = data.get('para-quem');
      var cidade = (data.get('cidade') || '').trim();
      var lines = [
        'Olá! Meu nome é ' + data.get('nome').trim() + '.',
        'Assunto: ' + data.get('assunto') + '.'
      ];
      if (paraQuem) lines.push('É ' + paraQuem + '.');
      if (cidade) lines.push('Cidade: ' + cidade + '.');
      lines.push('', data.get('mensagem').trim(), '', '(Mensagem enviada pelo site)');
      var text = lines.join('\n');

      var url, label;
      if (submitter === 'email') {
        url = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Contato pelo site: ' + data.get('assunto')) + '&body=' + encodeURIComponent(text);
        label = 'Abrimos seu programa de e-mail com a mensagem pronta. ';
        window.location.href = url;
      } else {
        url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text);
        label = 'Abrimos o WhatsApp em outra aba com a sua mensagem. ';
        // sem 'noopener' nas features: com ele, window.open sempre devolve null
        var win = window.open(url, '_blank');
        if (win) { try { win.opener = null; } catch (err) {} }
        else label = 'Sua mensagem está pronta. ';
      }

      // Mensagem de confirmação com link de reserva (caso a aba seja bloqueada)
      statusBox.textContent = '';
      statusBox.appendChild(document.createTextNode(label));
      var link = document.createElement('a');
      link.href = url;
      if (submitter !== 'email') { link.target = '_blank'; link.rel = 'noopener'; }
      link.textContent = submitter === 'email' ? 'Se não abriu, clique aqui.' : 'Se não abriu, clique aqui para abrir o WhatsApp.';
      statusBox.appendChild(link);
    });
  }

  /* ---------- Botão flutuante: some quando o contato ou o CTA principal estão na tela ---------- */
  var fab = document.querySelector('[data-fab]');
  if (fab && 'IntersectionObserver' in window) {
    var watched = [document.getElementById('inicio'), document.getElementById('contato'), document.querySelector('.site-footer')].filter(Boolean);
    var visible = new Set();
    var fabObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      var hide = visible.size > 0;
      // nunca esconder o botão enquanto ele tem o foco
      if (hide && document.activeElement === fab) return;
      fab.classList.toggle('is-hidden', hide);
    }, { threshold: 0 });
    watched.forEach(function (el) { fabObserver.observe(el); });
  }
})();
