// Typing effect in the address bar
const roles = ['full-stack-developer', 'wordpress-engineer', 'react-developer', 'shopify-builder'];
const addrTyped = document.getElementById('addrTyped');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeLoop(){
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick(){
    const current = roles[roleIndex];
    if (!deleting){
      charIndex++;
      addrTyped.textContent = current.slice(0, charIndex);
      if (charIndex === current.length){
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      addrTyped.textContent = current.slice(0, charIndex);
      if (charIndex === 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}

if (addrTyped){
  if (reduceMotion){
    addrTyped.textContent = roles[0];
  } else {
    typeLoop();
  }
}

// Mobile tab menu
const tabToggle = document.getElementById('tabToggle');
const tabList = document.getElementById('tabList');

if (tabToggle && tabList){
  tabToggle.addEventListener('click', () => {
    const isOpen = tabList.classList.toggle('open');
    tabToggle.setAttribute('aria-expanded', isOpen);
  });

  tabList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      tabList.classList.remove('open');
      tabToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active tab highlighting on scroll
const sections = document.querySelectorAll('section[id], .anchor[id]');
const tabs = document.querySelectorAll('.tab');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      tabs.forEach(tab => tab.classList.remove('active'));
      const activeTab = document.querySelector(`.tab[href="#${entry.target.id}"]`);
      if (activeTab) activeTab.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

sections.forEach(section => observer.observe(section));
