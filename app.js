{
const {TEAMS,CHAMPS,STAND,t,UI,R,NIGHT,CAREER,INTERVIEW,STAFF,SPEC,DEV,ENG,TESTS,NEWS,CATS,PARTNERS,SEASONS,ALUMNI,MOMENTS,HOSP,JOBS,JUNIORS,PRODUCTS,SCATS}=window.D;
const $=id=>document.getElementById(id);
const LANGS=["ko","en","it"];
let lang="ko";try{const s=localStorage.getItem("lr-lang");if(LANGS.includes(s))lang=s}catch(e){}
let LI=LANGS.indexOf(lang);
const x=a=>a==null?"":Array.isArray(a)?a[LI]:a;
const Y=2026;NEWS.sort((a,b)=>b.date.localeCompare(a.date));
const MO=()=>UI.months[LI];
const dd=s=>{const[m,d]=s.split("-").map(Number);return new Date(Y,m-1,d)};
const fd=s=>{const[m,d]=s.split("-").map(Number);return LI===0?`${m}.${d}`:`${d} ${MO()[m-1]}`};
const nd=s=>{if(!s.includes("-"))return s;const[y,m,d]=s.split("-").map(Number);return LI===0?`${y}.${String(m).padStart(2,"0")}.${String(d).padStart(2,"0")}`:`${d} ${MO()[m-1]} ${y}`};
const now=new Date(),T=new Date(now.getFullYear(),now.getMonth(),now.getDate());
const races=R.filter(r=>r[0]!=="brk");
const st=r=>T>dd(r[4])?"done":T>=dd(r[3])?"now":"up";
const GPP=[25,20,16,13,11,10,9,8,7,6,5,4,3,2,1],SPP=[12,9,7,6,5,4,3,2,1];
const pts=(p,tb)=>typeof p==="number"?(tb[p-1]||0):0;
const ran=races.filter(r=>r[7]!=null);
const TOTAL=ran.reduce((a,r)=>a+pts(r[6],SPP)+pts(r[7],GPP),0);
const gps=ran.map(r=>r[7]).filter(v=>typeof v==="number");
const BEST=Math.min(...gps),PODS=ran.reduce((a,r)=>a+(r[7]<=3)+(r[6]<=3),0),TOP5=gps.filter(v=>v<=5).length;
const DNF=ran.reduce((a,r)=>a+(r[6]==="DNF")+(r[7]==="DNF"),0);
const live=races.find(r=>st(r)==="now"),upnext=races.find(r=>dd(r[3])>T),EV=live||upnext;
const ITG={"Giappone":"Gran Premio del Giappone","Qatar":"Gran Premio del Qatar","Cina":"Gran Premio della Cina","Catalogna":"Gran Premio di Catalogna","Francia":"Gran Premio di Francia","Italia":"Gran Premio d'Italia","Olanda":"Gran Premio d'Olanda","Germania":"Gran Premio di Germania","Monaco":"Gran Premio di Monaco","Austria":"Gran Premio d'Austria","Rep. Ceca":"Gran Premio della Rep. Ceca","Gran Bretagna":"Gran Premio di Gran Bretagna","Portogallo":"Gran Premio del Portogallo","Australia":"Gran Premio d'Australia","Indonesia":"Gran Premio d'Indonesia","Malesia":"Gran Premio della Malesia","Ungheria":"Gran Premio d'Ungheria","San Marino":"Gran Premio di San Marino","Singapore":"Gran Premio di Singapore","Valencia":"Gran Premio di Valencia"};
const gpName=r=>LI===0?`${x(r[1])} 그랑프리`:LI===1?`${x(r[1])} Grand Prix`:(ITG[x(r[1])]||"Gran Premio "+x(r[1]));
const lap=s=>{const m=Math.floor(s/60),r=(s-m*60).toFixed(3).padStart(6,"0");return`${m}:${r}`};
const hash=n=>{let h=0;for(const c of String(n))h=(h*31+c.charCodeAt(0))>>>0;return h};
const bestLap=r=>r[8]+0.35+(typeof r[7]==="number"?r[7]*0.06:0.9)+(hash(r[0])%40)/100;
const vmax=r=>r[9]-(hash(r[2])%6);
const POS=p=>p==null?`<span class="pos">–</span>`:p==="DNF"?`<span class="pos dnf">DNF</span>`:`<span class="pos ${p<=3?"pod":""}">P${p}</span>`;
const img=n=>`${n}.webp`;
const head=(eb,h,more)=>`<div class="head"><h2><small>${eb}</small>${x(h)}</h2>${more||""}</div>`;
const ph=(im,crumb,h1,p)=>`<header class="ph"><img src="${img(im)}" alt=""><div class="wrap"><div class="crumb"><a href="#home">${x(UI.nav[0][1])}</a> / ${crumb}</div><h1 class="w">${h1}</h1>${p?`<p>${x(p)}</p>`:""}</div></header>`;
const navLabel=k=>x(([...UI.nav,...UI.sub].find(n=>n[0]===k)||[0,k])[1]);

/* ---------- logos ---------- */
const LOGO={
 aur:`<span class="L-aur">AURELIA<small>CAFFÈ · BOLOGNA 1952</small></span>`,
 sm:`<span class="L-sm"><i></i><span>CLINICA<br>SANTA MARTA</span></span>`,
 zen:`<span class="L-zen">ZENITH</span>`,
 rav:`<span class="L-rav">OFFICINE RAVELLI</span>`,
 ard:`<span class="L-ard">FRENI <b>ARDESIA</b></span>`,
 ors:`<span class="L-ors">orsini<small>SOSPENSIONI</small></span>`,
 dol:`<span class="L-dol">DOLOMIA</span>`,
 val:`<span class="L-val">Cantina Valsella</span>`,
 alt:`<span class="L-alt">CASCO<b>ALTARE</b></span>`,
 pel:`<span class="L-pel">Pelle<i>Corsa</i></span>`,
 lum:`<span class="L-lum">Lumen<b>MILANO</b></span>`,
 rad:`<span class="L-rad"><b>92.4</b>RADIO EMILIA</span>`
};

/* ---------- shared blocks ---------- */
const kpis=()=>`<div class="kpis"><div><small>${x(t("라이더 순위","Riders' standing","Classifica piloti"))}</small><b class="w">${x(t("8위","8th","8°"))}</b></div><div><small>${x(t("포인트","Points","Punti"))}</small><b class="w">${TOTAL}</b></div><div><small>${x(t("최고 성적","Best finish","Miglior risultato"))}</small><b class="w">P${BEST}</b></div><div><small>${x(t("포디움","Podiums","Podi"))}</small><b class="w">${PODS}</b></div><div><small>${x(t("그랑프리 톱5","GP top fives","Top 5 GP"))}</small><b class="w">${TOP5}</b></div></div>`;
const newsCard=(a,big)=>`<a class="nc ${big?"big":""}" href="#news-${a.id}"><div class="im"><img src="${img(a.img)}" alt="" loading="lazy"></div><span class="cat">${x(CATS[a.cat])}<time>${nd(a.date)}</time></span><h3>${x(a.title)}</h3><p>${x(a.lead)}</p></a>`;
const nextWidget=()=>{
  if(!EV)return`<div class="nextw"><div><small>2026</small><span class="dd w">FIN</span></div><div><b>${x(t("2027 시즌에 다시 만나요","See you in 2027","Ci vediamo nel 2027"))}</b></div></div>`;
  const n=live?Math.round((dd(EV[4])-T)/864e5):Math.round((dd(EV[3])-T)/864e5);
  const s=dd(EV[3]),acts=[t("연습 주행","Practice","Prove libere"),t("예선 · 스프린트","Qualifying · Sprint","Qualifiche · Sprint"),t("그랑프리","Grand Prix","Gran Premio")];
  const days=[0,1,2].map(i=>{const d=new Date(s);d.setDate(s.getDate()+i);return`<div class="day"><small>${UI.days[LI][i]} ${fd(`${d.getMonth()+1}-${d.getDate()}`)}</small><b>${x(acts[i])}</b></div>`}).join("");
  return`<div class="nextw"><div><small>${live?x(t("그랑프리까지","To the Grand Prix","Al Gran Premio")):x(t("개막까지","To lights out","Al via"))}</small><span class="dd w">${n?"D-"+n:"D-DAY"}</span></div><div><small>R${EV[0]} · ${live?x(t("이번 주","This week","Questa settimana")):x(t("다음 레이스","Next race","Prossima gara"))}</small><b>${gpName(EV)} · ${EV[2]}</b><small>${fd(EV[3])} – ${fd(EV[4])}${EV[5]?" · "+x(EV[5]):""}</small></div>${days}</div>`};

/* ---------- views ---------- */
const V={};
V.home=()=>`
<header class="hero"><img src="${img("demon-7")}" alt="">
 <div class="wrap"><div>
  <span class="live">${live?x(t("레이스 위크","Race week","Settimana di gara")):x(t("다음 레이스","Next race","Prossima gara"))}</span>
  <h1 class="w">MARINA BAY<br><span>UNDER LIGHTS</span></h1>
  <p>${x(t("미사노 3위의 기세 그대로. #20 데몬 리치가 시즌 마지막 나이트 레이스에 나섭니다.","Fresh from the Misano podium, #20 Demon Ricci lines up for the last night race of the season.","Dopo il podio di Misano, il #20 Demon Ricci affronta l'ultima gara in notturna della stagione."))}</p>
  <div class="btns"><a class="btn" href="#news-singapore-preview">${x(t("레이스 프리뷰","Race preview","Anteprima gara"))}</a><a class="btn ghost" href="#race">${x(t("세션 일정","Session times","Orari sessioni"))}</a></div>
 </div>${nextWidget()}</div>
</header>
<section class="band"><div class="wrap two-1">
 <div>${head("STANDINGS",t("챔피언십 순위","Championship standing","Classifica mondiale"))}
  <div class="stand"><div><small>#20 Demon Ricci</small><b class="w">${x(t("8위","8th","8°"))}</b><span>${TOTAL} pts</span></div><div><small>Aurelia Liberty Racing</small><b class="w">${x(t("8위","8th","8°"))}</b><span>${x(t("팀 순위 · 11팀 중","Teams · of 11","Team · su 11"))}</span></div></div>
  <p class="small">${x(t("R18 미사노 기준. 팀 순위는 리버티 단독 라이더 기준.","After Round 18, Misano.","Dopo il round 18, Misano."))}</p></div>
 <div>${head("LATEST RESULTS",t("최근 경기 결과","Latest results","Ultimi risultati"),`<a class="more" href="#race">${x(UI.more)}</a>`)}
  <div class="lr">${ran.slice(-3).reverse().map(r=>`<div><span class="r w">R${r[0]}</span><span><b>${gpName(r)}</b><small>${r[2]} · ${fd(r[3])} – ${fd(r[4])}</small></span><span class="num">${x(t("스프린트","Sprint","Sprint"))} ${POS(r[6])}</span><span class="num">GP ${POS(r[7])}</span></div>`).join("")}</div></div>
</div></section>
<section class="band panel"><div class="wrap">${head("NEWS",t("최신 소식 · 공식 발표","Latest news & announcements","Ultime notizie e comunicati"),`<a class="more" href="#news">${x(UI.more)}</a>`)}<div class="ngrid">${NEWS.slice(0,6).map((a,i)=>newsCard(a,i===0)).join("")}</div></div></section>
<section class="band dark"><div class="wrap">${head("RIDER & MACHINE",t("#20 데몬 리치와 ZP-26","#20 Demon Ricci & the ZP-26","#20 Demon Ricci e la ZP-26"))}
 <div class="duo"><a class="rc" href="#demon-ricci"><img src="${img("demon-1")}" alt=""><span class="no w">20</span><span class="t"><small>#20 · ${x(t("이탈리아","Italy","Italia"))}</small><h3 class="w">DEMON<br>RICCI</h3><span class="go">${x(t("라이더 프로필","Rider profile","Profilo pilota"))}</span></span></a>
 <a class="rc mc" href="#motorcycle"><img src="${img("machine")}" alt=""><span class="t"><small>Zenith · Liberty spec</small><h3 class="w">ZP-26</h3><span class="go">${x(t("머신 보기","The motorcycle","La moto"))}</span></span></a></div>
 <div style="margin-top:44px">${kpis()}</div></div></section>
<section class="band"><div class="wrap">${head("VIDEO",t("공식 영상 · 하이라이트","Official videos & highlights","Video ufficiali e highlights"))}
 <div class="vids">${[["demon-4","4:12",t("미사노 포디움 하이라이트","Misano podium highlights","Highlights del podio di Misano"),"misano-podium"],["demon-5","2:47",t("오피치나 리버티 팬 데이","Officina Liberty fan day","Fan day all'Officina Liberty"),"fan-day"],["demon-6","1:30",t("싱가포르 나이트 레이스 프리뷰","Singapore night race preview","Anteprima della notturna di Singapore"),"singapore-preview"]].map(v=>`<a class="vid" href="#news-${v[3]}"><div class="im"><img src="${img(v[0])}" alt="" loading="lazy"><span class="play" aria-hidden="true"></span><span class="dur">${v[1]}</span></div><b>${x(v[2])}</b></a>`).join("")}</div></div></section>`;

V.team=()=>`${ph("machine",navLabel("team"),"THE TEAM",t("볼로냐 카스텔 마조레, 오피치나 리버티.","Officina Liberty, Castel Maggiore, Bologna.","Officina Liberty, Castel Maggiore, Bologna."))}
<section class="band"><div class="wrap two"><div><span class="eb">ABOUT</span>
 <p class="state">${x(t("리버티는 제니스 계열 위성팀입니다. 부상과 부진, 방출 이후 다시 커리어를 세우려는 라이더에게 재기의 기회를 제공합니다.","Liberty is a Zenith satellite team. We give riders a second chance after injury, a lost season or a lost seat.","Liberty è un team satellite Zenith. Diamo una seconda possibilità a chi torna da un infortunio, da una stagione persa o da una sella persa."))}</p>
 <p>${x(t("창립자 로렌초 마르케티는 2011년 무젤로 크래시로 은퇴한 전직 라이더입니다. 재활에만 2년이 걸렸고, 그동안 그를 기다려 준 팀은 없었습니다. 2014년 그는 볼로냐의 작은 창고에서 “돌아올 자리를 지켜 주는 팀”을 시작했습니다.","Founder Lorenzo Marchetti retired after a crash at Mugello in 2011. His recovery took two years and no team waited for him. In 2014 he started “a team that keeps your seat until you come back” in a small Bologna warehouse.","Il fondatore Lorenzo Marchetti si è ritirato dopo una caduta al Mugello nel 2011. Due anni di recupero, e nessun team lo ha aspettato. Nel 2014 ha fondato in un piccolo magazzino di Bologna “una squadra che ti tiene il posto finché non torni”."))}</p>
 <p>${x(t("2019년 제니스 팩토리와 위성 계약을 맺으며 MO1 그리드에 올랐고, 계약은 2027년까지 이어집니다. 지금까지 9명의 라이더가 리버티를 거쳐 다시 그리드에 섰습니다.","A satellite deal with Zenith Factory brought us to the MO1 grid in 2019, running until 2027. Nine riders have returned to the grid through Liberty.","L'accordo satellite con Zenith Factory ci ha portati in MO1 nel 2019, fino al 2027. Nove piloti sono tornati in griglia passando da Liberty."))}</p></div>
 <dl class="dl">${[[t("공식 명칭","Official name","Nome ufficiale"),"Aurelia Liberty Racing"],[t("창립","Founded","Fondazione"),"2014"],[t("본사 · 팩토리","HQ & workshop","Sede e officina"),t("오피치나 리버티, 이탈리아 볼로냐 카스텔 마조레","Officina Liberty, Castel Maggiore, Bologna, Italy","Officina Liberty, Castel Maggiore, Bologna")],[t("팀 디렉터","Team Director","Team Director"),"Lorenzo Marchetti"],[t("구분","Status","Status"),t("위성팀 · 제니스 팩토리 (2019–2027)","Satellite · Zenith Factory (2019–2027)","Satellite · Zenith Factory (2019–2027)")],[t("주요 업적","Highlights","Risultati"),t("포디움 3회 · 폴 포지션 1회","3 podiums · 1 pole position","3 podi · 1 pole position")],[t("복귀시킨 라이더","Riders returned","Piloti rilanciati"),"9"]].map(r=>`<div><dt>${x(r[0])}</dt><dd>${x(r[1])}</dd></div>`).join("")}</dl>
</div></section>
<section class="band panel"><div class="wrap">${head("REBUILD PROGRAMME",t("리버티의 재기 프로그램","How we bring riders back","Come riportiamo i piloti in pista"))}
 <p class="lead2">${x(t("본사 안에는 공식 메디컬 파트너 산타 마르타 클리닉과 함께 운영하는 재활 센터가 있습니다. 수중 재활 풀, 반응 속도 훈련실, 풀사이즈 라이딩 시뮬레이터를 갖췄습니다.","Our HQ houses a rehab centre run with Clinica Santa Marta: hydrotherapy pool, reaction training room and full-size riding simulator.","In sede c'è un centro di riabilitazione gestito con la Clinica Santa Marta: piscina riabilitativa, sala per i riflessi e simulatore di guida."))}</p>
 <div class="phase">${[[t("진단","Assess","Valutazione"),t("부상 부위, 체력, 심리 상태를 함께 평가합니다.","Injury, fitness and mental state are assessed together.","Infortunio, forma fisica e stato mentale valutati insieme.")],[t("회복","Recover","Recupero"),t("복귀 날짜가 아닌 회복 단계로 목표를 잡습니다.","Goals follow recovery stages, never a return date.","Obiettivi per fasi di recupero, mai per data di rientro.")],[t("복귀 테스트","Return test","Test di rientro"),t("시뮬레이터와 슈퍼바이크로 감각을 되찾습니다.","Simulator and superbike sessions rebuild feel.","Simulatore e superbike per ritrovare il feeling.")],[t("그리드 복귀","Back on the grid","Ritorno in griglia"),t("안정형 머신으로 완주부터 다시 쌓습니다.","A stable bike to rebuild from the first finish.","Una moto stabile per ripartire dal primo arrivo.")]].map((p,i)=>`<div><span class="n w">0${i+1}</span><b>${x(p[0])}</b><p>${x(p[1])}</p></div>`).join("")}</div></div></section>
<section class="band"><div class="wrap">${head("ORGANISATION",t("팀 운영 조직도","Team organisation","Organigramma"))}
 <div class="org"><div class="lv l0">${STAFF.filter(s=>s[4]===0).map(orgBox).join("")}</div><div class="lv l1">${STAFF.filter(s=>s[4]===1).map(orgBox).join("")}</div><div class="lv l2">${STAFF.filter(s=>s[4]===2).map(orgBox).join("")}</div></div>
 <p class="small">${x(t("레이스 엔지니어링 팀(3단)은 테크니컬 디렉터에게 보고합니다.","The race engineering group (third row) reports to the Technical Director.","Il gruppo di ingegneria di pista (terza fila) risponde al Direttore tecnico."))}</p>
</div></section>`;
const qaBlock=()=>`<div class="qa">${INTERVIEW.map(q=>`<div><small>REPORTER</small><p class="q">${q[0][1]}</p>${LI!==1?`<p class="tr">${x(q[0])}</p>`:""}<blockquote>${q[1][1]}${LI!==1?`<span class="tr">${x(q[1])}</span>`:""}<cite>DEMON · LIBERTY #20</cite></blockquote></div>`).join("")}</div>`;
const orgBox=s=>`<div class="ob"><small>${x(s[2])}</small><b>${x(s[1])}</b><p>${x(s[3])}</p></div>`;

V.riders=()=>`${ph("demon-1",navLabel("riders"),"RIDERS",t("2026 아우렐리아 리버티 레이싱 라인업.","The 2026 Aurelia Liberty Racing line-up.","La formazione 2026 di Aurelia Liberty Racing."))}
<section class="band dark"><div class="wrap"><div class="rgrid">
 <a class="rc" href="#demon-ricci"><img src="${img("demon-4")}" alt=""><span class="no w">20</span><span class="t"><small>#20 · MO1 · ${x(t("이탈리아","Italy","Italia"))}</small><h3 class="w">DEMON<br>RICCI</h3><span class="go">${x(t("프로필 보기","View profile","Vedi profilo"))}</span></span></a>
 <div class="rc"><span class="q w">?</span><span class="t"><small>2027</small><h3 class="w">COMING<br>SOON</h3><span>${x(t("두 번째 라이더는 12월 발렌시아 테스트 이후 발표됩니다.","Our second rider will be announced after the Valencia test in December.","Il secondo pilota sarà annunciato dopo il test di Valencia a dicembre."))}</span></span></div>
</div></div></section>
<section class="band"><div class="wrap">${head("JUNIOR",t("리버티 아카데미 라이더","Liberty Academy riders","Piloti Liberty Academy"),`<a class="more" href="#junior">${x(UI.more)}</a>`)}<div class="jr">${JUNIORS.map(jrCard).join("")}</div></div></section>`;
const jrCard=j=>`<div><small>${j[3]} · ${x(j[2])} · ${j[1]}${x(t("세"," yrs"," anni"))}</small><b>${j[0]}</b><p>${x(j[4])}</p></div>`;

V["demon-ricci"]=()=>`${ph("demon-3",`<a href="#riders">${navLabel("riders")}</a> / Demon Ricci`,"#20 DEMON RICCI","Aurelia Liberty Racing · Zenith ZP-26")}
<section class="band"><div class="wrap">${head("2026 SEASON",t("시즌 기록","Season stats","Statistiche stagione"))}${kpis()}</div></section>
<section class="band panel"><div class="wrap two">
 <div>${head("PROFILE",t("프로필","Profile","Profilo"))}<dl class="dl">${[[t("이름","Name","Nome"),"Demon Ricci"],[t("국적","Nationality","Nazionalità"),t("이탈리아","Italian","Italiana")],[t("생년월일","Date of birth","Data di nascita"),t("2000년 3월 20일 (26세)","20 March 2000 (26)","20 marzo 2000 (26 anni)")],[t("등번호 · 클래스","Number · class","Numero · classe"),"#20 · MO1"],[t("키 · 체중","Height · weight","Altezza · peso"),"185 cm"],[t("크루 치프","Crew chief","Capotecnico"),"Massimo Corsi"],[t("팀","Team","Team"),"Aurelia Liberty Racing"],[t("머신","Motorcycle","Moto"),"Zenith ZP-26"],[t("MO1 데뷔","MO1 debut","Debutto MO1"),t("2022 · 카타르 그랑프리","2022 · Qatar Grand Prix","2022 · Gran Premio del Qatar")],[t("월드 타이틀","World titles","Titoli mondiali"),"0"],[t("개인 스폰서","Personal sponsors","Sponsor personali"),"Casco Altare · Pelle Corsa"]].map(r=>`<div><dt>${x(r[0])}</dt><dd>${x(r[1])}</dd></div>`).join("")}</dl>
 <div class="bio">${head("BIOGRAPHY",t("라이더 소개","Biography","Biografia"))}${[t("2000년 이탈리아에서 태어난 데몬 리치는 11살에 미니바이크로 레이싱을 시작했다. 2017년 Moto3에 데뷔해 첫 시즌 루키 오브 더 이어를 차지했고, Moto2에서 세 시즌 동안 6승을 거둔 뒤 2022년 제니스 팩토리 소속으로 MO1에 올랐다.","Born in Italy in 2000, Demon Ricci started racing minibikes at the age of 11. He made his Moto3 debut in 2017, taking Rookie of the Year honours, and won six races in three Moto2 seasons before stepping up to MO1 with Zenith Factory in 2022.","Nato in Italia nel 2000, Demon Ricci ha iniziato a correre in minimoto a 11 anni. Debutta in Moto3 nel 2017 conquistando il titolo di Rookie of the Year, vince sei gare in tre stagioni di Moto2 e approda in MO1 con Zenith Factory nel 2022."),
 t("2023년 아센에서 첫 MO1 우승을 거뒀고, 2024년에는 시즌 3승과 함께 종합 3위에 올랐다. 2025 시즌 중반 팀 동료 에이트와 경합하던 중 크래시로 부상을 입어 시즌 잔여 일정에 결장했다.","He claimed his first MO1 victory at Assen in 2023 and finished third overall in 2024 with three wins. In mid-2025 he was injured in a crash while battling team-mate Eight and missed the rest of the season.","Nel 2023 ottiene ad Assen la prima vittoria in MO1 e nel 2024 chiude terzo in campionato con tre successi. A metà 2025 si infortuna in una caduta mentre lotta con il compagno di squadra Eight e salta il resto della stagione."),
 t("재활을 마친 뒤 2026년 아우렐리아 리버티 레이싱에 합류했으며, R18 산마리노 그랑프리에서 3위에 올라 복귀 후 첫 포디움을 기록했다. 늦은 브레이킹과 레이스 후반 페이스가 강점이며, 패독에서 가장 팬 친화적인 라이더 중 한 명으로 꼽힌다.","After completing his rehabilitation he joined Aurelia Liberty Racing for 2026, and took his first podium since returning with third place at the San Marino Grand Prix. Known for late braking and strong late-race pace, he is regarded as one of the most fan-friendly riders in the paddock.","Completata la riabilitazione, nel 2026 passa ad Aurelia Liberty Racing e conquista il primo podio del rientro con il terzo posto al Gran Premio di San Marino. Forte in staccata e nel finale di gara, è considerato uno dei piloti più vicini ai tifosi del paddock.")].map(p=>`<p>${x(p)}</p>`).join("")}</div></div>
 <div>${head("CAREER",t("통산 기록","Career totals","Carriera"))}
  <div class="tot"><div><b class="w">5</b><small>${x(t("MO1 우승","MO1 wins","Vittorie MO1"))}</small></div><div><b class="w">20</b><small>${x(t("MO1 포디움","MO1 podiums","Podi MO1"))}</small></div><div><b class="w">10</b><small>${x(t("Moto3·Moto2 우승","Moto3 & Moto2 wins","Vittorie Moto3 e Moto2"))}</small></div><div><b class="w">P3</b><small>${x(t("최고 시즌 순위 (2024)","Best season (2024)","Miglior stagione (2024)"))}</small></div></div>
  <div class="scroll"><table class="res"><thead><tr><th>${x(t("시즌","Season","Stagione"))}</th><th>${x(t("클래스 · 팀","Class · team","Classe · team"))}</th><th class="num">${x(t("우승","Wins","Vitt."))}</th><th class="num">${x(t("포디움","Pods","Podi"))}</th><th class="num">${x(t("순위","Pos","Pos"))}</th></tr></thead><tbody>${CAREER.map(c=>`<tr><td class="r">${c[0]}</td><td><b>${c[1]} · ${c[2]}</b>${c[6]?`<small>${x(c[6])}</small>`:""}</td><td class="num">${c[3]}</td><td class="num">${c[4]}</td><td class="num"><b>${c[5]}</b></td></tr>`).join("")}</tbody></table></div>
  <p class="small">${x(t("* 2026 시즌 진행 중. 2026 포디움은 그랑프리 기준(스프린트 포디움 1회 별도).","* 2026 season in progress. 2026 podiums count Grands Prix only (plus one Sprint podium).","* Stagione 2026 in corso. I podi 2026 contano solo i GP (più un podio Sprint)."))}</p></div>
</div></section>
<section class="band"><div class="wrap">${head("INTERVIEW",t("라이더 인터뷰","Rider interview","Intervista"))}<p class="small" style="margin:-12px 0 24px">${x(t("리버티 이적 후 첫 인터뷰 · 2026.01","First interview after joining Liberty · Jan 2026","Prima intervista da pilota Liberty · gen 2026"))}</p>${qaBlock()}</div></section>
<section class="band panel"><div class="wrap">${head("MEDIA",t("공식 프로필 사진","Official photos","Foto ufficiali"),`<span class="small" style="margin:0">${x(t("사진을 누르면 크게 볼 수 있어요","Tap to enlarge","Tocca per ingrandire"))}</span>`)}<div class="gal" id="gal">${[7,1,2,3,4,5,6].map((n,i)=>`<button data-i="${i}" aria-label="${x(UI.photo)} ${i+1}"><img src="${img("demon-"+n)}" alt="Demon Ricci ${i+1}" loading="lazy"></button>`).join("")}</div></div></section>`;

V.motorcycle=()=>`${ph("machine",navLabel("motorcycle"),"ZP-26",t("제니스 ZP-26, 리버티 사양. #20 데몬 리치의 2026 머신.","Zenith ZP-26, Liberty spec. #20 Demon Ricci's 2026 bike.","Zenith ZP-26, specifica Liberty. La moto 2026 del #20 Demon Ricci."))}
<section class="band"><div class="wrap mach"><div class="pic"><img src="${img("machine")}" alt="ZP-26"><span class="w big20">20</span></div>
 <div>${head("SPECIFICATIONS",t("제원","Specifications","Scheda tecnica"))}<dl class="dl">${SPEC.map(s=>`<div><dt>${x(s[0])}</dt><dd>${x(s[1])}</dd></div>`).join("")}</dl></div></div></section>
<section class="band dark"><div class="wrap two"><div>${head("LIVERY",t("리버리","Livery","Livrea"))}<p style="color:#cfcec9">${x(t("흰 카울은 다시 시작하는 빈 페이지를, 샴페인 골드는 타이틀 파트너 아우렐리아 카페의 에스프레소 크레마를 뜻합니다.","The white fairing is a blank page to start again. The champagne gold is the crema of title partner Aurelia Caffè's espresso.","La carena bianca è una pagina bianca da cui ripartire. L'oro champagne è la crema dell'espresso del title partner Aurelia Caffè."))}</p>
 <div class="sw">${[["#f2f1ed",t("화이트","White","Bianco")],["#c9b07a",t("크레마 골드","Crema gold","Oro crema")],["#a9adb3",t("실버","Silver","Argento")],["#2b2d31",t("그래파이트","Graphite","Grafite")]].map(c=>`<span><i style="background:${c[0]}"></i>${x(c[1])}</span>`).join("")}</div></div>
 <div>${head("2026 DEVELOPMENT",t("시즌 중 개발 · 개선","In-season development","Sviluppo stagionale"))}<ol class="tl">${DEV.map(d=>`<li><time>${d[0]}</time><b>${x(d[1])}</b></li>`).join("")}</ol><a class="more" href="#engineering" style="color:#fff">${x(t("엔지니어링 더 보기","More on engineering","Scopri l'ingegneria"))}</a></div></div></section>`;

V.race=()=>{
 const sel=EV||races[races.length-1];
 return`${ph("demon-2",navLabel("race"),"RACE",t("2026 모토원 그랑프리 일정과 경기 결과.","The 2026 MOTIVO ONE calendar and results.","Calendario e risultati MOTIVO ONE 2026."))}
<section class="band"><div class="wrap">${head("CALENDAR",t("경기 일정 · 세션 시간","Calendar & session times","Calendario e orari"))}
 <div class="rsel"><label for="rsel">${x(t("라운드 선택","Choose a round","Scegli il round"))}</label><select id="rsel">${races.map(r=>`<option value="${r[0]}"${r===sel?" selected":""}>R${r[0]} · ${gpName(r)} · ${fd(r[3])}</option>`).join("")}</select></div>
 <div id="sess"></div>
</div></section>
<section class="band panel"><div class="wrap">${head("RESULTS",t("라운드별 결과 · #20 데몬 리치","Results by round · #20 Demon Ricci","Risultati per round · #20 Demon Ricci"),`<div class="tabs" role="group"><button aria-pressed="true" data-f="all">${x(SCATS.all)}</button><button aria-pressed="false" data-f="up">${x(t("남은 레이스","Upcoming","Prossime"))}</button><button aria-pressed="false" data-f="done">${x(t("종료","Completed","Concluse"))}</button></div>`)}
 ${kpis()}<div class="dnf"><span>DNF <b>${DNF}</b></span><span>DNS <b>0</b></span><span>DSQ <b>0</b></span></div>
 <div class="scroll"><table class="res"><thead><tr><th>${x(t("라운드","Round","Round"))}</th><th>${x(t("그랑프리","Grand Prix","Gran Premio"))}</th><th class="hide">${x(t("날짜","Date","Data"))}</th><th class="num">${x(t("스프린트","Sprint","Sprint"))}</th><th class="num">GP</th><th class="num hide">${x(t("베스트 랩","Best lap","Giro veloce"))}</th><th class="num hide">${x(t("최고 속도","Top speed","Vel. max"))}</th><th class="num">Pts</th></tr></thead><tbody id="resBody"></tbody></table></div>
</div></section>
<section class="band"><div class="wrap two"><div>${standTable()}</div><div>${head("CHAMPIONS",t("역대 챔피언","Past champions","Albo d'oro"))}<ol class="champs">${CHAMPS.map(c=>`<li><span class="w">${c[0]}</span><div><b>${c[1]}</b><small>${c[2]}</small></div></li>`).join("")}</ol></div></div></section>
<section class="band"><div class="wrap">${head("RACE DATA · R18 MISANO",t("랩별 주행 데이터 · 섹터 기록","Lap-by-lap data & sectors","Dati giro per giro e settori"))}
 <div class="two"><div><div class="fig" id="lapfig"><svg id="lapsvg" role="img" aria-label="lap chart"></svg></div><p class="small">${x(t("그랑프리 27랩, 랩타임(초). 금색 점은 베스트 랩.","Grand Prix, 27 laps, lap time in seconds. Gold dot marks the best lap.","Gran Premio, 27 giri, tempi in secondi. Il punto oro è il giro veloce."))}</p></div>
 <div><table class="res"><thead><tr><th>${x(t("섹터","Sector","Settore"))}</th><th class="num">${x(t("베스트","Best","Migliore"))}</th></tr></thead><tbody>${[["S1","23.912"],["S2","26.540"],["S3","21.808"],["S4","19.811"]].map(s=>`<tr><td><b>${s[0]}</b></td><td class="num">${s[1]}</td></tr>`).join("")}<tr><td><b>${x(t("이론상 베스트","Ideal lap","Giro ideale"))}</b></td><td class="num"><b>1:32.071</b></td></tr><tr><td><b>${x(t("베스트 랩 (25랩)","Best lap (lap 25)","Giro veloce (giro 25)"))}</b></td><td class="num"><b>1:32.214</b></td></tr><tr><td><b>${x(t("최고 속도","Top speed","Velocità max"))}</b></td><td class="num"><b>304.8 km/h</b></td></tr></tbody></table></div></div>
</div></section>`};

V.engineering=()=>`${ph("machine",navLabel("engineering"),"ENGINEERING",t("볼로냐 테크니컬 센터와 리모트 개러지에서 머신을 만듭니다.","Building the bike at our Bologna technical centre and remote garage.","La moto nasce nel centro tecnico e nel garage remoto di Bologna."))}
<section class="band"><div class="wrap">${head("R&D",t("기술 개발 분야","Development areas","Aree di sviluppo"))}<div class="eng">${ENG.map(e=>`<div><b>${x(e[1])}</b><p>${x(e[2])}</p></div>`).join("")}</div>
 <p class="note">${x(t("※ 실제 세팅값과 기밀 데이터는 공개하지 않습니다.","※ Set-up values and confidential data are not published.","※ Valori di assetto e dati riservati non vengono pubblicati."))}</p></div></section>
<section class="band panel"><div class="wrap">${head("TEST REPORTS",t("테스트 주행 리포트","Test reports","Report dei test"))}<ol class="tl">${TESTS.map(r=>`<li><b>${x(r[0])}</b><p>${x(r[1])}</p></li>`).join("")}</ol></div></section>
<section class="band"><div class="wrap">${head("TECHNICAL TEAM",t("기술 개발팀","Technical team","Team tecnico"))}<div class="staff">${STAFF.filter(s=>["Andrea Fontana","Luca Verni","Elena Pagani","Davide Cantelli","Massimo Corsi"].includes(s[0])).map(s=>`<div><small>${x(s[2])}</small><b>${x(s[1])}</b><p>${x(s[3])}</p></div>`).join("")}</div></div></section>`;

V.news=()=>`${ph("demon-6",navLabel("news"),"NEWS & MEDIA",t("보도자료, 공식 발표, 인터뷰, 테스트 소식.","Press releases, announcements, interviews and testing.","Comunicati, annunci, interviste e test."))}
<section class="band"><div class="wrap">${head("",t("전체 기사","All stories","Tutte le notizie"),`<div class="tabs" id="ntabs" role="group"><button aria-pressed="true" data-c="all">${x(SCATS.all)}</button>${Object.keys(CATS).map(c=>`<button aria-pressed="false" data-c="${c}">${x(CATS[c])}</button>`).join("")}</div>`)}<div class="ngrid" id="allNews">${NEWS.map(a=>newsCard(a)).join("")}</div>
 <div class="social"><b>${x(t("공식 SNS","Official social","Social ufficiali"))}</b><span>Instagram @libertyracing</span><span>X @LibertyMO1</span><span>YouTube Liberty Racing TV</span><span>TikTok @demonricci20</span></div></div></section>`;

V.article=a=>`<header class="ph"><img src="${img(a.img)}" alt=""><div class="wrap"><div class="crumb"><a href="#home">${x(UI.nav[0][1])}</a> / <a href="#news">${navLabel("news")}</a> / ${x(CATS[a.cat])}</div><h1 class="ah">${x(a.title)}</h1><p>${nd(a.date)} · ${a.src||"Liberty Racing Communications"}</p></div></header>
<section class="band"><article class="wrap art"><p class="lead">${x(a.lead)}</p><figure><img src="${img(a.img)}" alt=""><figcaption>© Aurelia Liberty Racing</figcaption></figure>
 ${a.id==="liberty-interview"?qaBlock().replace('class="qa"','class="qa one"'):""}<p>${x(a.body[0])}</p><blockquote>“${x(a.quote[0])}”<cite>${a.quote[1]}</cite></blockquote>${a.body.slice(1).map(p=>`<p>${x(p)}</p>`).join("")}
 <a class="back" href="#news">${x(UI.back)}</a>
 <div class="head" style="margin-top:56px"><h2 style="font-size:24px">${x(t("다른 기사","More stories","Altre notizie"))}</h2></div><div class="ngrid">${NEWS.filter(n=>n.id!==a.id).slice(0,3).map(n=>newsCard(n)).join("")}</div></article></section>`;

V.partners=()=>`${ph("demon-5",navLabel("partners"),"PARTNERS",t("리버티와 함께 다시 달리는 이탈리아 브랜드들.","The Italian brands racing back with Liberty.","I marchi italiani che corrono con Liberty."))}
<section class="band"><div class="wrap">${PARTNERS.map(g=>`<div class="tier"><h2>${x(g.tier)}</h2><div class="pgrid ${g.items.length===1?"one":""}">${g.items.map(p=>`<div class="pc"><div class="lg">${LOGO[p[0]]}</div><div><b>${p[1]}</b><p>${x(p[2])}</p></div></div>`).join("")}</div></div>`).join("")}
 <div class="cta2"><b>${x(t("파트너십 문의","Partnership enquiries","Richieste di partnership"))}</b><span>partners@libertyracing.it</span><a class="btn" href="#contact">${navLabel("contact")}</a></div></div></section>`;

V.history=()=>`${ph("demon-2",navLabel("history"),"HISTORY",t("2014년 볼로냐의 작은 창고에서 시작된 이야기.","A story that started in a small Bologna warehouse in 2014.","Una storia nata nel 2014 in un piccolo magazzino di Bologna."))}
<section class="band"><div class="wrap two"><div>${head("FOUNDED 2014",t("창설과 설립 과정","How it began","Le origini"))}
 <p>${x(t("로렌초 마르케티는 2011년 무젤로에서 크래시 후 2년간 재활했습니다. 돌아왔을 때 그의 자리는 없었습니다. 2014년, 그는 퇴직금과 은행 대출로 볼로냐 외곽 창고를 빌려 이탈리아 내셔널 슈퍼바이크에 첫 팀을 냈습니다.","After his 2011 Mugello crash, Lorenzo Marchetti spent two years in rehab. When he came back, his seat was gone. In 2014 he used his savings and a bank loan to rent a warehouse outside Bologna and entered his first team in the Italian national superbike series.","Dopo la caduta al Mugello del 2011, Lorenzo Marchetti ha passato due anni in riabilitazione. Al rientro, la sua sella non c'era più. Nel 2014, con i risparmi e un prestito, ha affittato un magazzino fuori Bologna e iscritto il suo primo team al campionato italiano Superbike."))}</p>
 <p>${x(t("첫 라이더는 손목 부상으로 계약이 끝난 무명 라이더였습니다. 그때부터 리버티는 “돌아오는 라이더의 팀”이 되었습니다.","His first rider was an unknown who had lost his contract after a wrist injury. From then on Liberty became “the team for riders on the way back.”","Il primo pilota era uno sconosciuto rimasto senza contratto dopo un infortunio al polso. Da allora Liberty è “la squadra di chi torna”."))}</p></div>
 <div>${head("MOMENTS",t("역사적 순간","Historic moments","Momenti storici"))}<ol class="tl">${MOMENTS.map(m=>`<li><time>${m[0]}</time><b>${x(m[1])}</b></li>`).join("")}</ol></div></div></section>
<section class="band panel"><div class="wrap">${head("SEASON BY SEASON",t("시즌별 성적 · 역대 머신","Season by season & machines","Stagione per stagione e moto"))}
 <div class="scroll"><table class="res"><thead><tr><th>${x(t("시즌","Season","Stagione"))}</th><th>${x(t("주요 사건","Milestone","Fatto saliente"))}</th><th>${x(t("머신","Machine","Moto"))}</th><th class="num">${x(t("팀 순위","Team pos.","Pos. team"))}</th></tr></thead><tbody>${SEASONS.map(s=>`<tr><td class="r">${s[0]}</td><td>${x(s[1])||"—"}</td><td><b>${s[2]}</b></td><td class="num"><b>${s[3]}</b></td></tr>`).join("")}</tbody></table></div>
 <div class="titles"><div><b class="w">0</b><span>${x(t("월드 챔피언 타이틀","World titles","Titoli mondiali"))}</span></div><div><b class="w">9</b><span>${x(t("다시 그리드에 세운 라이더. 우리의 진짜 트로피.","Riders brought back to the grid. Our real trophies.","Piloti riportati in griglia. I nostri veri trofei."))}</span></div></div></div></section>
<section class="band"><div class="wrap">${head("ALUMNI",t("역대 소속 라이더 (MO1)","Former riders (MO1)","Piloti del passato (MO1)"))}<div class="scroll"><table class="res"><thead><tr><th>${x(t("라이더","Rider","Pilota"))}</th><th class="hide">${x(t("국적","Country","Paese"))}</th><th>${x(t("기간","Years","Anni"))}</th><th>${x(t("이야기","Story","Storia"))}</th></tr></thead><tbody>${ALUMNI.map(a=>`<tr><td><b>${a[0]}</b></td><td class="hide">${x(a[1])}</td><td>${a[2]}</td><td>${x(a[3])}</td></tr>`).join("")}</tbody></table></div></div></section>`;

V.contact=()=>`${ph("demon-5",navLabel("contact"),"CONTACT",t("오피치나 리버티, 이탈리아 볼로냐.","Officina Liberty, Bologna, Italy.","Officina Liberty, Bologna."))}
<section class="band"><div class="wrap two"><div>${head("HEADQUARTERS",t("팀 본부","Headquarters","Sede"))}
 <address class="addr">Aurelia Liberty Racing S.r.l.<br>Officina Liberty<br>Via della Ripresa 20<br>40013 Castel Maggiore (BO)<br>Italia</address>
 <dl class="dl">${[[t("미디어 · 언론","Media & press","Media e stampa"),"press@libertyracing.it"],[t("스폰서십 · 파트너십","Sponsorship & partnerships","Sponsorizzazioni"),"partners@libertyracing.it"],[t("호스피탈리티","Hospitality","Hospitality"),"hospitality@libertyracing.it"],[t("일반 문의","General enquiries","Informazioni"),"info@libertyracing.it"],[t("전화","Phone","Telefono"),"+39 051 020 2026"]].map(r=>`<div><dt>${x(r[0])}</dt><dd>${r[1]}</dd></div>`).join("")}</dl>
 <div class="social"><span>Instagram @libertyracing</span><span>X @LibertyMO1</span><span>YouTube Liberty Racing TV</span></div></div>
 <form class="form" data-fake>${head("FORM",t("문의하기","Send a message","Scrivici"))}
  <label>${x(t("문의 종류","Topic","Argomento"))}<select>${[t("일반 문의","General","Generale"),t("미디어 · 언론","Media","Stampa"),t("스폰서십","Sponsorship","Sponsorizzazioni"),t("호스피탈리티","Hospitality","Hospitality")].map(o=>`<option>${x(o)}</option>`).join("")}</select></label>
  <label>${x(t("이름","Name","Nome"))}<input required autocomplete="name"></label><label>${x(t("이메일","Email","Email"))}<input type="email" required autocomplete="email"></label><label>${x(t("내용","Message","Messaggio"))}<textarea rows="5" required></textarea></label>
  <button class="btn" type="submit">${x(t("보내기","Send","Invia"))}</button><p class="notice" role="status"></p></form></div></section>`;

V["motivo-one"]=()=>`${ph("demon-7","MOTIVO ONE","MOTIVO ONE",t("모토원 월드 챔피언십. 스피드, 정밀함, 위험, 그리고 영광.","The MOTIVO ONE World Championship. Speed, precision, risk, glory.","Il Mondiale MOTIVO ONE. Velocità, precisione, rischio, gloria."))}
<section class="band"><div class="wrap">${head("2026 WORLD CHAMPIONSHIP",t("챔피언십 한눈에 보기","The championship at a glance","Il campionato in breve"))}
 <div class="kpis k4">${[["11 · 22",t("그리드","Grid","Griglia"),t("11팀 22명","11 teams, 22 riders","11 team, 22 piloti")],["6 + 5",t("팀 구성","Teams","Team"),t("팩토리 6 · 위성 5","6 factory · 5 satellite","6 factory · 5 satellite")],["2",t("레이스","Races","Gare"),t("스프린트 · 그랑프리","Sprint · Grand Prix","Sprint · Gran Premio")],["20",t("라운드","Rounds","Round"),t("2월 일본 ~ 11월 발렌시아","February Japan to November Valencia","Da febbraio in Giappone a novembre a Valencia")]].map(k=>`<div><small>${x(k[1])}</small><b class="w">${k[0]}</b><span class="kd">${x(k[2])}</span></div>`).join("")}</div></div></section>
<section class="band panel"><div class="wrap two"><div><span class="eb">ABOUT</span><h2 class="h2s">${x(t("모터사이클 레이스의 최고 클래스","The premier class of motorcycle racing","La classe regina del motociclismo"))}</h2>
 <p>${x(t("모토원(MOTIVO ONE, MO1)은 세계 최고 수준의 모터사이클 로드레이스 챔피언십입니다. 라이더들은 Moto3와 Moto2를 거쳐 이 그리드에 오르며, 1000cc 프로토타입으로 4개 대륙을 달립니다.","MOTIVO ONE (MO1) is the world's top motorcycle road racing championship. Riders climb through Moto3 and Moto2 to reach this grid, racing 1000cc prototypes across four continents.","MOTIVO ONE (MO1) è il massimo campionato mondiale di velocità su moto. I piloti arrivano da Moto3 e Moto2 e corrono con prototipi da 1000cc in quattro continenti."))}</p>
 <p>${x(t("11개 팀이 라이더 2명씩 참가합니다. 제조사가 직접 운영하는 팩토리 팀 6곳과, 팩토리에서 머신을 공급받는 위성 팀 5곳입니다.","Eleven teams enter two riders each: six manufacturer-run factory teams and five satellite teams supplied by them.","Undici team con due piloti ciascuno: sei team factory dei costruttori e cinque team satellite riforniti da loro."))}</p></div>
 <div><span class="eb">RACE WEEKEND</span><h2 class="h2s">${x(t("레이스 위크는 사흘","A three-day weekend","Un weekend di tre giorni"))}</h2><ol class="tl">${[[UI.days[LI][0],t("연습 주행 FP1 · FP2","Practice FP1 · FP2","Libere FP1 · FP2"),t("상위 10명은 예선 Q2에 바로 진출합니다.","The top ten go straight to Q2.","I primi dieci accedono direttamente alla Q2.")],[UI.days[LI][1],t("예선 · 스프린트","Qualifying · Sprint","Qualifiche · Sprint"),t("Q1·Q2로 그리드를 정하고, 오후에 그랑프리 절반 거리의 스프린트.","Q1 and Q2 set the grid; the Sprint runs half the GP distance in the afternoon.","Q1 e Q2 decidono la griglia; nel pomeriggio la Sprint, metà distanza del GP.")],[UI.days[LI][2],t("그랑프리","Grand Prix","Gran Premio"),t("주말의 메인 레이스.","The main race of the weekend.","La gara principale del weekend.")]].map(d=>`<li><time>${d[0]}</time><b>${x(d[1])}</b><p>${x(d[2])}</p></li>`).join("")}</ol></div></div></section>
<section class="band"><div class="wrap">${head("POINTS",t("포인트 시스템","Points system","Sistema di punteggio"))}
 <p class="ptl">${x(t("그랑프리 · 1–15위","Grand Prix · P1–P15","Gran Premio · 1°–15°"))}</p><div class="pts">${GPP.map((p,i)=>`<div><small>${i+1}</small><b>${p}</b></div>`).join("")}</div>
 <p class="ptl">${x(t("스프린트 · 1–9위","Sprint · P1–P9","Sprint · 1°–9°"))}</p><div class="pts">${SPP.map((p,i)=>`<div><small>${i+1}</small><b>${p}</b></div>`).join("")}</div></div></section>
<section class="band panel"><div class="wrap">${head("FACTORY · 6",t("팩토리 팀","Factory teams","Team factory"))}<div class="teams">${TEAMS.filter(m=>m.type==="F").map(teamCard).join("")}</div>
 ${head("SATELLITE · 5",t("위성 팀","Satellite teams","Team satellite"))}<div class="teams">${TEAMS.filter(m=>m.type==="S").map(teamCard).join("")}</div></div></section>
<section class="band"><div class="wrap two"><div>${head("CHAMPIONS",t("역대 월드 챔피언","World champions","Campioni del mondo"))}<ol class="champs">${CHAMPS.map(c=>`<li><span class="w">${c[0]}</span><div><b>${c[1]}</b><small>${c[2]}${c[3]?" · "+x(c[3]):""}</small></div></li>`).join("")}</ol></div>
 <div>${standTable()}</div></div></section>`;
const teamCard=m=>`<article class="tm ${m.k==="liberty"?"me":""}" style="--tc:${m.col};--tf:${m.fg};--ta:${m.ac}"><header><b class="w">${m.n}</b><span>${x(m.kn)}</span>${m.par?`<em>${m.par} ${x(t("계열","satellite","satellite"))}</em>`:""}</header><div class="tim"><img src="${m.img||m.k}.webp" alt="" loading="lazy"></div><div class="tb"><p>${x(m.d)}</p><dl><div><dt>${x(t("머신","Bike","Moto"))}</dt><dd>${x(m.m)}</dd></div><div><dt>${x(t("선호 라이더","Riders","Piloti"))}</dt><dd>${x(m.p)}</dd></div><div><dt>${x(t("본사","HQ","Sede"))}</dt><dd>${x(m.hq)}</dd></div></dl>${m.who?`<p class="who">${x(m.who)}</p>`:""}<div class="motto"><b>${m.mo[0]}</b> · ${x(m.mo[1])}</div></div></article>`;
const standTable=()=>`${head("STANDINGS · R18",t("주요 라이더 순위","Riders' standings (selected)","Classifica piloti (selezione)"))}<table class="res"><thead><tr><th>Pos</th><th>${x(t("라이더","Rider","Pilota"))}</th><th class="hide">${x(t("팀","Team","Team"))}</th><th class="num">Pts</th></tr></thead><tbody>${STAND.map(r=>`<tr class="${r[2]==="Demon Ricci"?"hl":""}"><td class="r">${r[0]}</td><td><b>${r[1]} ${r[2]}</b><small class="mob">${r[3]}</small></td><td class="hide">${r[3]}</td><td class="num"><b>${r[4]}</b></td></tr>`).join("")}</tbody></table><p class="small">${x(t("22명 중 주요 라이더만 표시.","Selected riders from the 22-rider grid.","Solo alcuni dei 22 piloti."))}</p>`;

V.hospitality=()=>`${ph("demon-6",navLabel("hospitality"),"HOSPITALITY",t("리버티 개러지 바로 뒤에서 그랑프리를 경험하세요.","Experience a Grand Prix from right behind the Liberty garage.","Vivi il Gran Premio proprio dietro il garage Liberty."))}
<section class="band"><div class="wrap"><div class="hosp">${HOSP.map(h=>`<div><b>${x(h[0])}</b><span class="pr w">${x(h[1])}</span><p>${x(h[2])}</p></div>`).join("")}</div>
 <p class="small">${x(t("가격은 1인 기준, 부가세 포함. 그랑프리 현장 프로그램은 무젤로, 미사노, 발렌시아에서 운영합니다.","Prices per person incl. VAT. On-site programmes run at Mugello, Misano and Valencia.","Prezzi a persona IVA inclusa. Programmi in circuito a Mugello, Misano e Valencia."))}</p>
 <form class="form narrow" data-fake>${head("REQUEST",t("예약 요청","Booking request","Richiesta di prenotazione"))}<label>${x(t("프로그램","Programme","Programma"))}<select>${HOSP.map(h=>`<option>${x(h[0])}</option>`).join("")}</select></label><label>${x(t("그랑프리","Grand Prix","Gran Premio"))}<select>${races.filter(r=>st(r)!=="done").map(r=>`<option>${gpName(r)}</option>`).join("")}<option>2027</option></select></label><label>${x(t("이메일","Email","Email"))}<input type="email" required></label><button class="btn" type="submit">${x(t("요청 보내기","Send request","Invia richiesta"))}</button><p class="notice" role="status"></p></form></div></section>`;

V.careers=()=>`${ph("machine",navLabel("careers"),"CAREERS",t("돌아오는 라이더를 위해 일할 사람을 찾습니다.","We're looking for people to work for riders on the way back.","Cerchiamo persone che lavorino per chi torna a correre."))}
<section class="band"><div class="wrap">${head("OPEN ROLES",t("채용 공고","Open roles","Posizioni aperte"))}<div class="jobs">${JOBS.map(j=>`<details><summary><b>${x(j[0])}</b><span>${x(j[1])}</span></summary><p>${x(j[2])}</p><p class="small">${x(t("지원: CV와 자기소개서를 careers@libertyracing.it 로 보내 주세요.","Apply: send your CV and cover letter to careers@libertyracing.it","Candidature: invia CV e lettera a careers@libertyracing.it"))}</p></details>`).join("")}</div></div></section>`;

V.junior=()=>`${ph("demon-4",navLabel("junior"),"LIBERTY ACADEMY",t("부상과 공백을 겪은 젊은 라이더를 위한 육성 프로그램.","A development programme for young riders coming back from injury or time away.","Un programma per giovani piloti che tornano da un infortunio o da una pausa."))}
<section class="band"><div class="wrap"><div class="phase">${[[t("발굴","Scouting","Scouting"),t("Moto3·Moto2·WCR·내셔널에서 부상 후 기회를 잃은 라이더를 찾습니다.","We look for riders in Moto3, Moto2, WCR and national series who lost their chance after injury.","Cerchiamo in Moto3, Moto2, WCR e nei campionati nazionali chi ha perso l'occasione dopo un infortunio.")],[t("트레이닝","Training","Allenamento"),t("REBUILD 재활 센터와 피지컬 트레이닝.","REBUILD rehab centre and physical training.","Centro REBUILD e preparazione atletica.")],[t("기술 · 주행 교육","Technical & riding school","Tecnica e guida"),t("데이터 읽는 법, 타이어 관리, 미사노 주행 캠프.","Reading data, tyre management, riding camps at Misano.","Lettura dati, gestione gomme, camp di guida a Misano.")],[t("지원 · 계약","Support & contracts","Supporto e contratti"),t("장비 지원과 Moto2·MO1 테스트 기회, 우수자는 리버티 계약.","Kit support, Moto2/MO1 test days and a Liberty contract for the best.","Materiale, test in Moto2/MO1 e contratto Liberty per i migliori.")]].map((p,i)=>`<div><span class="n w">0${i+1}</span><b>${x(p[0])}</b><p>${x(p[1])}</p></div>`).join("")}</div></div></section>
<section class="band panel"><div class="wrap">${head("2026",t("아카데미 라이더","Academy riders","Piloti dell'Academy"))}<div class="jr">${JUNIORS.map(jrCard).join("")}</div><p class="small">${x(t("만 16세 이상 지원 가능 · academy@libertyracing.it","Open to riders aged 16+ · academy@libertyracing.it","Aperto ai piloti dai 16 anni · academy@libertyracing.it"))}</p></div></section>`;

V.press=()=>{const bp=t("아우렐리아 리버티 레이싱은 이탈리아 볼로냐에 본부를 둔 MOTIVO ONE 위성팀입니다. 2014년 전직 라이더 로렌초 마르케티가 창립했으며, 2019년부터 제니스 팩토리 머신으로 MO1에 참가하고 있습니다. 부상, 부진, 방출을 겪은 라이더의 복귀를 돕는 팀으로, 지금까지 9명을 다시 그리드에 세웠습니다.","Aurelia Liberty Racing is a MOTIVO ONE satellite team based in Bologna, Italy. Founded in 2014 by former rider Lorenzo Marchetti, it has raced Zenith Factory machinery in MO1 since 2019. The team specialises in bringing riders back after injury, poor form or losing their seat, and has returned nine riders to the grid.","Aurelia Liberty Racing è un team satellite MOTIVO ONE con sede a Bologna. Fondato nel 2014 dall'ex pilota Lorenzo Marchetti, corre in MO1 con moto Zenith Factory dal 2019. È specializzato nel rilancio di piloti dopo infortuni, cali di forma o perdita della sella, e ne ha riportati nove in griglia.");
 const rb=t("데몬 리치(#20, 이탈리아, 2000년생)는 MO1 통산 5승, 포디움 20회를 기록한 라이더입니다. 2025년 크래시로 시즌 아웃된 뒤 2026년 리버티에 합류해 미사노에서 복귀 후 첫 포디움을 기록했습니다.","Demon Ricci (#20, Italy, born 2000) has 5 MO1 wins and 20 podiums. After a 2025 crash ended his season, he joined Liberty for 2026 and took his first comeback podium at Misano.","Demon Ricci (#20, Italia, classe 2000) conta 5 vittorie e 20 podi in MO1. Dopo la caduta che ha chiuso il suo 2025, è arrivato in Liberty nel 2026 conquistando a Misano il primo podio del ritorno.");
 return`${ph("demon-3",navLabel("press"),"PRESS KIT",t("기자와 미디어를 위한 공식 자료.","Official material for journalists and media.","Materiale ufficiale per giornalisti e media."))}
<section class="band"><div class="wrap two"><div>${[["TEAM BOILERPLATE",bp],["RIDER BIO · #20",rb]].map((b,i)=>`<div class="copybox"><div class="cbh"><b>${b[0]}</b><button class="add" data-copy="${i}">${x(UI.copy)}</button></div><p id="cp${i}">${x(b[1])}</p></div>`).join("")}</div>
 <div>${head("ASSETS",t("다운로드 자료","Downloads","Download"))}<ul class="assets">${[[t("팀 로고 (SVG, PNG)","Team logo (SVG, PNG)","Logo del team (SVG, PNG)"),"2.4 MB"],[t("2026 라이더 공식 사진","2026 rider photos","Foto ufficiali piloti 2026"),"48 MB"],[t("ZP-26 머신 사진","ZP-26 bike photos","Foto ZP-26"),"36 MB"],[t("2026 팩트 시트 (PDF)","2026 fact sheet (PDF)","Scheda 2026 (PDF)"),"0.8 MB"]].map(a=>`<li><b>${x(a[0])}</b><span>${a[1]}</span></li>`).join("")}</ul>
 <p class="small">${x(t("다운로드는 승인된 미디어 계정으로만 가능합니다. 미디어 문의: press@libertyracing.it","Downloads require an approved media account. Media: press@libertyracing.it","Download riservati agli account media approvati. Stampa: press@libertyracing.it"))}</p></div></div></section>`};

V.shop=()=>`${ph("machine",navLabel("shop"),"TEAM SHOP",t("레플리카 바이크, 팀 의류, 오피치네 라벨리 부품.","Replica bikes, teamwear and Officine Ravelli parts.","Moto replica, abbigliamento e ricambi Officine Ravelli."))}
<section class="band dark"><div class="wrap">${head("REPLICA",t("ZP-26 리버티 레플리카","ZP-26 Liberty Replica","ZP-26 Liberty Replica"),`<span style="color:#a9aab0;font-size:15px">${x(t("#20 기념 220대 한정","Limited to 220 units for #20","Serie limitata di 220 esemplari per il #20"))}</span>`)}
 <div class="cfg"><div><div class="stage" id="stage"><img src="${img("machine")}" alt=""><span class="ed" id="edTag"></span><span class="tagno w" id="stNo">20</span></div><p style="color:#a9aab0;font-size:14px;margin:12px 0 0">${x(t("데몬 리치의 2026 머신을 도로용으로. 1000cc V4, 214마력, 건조 중량 188kg.","Demon Ricci's 2026 bike, made road-legal. 1000cc V4, 214 hp, 188 kg dry.","La moto 2026 di Demon Ricci, omologata. V4 1000cc, 214 CV, 188 kg a secco."))}</p></div>
 <form id="cfgForm">
  <fieldset class="opt"><legend>${x(t("버전","Version","Versione"))}</legend><div class="choices"><label><input type="radio" name="ver" value="street" checked><b>${x(t("스트리트","Street","Street"))}</b><small>€42,900</small></label><label><input type="radio" name="ver" value="track"><b>${x(t("트랙 에디션","Track Edition","Track Edition"))}</b><small>€58,500</small></label></div></fieldset>
  <fieldset class="opt"><legend>${x(t("리버리","Livery","Livrea"))}</legend><div class="choices"><label><input type="radio" name="liv" value="day" checked><b>Liberty White</b><small>${x(t("2026 레이스 리버리","2026 race livery","Livrea gara 2026"))}</small></label><label><input type="radio" name="liv" value="night"><b>Graphite Night</b><small>+€1,800</small></label></div></fieldset>
  <fieldset class="opt"><legend>${x(t("카울 번호","Fairing number","Numero carena"))}</legend><input class="numin" id="noIn" inputmode="numeric" maxlength="2" placeholder="20" aria-label="${x(t("카울 번호","Fairing number","Numero carena"))}"></fieldset>
  <fieldset class="opt"><legend>${x(t("옵션","Options","Optional"))}</legend>${[["lever",690,t("라벨리 레버 세트","Ravelli lever set","Set leve Ravelli")],["carbon",2400,t("카본 패키지","Carbon pack","Pacchetto carbonio")],["sign",500,t("데몬 리치 친필 사인 탱크","Tank signed by Demon Ricci","Serbatoio firmato da Demon Ricci")]].map(a=>`<label class="addon"><input type="checkbox" name="add" value="${a[0]}" data-p="${a[1]}"><span>${x(a[2])}</span><em>+€${a[1].toLocaleString("en-US")}</em></label>`).join("")}</fieldset>
  <div class="total"><span>${x(t("합계","Total","Totale"))}</span><b id="cfgTotal"></b></div><button class="btn" type="submit" style="width:100%;justify-content:center">${x(t("장바구니에 담기","Add to cart","Aggiungi al carrello"))}</button><p class="notice" id="cfgMsg">${x(t("장바구니에 담았어요.","Added to your cart.","Aggiunto al carrello."))}</p>
 </form></div></div></section>
<section class="band"><div class="wrap">${head("STORE",t("공식 상품","Official merchandise","Merchandising ufficiale"),`<div class="tabs" id="stabs" role="group">${Object.keys(SCATS).map((c,i)=>`<button aria-pressed="${i===0}" data-c="${c}">${x(SCATS[c])}</button>`).join("")}</div>`)}<div class="pg" id="pg"></div></div></section>`;

/* ---------- product icons ---------- */
const SV={
 shirt:(c,a)=>`<svg viewBox="0 0 100 100"><path d="M30 14l-20 12 8 16 8-4v48h48V38l8 4 8-16-20-12c-3 6-10 9-20 9s-17-3-20-9z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><path d="M26 52h48" stroke="${a}" stroke-width="5"/></svg>`,
 jacket:(c,a)=>`<svg viewBox="0 0 100 100"><path d="M30 12l-20 14 4 60h72l4-60-20-14-10 8H40z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><path d="M50 20v66" stroke="#555" stroke-width="2"/><path d="M14 46h18M68 46h18" stroke="${a}" stroke-width="5"/></svg>`,
 cap:(c,a)=>`<svg viewBox="0 0 100 100"><path d="M18 62c0-24 14-38 32-38s32 14 32 38z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><path d="M14 62h76c4 0 6 8-4 10H18c-8-2-8-10-4-10z" fill="#2b2d31"/><path d="M38 44h24" stroke="${a}" stroke-width="5"/></svg>`,
 helmet:(c,a)=>`<svg viewBox="0 0 100 100"><path d="M14 64c0-28 16-46 40-46 20 0 32 14 32 34v20H24z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><path d="M48 40h36v18H44z" fill="#2b2d31"/><path d="M20 58c10-18 22-26 30-28" stroke="${a}" stroke-width="5" fill="none"/></svg>`,
 lever:(c,a)=>`<svg viewBox="0 0 100 100"><circle cx="24" cy="30" r="12" fill="${c}" stroke="#2b2d31" stroke-width="2"/><path d="M32 38l50 40-6 6-50-38z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><circle cx="24" cy="30" r="4" fill="${a}"/></svg>`,
 rearset:(c,a)=>`<svg viewBox="0 0 100 100"><path d="M16 40h50l14 18H30z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><circle cx="30" cy="40" r="6" fill="${a}"/><circle cx="58" cy="40" r="6" fill="${a}"/><path d="M70 58v22h10" stroke="#2b2d31" stroke-width="5" fill="none"/></svg>`,
 fender:(c,a)=>`<svg viewBox="0 0 100 100"><path d="M10 70c6-30 30-44 60-40 10 2 18 6 22 12l-8 6c-20-12-48-6-60 26z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><path d="M30 52l40-14" stroke="${a}" stroke-width="2" stroke-dasharray="3 3"/></svg>`,
 exhaust:(c,a)=>`<svg viewBox="0 0 100 100"><path d="M8 60h44l30-20 8 10-30 22H8z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><ellipse cx="86" cy="45" rx="6" ry="9" fill="#2b2d31"/><path d="M60 50l16-10" stroke="${a}" stroke-width="5"/></svg>`,
 coffee:(c,a)=>`<svg viewBox="0 0 100 100"><path d="M28 16h44l6 70H22z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><path d="M28 16l4-6h36l4 6" fill="#2b2d31"/><circle cx="50" cy="50" r="13" fill="none" stroke="${a}" stroke-width="3"/><text x="50" y="55" font-size="14" text-anchor="middle" fill="${a}" font-family="Archivo" font-weight="900" font-style="italic">20</text></svg>`,
 key:(c,a)=>`<svg viewBox="0 0 100 100"><circle cx="30" cy="30" r="12" fill="none" stroke="#2b2d31" stroke-width="4"/><path d="M38 40l10 10" stroke="#2b2d31" stroke-width="4"/><path d="M48 46h36l-6 36H42z" fill="${c}" stroke="#2b2d31" stroke-width="2"/><text x="63" y="70" font-size="18" text-anchor="middle" fill="${a}" font-family="Archivo" font-weight="900" font-style="italic">20</text></svg>`
};

/* ---------- cart ---------- */
const eur=n=>"€"+n.toLocaleString("en-US");
let cart=[];try{cart=JSON.parse(localStorage.getItem("lr-cart2")||"[]")}catch(e){}
const saveCart=()=>{try{localStorage.setItem("lr-cart2",JSON.stringify(cart))}catch(e){}};
const drawCart=()=>{
 $("cartN").textContent=cart.reduce((a,c)=>a+c.q,0);
 $("items").innerHTML=cart.length?cart.map((c,i)=>`<div class="it"><b>${x(c.n)}</b><span class="p">${eur(c.p*c.q)}</span><small>${c.o?x(c.o):""}</small><span></span><div class="qty"><button data-q="${i}" data-d="-1" aria-label="-">−</button><span>${c.q}</span><button data-q="${i}" data-d="1" aria-label="+">+</button></div><button class="rm" data-rm="${i}">${x(t("삭제","Remove","Rimuovi"))}</button></div>`).join(""):`<p class="empty">${x(t("장바구니가 비어 있어요.","Your cart is empty.","Il carrello è vuoto."))}</p>`;
 $("cartTotal").textContent=eur(cart.reduce((a,c)=>a+c.p*c.q,0));saveCart()};
const addCart=(k,n,p,o)=>{const f=cart.find(c=>c.k===k);f?f.q++:cart.push({k,n,p,o,q:1});drawCart()};

/* ---------- chrome (util, nav, footer) ---------- */
const chrome=()=>{
 document.documentElement.lang=lang;document.title=x(t("아우렐리아 리버티 레이싱","Aurelia Liberty Racing","Aurelia Liberty Racing"));
 $("utilTxt").textContent=x(UI.util);
 $("season").textContent=x(UI.season);
 document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===lang));
 $("menu").innerHTML=UI.nav.map(n=>`<a href="#${n[0]}" data-r="${n[0]}">${x(n[1])}</a>`).join("")+`<div class="msub">${UI.sub.map(n=>`<a href="#${n[0]}" data-r="${n[0]}">${x(n[1])}</a>`).join("")}</div>`;
 $("subnav").innerHTML=UI.sub.map(n=>`<a href="#${n[0]}" data-r="${n[0]}">${x(n[1])}</a>`).join("");
 $("burger").textContent=x(UI.menu);$("cartLbl").textContent=x(UI.cart);$("cartH").textContent=x(UI.cart);$("cartX").textContent=x(UI.close);
 $("checkout").textContent=x(t("주문하기","Checkout","Procedi all'ordine"));$("coMsg").textContent=x(UI.fake);
 $("lbx").textContent=x(UI.close);document.querySelector(".dfoot .total span").textContent=x(t("합계","Total","Totale"));
 const all=PARTNERS.flatMap(g=>g.items);
 $("strip").innerHTML=`<span class="lab">${x(UI.partnersStrip)}</span>`+all.map(p=>`<a class="lg" href="#partners" aria-label="${p[1]}">${LOGO[p[0]]}</a>`).join("");
 $("foot").innerHTML=`<div><span class="w fw">LIBERTY<br>RACING</span><p>Officina Liberty · Via della Ripresa 20<br>40013 Castel Maggiore (BO), Italia</p></div>
  <div><h3>${x(t("팀","Team","Team"))}</h3><ul>${["team","riders","motorcycle","engineering","history"].map(k=>`<li><a href="#${k}">${navLabel(k)}</a></li>`).join("")}</ul></div>
  <div><h3>${x(t("레이스","Racing","Gare"))}</h3><ul>${["race","motivo-one","news","partners"].map(k=>`<li><a href="#${k}">${navLabel(k)}</a></li>`).join("")}</ul></div>
  <div><h3>${x(t("더 보기","More","Altro"))}</h3><ul>${["hospitality","careers","junior","shop","press","contact"].map(k=>`<li><a href="#${k}">${navLabel(k)}</a></li>`).join("")}</ul></div>`;
 $("legal").innerHTML=`<span>© 2026 Aurelia Liberty Racing S.r.l.</span><span>${x(UI.fanNote)}</span>`;
 drawCart();
};

/* ---------- page behaviour ---------- */
const drawRes=f=>{const b=$("resBody");if(!b)return;b.innerHTML=R.map(r=>{
 if(r[0]==="brk")return f==="all"?`<tr class="brkrow"><td colspan="8">${x(t("서머 브레이크 · 6월 말 ~ 8월 초","Summer break · late June to early August","Pausa estiva · fine giugno – inizio agosto"))}</td></tr>`:"";
 const s=st(r);if(f==="up"&&s==="done")return"";if(f==="done"&&s!=="done")return"";
 const done=s==="done"&&r[7]!=null,p=done?pts(r[6],SPP)+pts(r[7],GPP):"";
 const chip=s==="now"?`<span class="chip">${x(t("레이스 위크","Race week","In corso"))}</span>`:s==="up"?`<span class="chip up">${x(t("예정","Upcoming","In programma"))}</span>`:"";
 return`<tr class="${s}"><td class="r">R${r[0]}</td><td><b>${gpName(r)}</b><small>${r[2]}${r[5]?" · "+x(r[5]):""}</small></td><td class="hide num">${fd(r[3])} – ${fd(r[4])}</td><td class="num">${done?POS(r[6]):chip}</td><td class="num">${done?POS(r[7]):""}</td><td class="num hide">${done?lap(bestLap(r)):""}</td><td class="num hide">${done?vmax(r)+" km/h":""}</td><td class="num"><b>${p}</b></td></tr>`}).join("")};
const drawSess=n=>{const r=races.find(q=>q[0]==n),el=$("sess");if(!el)return;const night=NIGHT.includes(r[0]);
 const S=night?[[0,"FP1","17:45"],[0,"FP2","22:00"],[1,"Q1 · Q2","18:50"],[1,"Sprint","22:00"],[2,"Warm Up","17:40"],[2,"Grand Prix","21:00"]]:[[0,"FP1","10:45"],[0,"FP2","15:00"],[1,"Q1 · Q2","10:50"],[1,"Sprint","15:00"],[2,"Warm Up","09:40"],[2,"Grand Prix","14:00"]];
 const s0=dd(r[3]);
 el.innerHTML=`<div class="sesh"><div><span class="r w">R${r[0]}</span><b>${gpName(r)}</b><small>${r[2]} · ${fd(r[3])} – ${fd(r[4])}${r[5]?" · "+x(r[5]):""}</small></div><span class="chip ${st(r)==="up"?"up":""}">${x(st(r)==="done"?t("종료","Completed","Conclusa"):st(r)==="now"?t("레이스 위크","Race week","In corso"):t("예정","Upcoming","In programma"))}</span></div>
 <table class="res"><thead><tr><th>${x(t("날짜","Day","Giorno"))}</th><th>${x(t("세션","Session","Sessione"))}</th><th class="num">${x(t("현지 시간","Local time","Ora locale"))}</th></tr></thead><tbody>${S.map(q=>{const d=new Date(s0);d.setDate(s0.getDate()+q[0]);return`<tr><td>${UI.days[LI][q[0]]} ${fd(`${d.getMonth()+1}-${d.getDate()}`)}</td><td><b>${q[1]}</b></td><td class="num">${q[2]}</td></tr>`}).join("")}</tbody></table>`};
const drawLaps=()=>{const s=$("lapsvg");if(!s)return;
 const L=[95.124,92.811,92.640,92.702,92.688,92.731,92.810,92.795,92.866,92.902,92.951,93.010,92.988,93.054,93.120,93.087,93.142,93.051,92.940,92.876,92.731,92.602,92.488,92.391,92.214,92.355,92.540];
 const draw=()=>{const W=s.clientWidth,H=s.clientHeight,pl=44,pr=12,pt=12,pb=28,mn=92,mx=95.5;
  const X=i=>pl+i*(W-pl-pr)/(L.length-1),Yy=v=>pt+(mx-v)/(mx-mn)*(H-pt-pb);
  let g="";[92,93,94,95].forEach(v=>{g+=`<line x1="${pl}" x2="${W-pr}" y1="${Yy(v)}" y2="${Yy(v)}" stroke="var(--line)"/><text x="${pl-8}" y="${Yy(v)+4}" text-anchor="end" font-size="12" fill="var(--soft)">${v}</text>`});
  [1,5,10,15,20,25,27].forEach(i=>{if(W<520&&![1,10,20,27].includes(i))return;g+=`<text x="${X(i-1)}" y="${H-8}" text-anchor="middle" font-size="12" fill="var(--soft)">${i}</text>`});
  const d=L.map((v,i)=>`${i?"L":"M"}${X(i).toFixed(1)},${Yy(v).toFixed(1)}`).join("");
  s.innerHTML=g+`<path d="${d}" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="${X(24)}" cy="${Yy(92.214)}" r="6" fill="#d9c294" stroke="var(--ink)"/>`};
 draw();if(window.__ro)window.__ro.disconnect();window.__ro=new ResizeObserver(draw);window.__ro.observe(s)};
const drawShop=c=>{const el=$("pg");if(!el)return;el.innerHTML=PRODUCTS.filter(p=>c==="all"||p.c===c).map(p=>`<div class="pd"><div class="pic">${p.tag?`<span class="badge">${x(p.tag)}</span>`:""}${SV[p.ic[0]](p.ic[1],p.ic[2])}</div><span class="brand">${p.b}</span><h3>${x(p.n)}</h3><p>${x(p.d)}</p><div class="row2"><span class="pr">${eur(p.p)}</span>${p.s?`<select data-sz="${p.id}" aria-label="size">${["S","M","L","XL"].map(z=>`<option${z==="M"?" selected":""}>${z}</option>`).join("")}</select>`:""}<button class="add" data-add="${p.id}">${x(t("담기","Add","Aggiungi"))}</button></div></div>`).join("")};
const cfgCalc=()=>{const f=$("cfgForm");if(!f)return;const v=f.ver.value,l=f.liv.value,no=$("noIn").value.replace(/\D/g,"")||"20";
 const adds=[...f.querySelectorAll("[name=add]:checked")];
 const p=(v==="street"?42900:58500)+(l==="night"?1800:0)+adds.reduce((a,c)=>a+ +c.dataset.p,0);
 $("cfgTotal").textContent=eur(p);$("stNo").textContent=no;$("edTag").textContent=(v==="street"?"Street":"Track Edition")+(l==="night"?" · Graphite Night":"");$("stage").classList.toggle("night",l==="night");
 return{p,o:[v==="street"?"Street":"Track",l==="night"?"Graphite Night":"Liberty White","#"+no].join(" · ")}};

const bind=()=>{
 const rs=$("rsel");if(rs){drawSess(rs.value);rs.onchange=()=>drawSess(rs.value)}
 drawRes("all");drawLaps();
 document.querySelectorAll(".tabs[role=group]").forEach(g=>g.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;g.querySelectorAll("button").forEach(q=>q.setAttribute("aria-pressed",q===b));
  if(b.dataset.f)drawRes(b.dataset.f);
  if(g.id==="ntabs")$("allNews").innerHTML=NEWS.filter(a=>b.dataset.c==="all"||a.cat===b.dataset.c).map(a=>newsCard(a)).join("");
  if(g.id==="stabs")drawShop(b.dataset.c)}));
 drawShop("all");
 const pg=$("pg");if(pg)pg.onclick=e=>{const b=e.target.closest("[data-add]");if(!b)return;const p=PRODUCTS.find(q=>q.id===b.dataset.add),sel=pg.querySelector(`[data-sz="${p.id}"]`),o=sel?"Size "+sel.value:"";addCart(p.id+o,p.n,p.p,o);b.textContent=x(t("담았어요","Added","Aggiunto"));b.classList.add("done");setTimeout(()=>{b.textContent=x(t("담기","Add","Aggiungi"));b.classList.remove("done")},1400)};
 const f=$("cfgForm");if(f){f.addEventListener("input",cfgCalc);cfgCalc();f.addEventListener("submit",e=>{e.preventDefault();const c=cfgCalc();addCart("bike-"+c.o,t("ZP-26 리버티 레플리카","ZP-26 Liberty Replica","ZP-26 Liberty Replica"),c.p,c.o);$("cfgMsg").classList.add("on");setTimeout(()=>$("cfgMsg").classList.remove("on"),2200)})}
 document.querySelectorAll("form[data-fake]").forEach(fm=>fm.addEventListener("submit",e=>{e.preventDefault();const n=fm.querySelector(".notice");n.textContent=x(UI.sentOk);n.classList.add("on");fm.reset()}));
 document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText($("cp"+b.dataset.copy).textContent);b.textContent=x(UI.copied)}catch(e){const r=document.createRange();r.selectNodeContents($("cp"+b.dataset.copy));getSelection().removeAllRanges();getSelection().addRange(r)}});
 const g=$("gal");if(g)g.onclick=e=>{const b=e.target.closest("button");if(!b)return;lbLast=b;showLb(+b.dataset.i);$("lb").classList.add("on");$("lbx").focus()};
};

/* lightbox */
const GAL=[7,1,2,3,4,5,6].map(n=>img("demon-"+n));let cur=0,lbLast=null;
const showLb=i=>{cur=(i+GAL.length)%GAL.length;$("lbi").src=GAL[cur];$("lbi").alt="Demon Ricci "+(cur+1)};
const closeLb=()=>{$("lb").classList.remove("on");lbLast&&lbLast.focus()};
$("lbx").onclick=closeLb;$("lbp").onclick=()=>showLb(cur-1);$("lbn").onclick=()=>showLb(cur+1);
$("lb").addEventListener("click",e=>{if(e.target===$("lb"))closeLb()});

/* cart drawer */
$("items").onclick=e=>{const q=e.target.dataset.q,r=e.target.dataset.rm;if(q!==undefined){cart[q].q+=+e.target.dataset.d;if(cart[q].q<1)cart.splice(q,1);drawCart()}if(r!==undefined){cart.splice(r,1);drawCart()}};
const openCart=()=>{$("drawer").classList.add("on");$("coMsg").classList.remove("on");$("cartX").focus()};
const closeCart=()=>{$("drawer").classList.remove("on");$("cartBtn").focus()};
$("cartBtn").onclick=openCart;$("cartX").onclick=closeCart;$("shade").onclick=closeCart;$("checkout").onclick=()=>$("coMsg").classList.add("on");
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if($("drawer").classList.contains("on"))closeCart();if($("lb").classList.contains("on"))closeLb()}
 if($("lb").classList.contains("on")){if(e.key==="ArrowLeft")showLb(cur-1);if(e.key==="ArrowRight")showLb(cur+1)}});

/* router */
const route=(keepScroll)=>{
 let h=location.hash.slice(1)||"home",html,nav=h;
 if(h.startsWith("news-")){const a=NEWS.find(n=>"news-"+n.id===h);if(a){html=V.article(a);nav="news"}}
 if(!html){if(!V[h]||h==="article")h=nav="home";html=V[h]();if(h==="demon-ricci")nav="riders"}
 $("app").innerHTML=html;
 document.querySelectorAll("#menu a,#subnav a").forEach(a=>a.classList.toggle("cur",a.dataset.r===nav));
 $("menu").classList.remove("open");$("burger").setAttribute("aria-expanded","false");
 bind();if(!keepScroll)window.scrollTo(0,0);
};
window.addEventListener("hashchange",()=>route());
$("burger").onclick=()=>{const o=$("menu").classList.toggle("open");$("burger").setAttribute("aria-expanded",o)};
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{lang=b.dataset.l;LI=LANGS.indexOf(lang);try{localStorage.setItem("lr-lang",lang)}catch(e){}chrome();route(true)});
chrome();route();
}
