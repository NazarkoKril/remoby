 const trigger = document.getElementById('dropdownTrigger');
  const menu    = document.getElementById('dropdownMenu');
  const label   = document.getElementById('dropdownLabel');

  trigger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    trigger.classList.toggle('open', isOpen);
    trigger.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      // update label
      label.textContent = item.dataset.label;
      // close dropdown
      menu.classList.remove('open');
      trigger.classList.remove('open');
      trigger.setAttribute('aria-expanded', false);
      // mark active
      document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-dropdown')) {
      menu.classList.remove('open');
      trigger.classList.remove('open');
      trigger.setAttribute('aria-expanded', false);
    }
  });

  /* ── ACTIVE STATE ON SCROLL (desktop) ── */
  const sections = document.querySelectorAll('.section[id]');
  const desktopBtns = document.querySelectorAll('.nav-btn');
  const mobileItems = document.querySelectorAll('.dropdown-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;

      desktopBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === id);
      });
      mobileItems.forEach(item => {
        const isActive = item.dataset.section === id;
        item.classList.toggle('active', isActive);
        if (isActive) label.textContent = item.dataset.label;
      });
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));