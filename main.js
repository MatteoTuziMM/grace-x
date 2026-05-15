    const html = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
            html.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.add('light');
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialization
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (systemPrefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // System preference listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    emailjs.init({ publicKey: 'Aetm3nixrn8QoM3Zb' });

(function(){
var T=5,INT=5000,ai=0,tmr=null;
var DATA=[
  {num:'01',title:'Input',flow:'',desc:'Raw data entering the Grace-X system.'},
  {num:'02',title:'Privacy Layer',flow:'Prompt Request →',desc:'Pseudonymization, Encryption and Memory Graph processing.'},
  {num:'03',title:'Global LLM',flow:'Prompt Request →',desc:'Cloud or on-device model processes the anonymized prompt.'},
  {num:'04',title:'De-process',flow:'← Prompt Answer',desc:'De-Encryption and De-anonymization of the model response.'},
  {num:'05',title:'Output',flow:'← Prompt Answer',desc:'Private, processed result returned to the user.'}
];
var R=210;
function calcPos(offset){
  var a=(-offset*72-90)*Math.PI/180;
  return {x:+(R*Math.cos(a)).toFixed(2),y:+(R*Math.sin(a)).toFixed(2)};
}
function render(anim){
  document.querySelectorAll('.gx-node').forEach(function(nd,i){
    var off=((i-ai)%T+T)%T;
    var p=calcPos(off);
    var active=off===0,near=off===1||off===T-1;
    var sc=active?1.0:near?0.62:0.5;
    var op=active?1:near?0.55:0.3;
    nd.style.transition=anim?'transform .95s cubic-bezier(.4,0,.2,1),opacity .95s cubic-bezier(.4,0,.2,1)':'none';
    nd.style.transform='translate(calc('+p.x+'px - 50%),calc('+p.y+'px - 50%)) scale('+sc+')';
    nd.style.opacity=op;
    nd.style.zIndex=active?10:near?5:1;
    var c=nd.querySelector('.gx-circle'),ico=nd.querySelector('.gx-icon'),lbl=nd.querySelector('.gx-label');
    if(c){c.style.borderColor=active?'rgba(124,58,237,.35)':'rgba(255,255,255,.08)';c.style.background=active?'#201f1f':'#1c1b1b';c.style.boxShadow=active?'0 0 28px rgba(124,58,237,.18)':'none';}
    if(ico) ico.style.color=active?'#7C3AED':'#c4c7c8';
    if(lbl) lbl.style.color=active?'#e5e2e1':'#888';
  });
}
function updateInfo(){
  var el=document.getElementById('gx-info');if(!el)return;
  el.style.opacity='0';
  setTimeout(function(){
    var d=DATA[ai];
    document.getElementById('gx-c-num').textContent=d.num;
    document.getElementById('gx-c-title').textContent=d.title;
    document.getElementById('gx-c-flow').textContent=d.flow;
    document.getElementById('gx-c-desc').textContent=d.desc;
    el.style.opacity='1';
  },280);
}
function flashArrows(){
  var paths=document.querySelectorAll('.gx-arrow-path');
  paths.forEach(function(p){p.classList.add('lit');});
  setTimeout(function(){paths.forEach(function(p){p.classList.remove('lit');});},900);
}
function goTo(n,anim){ai=((n%T)+T)%T;render(anim!==false);updateInfo();if(anim!==false)flashArrows();}
function startAuto(){clearInterval(tmr);tmr=setInterval(function(){goTo(ai+1,true);},INT);}
function stopAuto(){clearInterval(tmr);tmr=null;}
window.gxGoTo=function(n){stopAuto();goTo(n,true);startAuto();};
window.gxPrev=function(){stopAuto();goTo(ai-1,true);startAuto();};
window.gxNext=function(){stopAuto();goTo(ai+1,true);startAuto();};
goTo(0,false);
startAuto();
}());

function expandCtaForm() {
    var btnArea = document.getElementById('cta-btn-area');
    var formArea = document.getElementById('cta-form-container');
    btnArea.classList.add('hiding');
    setTimeout(function() {
        btnArea.style.display = 'none';
        formArea.classList.add('is-open');
        setTimeout(function() {
            formArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 250);
    }, 220);
}
function collapseCtaForm() {
    var btnArea = document.getElementById('cta-btn-area');
    var formArea = document.getElementById('cta-form-container');
    formArea.classList.remove('is-open');
    setTimeout(function() {
        btnArea.style.display = '';
        btnArea.classList.remove('hiding');
        document.getElementById('contact-form').classList.remove('hidden');
        document.getElementById('contact-success').classList.add('hidden');
        document.getElementById('contact-error').classList.add('hidden');
        document.getElementById('contact-form').reset();
    }, 220);
}
function toggleTheme() {
    applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
}

function handleContactSubmit(e) {
    e.preventDefault();
    var btn = e.target.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Invio in corso…';
    document.getElementById('contact-error').classList.add('hidden');

    emailjs.sendForm('service_f2w7adi', 'template_2c9xmz9', e.target)
        .then(function() {
            document.getElementById('contact-form').classList.add('hidden');
            document.getElementById('contact-success').classList.remove('hidden');
        })
        .catch(function() {
            btn.disabled = false;
            btn.textContent = originalText;
            document.getElementById('contact-error').classList.remove('hidden');
        });
}
