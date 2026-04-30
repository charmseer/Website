/* ============================================================
   CHARMSEER PORTFOLIO — script.js
   ============================================================ */

/* === THEME TOGGLE === */
(function () {
  const root = document.documentElement;
  let isDark = false;

  function setTheme(dark) {
    isDark = dark;
    root.setAttribute('data-theme', dark ? '' : 'light');
    const labels = document.querySelectorAll('.toggle-label');
    labels.forEach(l => (l.textContent = dark ? 'Dark' : 'Light'));
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  // Restore saved preference
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') setTheme(true);
  else setTheme(false);

  // Desktop toggle
  const toggle = document.getElementById('theme-toggle');
  if (toggle) toggle.addEventListener('click', () => setTheme(!isDark));

  // Mobile toggle
  const toggleMobile = document.getElementById('theme-toggle-mobile');
  if (toggleMobile) toggleMobile.addEventListener('click', () => setTheme(!isDark));
})();


/* === MOBILE MENU === */
(function () {
  const btn = document.getElementById('nav-mobile-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  // Close on link click
  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
})();


/* === CUSTOM CURSOR === */
(function () {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) {
    if (cursor) cursor.style.display = 'none';
    return;
  }
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
})();


/* === STARFIELD CANVAS === */
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    const count = Math.floor((W * H) / 10000);
    for (let i = 0; i < Math.max(count, 80); i++) {
      stars.push({
        x:       Math.random() * W,
        y:       Math.random() * H,
        r:       Math.random() * 1.4 + 0.2,
        speed:   Math.random() * 0.18 + 0.04,
        opacity: Math.random() * 0.55 + 0.15,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${s.opacity})`;
      ctx.fill();
      s.y -= s.speed;
      if (s.y + s.r < 0) {
        s.y = H + s.r;
        s.x = Math.random() * W;
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  initStars();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); initStars(); }, 200);
  });
})();


/* === SCROLL REVEAL === */
(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(el => io.observe(el));
})();


/* === ACTIVE NAV HIGHLIGHT (scroll spy) === */
(function () {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + e.target.id) {
              a.style.color = 'var(--accent)';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => io.observe(s));
})();


/* === NAV SHADOW ON SCROLL === */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 30
      ? '0 4px 30px rgba(0,0,0,0.4)'
      : 'none';
  }, { passive: true });
})();
