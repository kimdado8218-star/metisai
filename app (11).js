const nav=document.querySelector('#main-nav');
const toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');nav.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','메뉴 열기');toggle.focus();}});
const dialog=document.querySelector('dialog');const config=JSON.parse(document.querySelector('#site-config').textContent);
document.querySelectorAll('[data-buy]').forEach(b=>b.addEventListener('click',()=>{if(config.checkoutUrl){location.assign(config.checkoutUrl);}else dialog.showModal();}));
document.querySelectorAll('.dialog-close,.dialog-confirm').forEach(b=>b.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
// TODO: 실제 서버 및 이메일 발송 서비스 연결 후, 동의·오류 처리·스팸 방지를 구현하세요.
// 현재는 개인정보를 저장하거나 전송하지 않으며 성공적인 접수로 오인시키지 않습니다.
document.querySelectorAll('form[data-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const fields=[...form.querySelectorAll('input:not([type=checkbox]),textarea')];fields.forEach(f=>{f.value=f.value.trim();f.setCustomValidity(f.required&&!f.value?'내용을 입력해 주세요.':'');});if(!form.reportValidity())return;const result=form.querySelector('.form-result');result.textContent='입력 확인이 완료되었습니다. 아직 연결 준비 중으로 실제 접수·전송·저장은 되지 않았습니다.';result.focus();}));
document.querySelectorAll('input,textarea').forEach(f=>f.addEventListener('input',()=>f.setCustomValidity('')));
