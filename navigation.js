(() => {
  const header = document.querySelector('.site-header');
  const button = header.querySelector('.menu-toggle');
  const links = [...header.querySelectorAll('nav a')];
  const targets = links.map(a => document.getElementById(a.hash.slice(1))).filter(Boolean);
  const syncHeight = () => document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
  const close = () => { header.classList.remove('menu-open'); button.setAttribute('aria-expanded', 'false'); syncHeight(); };
  header.classList.add('enhanced');
  button.addEventListener('click', () => { const open = header.classList.toggle('menu-open'); button.setAttribute('aria-expanded', String(open)); syncHeight(); });
  header.addEventListener('keydown', e => { if (e.key === 'Escape' && header.classList.contains('menu-open')) { close(); button.focus(); } });
  const reveal = target => { let el = target; while (el) { if (el.tagName === 'DETAILS') el.open = true; el = el.parentElement; } };
  const activate = () => {
    let current = targets[0];
    for (const el of targets) if (el.getBoundingClientRect().top <= header.offsetHeight + 70) current = el;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = targets.at(-1);
    links.forEach(a => a.hash === '#' + current.id ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current'));
  };
  const focusTarget = target => { target.setAttribute('tabindex', '-1'); target.focus({preventScroll:true}); };
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const target = document.getElementById(a.hash.slice(1)); if (!target) return;
    e.preventDefault(); close(); reveal(target);
    history.pushState(null, '', a.hash); target.scrollIntoView({block:'start'}); focusTarget(target); activate();
  }));
  const restoreHash = () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) { reveal(target); requestAnimationFrame(() => { target.scrollIntoView({block:'start'}); activate(); }); }
  };
  window.addEventListener('hashchange', restoreHash);
  window.addEventListener('popstate', restoreHash);
  let queued=false;window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(()=>{activate();queued=false;});}},{passive:true});
  if ('ResizeObserver' in window) new ResizeObserver(syncHeight).observe(header);
  window.addEventListener('resize', () => { syncHeight(); activate(); });
  window.matchMedia('(min-width:1101px)').addEventListener('change',close);
  syncHeight();restoreHash();activate();
})();
