(async()=>{
 const I=Invitation;let c=I.normalize(window.WEDDING_CONFIG);const params=new URLSearchParams(location.search);
 if(params.has('preview')){try{const draft=await I.storage('get',params.get('preview'));if(!draft)throw Error('Draf tidak ditemukan pada browser ini.');c=I.normalize(draft.config);const label=document.createElement('div');label.className='preview-label';label.textContent='PRATINJAU DRAF • Belum diterbitkan';document.body.append(label);}catch(e){alert(e.message);return;}}
 const name=params.get('to')||'Bapak/Ibu/Saudara/i';document.getElementById('nama').textContent=name;
 for(let n=1;n<=2;n++)c['event'+n+'Time']=c['event'+n+'Start']+' '+({' +07:00':'WIB','+07:00':'WIB','+08:00':'WITA','+09:00':'WIT'}[c.timezone])+' – '+c['event'+n+'End'];
 document.querySelectorAll('[data-text]').forEach(e=>e.textContent=c[e.dataset.text]||'');
 document.querySelectorAll('[data-couple]').forEach(e=>e.textContent=I.couple(c));
 document.querySelectorAll('[data-date]').forEach(e=>e.textContent=I.date(c[c.countdownEvent+'Date']));
 document.querySelectorAll('[data-src]').forEach(e=>{const url=I.safeUrl(c[e.dataset.src],true);if(url)e.src=url;else{e.removeAttribute('src');e.hidden=true;}});
 document.querySelectorAll('[data-bg]').forEach(e=>{const url=I.safeUrl(c[e.dataset.bg],true);e.style.backgroundImage=url?'linear-gradient(#0003,#0003), url('+JSON.stringify(url)+')':'none';});
 for(let i=1;i<=2;i++){const pre='event'+i;document.querySelector('[data-month='+pre+']').textContent=I.date(c[pre+'Date'],{month:'long',year:'numeric',timeZone:'UTC'});document.querySelector('[data-day='+pre+']').textContent=I.date(c[pre+'Date'],{day:'numeric',timeZone:'UTC'});document.querySelector('[data-weekday='+pre+']').textContent=I.date(c[pre+'Date'],{weekday:'long',timeZone:'UTC'});const a=document.querySelector('[data-event-map='+pre+']');a.href=I.safeUrl(c[pre+'Map']);a.hidden=!I.safeUrl(c[pre+'Map']);}
 const map=document.querySelector('[data-map-embed]');const mapUrl=I.safeUrl(c.mapEmbed);let validMap=false;try{const u=new URL(mapUrl);validMap=/^(www\.)?google\.(com|co\.id)$/.test(u.hostname)&&u.pathname.startsWith('/maps');}catch{}if(validMap)map.src=mapUrl;else{map.removeAttribute('src');map.hidden=true;}
 const mainMap=document.querySelector('.map [data-main-map]');mainMap.href=I.safeUrl(c[c.countdownEvent+'Map']);mainMap.hidden=!mainMap.getAttribute('href');
 document.querySelectorAll('[data-bank]').forEach(e=>e.hidden=!c['bank'+e.dataset.bank+'Number'].trim());document.querySelector('#envelope').hidden=![c.bank1Number,c.bank2Number].some(s=>s.trim());
 const credit=document.querySelector('[data-credit-url]');credit.href=I.safeUrl(c.creditUrl)||'#';credit.rel='noopener';
 document.title=I.couple(c)+' | Undangan Pernnikahan'.replace('Pernnikahan','Pernikahan');
 const audio=document.getElementById('lagu');audio.load();window.playAudio=()=>audio.play().catch(()=>{});window.stopAudio=()=>audio.pause();
 document.querySelector('.music-controls').hidden=!c.music;
 document.getElementById('open').addEventListener('click',()=>{document.getElementById('cover').classList.add('cover-open');setTimeout(()=>document.getElementById('cover').hidden=true,700);playAudio();});
 window.openFullImg=pic=>{document.getElementById('fullImg').src=pic;document.getElementById('fullImgBox').style.display='flex';};window.closeFullImg=()=>document.getElementById('fullImgBox').style.display='none';document.addEventListener('keydown',e=>{if(e.key==='Escape')closeFullImg();});
 window.salin=async id=>{try{await I.copy(document.getElementById(id).textContent);alert('Nomor berhasil disalin.');}catch(e){alert(e.message);}};
 function tick(){const start=new Date(c[c.countdownEvent+'Date']+'T'+c[c.countdownEvent+'Start']+':00'+c.timezone).getTime();const seconds=Math.max(0,Math.floor((start-Date.now())/1000))||0;const values=[Math.floor(seconds/86400),Math.floor(seconds/3600)%24,Math.floor(seconds/60)%60,seconds%60];['hari','jam','menit','detik'].forEach((id,i)=>document.getElementById(id).textContent=values[i]);}tick();setInterval(tick,1000);
 const animated='.flower,.flower2,.flower3,.flower4,.flower5,.title,.title2,.title3,.title4,.title5,.opening,.profiles,.card1,.card2,.circle1,.circle2,.circle3,.circle4,.btn-map,.gallery img';
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('muncul');observer.unobserve(e.target);}}),{threshold:.05});document.querySelectorAll(animated).forEach(e=>observer.observe(e));
 const nav=document.querySelectorAll('nav a');window.addEventListener('scroll',()=>{let current='home';document.querySelectorAll('section[id]').forEach(s=>{if(s.getBoundingClientRect().top<150)current=s.id;});nav.forEach(a=>a.classList.toggle('active',a.hash==='#'+current));},{passive:true});
 const phone=c.rsvpPhone.replace(/\D/g,'');const rsvp=document.querySelector('#guestbook');rsvp.hidden=!phone;const navRsvp=document.querySelector('nav a[href="#guestbook"]');navRsvp.parentElement.hidden=!phone;
 document.getElementById('rsvp-name').value=params.get('to')||'';document.getElementById('rsvp-form').addEventListener('submit',e=>{e.preventDefault();const text='Konfirmasi pernikahan '+I.couple(c)+'\nNama: '+document.getElementById('rsvp-name').value+'\nKehadiran: '+document.getElementById('rsvp-attendance').value+'\nUcapan: '+document.getElementById('rsvp-message').value;window.open('https://wa.me/'+phone+'?text='+encodeURIComponent(text),'_blank','noopener');});
})();
