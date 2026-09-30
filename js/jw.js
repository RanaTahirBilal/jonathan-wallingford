(function () {
  'use strict';

  var btn = document.getElementById('jw-menu-btn');
  var menu = document.getElementById('jw-menu');
  var close = document.getElementById('jw-menu-close');

  function openMenu() {
    menu.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    close.focus();
  }

  function closeMenu() {
    menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    btn.focus();
  }

  if (btn && menu && close) {
    btn.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    menu.addEventListener('click', function (e) {
      if (e.target.classList.contains('jw-menu-link')) { closeMenu(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { closeMenu(); }
    });
  }

  var top = document.querySelector('.jw-top');
  if (top) {
    var onScroll = function () {
      if (window.pageYOffset > 600) { top.classList.add('is-on'); }
      else { top.classList.remove('is-on'); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}());
