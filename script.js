// small helpers for UI: set year, create floating particles, slideshows
document.getElementById('year')?.textContent = new Date().getFullYear();

// create floating particles (decorative)
const container = document.querySelector('.floating-particles');
if (container) {
  const total = 18;
  for (let i=0;i<total;i++){
    const el = document.createElement('span');
    el.className = 'particle';
    const size = 6 + Math.random()*18;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${Math.random()*100}%`;
    el.style.bottom = `${-50 - Math.random()*200}px`;
    el.style.opacity = `${0.12 + Math.random()*0.2}`;
    el.style.background = 'rgba(76,175,80,0.35)';
    el.style.position = 'absolute';
    el.style.borderRadius = '50%';
    el.style.animation = `floatUp ${10 + Math.random()*12}s linear infinite`;
    el.style.animationDelay = `${Math.random()*6}s`;
    container.appendChild(el);
  }
}

// main slideshow (products)
(function productSlides(){
  const slides = document.querySelectorAll('.slideshow-container .slide');
  let i = 0;
  if (!slides.length) return;
  function next(){
    slides.forEach(s=> s.style.display='none');
    slides[i].style.display = 'block';
    i = (i+1) % slides.length;
    setTimeout(next, 4000);
  }
  next();
})();

// gallery slider (simple carousel)
(function gallerySlides(){
  const slides = document.querySelectorAll('.g-slide');
  let g = 0;
  if (!slides.length) return;
  function next(){
    slides.forEach(s=> s.style.display='none');
    slides[g].style.display='block';
    g = (g+1) % slides.length;
    setTimeout(next, 3500);
  }
  next();
})();
