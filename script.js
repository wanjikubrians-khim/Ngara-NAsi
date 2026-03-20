function toggleMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
}

async function submitForm(e){
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  formData.append('_captcha', 'false');
  formData.append('_subject', 'Ng\'ara Supuu Booking Request');
  formData.append('_template', 'table');

  const toastEl = document.getElementById('toast');
  try {
    const res = await fetch('https://formsubmit.co/ajax/ngarafresh@yopmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });
    const json = await res.json();

    if (!res.ok || !json.success) {
      throw new Error(json.message || 'Form submit failed');
    }

    form.reset();
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    toastEl.textContent = 'Booking request sent—check your inbox shortly.';
    showToast();
  } catch (error) {
    console.error('Booking submission error:', error);
    toastEl.textContent = 'Could not send request: use WhatsApp/call instead.';
    showToast();
  }
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
