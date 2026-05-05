/* ============================================
   COMAL — Pupusería Contemporánea
   Script principal
   --------------------------------------------
   Autor:  Equipo COMAL
   Versión: 1.0
   --------------------------------------------
   Módulos:
   1. Barra de progreso de scroll
   2. Estado abierto/cerrado en navbar
   3. Menú hamburguesa
   4. Reveals al hacer scroll
   5. Contadores animados
   6. Botones magnéticos
   7. Generador de número de ticket
   8. Validación de formulario
   9. Año dinámico en footer
   10. Comportamiento del navbar al scroll
   ============================================ */

(function () {
  'use strict';

  /* ============================================
     1. BARRA DE PROGRESO DE SCROLL
     ============================================ */
  const scrollBar = document.getElementById('scrollBar');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    scrollBar.style.width = pct + '%';
  });

  /* ============================================
     2. ESTADO ABIERTO/CERRADO EN EL NAVBAR
     ============================================ */
  // Horario: Mar-Jue 12:00-21:00 · Vie-Sab 12:00-22:00 · Dom 12:00-20:00 · Lun cerrado
  function updateOpenStatus() {
    const now = new Date();
    const day = now.getDay(); // 0=Dom, 1=Lun, 2=Mar...
    const hour = now.getHours();
    const minute = now.getMinutes();
    const time = hour + minute / 60;

    const statusText = document.getElementById('openStatus');
    const statusDot = document.querySelector('.status-dot');
    let isOpen = false;
    let label = '';

    if (day === 1) {
      label = 'Cerrado · lunes';
    } else if (day === 0) {
      // Domingo
      if (time >= 12 && time < 20) { isOpen = true; label = 'Abierto ahora'; }
      else { label = 'Cerrado · abre 12:00'; }
    } else if (day >= 2 && day <= 4) {
      // Mar-Jue
      if (time >= 12 && time < 21) { isOpen = true; label = 'Abierto ahora'; }
      else { label = 'Cerrado · abre 12:00'; }
    } else {
      // Vie-Sab
      if (time >= 12 && time < 22) { isOpen = true; label = 'Abierto ahora'; }
      else { label = 'Cerrado · abre 12:00'; }
    }

    if (statusText) statusText.textContent = label;
    if (statusDot) {
      if (isOpen) statusDot.classList.remove('closed');
      else statusDot.classList.add('closed');
    }
  }
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);

  /* ============================================
     3. MENÚ HAMBURGUESA
     ============================================ */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ============================================
     4. REVEALS AL HACER SCROLL
     ============================================ */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ============================================
     5. CONTADORES ANIMADOS
     ============================================ */
  function animateCounter(el) {
    const target   = parseFloat(el.dataset.target);
    const duration = 1800;
    const start    = performance.now();

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const value    = target * eased;
      el.textContent = Math.floor(value).toLocaleString('es');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));

  /* ============================================
     6. BOTONES MAGNÉTICOS
     ============================================ */
  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  /* ============================================
     7. GENERADOR DE NÚMERO DE TICKET (PREVIEW)
     ============================================ */
  function generateTicket() {
    const date = new Date();
    const yy = String(date.getFullYear()).slice(-2);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const rand = Math.floor(Math.random() * 9000 + 1000);
    return `CM${yy}${mm}${dd}-${rand}`;
  }
  const ticketPreview = document.getElementById('ticketPreview');
  if (ticketPreview) ticketPreview.textContent = generateTicket();

  /* ============================================
     8. VALIDACIÓN DE FORMULARIO
     ============================================ */
  const form         = document.getElementById('form');
  const submitBtn    = document.getElementById('submitBtn');
  const formStatus   = document.getElementById('formStatus');
  const charCount    = document.getElementById('charCount');
  const messageField = form.querySelector('[name="mensaje"]');
  const dateField    = form.querySelector('[name="fecha"]');

  // Configurar fecha mínima (hoy) y máxima (60 días adelante)
  if (dateField) {
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    const maxDate = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000)
      .toISOString().split('T')[0];
    dateField.setAttribute('min', minDate);
    dateField.setAttribute('max', maxDate);
  }

  // Contador de caracteres en vivo
  messageField.addEventListener('input', () => {
    charCount.textContent = messageField.value.length;
  });

  // Reglas de validación por campo
  const validators = {
    nombre: (v) => {
      if (!v.trim()) return 'campo requerido';
      if (v.trim().length < 3) return 'mínimo 3 caracteres';
      if (!/^[\p{L}\s'.-]+$/u.test(v.trim())) return 'solo letras y espacios';
      return null;
    },
    email: (v) => {
      if (!v.trim()) return 'campo requerido';
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!re.test(v.trim())) return 'formato de correo inválido';
      return null;
    },
    telefono: (v) => {
      if (!v.trim()) return 'campo requerido';
      // Acepta formatos: +503 0000-0000, 7000-1122, 22223344, etc.
      const cleaned = v.replace(/[\s\-()]/g, '');
      if (!/^[+]?\d{8,15}$/.test(cleaned)) return 'mínimo 8 dígitos';
      return null;
    },
    personas: (v) => {
      if (!v) return 'selecciona cantidad';
      return null;
    },
    fecha: (v) => {
      if (!v) return 'selecciona una fecha';
      const selected = new Date(v + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) return 'fecha en el pasado';
      // Validar que no sea lunes (día = 1)
      if (selected.getDay() === 1) return 'cerrado los lunes';
      // Validar máximo 60 días
      const max = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);
      if (selected > max) return 'máximo 60 días adelante';
      return null;
    },
    hora: (v) => {
      if (!v) return 'selecciona una hora';
      return null;
    },
    experiencia: (v) => {
      if (!v) return 'elige una experiencia';
      return null;
    },
    mensaje: (v) => {
      // Es opcional, pero si se llena debe tener mínimo 5 caracteres
      if (!v.trim()) return null;
      if (v.trim().length < 5) return 'muy corto, agrega más detalle';
      if (v.trim().length > 300) return 'máximo 300 caracteres';
      return null;
    },
    terminos: (v) => {
      if (!v) return 'debes aceptar la política';
      return null;
    },
  };

  // Validar un campo y aplicar/quitar clases visuales
  function validateField(name) {
    const wrapper = form.querySelector(`[data-field="${name}"]`);
    if (!wrapper) return true;

    const input = wrapper.querySelector('input, textarea, select');
    const msg   = wrapper.querySelector('.field-msg');

    const value = input.type === 'checkbox' ? input.checked : input.value;
    const error = validators[name] ? validators[name](value) : null;

    wrapper.classList.remove('error', 'valid');
    if (msg) msg.textContent = '';

    if (error) {
      wrapper.classList.add('error');
      if (msg) msg.textContent = '✕ ' + error;
      return false;
    }

    // Solo marcar como válido si el usuario llenó el campo
    const wasFilled = (typeof value === 'string' ? value.trim().length > 0 : value);
    if (wasFilled) {
      wrapper.classList.add('valid');
      if (msg) msg.textContent = '✓ correcto';
    }
    return true;
  }

  // Validación en vivo (blur o change)
  form.querySelectorAll('input, textarea, select').forEach((input) => {
    const name = input.name;
    const eventName = (input.type === 'checkbox' || input.tagName === 'SELECT' || input.type === 'date')
      ? 'change' : 'blur';
    input.addEventListener(eventName, () => validateField(name));

    // Re-validar al escribir si ya hay error
    input.addEventListener('input', () => {
      const wrapper = form.querySelector(`[data-field="${name}"]`);
      if (wrapper && wrapper.classList.contains('error')) validateField(name);
    });
  });

  // Envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = ['nombre', 'email', 'telefono', 'personas', 'fecha', 'hora', 'experiencia', 'mensaje', 'terminos'];
    let allValid = true;
    fields.forEach((f) => {
      if (!validateField(f)) allValid = false;
    });

    if (!allValid) {
      formStatus.classList.remove('show');
      const firstError = form.querySelector('.field.error, .checkbox-field.error');
      if (firstError) {
        const input = firstError.querySelector('input, textarea, select');
        if (input) input.focus();
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Recolectar datos
    const formData = new FormData(form);
    const personas = formData.get('personas');
    const fecha = formData.get('fecha');
    const hora = formData.get('hora');
    const nombre = formData.get('nombre').trim().split(' ')[0];

    // Formatear fecha en español
    const fechaObj = new Date(fecha + 'T00:00:00');
    const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
    const fechaTexto = fechaObj.toLocaleDateString('es-SV', opciones);

    // Estado: enviando
    submitBtn.classList.add('sending');
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'enviando solicitud';
    submitBtn.querySelector('.arrow').outerHTML = '<span class="pulse"></span>';

    setTimeout(() => {
      submitBtn.classList.remove('sending');
      submitBtn.classList.add('sent');
      submitBtn.querySelector('.btn-text').textContent = '¡reserva enviada!';
      submitBtn.querySelector('.pulse').outerHTML = '<span>✓</span>';

      const ticket = generateTicket();
      formStatus.classList.add('show');
      formStatus.innerHTML = `
        <strong>Reserva ${ticket}</strong><br>
        ¡Gracias, ${nombre}! Hemos recibido tu solicitud para
        <strong style="color: var(--char); font-family: var(--font-body);">${personas} persona${personas > 1 ? 's' : ''}</strong>
        el <strong style="color: var(--char); font-family: var(--font-body);">${fechaTexto}</strong> a las
        <strong style="color: var(--char); font-family: var(--font-body);">${hora}</strong>.<br>
        Te confirmamos por WhatsApp en menos de 4 horas. Si no recibís respuesta, escribinos al +503 7000-1122.
      `;

      // Resetear después de 8 segundos
      setTimeout(() => {
        form.reset();
        form.querySelectorAll('.field, .checkbox-field').forEach((f) => {
          f.classList.remove('valid', 'error');
          const m = f.querySelector('.field-msg');
          if (m) m.textContent = '';
        });
        charCount.textContent = '0';
        if (ticketPreview) ticketPreview.textContent = generateTicket();
        submitBtn.classList.remove('sent');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span class="btn-text">Enviar solicitud</span><span class="arrow">→</span>';
        formStatus.classList.remove('show');
      }, 8000);
    }, 1600);
  });

  /* ============================================
     9. AÑO DINÁMICO EN FOOTER
     ============================================ */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ============================================
     10. NAVBAR AL HACER SCROLL
     ============================================ */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

})();
