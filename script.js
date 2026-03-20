function toggleMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
}

function submitForm(e){
  e.preventDefault();
  document.getElementById('bookingForm').style.display='none';
  document.getElementById('formSuccess').style.display='block';
  showToast();
}

function showToast(){
  const t=document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),4000);
}

const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{
    if(window.scrollY>=s.offsetTop-80) cur=s.id;
  });
  navLinks.forEach(a=>{
    a.style.color = a.getAttribute('href')==='#'+cur ? 'var(--teal)' : '';
  });
});
