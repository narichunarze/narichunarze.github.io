import { I18N, FACTS, IMPACT, TAGS, TAG_LABEL, PROJECTS, EXPERIENCE, STACK, LEADERSHIP, EDU } from './data.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const state = { lang: 'es', tag: 'all' };
try { const s = localStorage.getItem('nc.lang'); state.lang = (s === 'es' || s === 'en') ? s : ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en'); } catch (e) {}
const t = k => I18N[state.lang][k] ?? I18N.es[k] ?? k;
const L = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[state.lang] ?? v.es) : v;

/* ================= render ================= */
const bySlug = Object.fromEntries(PROJECTS.map(p => [p.slug, p]));

function applyStatic() {
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el => { const v = t(el.dataset.i18n); if (typeof v === 'string') el.innerHTML = v; });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));
}
function renderFacts() {
  $('#facts').innerHTML = FACTS.map(([k, v]) => `<div class="fact"><dt class="label">${L(k)}</dt><dd>${L(v)}</dd></div>`).join('');
}
function renderImpact() {
  $('#impact').innerHTML = IMPACT.map(i => `
    <div class="imp">
      <div class="imp-n">${L(i.n)}</div>
      <div>
        <p class="imp-l">${L(i.l)}</p>
        <div class="imp-c"><span class="label">${L(i.org)}</span>${i.target ? `<span class="tag-target">${t('target')}</span>` : ''}<a class="label" href="#/case/${i.slug}" style="color:var(--pink);text-decoration:none">${t('see_case')}</a></div>
      </div>
    </div>`).join('');
}
function renderFilters() {
  $('#filters').innerHTML = TAGS.map(([k, v]) => `<button type="button" data-tag="${k}" aria-pressed="${k === state.tag}">${k === 'all' ? t('all') : L(v)}</button>`).join('') + `<span class="count" id="count"></span>`;
}
function renderProjects() {
  $('#plist').innerHTML = PROJECTS.map(p => `
    <li class="prow${p.demo ? ' live' : ''}" data-tags="${p.tags.join(' ')}">
      <a href="#/case/${p.slug}" data-slug="${p.slug}">
        <span class="p-title">${p.title}</span>
        <span class="p-side"><span class="hidden sm:inline">${L(p.role).split('·').pop().trim()}</span><span class="arr" aria-hidden="true">↗</span></span>
        <span class="p-meta"><span class="org">${L(p.org)}</span>${p.tags.map(x => `<span>${L(TAG_LABEL[x])}</span>`).join('')}</span>
        ${p.demo ? `<span class="live-strip"><span class="live-tag">${t('live_tag')}</span><span class="live-text">${t('live_text')}</span><span class="live-sample" aria-hidden="true">password: <i style="--d:0s">Verano#2026</i> · CI <i style="--d:.35s">4839201</i> · <i style="--d:.7s">4111 1111 1111 1111</i></span><span class="live-cta">${t('live_cta')}</span></span>` : ''}
      </a>
    </li>`).join('');
  applyFilter();
}
function applyFilter() {
  let n = 0;
  $$('#plist .prow').forEach(li => { const on = state.tag === 'all' || li.dataset.tags.split(' ').includes(state.tag); li.hidden = !on; if (on) n++; });
  $$('#filters button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.tag === state.tag)));
  $('#count').textContent = t('count')(n);
}
function renderExperience() {
  const openIdx = $$('#xpList details').map(d => d.open);
  $('#xpList').innerHTML = EXPERIENCE.map((x, i) => `
    <details class="xp"${(openIdx.length ? openIdx[i] : i === 0) ? ' open' : ''}>
      <summary>
        <span class="xp-date">${L(x.date)}</span>
        <span class="xp-org">${L(x.org)}</span>
        <span class="xp-role">${L(x.role)}</span>
        <span class="xp-icon" aria-hidden="true"></span>
      </summary>
      <div class="xp-body">
        <p class="xp-loc">${L(x.loc)}</p>
        <ul>${x.bullets.map(b => `<li>${L(b)}</li>`).join('')}</ul>
        ${x.cases.length ? `<div class="xp-cases">${x.cases.map(s => `<a class="ulink" href="#/case/${s}">${bySlug[s].title} →</a>`).join('')}</div>` : ''}
      </div>
    </details>`).join('');
}
function renderLeadership() {
  $('#leadGrid').innerHTML = LEADERSHIP.map(x => `
    <article class="lead-card">
      <div class="lead-top"><span class="label">${L(x.kicker)}</span><span class="lead-mark grad-text">${L(x.mark)}</span></div>
      <h4>${x.title}</h4>
      <p class="lead-role">${L(x.role)}</p>
      <p class="lead-desc">${L(x.desc)}</p>
    </article>`).join('');
}
function renderStack() {
  $('#stackGrid').innerHTML = STACK.map(g => `
    <div class="sgroup">
      <p class="label"><b>//</b> ${g.k}</p>
      <h3>${L(g.title)}</h3>
      <p class="sitems">${g.items.map(i => `<span>${i}</span>`).join(' <i aria-hidden="true">/</i> ')}</p>
    </div>`).join('');
  $('#edu').innerHTML = EDU.map(e => `<div class="edu-card"><p class="label">${L(e.label)}</p><p class="edu-t">${L(e.title)}</p><p class="edu-s">${L(e.sub)}</p></div>`).join('');
}
function mediaHTML(p, big) {
  const m = p.media;
  const inner = m && m.type === 'video' ? `<video src="${m.src}" poster="${m.poster || ''}" autoplay muted loop playsinline preload="${big ? 'auto' : 'metadata'}"></video>`
    : m && m.type === 'image' ? `<img src="${m.src}" alt="${p.title}">`
    : `<span class="m-label">${t('media_pending')}${big ? '' : ' · ' + p.title}</span>`;
  return inner;
}

/* ================= case view ================= */
const caseEl = $('#case');
let lastFocus = null;
function renderCase(slug) {
  const p = bySlug[slug]; if (!p) return closeCase();
  const i = PROJECTS.indexOf(p);
  const prev = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length], next = PROJECTS[(i + 1) % PROJECTS.length];
  caseEl.innerHTML = `
    <div class="case-bar"><div class="wrap">
      <a class="back" href="#proyectos" data-close>${t('case_back')}</a>
      <span class="flex-1"></span>
      <span class="label">${String(i + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}</span>
    </div></div>
    <article class="case-body wrap">
      <p class="label"><b>//</b> ${L(p.org) === L(p.role) ? L(p.org) : L(p.org) + ' · ' + L(p.role)}</p>
      <h1 class="case-title" id="caseTitle" tabindex="-1">${p.title}</h1>
      <div class="case-tags">${p.tags.map(x => `<span class="chip">${L(TAG_LABEL[x])}</span>`).join('')}</div>
      ${p.demo ? demoHTML() : p.media ? `<div class="case-media media" style="--hue:${p.hue}deg">${mediaHTML(p, true)}</div>${p.media.note ? `<p class="media-note">${t('note_' + p.media.note)}</p>` : ''}` : ''}
      <div class="case-grid">
        <section><h2>${t('case_problem')}</h2><p>${L(p.problem)}</p></section>
        <section><h2>${t('case_solution')}</h2><p>${L(p.solution)}</p></section>
      </div>
      <section class="case-block">
        <h2>${t('case_results')}</h2>
        <div class="metrics">${p.metrics.map(m => `<div class="metric"><span class="metric-v grad-text">${L(m.v)}</span><span class="metric-l">${L(m.l)}</span>${m.target ? `<span><span class="tag-target">${t('target')}</span></span>` : ''}</div>`).join('')}</div>
      </section>
      <section class="case-block">
        <h2>${t('case_stack')}</h2>
        <div class="case-tags" style="margin-top:0">${p.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>
        <div class="case-links" style="margin-top:22px">${p.link ? `<a class="ulink" href="${p.link}" target="_blank" rel="noopener noreferrer">${t('case_repo')} ↗</a>` : `<span class="priv">${t('case_private')}</span>`}</div>
      </section>
      <nav class="case-nav" aria-label="Projects">
        <a href="#/case/${prev.slug}"><span class="label">${t('case_prev')}</span><strong>${prev.title}</strong></a>
        <a href="#/case/${next.slug}"><span class="label">${t('case_next')}</span><strong>${next.title}</strong></a>
      </nav>
    </article>`;
  if (p.demo) initDemo();
}
function openCase(slug) {
  if (caseEl.hidden) lastFocus = document.activeElement;
  renderCase(slug);
  caseEl.hidden = false; caseEl.scrollTop = 0;
  document.body.classList.add('locked');
  floatEl.classList.remove('on');
  const h = $('#caseTitle'); if (h) h.focus({ preventScroll: true });
}
function closeCase() {
  if (caseEl.hidden) return;
  caseEl.hidden = true; caseEl.innerHTML = '';
  document.body.classList.remove('locked');
  const slug = lastFocus && lastFocus.dataset ? lastFocus.dataset.slug : null;
  if (slug) { const a = $(`#plist a[data-slug="${slug}"]`); if (a) a.focus({ preventScroll: false }); }
}
function route() {
  const m = location.hash.match(/^#\/case\/([\w-]+)/);
  if (m) openCase(m[1]); else closeCase();
}
window.addEventListener('hashchange', route);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !caseEl.hidden) location.hash = '#proyectos'; });

/* ================= language ================= */
function renderAll() { applyStatic(); renderImpact(); renderFilters(); renderProjects(); renderExperience(); renderLeadership(); renderStack(); graph.relabel(); if (!caseEl.hidden) { const m = location.hash.match(/^#\/case\/([\w-]+)/); if (m) renderCase(m[1]); } sign(); }
function setLang(l) { if (l === state.lang) return; state.lang = l; try { localStorage.setItem('nc.lang', l); } catch (e) {} renderAll(); }

/* ================= interactions ================= */
document.addEventListener('click', e => {
  const lb = e.target.closest('.lang button'); if (lb) setLang(lb.dataset.lang);
  const xl = e.target.closest('[data-xp]'); if (xl) { const d = $$('#xpList details')[+xl.dataset.xp]; if (d) d.open = true; }
  const fb = e.target.closest('#filters button'); if (fb) { state.tag = fb.dataset.tag; applyFilter(); }
  if (e.target.closest('#mmenu a')) toggleMenu(false);
});
const menuBtn = $('#menuBtn'), mmenu = $('#mmenu');
function toggleMenu(on) { mmenu.hidden = !on; menuBtn.setAttribute('aria-expanded', String(on)); $('#nav').classList.toggle('scrolled', on || scrollY > 20); }
menuBtn.addEventListener('click', () => toggleMenu(mmenu.hidden));

const nav = $('#nav');
let navRaf = 0;
window.addEventListener('scroll', () => { if (navRaf) return; navRaf = requestAnimationFrame(() => { navRaf = 0; nav.classList.toggle('scrolled', scrollY > 20 || !mmenu.hidden); }); }, { passive: true });

const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  $$('#navLinks a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
['impacto', 'proyectos', 'experiencia', 'stack', 'contacto'].forEach(id => io.observe(document.getElementById(id)));

/* floating media preview */
const floatEl = $('#float'), floatLabel = $('#floatLabel');
let fx = 0, fy = 0, tx = 0, ty = 0, fRaf = 0;
const follow = () => { fx += (tx - fx) * .18; fy += (ty - fy) * .18; floatEl.style.left = fx + 'px'; floatEl.style.top = fy + 'px'; fRaf = Math.abs(tx - fx) + Math.abs(ty - fy) > .5 ? requestAnimationFrame(follow) : 0; };
$('#plist').addEventListener('mouseover', e => {
  const a = e.target.closest('a[data-slug]'); if (!a) return;
  const p = bySlug[a.dataset.slug];
  if (!p.media && !p.demo) { floatEl.classList.remove('on'); return; }
  floatEl.style.setProperty('--hue', p.hue + 'deg');
  if (floatEl.dataset.slug !== p.slug) { floatEl.dataset.slug = p.slug; floatEl.innerHTML = p.demo ? `<span class="m-label">${t('demo_float')}</span>` : mediaHTML(p, false); }
  if (!floatEl.classList.contains('on')) { fx = tx = e.clientX + 210; fy = ty = e.clientY; }
  floatEl.classList.add('on');
});
$('#plist').addEventListener('mousemove', e => { tx = Math.min(e.clientX + 210, innerWidth - 180); ty = e.clientY; if (!fRaf) fRaf = requestAnimationFrame(follow); });
$('#plist').addEventListener('mouseleave', () => floatEl.classList.remove('on'));

/* copy email */
$('#copyBtn').addEventListener('click', async () => {
  const btn = $('#copyBtn'), mail = 'narichunaze@gmail.com';
  let ok = false;
  try { await navigator.clipboard.writeText(mail); ok = true; } catch (e) {
    try { const ta = document.createElement('textarea'); ta.value = mail; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove(); } catch (e2) {}
  }
  btn.textContent = ok ? t('copied') : t('copy_fail');
  setTimeout(() => { btn.textContent = t('copy'); }, 1800);
});

/* session + real sha-256 signature */
$('#sid').textContent = Array.from(crypto.getRandomValues(new Uint8Array(2)), b => b.toString(16).padStart(2, '0')).join('');
async function sign() {
  try {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode($('#main').innerText));
    const h = Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('');
    const s = $('#sig'); s.textContent = `sha256:${h.slice(0, 10)}…${h.slice(-6)}`; s.title = h;
  } catch (e) { $('#sig').textContent = 'sha256:unavailable'; }
}

/* fps (real) */
let frames = 0; (function f() { frames++; requestAnimationFrame(f); })();
setInterval(() => { $('#fps').textContent = frames; frames = 0; }, 1000);

/* ================= signal horizon canvas ================= */
const cv = $('#horizon'), g = cv.getContext('2d'), hero = cv.parentElement;
let W = 0, H = 0, dpr = 1, LINES = 26, PTS = 90, mouseX = .5, mouseY = .5, mx = .5, visible = true, time = 0;
function size() { dpr = Math.min(devicePixelRatio || 1, 2); W = hero.clientWidth; H = hero.clientHeight; cv.width = W * dpr; cv.height = H * dpr; LINES = W < 640 ? 16 : 26; PTS = W < 640 ? 48 : 90; }
const mix = (a, b, k) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
const VIOLET = [176, 108, 255], PINK = [255, 46, 151], ORANGE = [255, 138, 61];
const colorAt = k => k < .6 ? mix(VIOLET, PINK, k / .6) : mix(PINK, ORANGE, (k - .6) / .4);
const noise = (x, z, s) => Math.sin(x * 3.1 + s * .9 + z * 1.7) * .5 + Math.sin(x * 7.3 - s * 1.3 + z * .6) * .25 + Math.sin(x * 13.7 + s * .6 - z * 2.3) * .12;
function draw() {
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.fillStyle = '#0E0819'; g.fillRect(0, 0, W, H);
  const horizon = H * (W < 1000 ? .86 : .74);
  const rg = g.createRadialGradient(W * .5, horizon, 0, W * .5, horizon, Math.max(W, H) * .6);
  rg.addColorStop(0, 'rgba(255,46,151,0.30)'); rg.addColorStop(.35, 'rgba(176,108,255,0.14)'); rg.addColorStop(1, 'rgba(14,8,25,0)');
  g.fillStyle = rg; g.fillRect(0, 0, W, H);
  mx += (mouseX - mx) * .06;
  for (let i = 0; i < LINES; i++) {
    const z = i / (LINES - 1), p = z * z;
    const baseY = horizon + p * (H - horizon + 40), amp = 6 + p * 70, spread = 1 + p * .6;
    g.beginPath();
    for (let j = 0; j <= PTS; j++) {
      const u = j / PTS, x = W * .5 + (u - .5) * W * spread;
      const center = 1 - Math.min(1, Math.abs(u - .5) * 2.2);
      const bump = Math.exp(-Math.pow((u - mx) * 7, 2)) * (0.6 + mouseY * .8);
      const y = baseY - Math.max(0, noise(u, i * .35, time) + .55) * amp * (.25 + center * .9) - bump * amp * .9;
      j ? g.lineTo(x, y) : g.moveTo(x, y);
    }
    g.lineTo(W * .5 + .5 * W * spread, H + 10); g.lineTo(W * .5 - .5 * W * spread, H + 10); g.closePath();
    g.fillStyle = '#0E0819'; g.fill();
    const [r, gg, b] = colorAt(z);
    g.strokeStyle = `rgba(${r},${gg},${b},${.25 + z * .7})`; g.lineWidth = .8 + z * 1.4;
    g.shadowColor = `rgba(${r},${gg},${b},.8)`; g.shadowBlur = z > .7 ? 12 : 0;
    g.stroke(); g.shadowBlur = 0;
  }
}
function loop() { if (visible && caseEl.hidden) { time += .012; draw(); } requestAnimationFrame(loop); }
size(); draw();
if (!reduce) requestAnimationFrame(loop);
new ResizeObserver(() => { size(); draw(); }).observe(hero);
new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(hero);
hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); mouseX = (e.clientX - r.left) / r.width; mouseY = (e.clientY - r.top) / r.height; if (reduce) draw(); });

/* ================= risk scanner demo ================= */
let demoText = null, demoRedacted = false;
function demoHTML() {
  return `<section class="demo" aria-labelledby="demoTitle">
    <div class="demo-head"><p class="label"><b>//</b> live_demo</p><h2 id="demoTitle">${t('demo_title')}</h2><p>${t('demo_note')}</p></div>
    <div class="demo-grid">
      <div class="demo-in">
        <label class="label" for="demoText">${t('demo_input')}</label>
        <textarea id="demoText" spellcheck="false"></textarea>
        <div class="demo-actions">
          <button type="button" class="btn" id="demoScan">${t('demo_scan')}</button>
          <label class="demo-toggle" for="demoRedact"><input type="checkbox" id="demoRedact"> ${t('demo_redact')}</label>
        </div>
      </div>
      <div class="demo-out">
        <div class="demo-out-head"><span class="label">${t('demo_result')}</span><span class="label" id="demoCount"></span></div>
        <div class="demo-view" id="demoView"><div class="scanline"></div><pre id="demoPre"></pre></div>
        <div class="risk"><div class="risk-top"><span class="label">${t('risk')}</span><strong id="riskLevel">—</strong></div><div class="risk-bar"><i id="riskFill"></i></div></div>
        <ul class="legend" id="demoLegend"></ul>
        <p class="demo-foot" id="demoFoot"></p>
      </div>
    </div>
  </section>`;
}
const CATS = ['cred', 'card', 'ci', 'email', 'phone'];
const CAT_COLOR = { cred: '#FF2E97', card: '#FF8A3D', ci: '#B06CFF', email: '#A99BC7', phone: '#A99BC7' };
const WEIGHT = { cred: 40, card: 30, ci: 20, email: 8, phone: 8 };
const PRIORITY = { cred: 5, card: 4, ci: 3, email: 2, phone: 1 };
const luhn = digits => { let sum = 0, alt = false; for (let i = digits.length - 1; i >= 0; i--) { let n = +digits[i]; if (alt) { n *= 2; if (n > 9) n -= 9; } sum += n; alt = !alt; } return sum % 10 === 0; };
function scanText(text) {
  const found = []; let luhnFail = 0;
  const push = (type, re, check) => { re.lastIndex = 0; let m; while ((m = re.exec(text))) { if (!m[0]) { re.lastIndex++; continue; } if (check && !check(m[0])) continue; found.push({ type, start: m.index, end: m.index + m[0].length, value: m[0] }); } };
  push('cred', /\b(?:password|passwd|pwd|contraseña|clave)\s*[:=]\s*\S+/giu);
  push('cred', /\b(?:api[_-]?key|access[_-]?key|secret|token)\s*[:=]\s*['"]?[A-Za-z0-9_\-.]{12,}['"]?/gi);
  push('cred', /\bAKIA[0-9A-Z]{16}\b/g);
  push('cred', /\beyJ[\w-]{8,}\.[\w-]{8,}\.[\w-]{8,}\b/g);
  push('card', /\b(?:\d[ -]?){12,18}\d\b/g, v => { const d = v.replace(/\D/g, ''); if (d.length < 13 || d.length > 19) return false; const ok = luhn(d); if (!ok) luhnFail++; return ok; });
  push('ci', /\b(?:C\.?\s?I\.?|carnet)\s*[:#]?\s*\d{5,9}(?:\s?-?\s?(?:SC|LP|CB|OR|PT|TJ|CH|BE|PD))?\b/gi);
  push('email', /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g);
  push('phone', /(?:\+591[\s-]?)?\b[67]\d{7}\b/g);
  push('phone', /\+\d{1,3}[\s-]?\(?\d{2,4}\)?[\s-]?\d{3,4}[\s-]?\d{3,4}\b/g);
  found.sort((a, b) => PRIORITY[b.type] - PRIORITY[a.type] || (b.end - b.start) - (a.end - a.start));
  const kept = [];
  for (const f of found) if (!kept.some(k => f.start < k.end && f.end > k.start)) kept.push(f);
  kept.sort((a, b) => a.start - b.start);
  return { matches: kept, luhnFail };
}
function mask(f) {
  const v = f.value;
  if (f.type === 'email') { const [u, d] = v.split('@'); return u[0] + '•••@' + d; }
  if (f.type === 'card') { const d = v.replace(/\D/g, ''); return '•••• •••• •••• ' + d.slice(-4); }
  if (f.type === 'phone') return v.replace(/\d(?=\d{2})/g, '•');
  if (f.type === 'ci') return v.replace(/\d(?=\d{2})/g, '•');
  if (f.type === 'cred') { const m = v.match(/^([^:=]*[:=]\s*)/); return (m ? m[1] : '') + '[REDACTED]'; }
  return '•••';
}
const escHTML = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function renderScan(animate) {
  const ta = $('#demoText'); if (!ta) return;
  const text = ta.value; demoText = text;
  const { matches, luhnFail } = scanText(text);
  let html = '', pos = 0;
  matches.forEach((f, i) => {
    html += escHTML(text.slice(pos, f.start));
    const shown = demoRedacted ? mask(f) : f.value;
    html += `<mark class="rk rk-${f.type}" style="--d:${animate ? 450 + i * 90 : 0}ms" title="${t('cat_' + f.type)}">${escHTML(shown)}</mark>`;
    pos = f.end;
  });
  html += escHTML(text.slice(pos));
  $('#demoPre').innerHTML = html || '&nbsp;';
  const counts = Object.fromEntries(CATS.map(c => [c, 0])); matches.forEach(f => counts[f.type]++);
  $('#demoLegend').innerHTML = CATS.map(c => `<li class="${counts[c] ? '' : 'muted'}"><i style="background:${CAT_COLOR[c]}"></i>${t('cat_' + c)} <b>${counts[c]}</b></li>`).join('');
  $('#demoCount').textContent = t('demo_found')(matches.length);
  const score = Math.min(100, matches.reduce((s, f) => s + WEIGHT[f.type], 0));
  const lvl = score < 20 ? 0 : score < 45 ? 1 : score < 75 ? 2 : 3;
  $('#riskLevel').textContent = matches.length ? `${t('risk_levels')[lvl]} · ${score}/100` : `${t('risk_levels')[0]} · 0/100`;
  $('#riskFill').style.width = score + '%';
  const notes = []; if (luhnFail) notes.push(t('demo_luhn')(luhnFail)); if (/Juan Pérez|John Smith/.test(text)) notes.push(t('demo_names'));
  $('#demoFoot').textContent = notes.join(' ');
  if (animate && !reduce) { const v = $('#demoView'); v.classList.remove('scanning'); void v.offsetWidth; v.classList.add('scanning'); }
}
function initDemo() {
  const ta = $('#demoText'); if (!ta) return;
  const sampleEs = I18N.es.demo_sample, sampleEn = I18N.en.demo_sample;
  ta.value = (demoText === null || demoText === sampleEs || demoText === sampleEn) ? t('demo_sample') : demoText;
  $('#demoRedact').checked = demoRedacted;
  let deb = 0;
  ta.addEventListener('input', () => { clearTimeout(deb); deb = setTimeout(() => renderScan(false), 350); });
  $('#demoScan').addEventListener('click', () => {
    const b = $('#demoScan'); b.textContent = t('demo_scanning'); renderScan(true);
    setTimeout(() => { b.textContent = t('demo_scan'); }, reduce ? 0 : 900);
  });
  $('#demoRedact').addEventListener('change', e => { demoRedacted = e.target.checked; renderScan(false); });
  renderScan(!reduce);
}

/* ================= skills network ================= */
const graph = (() => {
  const GROUP_COLOR = { ai: '#B06CFF', data: '#FF8A3D', auto: '#F3EEFF' };
  const SKILL_GROUP = {
    'Python': 'data', 'pandas': 'data', 'ETL': 'data', 'EDA': 'data', 'Data Visualization': 'data', 'Power BI': 'data', 'KPI Development': 'data', 'Streamlit': 'data', 'Dash': 'data', 'Flask': 'data',
    'Claude AI': 'ai', 'LLMs': 'ai', 'BERT': 'ai', 'NLP': 'ai', 'spaCy': 'ai', 'Prophet': 'ai', 'Predictive Analytics': 'ai', 'Human-in-the-loop': 'ai',
    'Power Automate': 'auto', 'SharePoint': 'auto', 'Web scraping': 'auto', 'cron': 'auto', 'Odoo': 'auto', 'Regex': 'auto', 'Requirements Gathering': 'auto',
  };
  const HUBS = [
    { id: 'invoice-automation-ai', kind: 'case', label: 'Invoice Automation AI', skills: ['Python', 'Claude AI', 'LLMs', 'cron', 'Web scraping', 'Odoo', 'Human-in-the-loop'] },
    { id: 'review-sentiment-mbert', kind: 'case', label: 'Review Sentiment mBERT', skills: ['Python', 'BERT', 'NLP'] },
    { id: 'demand-forecast-prophet', kind: 'case', label: 'Demand Forecast', skills: ['Python', 'Prophet', 'Predictive Analytics'] },
    { id: 'hr-analytics-platform', kind: 'case', label: 'HR Analytics Platform', skills: ['Python', 'pandas', 'Streamlit', 'Dash', 'Flask', 'KPI Development'] },
    { id: 'bolivia-education-analysis', kind: 'case', label: 'Bolivia Education', skills: ['Python', 'pandas', 'ETL', 'EDA', 'Data Visualization'] },
    { id: 'ai-data-risk-scanner', kind: 'case', label: 'AI Data Risk Scanner', skills: ['Python', 'spaCy', 'NLP', 'Regex'] },
    { id: 'xp-telecel', kind: 'exp', xp: 2, label: 'Telecel (Tigo)', skills: ['SharePoint', 'Power Automate', 'Python', 'Requirements Gathering'] },
    { id: 'xp-oea', kind: 'exp', xp: 3, label: { es: 'Organización de los Estados Americanos', en: 'Organization of American States' }, short: { es: 'OEA', en: 'OAS' }, skills: ['Power Automate', 'SharePoint', 'Power BI'] },
  ];
  const cv = $('#graph'), ctx = cv.getContext('2d'), stage = cv.parentElement;
  const nodes = [], edges = [], byId = {};
  HUBS.forEach(h => { const n = { id: h.id, type: 'hub', hub: h, x: 0, y: 0, vx: 0, vy: 0 }; nodes.push(n); byId[h.id] = n; });
  Object.keys(SKILL_GROUP).forEach(s => { const n = { id: s, type: 'skill', group: SKILL_GROUP[s], x: 0, y: 0, vx: 0, vy: 0, deg: 0 }; nodes.push(n); byId[s] = n; });
  HUBS.forEach(h => h.skills.forEach(s => { edges.push([byId[h.id], byId[s]]); byId[s].deg++; }));
  const nb = new Map(nodes.map(n => [n, new Set()]));
  edges.forEach(([a, b]) => { nb.get(a).add(b); nb.get(b).add(a); });
  nodes.forEach(n => { n.r = n.type === 'hub' ? 9 : 3.5 + Math.min(n.deg, 7) * 1.1; });

  let W = 0, H = 0, dpr = 1, alpha = 0, running = false, hover = null, selected = null, drag = null, dragMoved = false;
  const active = () => hover || selected;
  function seed() {
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) * .32;
    HUBS.forEach((h, i) => { const a = i / HUBS.length * Math.PI * 2 - Math.PI / 2; const n = byId[h.id]; n.x = cx + Math.cos(a) * R * (W > H ? 1.35 : 1); n.y = cy + Math.sin(a) * R; });
    nodes.filter(n => n.type === 'skill').forEach((n, i) => {
      const hs = [...nb.get(n)]; const mx = hs.reduce((s, h) => s + h.x, 0) / hs.length, my = hs.reduce((s, h) => s + h.y, 0) / hs.length;
      const a = i * 2.39996; n.x = mx + Math.cos(a) * 30; n.y = my + Math.sin(a) * 30;
    });
  }
  const small = () => W < 640;
  const lw = n => (n.type === 'hub' ? label(n).length * (small() ? 6.3 : 7.4) : n.id.length * 6.4) + 10;
  const showsLabel = n => n.type === 'hub' || !small();
  const box = n => { if (!showsLabel(n)) return [n.x - n.r - 4, n.x + n.r + 4]; const w = lw(n); return n.x + n.r + w > W - 8 ? [n.x - n.r - w, n.x + n.r] : [n.x - n.r, n.x + n.r + w]; };
  function tick() {
    const k = Math.sqrt(W * H / nodes.length), pad = 18;
    for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j]; let dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy;
      if (d2 < 1) { dx = Math.random() - .5; dy = Math.random() - .5; d2 = 1; }
      const d = Math.sqrt(d2), f = k * k * .012 * alpha / d2;
      a.vx -= dx * f; a.vy -= dy * f; b.vx += dx * f; b.vy += dy * f;
      // label collision: keep text boxes from overlapping
      const [ax0, ax1] = box(a), [bx0, bx1] = box(b), gap = small() ? 24 : 20;
      if (Math.abs(dy) < gap && ax0 < bx1 && bx0 < ax1) { const push = (gap - Math.abs(dy)) * (small() ? .7 : .35) * (dy >= 0 ? 1 : -1); a.vy -= push; b.vy += push; }
    }
    edges.forEach(([a, b]) => {
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
      const L0 = k * .75, f = (d - L0) / d * .06 * alpha;
      a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
    });
    nodes.forEach(n => {
      n.vx += (W / 2 - n.x) * .012 * alpha; n.vy += (H / 2 - n.y) * .02 * alpha;
      if (n === drag) { n.vx = n.vy = 0; return; }
      n.vx *= .55; n.vy *= .55; n.x += n.vx; n.y += n.vy;
      n.x = Math.max(pad, Math.min(W - pad, n.x)); n.y = Math.max(pad, Math.min(H - pad, n.y));
    });
    alpha *= .985;
  }
  function label(n) { return n.type === 'hub' ? L(small() && n.hub.short ? n.hub.short : n.hub.label) : n.id; }
  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    const act = active(), near = act ? nb.get(act) : null;
    const lit = n => !act || n === act || near.has(n);
    edges.forEach(([a, b]) => {
      const on = act && (a === act || b === act);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      if (on) { const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y); g.addColorStop(0, '#FF2E97'); g.addColorStop(1, '#B06CFF'); ctx.strokeStyle = g; ctx.lineWidth = 1.8; ctx.shadowColor = 'rgba(255,46,151,.6)'; ctx.shadowBlur = 8; }
      else { ctx.strokeStyle = act ? 'rgba(169,155,199,.06)' : 'rgba(169,155,199,.2)'; ctx.lineWidth = 1; ctx.shadowBlur = 0; }
      ctx.stroke(); ctx.shadowBlur = 0;
    });
    nodes.forEach(n => {
      const on = lit(n); ctx.globalAlpha = on ? 1 : .18;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r + (n === act ? 3 : 0), 0, Math.PI * 2);
      if (n.type === 'hub') { ctx.fillStyle = '#0E0819'; ctx.fill(); ctx.lineWidth = 2.5; ctx.strokeStyle = '#FF2E97'; ctx.shadowColor = 'rgba(255,46,151,.7)'; ctx.shadowBlur = n === act ? 18 : 8; ctx.stroke(); ctx.shadowBlur = 0; ctx.beginPath(); ctx.arc(n.x, n.y, 3, 0, Math.PI * 2); ctx.fillStyle = '#FF2E97'; ctx.fill(); }
      else { ctx.fillStyle = GROUP_COLOR[n.group]; if (n === act) { ctx.shadowColor = GROUP_COLOR[n.group]; ctx.shadowBlur = 14; } ctx.fill(); ctx.shadowBlur = 0; }
      const showLabel = showsLabel(n) || (act && on);
      if (showLabel) {
        const txt = label(n);
        ctx.font = n.type === 'hub' ? `600 ${small() ? 11 : 13}px "Instrument Sans", system-ui, sans-serif` : `${n === act ? 600 : 400} 12px "Instrument Sans", system-ui, sans-serif`;
        const w = ctx.measureText(txt).width; let lx = n.x + n.r + 7; if (lx + w > W - 8) lx = n.x - n.r - 7 - w;
        ctx.fillStyle = n.type === 'hub' ? '#F3EEFF' : (act && on ? '#F3EEFF' : '#A99BC7');
        ctx.textBaseline = 'middle'; ctx.fillText(txt, lx, n.y);
      }
      ctx.globalAlpha = 1;
    });
  }
  function loop() { tick(); draw(); if (alpha > .012 || drag) requestAnimationFrame(loop); else running = false; }
  function kick(a) { alpha = Math.max(alpha, a); if (!running && !reduce) { running = true; requestAnimationFrame(loop); } else if (reduce) { for (let i = 0; i < 200; i++) tick(); draw(); } }
  function size(first) {
    const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
    dpr = Math.min(devicePixelRatio || 1, 2);
    if (!first && W) nodes.forEach(n => { n.x *= w / W; n.y *= h / H; });
    W = w; H = h; cv.width = W * dpr; cv.height = H * dpr;
    if (first) { seed(); alpha = 1; for (let i = 0; i < 420; i++) { tick(); if (alpha < .3) alpha = .3; } alpha = .2; draw(); kick(.25); }
    else { alpha = .2; for (let i = 0; i < 40; i++) tick(); draw(); }
  }
  function pick(e) { const r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; let best = null, bd = Infinity; nodes.forEach(n => { const d = Math.hypot(n.x - x, n.y - y); if (d < n.r + 12 && d < bd) { bd = d; best = n; } }); return { n: best, x, y }; }
  cv.addEventListener('pointermove', e => {
    const { n, x, y } = pick(e);
    if (drag && e.pointerType === 'mouse') { drag.x = x; drag.y = y; dragMoved = true; kick(.3); return; }
    if (e.pointerType !== 'mouse') return;
    if (n !== hover) { hover = n; cv.style.cursor = n ? 'pointer' : 'default'; info(); draw(); }
  });
  cv.addEventListener('pointerleave', () => { if (!drag) { hover = null; info(); draw(); } });
  cv.addEventListener('pointerdown', e => { const { n } = pick(e); dragMoved = false; if (n && e.pointerType === 'mouse') { drag = n; cv.setPointerCapture(e.pointerId); } });
  cv.addEventListener('pointerup', e => {
    const { n } = pick(e); const wasDrag = drag; drag = null;
    if (wasDrag && dragMoved) return;
    if (!n) { selected = null; hover = null; info(); draw(); return; }
    if (n.type === 'hub' && (e.pointerType === 'mouse' || selected === n)) { go(n.hub); return; }
    selected = selected === n ? null : n; info(); draw();
  });
  function go(h) {
    if (h.kind === 'case') location.hash = '#/case/' + h.id;
    else { const d = $$('#xpList details')[h.xp]; if (d) { d.open = true; d.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); } }
  }
  function info() {
    const box = $('#graphInfo'); const n = active();
    if (!n) {
      box.innerHTML = `<p class="gi-hint">${t('g_hint')}</p><div class="gi-stats" style="margin-top:12px"><div><b>${Object.keys(SKILL_GROUP).length}</b><span>${t('g_techs')}</span></div><div><b>${HUBS.length}</b><span>${t('g_hubs')}</span></div><div><b>${edges.length}</b><span>${t('g_links')}</span></div></div>`;
      return;
    }
    if (n.type === 'skill') {
      const hubs = [...nb.get(n)].map(h => h.hub);
      box.innerHTML = `<p class="label" style="color:${GROUP_COLOR[n.group]}">${t('g_' + n.group)}</p><p class="gi-title">${n.id}</p><p class="gi-sub">${t('g_used')(hubs.length)}</p>
        <ul class="gi-list">${hubs.map(h => h.kind === 'case' ? `<li><a href="#/case/${h.id}">${L(h.label)} →</a></li>` : `<li><a href="#experiencia" data-xp="${h.xp}">${L(h.label)} →</a></li>`).join('')}</ul>`;
    } else {
      const h = n.hub;
      box.innerHTML = `<p class="label"><b>//</b> ${h.kind === 'case' ? t('g_case') : t('g_exp')}</p><p class="gi-title">${L(h.label)}</p><p class="gi-sub">${t('g_uses')(h.skills.length)}</p>
        <div class="gi-chips">${h.skills.map(s => `<span class="chip">${s}</span>`).join('')}</div>
        <p style="margin-top:14px">${h.kind === 'case' ? `<a class="ulink" href="#/case/${h.id}">${t('g_open_case')}</a>` : `<a class="ulink" href="#experiencia" data-xp="${h.xp}">${t('g_open_exp')}</a>`}</p>`;
    }
  }
  function relabel() {
    $('#graphLegend').innerHTML = `<span><i style="background:${GROUP_COLOR.ai}"></i>${t('g_ai')}</span><span><i style="background:${GROUP_COLOR.data}"></i>${t('g_data')}</span><span><i style="background:${GROUP_COLOR.auto}"></i>${t('g_auto')}</span><span><i class="hub"></i>${t('g_hub')}</span>`;
    info(); if (W) draw();
  }
  let resizeT = 0;
  new ResizeObserver(() => { clearTimeout(resizeT); resizeT = setTimeout(() => size(!W), W ? 120 : 0); }).observe(stage);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (W) draw(); });
  return { relabel };
})();

/* ================= boot ================= */
renderAll();
route();
