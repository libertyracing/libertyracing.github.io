/* Liberty Racing site content — every text is [한국어, English, Italiano] */
window.D = (() => {
const t = (k, e, i) => [k, e, i];

const UI = {
  nav: [
    ["home", t("홈","Home","Home")], ["team", t("팀","Team","Team")], ["riders", t("라이더","Riders","Piloti")],
    ["motorcycle", t("머신","Motorcycle","Moto")], ["race", t("레이스","Race","Gare")], ["engineering", t("엔지니어링","Engineering","Ingegneria")],
    ["news", t("뉴스","News","News")], ["partners", t("파트너","Partners","Partner")], ["history", t("히스토리","History","Storia")], ["contact", t("연락처","Contact","Contatti")]
  ],
  sub: [
    ["motivo-one", t("모토원","MOTIVO ONE","MOTIVO ONE")], ["hospitality", t("호스피탈리티","Hospitality","Hospitality")], ["careers", t("채용","Careers","Lavora con noi")],
    ["junior", t("주니어 프로그램","Junior Program","Junior Program")], ["shop", t("팀 샵","Team Shop","Team Store")], ["press", t("프레스 키트","Press Kit","Press Kit")]
  ],
  util: t("제니스 팩토리 공식 위성팀 · 이탈리아 볼로냐","Official Zenith Factory satellite team · Bologna, Italy","Team satellite ufficiale Zenith Factory · Bologna, Italia"),
  season: t("SEASON 2026 · 위성 레이싱 팀","SEASON 2026 · SATELLITE RACING TEAM","STAGIONE 2026 · TEAM SATELLITE"),
  menu: t("메뉴","Menu","Menu"), cart: t("장바구니","Cart","Carrello"), close: t("닫기","Close","Chiudi"),
  more: t("더 보기","See more","Scopri di più"), back: t("목록으로","Back","Indietro"),
  copy: t("복사","Copy","Copia"), copied: t("복사했어요","Copied","Copiato"),
  fanNote: t("MOTIVO ONE 세계관 팬 사이트 · 등장 팀, 브랜드, 인물은 모두 가상입니다","A MOTIVO ONE fan site · All teams, brands and people are fictional","Sito fan MOTIVO ONE · Team, marchi e persone sono immaginari"),
  partnersStrip: t("팀 파트너","Team partners","Partner del team"),
  fake: t("리버티 레이싱은 가상의 팀이라서 실제로 전송되거나 결제되지 않아요.","Liberty Racing is a fictional team, so nothing is actually sent or paid.","Liberty Racing è un team immaginario: nulla viene davvero inviato o pagato."),
  sentOk: t("접수됐어요. (가상의 팀이라 실제로 전송되지는 않아요)","Received. (This is a fictional team, so nothing was actually sent.)","Ricevuto. (Team immaginario: nulla è stato davvero inviato.)"),
  photo: t("사진","Photo","Foto"), prev: t("이전","Previous","Precedente"), next: t("다음","Next","Successiva"),
  months: t(["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"]),
  days: t(["금","토","일"],["Fri","Sat","Sun"],["Ven","Sab","Dom"])
};

/* ---------- RACE ---------- */
// round, country[ko,en,it], circuit, start, end, note, sprint, gp, base lap(s), top speed
const R = [
 [1,t("일본","Japanese","Giappone"),"Motegi","2-27","3-1",t("개막전 · 세이카 홈","Season opener · Seika home race","Apertura · casa Seika"),14,"DNF",104.6,301],
 [2,t("카타르","Qatar","Qatar"),"Lusail","3-13","3-15",t("나이트 레이스","Night race","Gara in notturna"),11,13,113.0,349],
 [3,t("중국","Chinese","Cina"),"Shanghai","3-27","3-29",t("벡터 홈","Vector home race","Casa Vector"),"DNF",12,120.6,342],
 [4,t("카탈루냐","Catalan","Catalogna"),"Barcelona","4-10","4-12",t("아더 홈","Ardor home race","Casa Ardor"),10,10,99.8,347],
 [5,t("프랑스","French","Francia"),"Le Mans","4-24","4-26",t("아틀라스 홈","Atlas home race","Casa Atlas"),9,8,91.5,318],
 [6,t("이탈리아","Italian","Italia"),"Mugello","5-8","5-10",t("리버티 홈","Liberty home race","Casa Liberty"),7,6,106.4,356],
 [7,t("네덜란드","Dutch","Olanda"),"Assen","5-22","5-24",t("타이탄 홈","Titan home race","Casa Titan"),8,9,92.8,315],
 [8,t("독일","German","Germania"),"Sachsenring","6-5","6-7",t("오리진 홈","Origin home race","Casa Origin"),6,"DNF",81.4,301],
 [9,t("모나코","Monaco","Monaco"),"Monaco Street","6-19","6-21",null,9,7,91.2,288],
 ["brk"],
 [10,t("오스트리아","Austrian","Austria"),"Red Bull Ring","8-7","8-9",null,5,6,89.7,331],
 [11,t("체코","Czech","Rep. Ceca"),"Brno","8-21","8-23",null,7,5,116.2,329],
 [12,t("영국","British","Gran Bretagna"),"Silverstone","9-4","9-6",t("레이븐 홈","Raven home race","Casa Raven"),6,7,119.0,337],
 [13,t("포르투갈","Portuguese","Portogallo"),"Portimão","9-18","9-20",null,4,5,98.9,339],
 [14,t("호주","Australian","Australia"),"Phillip Island","10-2","10-4",t("제니스 홈","Zenith home race","Casa Zenith"),8,"DNF",88.9,334],
 [15,t("인도네시아","Indonesian","Indonesia"),"Mandalika","10-16","10-18",null,5,4,91.3,321],
 [16,t("말레이시아","Malaysian","Malesia"),"Sepang","10-30","11-1",null,6,6,119.1,338],
 [17,t("헝가리","Hungarian","Ungheria"),"Balaton Park","11-6","11-8",null,4,5,101.2,322],
 [18,t("산마리노","San Marino","San Marino"),"Misano","11-13","11-15",null,3,3,91.9,306],
 [19,t("싱가포르","Singapore","Singapore"),"Marina Bay","11-20","11-22",t("나이트 레이스","Night race","Gara in notturna"),null,null,112.4,318],
 [20,t("발렌시아","Valencia","Valencia"),"Valencia","11-27","11-29",t("시즌 피날레","Season finale","Finale di stagione"),null,null,90.6,330]
];
const NIGHT = [2,19];

/* ---------- RIDER ---------- */
const CAREER = [
 [2017,"Moto3","Team Emilia Junior",1,3,"9",t("루키 오브 더 이어","Rookie of the Year","Rookie of the Year")],
 [2018,"Moto3","Team Emilia Junior",2,6,"4",null],
 [2019,"Moto2","Zenith Moto2 Academy",1,4,"8",null],
 [2020,"Moto2","Zenith Moto2 Academy",3,7,"3",null],
 [2021,"Moto2","Zenith Moto2 Academy",2,6,"4",null],
 [2022,"MO1","Zenith Factory",0,2,"7",t("최고 클래스 데뷔","Premier class debut","Debutto in classe regina")],
 [2023,"MO1","Zenith Factory",1,5,"5",t("첫 우승 · 아센","First win · Assen","Prima vittoria · Assen")],
 [2024,"MO1","Zenith Factory",3,9,"3",t("타이틀 경쟁","Title contender","In lotta per il titolo")],
 [2025,"MO1","Zenith Factory",1,3,"14",t("크래시로 시즌 아웃","Season ended by crash","Stagione chiusa da una caduta")],
 [2026,"MO1","Liberty Racing",0,1,"8*",t("재기 시즌 · 진행 중","Comeback season · ongoing","Stagione del ritorno · in corso")]
];
const INTERVIEW = [
 [t("그 사고로 화상 흉터가 남았는데, 신경 쓰이나요?","You came out of the crash with a burn scar. Does it bother you?","Dall'incidente ti è rimasta una cicatrice da ustione. Ti dà fastidio?"),
  t("뭐, 이거? 존나 멋있는데.","What, this? It looks fucking cool.","Cosa, questa? È fottutamente figa.")],
 [t("제니스 팩토리 시트를 잃고 리버티로 옮겼는데, 아쉽지는 않나요?","You lost the Zenith factory seat and moved to Liberty. Any frustration?","Hai perso la sella factory Zenith e sei passato in Liberty. Delusione?"),
  t("난 여전히 나야. 쇼핑카트에 태워도 씨발 그걸로 레이스할걸.","I'm still me. Put me on a shopping cart. I'll still race the fucking thing.","Sono sempre io. Mettimi su un carrello della spesa e ci corro lo stesso, cazzo.")],
 [t("사고에 대해 에이트를 탓하나요?","Do you blame Eight for what happened?","Dai la colpa a Eight per quello che è successo?"),
  t("지금 씨발 진심이야? 아니. 둘 다 들이박았고 둘 다 좆됐어. 그게 레이싱이지. 걔 좀 씨발 냅둬.","Are you fucking serious? No. We both sent it, we both ate shit. That's racing. Leave him the fuck alone.","Dici sul serio, cazzo? No. Ci siamo buttati tutti e due e ci siamo fatti male tutti e due. Sono le corse. Lasciatelo in pace, cazzo.")]
];

/* ---------- STAFF ---------- */
const STAFF = [
 ["Lorenzo Marchetti",t("로렌초 마르케티","Lorenzo Marchetti","Lorenzo Marchetti"),t("팀 디렉터","Team Director","Team Director"),t("리버티 창립자. 2011년 무젤로 크래시로 은퇴한 전 MO1 라이더.","Liberty founder. Former MO1 rider who retired after a crash at Mugello in 2011.","Fondatore di Liberty. Ex pilota MO1, ritirato dopo una caduta al Mugello nel 2011."),0],
 ["Andrea Fontana",t("안드레아 폰타나","Andrea Fontana","Andrea Fontana"),t("테크니컬 디렉터","Technical Director","Direttore tecnico"),t("제니스 팩토리 섀시 부서 출신. 2020년 합류.","Ex-Zenith Factory chassis department. Joined in 2020.","Dal reparto telai Zenith Factory. In squadra dal 2020."),1],
 ["Fabio Greco",t("파비오 그레코","Fabio Greco","Fabio Greco"),t("레이스 매니저","Race Manager","Race Manager"),t("레이스 위크 운영과 레이스 컨트롤 소통 담당.","Runs race-week operations and liaises with Race Control.","Gestisce il weekend di gara e i rapporti con la Direzione Gara."),1],
 ["Luca Verni",t("루카 베르니","Luca Verni","Luca Verni"),t("수석 엔지니어","Chief Engineer","Capo ingegnere"),t("ZP-26 리버티 사양 개발 총괄.","Leads development of the Liberty-spec ZP-26.","Guida lo sviluppo della ZP-26 in specifica Liberty."),2],
 ["Massimo Corsi",t("마시모 코르시","Massimo Corsi","Massimo Corsi"),t("크루 치프 #20","Crew Chief #20","Capotecnico #20"),t("데몬의 무전을 견디는 유일한 사람. 패독 경력 22년.","The only man who survives Demon's team radio. 22 years in the paddock.","L'unico che sopravvive al team radio di Demon. 22 anni di paddock."),2],
 ["Elena Pagani",t("엘레나 파가니","Elena Pagani","Elena Pagani"),t("데이터 엔지니어 #20","Data Engineer #20","Data engineer #20"),t("타이어 전략 담당. 미사노 3위 전략 설계.","Tyre strategy. Designed the plan behind P3 at Misano.","Strategia gomme. Ha disegnato il terzo posto di Misano."),2],
 ["Davide Cantelli",t("다비데 칸텔리","Davide Cantelli","Davide Cantelli"),t("텔레메트리 엔지니어","Telemetry Engineer","Ingegnere telemetria"),t("제니스와의 데이터 공유 창구.","Data link with Zenith Factory.","Collegamento dati con Zenith Factory."),2],
 ["Dr. Giulia Benetti",t("줄리아 베네티 박사","Dr Giulia Benetti","Dott.ssa Giulia Benetti"),t("퍼포먼스 메디컬 디렉터","Performance Medical Director","Direttrice medica"),t("산타 마르타 클리닉 정형외과 전문의. REBUILD 프로그램 총괄.","Orthopaedic surgeon at Clinica Santa Marta. Leads the REBUILD programme.","Ortopedica della Clinica Santa Marta. Guida il programma REBUILD."),1],
 ["Sara Moretti",t("사라 모레티","Sara Moretti","Sara Moretti"),t("커뮤니케이션 매니저","Communications Manager","Responsabile comunicazione"),t("데몬의 인터뷰 욕설을 편집하는 사람.","The person who edits the swearing out of Demon's interviews.","Colei che taglia le parolacce dalle interviste di Demon."),1]
];

/* ---------- MACHINE ---------- */
const SPEC = [
 [t("공식 명칭","Official name","Nome ufficiale"),t("제니스 ZP-26 · 리버티 사양","Zenith ZP-26 · Liberty spec","Zenith ZP-26 · specifica Liberty")],
 [t("엔진","Engine","Motore"),t("1000cc 90° V4, 4행정, 카운터 로테이팅 크랭크","1000cc 90° V4, four-stroke, counter-rotating crank","V4 90° 1000cc, quattro tempi, albero controrotante")],
 [t("최고 출력","Power","Potenza"),t("290마력 이상","290+ hp","Oltre 290 CV")],
 [t("최고 속도","Top speed","Velocità massima"),t("356km/h (무젤로)","356 km/h (Mugello)","356 km/h (Mugello)")],
 [t("섀시","Chassis","Telaio"),t("알루미늄 트윈 스파 프레임, 카본 스윙암","Aluminium twin-spar frame, carbon swingarm","Telaio doppio trave in alluminio, forcellone in carbonio")],
 [t("에어로다이내믹스","Aerodynamics","Aerodinamica"),t("카본 페어링, 다운포스 윙렛, 그라운드 이펙트 사이드 포드","Carbon fairing, downforce winglets, ground-effect side pods","Carena in carbonio, alette deportanti, pance ad effetto suolo")],
 [t("서스펜션","Suspension","Sospensioni"),t("소스펜시오니 오르시니 43mm 프런트 포크, 리어 모노쇼크","Sospensioni Orsini 43 mm front fork, rear monoshock","Forcella Sospensioni Orsini da 43 mm, monoammortizzatore")],
 [t("브레이크","Brakes","Freni"),t("프레니 아르데시아 340mm 카본 디스크, 4피스톤 캘리퍼","Freni Ardesia 340 mm carbon discs, four-piston calipers","Dischi in carbonio Freni Ardesia da 340 mm, pinze a 4 pistoncini")],
 [t("타이어","Tyres","Pneumatici"),t("곰메 베토리 (MO1 단일 공급)","Gomme Vettori (MO1 sole supplier)","Gomme Vettori (fornitore unico MO1)")],
 [t("전자 제어","Electronics","Elettronica"),t("MO1 표준 ECU, 통합 소프트웨어","MO1 standard ECU with unified software","Centralina standard MO1 con software unico")],
 [t("건조 중량","Dry weight","Peso a secco"),t("157kg (규정 최저치)","157 kg (regulation minimum)","157 kg (minimo regolamentare)")]
];
const DEV = [
 ["R1",t("2025년 사양 섀시로 개막","Season starts on the 2025-spec chassis","Si parte con il telaio 2025")],
 ["R6",t("무젤로 에어로 업데이트: 새 윙렛과 사이드 포드","Mugello aero update: new winglets and side pods","Aggiornamento aero al Mugello: nuove alette e pance")],
 ["R10",t("카본 스윙암 도입, 후반 타이어 마모 12% 감소","Carbon swingarm introduced, late-race tyre wear down 12%","Arriva il forcellone in carbonio, usura gomme a fine gara -12%")],
 ["R13",t("엔진 맵 개선으로 코너 탈출 가속 향상","New engine maps improve corner-exit drive","Nuove mappe motore per una migliore trazione in uscita")],
 ["R18",t("미사노에서 브레이크 쿨링 덕트 신형","New brake cooling ducts at Misano","Nuovi convogliatori di raffreddamento freni a Misano")]
];

/* ---------- ENGINEERING ---------- */
const ENG = [
 ["aero",t("에어로다이내믹스","Aerodynamics","Aerodinamica"),t("제니스 풍동 데이터를 받아 리버티 라이딩 스타일에 맞게 다운포스와 안정성을 조정합니다. 위성팀은 시즌당 두 번까지 공력 패키지를 바꿀 수 있습니다.","We take Zenith wind-tunnel data and tune downforce and stability to suit our riders. Satellite teams may change aero packages twice a season.","Partiamo dai dati della galleria del vento Zenith e calibriamo carico e stabilità sullo stile dei nostri piloti. I team satellite possono cambiare pacchetto aero due volte a stagione.")],
 ["engine",t("엔진 퍼포먼스","Engine performance","Prestazioni motore"),t("엔진은 제니스가 공급하고, 리버티는 맵핑과 연비 전략을 맡습니다. 시즌 엔진 할당량은 7기입니다.","Zenith supplies the engines. Liberty handles mapping and fuel strategy. The season allocation is seven engines.","I motori sono forniti da Zenith; Liberty cura mappature e strategia carburante. L'allocazione stagionale è di sette motori.")],
 ["chassis",t("섀시 엔지니어링","Chassis engineering","Telaistica"),t("오피치네 라벨리와 함께 스윙암과 브래킷을 자체 제작합니다. 재기하는 라이더를 위해 피드백이 분명한 안정형 섀시를 지향합니다.","We build swingarms and brackets in-house with Officine Ravelli, aiming for a stable chassis with clear feedback for riders on the way back.","Realizziamo forcelloni e staffe con Officine Ravelli, puntando su un telaio stabile e comunicativo per chi torna a correre.")],
 ["susp",t("서스펜션 세팅","Suspension set-up","Assetto sospensioni"),t("부상 부위에 부담이 덜 가도록 라이더별 세팅 베이스를 따로 둡니다. 데몬은 손목 보호를 위해 프런트를 조금 부드럽게 씁니다.","Each rider has their own base set-up to reduce strain on old injuries. Demon runs a slightly softer front to protect his wrist.","Ogni pilota ha un assetto base per non affaticare vecchi infortuni. Demon usa un anteriore un po' più morbido per proteggere il polso.")],
 ["data",t("데이터와 텔레메트리","Data and telemetry","Dati e telemetria"),t("주행마다 센서 140여 개에서 데이터를 받아 볼로냐 리모트 개러지로 실시간 전송합니다.","Around 140 sensors stream data from every run to our remote garage in Bologna in real time.","Circa 140 sensori inviano dati in tempo reale al nostro garage remoto di Bologna.")],
 ["brakes",t("브레이크와 타이어 연구","Brakes and tyres","Freni e pneumatici"),t("리버티의 강점입니다. 레이스 후반까지 타이어를 살리는 전략으로 2026 시즌 후반 6라운드 중 5번 톱6에 들었습니다.","Our strength. Saving tyres for the final laps put us in the top six in five of the last six rounds of 2026.","Il nostro punto forte. Gestire le gomme fino al finale ci ha portati in top six in cinque delle ultime sei gare del 2026.")]
];
const TESTS = [
 [t("2025.11 발렌시아 시즌 후 테스트","Nov 2025 · Valencia post-season test","Nov 2025 · Test post-stagione Valencia"),t("데몬 복귀 후 첫 MO1 주행. 61랩, 베스트 1:31.402.","Demon's first MO1 laps after his comeback. 61 laps, best 1:31.402.","Primi giri in MO1 di Demon dopo il rientro. 61 giri, migliore 1:31.402.")],
 [t("2026.02 세팡 공식 테스트","Feb 2026 · Sepang official test","Feb 2026 · Test ufficiale Sepang"),t("3일 동안 174랩. 롱런 페이스 확인, 종합 11위.","174 laps over three days. Long-run pace confirmed, 11th overall.","174 giri in tre giorni. Passo gara confermato, 11° assoluto.")],
 [t("2026.09 미사노 프라이빗 테스트","Sep 2026 · Misano private test","Set 2026 · Test privato Misano"),t("새 브레이크 덕트와 미디엄 타이어 롱런 검증. 이 데이터가 R18 포디움으로 이어졌습니다.","New brake ducts and medium-tyre long runs. This data led to the Round 18 podium.","Nuovi convogliatori freni e long run con la media. Dati che hanno portato al podio di Misano.")]
];

/* ---------- NEWS ---------- */
const NEWS = [
 {id:"singapore-preview",cat:"race",date:"2026-11-19",img:"demon-6",
  title:t("R19 싱가포르 프리뷰: 시즌 마지막 나이트 레이스","Singapore preview: the last night race of the season","Anteprima Singapore: l'ultima gara in notturna"),
  lead:t("미사노 3위의 기세를 안고 리버티가 마리나베이에 도착했습니다.","Fresh from third at Misano, Liberty has arrived at Marina Bay.","Reduce dal terzo posto di Misano, Liberty è arrivata a Marina Bay."),
  body:[t("마리나베이 스트리트 서킷은 23개 코너와 습도 80%를 넘나드는 열대의 밤으로 유명합니다. 브레이크 온도와 후반 타이어 관리가 승부를 가릅니다.","The Marina Bay Street Circuit is known for its 23 corners and tropical nights above 80% humidity. Brake temperatures and late tyre management decide the race.","Il circuito di Marina Bay è noto per le sue 23 curve e le notti tropicali con umidità oltre l'80%. Temperature dei freni e gestione gomme decidono la gara."),
        t("현재 라이더 순위 8위인 데몬은 7위와 9포인트 차이입니다. 남은 두 라운드에서 시즌 톱7을 노립니다.","Eighth in the standings, Demon is nine points off seventh, with two rounds left to reach the top seven.","Ottavo in classifica, Demon è a nove punti dal settimo posto, con due gare per entrare nei primi sette.")],
  quote:[t("밤에 달리는 거? 좋지. 사람들이 내 흉터를 덜 쳐다보잖아. 농담이고, 이번엔 샴페인 두 번 맛보러 왔어.","Racing at night? Love it. People stare at my scar less. Kidding. I'm here to taste the champagne twice.","Correre di notte? Mi piace. La gente guarda meno la mia cicatrice. Scherzo, sono qui per lo spumante, due volte."),"Demon Ricci"]},
 {id:"misano-podium",cat:"race",date:"2026-11-15",img:"demon-4",
  title:t("데몬 리치, 미사노 3위. 2025년 크래시 이후 첫 포디움","Ricci third at Misano, his first podium since the 2025 crash","Ricci terzo a Misano, primo podio dopo la caduta del 2025"),
  lead:t("R18 산마리노 그랑프리에서 #20 데몬 리치가 스프린트와 그랑프리 모두 3위에 올랐습니다.","#20 Demon Ricci finished third in both the Sprint and the Grand Prix at San Marino.","Il #20 Demon Ricci è terzo sia nella Sprint sia nel Gran Premio di San Marino."),
  body:[t("11번 그리드에서 출발한 데몬은 첫 랩에만 네 대를 추월했습니다. 엘레나 파가니의 미디엄 타이어 전략이 후반에 빛을 발했고, 마지막 다섯 랩 동안 두 대를 더 잡아냈습니다.","Starting eleventh, Demon passed four riders on lap one. Elena Pagani's medium-tyre strategy came alive late on, and he picked off two more in the final five laps.","Partito undicesimo, Demon ha superato quattro piloti al primo giro. La strategia con la media di Elena Pagani ha pagato nel finale, con altri due sorpassi negli ultimi cinque giri."),
        t("리버티의 2026 시즌 첫 포디움입니다. 시상대 샴페인은 파트너 칸티나 발셀라의 스파클링 와인이었습니다.","It is Liberty's first podium of 2026. The podium bottle came from partner Cantina Valsella.","È il primo podio Liberty del 2026. La bottiglia sul podio era del partner Cantina Valsella.")],
  quote:[t("미사노에서 다시 시상대라니. 망할, 이게 꿈이면 아무도 깨우지 마.","Back on the podium at Misano. Dannazione, if this is a dream, nobody wake me up.","Di nuovo sul podio a Misano. Dannazione, se è un sogno non svegliatemi."),"Demon Ricci"]},
 {id:"aurelia-renewal",cat:"partners",date:"2026-11-10",img:"machine",
  title:t("아우렐리아 카페, 타이틀 파트너십 2028년까지 연장","Aurelia Caffè extends title partnership to 2028","Aurelia Caffè rinnova da title partner fino al 2028"),
  lead:t("볼로냐의 커피 로스터리 아우렐리아 카페가 타이틀 파트너십을 2028 시즌까지 연장했습니다.","Bologna coffee roaster Aurelia Caffè has extended its title partnership through 2028.","La torrefazione bolognese Aurelia Caffè prolunga la title partnership fino al 2028."),
  body:[t("2021년부터 함께한 아우렐리아의 에스프레소 크레마 색이 머신의 샴페인 골드가 되었습니다. 팀의 공식 명칭 Aurelia Liberty Racing도 2028년까지 유지됩니다.","Partners since 2021, Aurelia's espresso crema gave the bike its champagne gold. The name Aurelia Liberty Racing stays until 2028.","Partner dal 2021, la crema dell'espresso Aurelia ha dato alla moto il suo oro champagne. Il nome Aurelia Liberty Racing resta fino al 2028.")],
  quote:[t("넘어진 사람이 다시 일어나는 이야기, 그게 매일 아침 우리가 내리는 커피와 같다고 생각합니다.","A story about getting back up. That's the same as the coffee we pour every morning.","Una storia di chi si rialza. È lo stesso del caffè che versiamo ogni mattina."),"Anna Roberti, Aurelia Caffè"]},
 {id:"medical-balaton",cat:"medical",date:"2026-11-09",img:"demon-1",
  title:t("메디컬 업데이트: 발라톤 이후 왼쪽 손목 정밀 검사","Medical update: left wrist scan after Balaton","Bollettino medico: esami al polso sinistro dopo Balaton"),
  lead:t("데몬 리치가 산타 마르타 클리닉에서 왼쪽 손목 MRI 검사를 받았습니다. 결과는 이상 없음입니다.","Demon Ricci had an MRI on his left wrist at Clinica Santa Marta. The results are clear.","Demon Ricci ha effettuato una risonanza al polso sinistro alla Clinica Santa Marta. Esito negativo."),
  body:[t("예선 중 저속 하이사이드를 겪었지만 결승에서 5위로 완주했습니다. 줄리아 베네티 박사는 가벼운 염좌라며 미사노 출전에 문제가 없다고 밝혔습니다.","He suffered a low-speed highside in qualifying but finished fifth. Dr Giulia Benetti confirmed a mild sprain and cleared him for Misano.","Highside a bassa velocità in qualifica, poi quinto in gara. La dott.ssa Benetti ha confermato una lieve distorsione e lo ha dichiarato idoneo per Misano.")],
  quote:[t("말리는 게 더 힘들었어요. 결과 나오기도 전에 시뮬레이터 예약부터 하더라고요.","Stopping him was harder. He booked the simulator before the results were out.","Fermarlo è stato più difficile. Ha prenotato il simulatore prima dei risultati."),"Dr Giulia Benetti"]},
 {id:"second-rider",cat:"team",date:"2026-11-04",img:"demon-2",
  title:t("두 번째 라이더, 12월 발렌시아 테스트 이후 발표","Second rider to be named after the Valencia test","Il secondo pilota sarà annunciato dopo il test di Valencia"),
  lead:t("리버티가 2027 시즌 두 번째 라이더를 12월 1일 발렌시아 테스트 이후 발표합니다.","Liberty will name its second 2027 rider after the Valencia test on 1 December.","Liberty annuncerà il secondo pilota 2027 dopo il test di Valencia del 1° dicembre."),
  body:[t("로렌초 마르케티 팀 디렉터는 후보가 두 명으로 좁혀졌고, 둘 다 최근 2년 안에 큰 부상을 겪은 라이더라고 밝혔습니다.","Team Director Lorenzo Marchetti said the shortlist is down to two, both back from major injuries in the last two years.","Il Team Director Lorenzo Marchetti ha detto che restano due candidati, entrambi reduci da gravi infortuni negli ultimi due anni.")],
  quote:[t("우리 팀에 오는 이유가 같다면, 누구든 환영입니다.","If they come to us for the same reason, they are welcome.","Se arrivano da noi per lo stesso motivo, sono i benvenuti."),"Lorenzo Marchetti"]},
 {id:"fan-day",cat:"team",date:"2026-07-18",img:"demon-5",
  title:t("서머 브레이크 오피치나 리버티 팬 데이, 3,000명 방문","3,000 fans visit Officina Liberty for summer fan day","3.000 tifosi all'Officina Liberty per il fan day estivo"),
  lead:t("서머 브레이크 중 볼로냐 본사 팬 데이에 3,000명이 찾았습니다.","3,000 fans came to the Bologna headquarters during the summer break.","3.000 tifosi alla sede di Bologna durante la pausa estiva."),
  body:[t("팬들은 재활 센터와 개러지를 둘러보고 데몬 리치 사인회와 시뮬레이터 챌린지에 참가했습니다. 아우렐리아 카페는 에스프레소 4,200잔을 무료로 제공했습니다.","Fans toured the rehab centre and garage, met Demon Ricci and took on the simulator challenge. Aurelia Caffè served 4,200 free espressos.","I tifosi hanno visitato centro di riabilitazione e garage, incontrato Demon Ricci e sfidato il simulatore. Aurelia Caffè ha offerto 4.200 espressi.")],
  quote:[t("사인을 2,000장쯤 했나. 손목 재활이 따로 필요 없겠네.","I signed about two thousand things. Guess my wrist doesn't need rehab anymore.","Avrò firmato duemila autografi. Il polso non ha più bisogno di riabilitazione."),"Demon Ricci"]},
 {id:"sepang-test",cat:"test",date:"2026-02-08",img:"machine",
  title:t("세팡 공식 테스트: 사흘간 174랩","Sepang official test: 174 laps in three days","Test ufficiale di Sepang: 174 giri in tre giorni"),
  lead:t("데몬 리치가 리버티 소속으로 첫 공식 테스트를 마쳤습니다. 종합 11위.","Demon Ricci completed his first official test with Liberty, 11th overall.","Demon Ricci ha chiuso il primo test ufficiale con Liberty, 11° assoluto."),
  body:[t("팀은 순위보다 롱런 페이스와 손목 부담을 확인하는 데 집중했습니다. 마지막 날 20랩 롱런 평균은 상위 8명과 비슷했습니다.","The team focused on long-run pace and wrist load rather than lap times. His 20-lap run on the final day matched the top eight.","Il team si è concentrato sul passo e sul carico al polso più che sul tempo. Il long run di 20 giri dell'ultimo giorno era da top eight.")],
  quote:[t("1년 만에 이 소리를 들으니까 살 것 같다.","Hearing this sound again after a year, I feel alive.","Risentire questo suono dopo un anno. Mi sento vivo."),"Demon Ricci"]},
 {id:"demon-signs",cat:"riders",date:"2026-01-14",img:"demon-7",
  title:t("데몬 리치, 2026 시즌 리버티 합류","Demon Ricci joins Liberty for 2026","Demon Ricci approda in Liberty per il 2026"),
  lead:t("전 제니스 팩토리 라이더 데몬 리치가 리버티의 #20 라이더로 합류합니다.","Former Zenith Factory rider Demon Ricci joins Liberty as its #20 rider.","L'ex pilota Zenith Factory Demon Ricci entra in Liberty con il #20."),
  body:[t("2025 시즌 중반 크래시로 얼굴에 화상을 입고 시즌 아웃된 뒤, 4개월 동안 REBUILD 프로그램을 마쳤습니다. 1년 계약에 2027 연장 옵션이 있습니다.","After facial burns ended his 2025 season, he spent four months in the REBUILD programme. He has a one-year deal with an option for 2027.","Dopo le ustioni al volto che hanno chiuso il suo 2025, ha seguito il programma REBUILD per quattro mesi. Contratto di un anno con opzione per il 2027.")],
  quote:[t("좌천? 웃기지 마. 여기서 다시 올라갈 거야. 지켜봐.","Demoted? Don't make me laugh. I'm climbing back from here. Watch me.","Retrocesso? Non farmi ridere. Da qui risalgo. Guardatemi."),"Demon Ricci"]},
 {id:"liberty-interview",cat:"interview",date:"2026-01-20",img:"demon-6",
  title:t("데몬, 리버티 이적 후 첫 인터뷰","Demon's first interview since joining Liberty","La prima intervista di Demon da pilota Liberty"),
  lead:t("사고와 흉터, 제니스와의 결별, 그리고 그리드 복귀에 대해.","On the crash, the scar, leaving Zenith and getting back on the grid.","L'incidente, la cicatrice, l'addio a Zenith e il ritorno in griglia."),
  body:[t("인터뷰는 영어로 진행됐으며, 일부 표현은 원문 그대로 실었습니다.","The interview was conducted in English. Some language is printed as spoken.","L'intervista si è svolta in inglese. Alcune espressioni sono riportate testualmente.")],
  quote:[t("난 여전히 나야. 쇼핑카트에 태워도 씨발 그걸로 레이스할걸.","I'm still me. Put me on a shopping cart. I'll still race the fucking thing.","Sono sempre io. Mettimi su un carrello della spesa e ci corro lo stesso, cazzo."),"Demon Ricci"]},
 {id:"season-out-2025",cat:"riders",date:"2025",img:"demon-5",
  title:t("데몬, 2025 시즌 아웃","Demon out for the rest of 2025","Demon salta il resto del 2025"),
  lead:t("제니스는 데몬 리치가 부상 회복과 재활에 집중하기 위해 2025 시즌 잔여 일정에 출전하지 않는다고 밝혔다.","Zenith announced that Demon Ricci will miss the rest of the 2025 season to focus on recovery and rehabilitation.","Zenith ha annunciato che Demon Ricci salterà il resto del 2025 per concentrarsi su recupero e riabilitazione."),
  body:[t("2026 시즌 복귀 여부와 향후 일정은 추후 발표될 예정이다.","His 2026 plans and return date will be announced later.","Il rientro e i piani per il 2026 saranno comunicati più avanti.")],
  quote:[t("두 선수의 상태를 계속 확인할 예정입니다.","We will keep monitoring both riders.","Continueremo a monitorare entrambi i piloti."),"Zenith Factory"],src:"Paddock Report"},
 {id:"crash-2025",cat:"race",date:"2025",img:"demon-2",
  title:t("데몬, 에이트와 휠투휠 배틀 중 대형 크래시","Demon and Eight in a huge crash during a wheel-to-wheel battle","Demon ed Eight, grande caduta nel corpo a corpo"),
  lead:t("제니스의 두 라이더가 포지션 싸움 도중 충돌… 동반 리타이어.","Zenith's two riders collided while fighting for position. Both retired.","I due piloti Zenith si sono toccati lottando per la posizione. Entrambi ritirati."),
  body:[t("두 선수는 모두 생명에는 지장이 없는 것으로 확인됐지만, 데몬은 추가 치료와 재활이 필요한 상태인 것으로 확인됐다.","Both riders are out of danger, but Demon needs further treatment and rehabilitation.","Entrambi sono fuori pericolo, ma Demon avrà bisogno di ulteriori cure e riabilitazione.")],
  quote:[t("제니스는 두 선수의 상태를 계속 확인할 예정이다.","Zenith will continue to monitor both riders.","Zenith continuerà a monitorare entrambi i piloti."),"MOTIVO1 Race Report"],src:"MOTIVO1 Race Report"}

];
const CATS = {race:t("레이스","Race","Gara"),team:t("팀","Team","Team"),partners:t("파트너","Partners","Partner"),medical:t("메디컬","Medical","Medico"),interview:t("인터뷰","Interview","Intervista"),test:t("테스트","Testing","Test"),riders:t("라이더","Riders","Piloti")};

/* ---------- PARTNERS ---------- */
const PARTNERS = [
 {tier:t("타이틀 스폰서","Title Sponsor","Title Sponsor"),items:[["aur","Aurelia Caffè",t("볼로냐의 3대째 커피 로스터리. 2021년부터 팀 이름과 머신의 크레마 골드를 함께합니다.","A third-generation Bologna coffee roaster, giving the team its name and the bike its crema gold since 2021.","Torrefazione bolognese di terza generazione: dal 2021 dà il nome al team e l'oro crema alla moto.")]]},
 {tier:t("메인 파트너","Main Partner","Main Partner"),items:[["sm","Clinica Santa Marta",t("볼로냐의 정형외과·스포츠 재활 병원. REBUILD 프로그램을 함께 운영합니다.","Bologna's orthopaedic and sports rehab hospital, co-running the REBUILD programme.","Ospedale bolognese di ortopedia e riabilitazione sportiva, co-gestisce il programma REBUILD.")],["zen","Zenith Factory",t("2019년부터 머신과 기술을 공급하는 팩토리 파트너.","Factory partner supplying bikes and technology since 2019.","Partner factory che fornisce moto e tecnologia dal 2019.")]]},
 {tier:t("테크니컬 파트너","Technical Partner","Technical Partner"),items:[["rav","Officine Ravelli",t("모데나의 정밀 가공 공방. 스윙암 브래킷과 캘리퍼 마운트 제작.","Modena precision workshop making swingarm brackets and caliper mounts.","Officina di precisione modenese: staffe forcellone e supporti pinze.")],["ard","Freni Ardesia",t("카본 브레이크 디스크와 캘리퍼.","Carbon brake discs and calipers.","Dischi e pinze freno in carbonio.")],["ors","Sospensioni Orsini",t("프런트 포크와 리어 쇼크.","Front forks and rear shocks.","Forcelle e mono.")]]},
 {tier:t("공식 공급사","Official Supplier","Fornitore ufficiale"),items:[["dol","Acqua Dolomia",t("돌로미티의 미네랄 워터.","Mineral water from the Dolomites.","Acqua minerale delle Dolomiti.")],["val","Cantina Valsella",t("베네토의 와이너리. 시상대에서 터지는 병.","Veneto winery. The bottle that pops on the podium.","Cantina veneta. La bottiglia che si stappa sul podio.")]]},
 {tier:t("장비 파트너","Equipment Partner","Equipment Partner"),items:[["alt","Casco Altare",t("데몬 리치의 헬멧.","Demon Ricci's helmet.","Il casco di Demon Ricci.")],["pel","Pelle Corsa",t("레이싱 슈트와 장갑.","Race leathers and gloves.","Tute e guanti.")]]},
 {tier:t("라이프스타일 파트너","Lifestyle Partner","Lifestyle Partner"),items:[["lum","Lumen Milano",t("밀라노 테일러링 브랜드. 팀웨어 디자인.","Milanese tailoring house designing the teamwear.","Sartoria milanese che disegna l'abbigliamento del team.")]]},
 {tier:t("미디어 파트너","Media Partner","Media Partner"),items:[["rad","Radio Emilia 92.4",t("볼로냐 지역 라디오. 모든 그랑프리 현지 중계.","Bologna local radio with live coverage of every Grand Prix.","Radio bolognese, in diretta da ogni Gran Premio.")]]}
];

/* ---------- HISTORY ---------- */
const SEASONS = [
 [2014,t("창립 · 이탈리아 내셔널 슈퍼바이크","Founded · Italian national superbike","Fondazione · Superbike nazionale"),"—","—"],
 [2016,t("Moto2 진출","Moto2 entry","Ingresso in Moto2"),"Moto2","14"],
 [2019,t("MO1 데뷔 · 제니스 위성 계약","MO1 debut · Zenith satellite deal","Debutto MO1 · accordo satellite Zenith"),"ZP-19","11"],
 [2020,"","ZP-20","10"],
 [2021,t("아우렐리아 카페 타이틀 스폰서","Aurelia Caffè becomes title sponsor","Aurelia Caffè diventa title sponsor"),"ZP-21","9"],
 [2022,t("첫 포디움 · 케이타 모리, 모테기 3위","First podium · Keita Mori, P3 Motegi","Primo podio · Keita Mori, 3° a Motegi"),"ZP-22","8"],
 [2023,"","ZP-23","9"],
 [2024,t("첫 폴 포지션 · 토마 뒤발, 아센","First pole · Thomas Duval, Assen","Prima pole · Thomas Duval, Assen"),"ZP-24","7"],
 [2025,"","ZP-25","10"],
 [2026,t("데몬 리치 합류 · 미사노 포디움","Demon Ricci joins · Misano podium","Arriva Demon Ricci · podio a Misano"),"ZP-26","8*"]
];
const ALUMNI = [
 ["Niccolò Sabatini",t("이탈리아","Italy","Italia"),"2019–2020",t("어깨 수술 후 복귀. 현재 WorldSBK.","Back from shoulder surgery. Now in WorldSBK.","Tornato dopo un intervento alla spalla. Ora in WorldSBK.")],
 ["Javier Molina",t("스페인","Spain","Spagna"),"2019–2021",t("팀 방출 후 재기. 리버티 첫 톱5.","Rebuilt after losing his seat. Liberty's first top five.","Ripartito dopo aver perso la sella. Primo top five Liberty.")],
 ["Keita Mori",t("일본","Japan","Giappone"),"2021–2022",t("다리 골절 후 복귀. 팀 첫 포디움.","Back from a broken leg. The team's first podium.","Tornato da una frattura alla gamba. Primo podio del team.")],
 ["Lukas Brandt",t("독일","Germany","Germania"),"2022–2023",t("2년 부진 끝에 팩토리 시트 획득.","Earned a factory seat after two lean years.","Ha conquistato una sella factory dopo due anni difficili.")],
 ["Thomas Duval",t("프랑스","France","Francia"),"2023–2025",t("손목 부상 복귀. 팀 첫 폴 포지션.","Back from a wrist injury. The team's first pole.","Tornato da un infortunio al polso. Prima pole del team.")],
 ["Demon Ricci",t("이탈리아","Italy","Italia"),"2026–",t("화상 부상 복귀. 미사노 포디움.","Back from burns. Misano podium.","Tornato dalle ustioni. Podio a Misano.")]
];
const MOMENTS = [
 ["2014",t("볼로냐의 작은 창고에서 팀 시작","Team starts in a small Bologna warehouse","Il team nasce in un piccolo magazzino di Bologna")],
 ["2018",t("카스텔 마조레로 본사 이전, 재활 센터 개관","HQ moves to Castel Maggiore, rehab centre opens","Sede a Castel Maggiore, apre il centro di riabilitazione")],
 ["2019",t("제니스 팩토리와 위성 계약, MO1 그리드 진입","Zenith satellite deal, MO1 grid entry","Accordo satellite Zenith, ingresso in MO1")],
 ["2022",t("모테기에서 첫 포디움","First podium at Motegi","Primo podio a Motegi")],
 ["2024",t("아센에서 첫 폴 포지션","First pole position at Assen","Prima pole position ad Assen")],
 ["2026",t("미사노 더블 포디움","Double podium at Misano","Doppio podio a Misano")]
];

/* ---------- HOSPITALITY / CAREERS / JUNIOR ---------- */
const HOSP = [
 [t("VIP 패독 클럽","VIP Paddock Club","VIP Paddock Club"),"€3,900",t("주말 3일 패독 출입, 팀 호스피탈리티 식사, 피트레인 워크, 라이더 미트 앤 그리트.","Three-day paddock access, team hospitality dining, pit-lane walk, rider meet & greet.","Accesso paddock tre giorni, ristorazione in hospitality, pit walk, incontro con il pilota.")],
 [t("팀 게스트","Team Guest","Team Guest"),"€1,450",t("일요일 그랑프리 데이 호스피탈리티와 개러지 뒤 관람석.","Grand Prix Sunday in the hospitality unit with a seat behind the garage.","La domenica del GP in hospitality, con posto dietro al garage.")],
 [t("피트 & 개러지 투어","Pit & Garage Tour","Pit & Garage Tour"),"€290",t("목요일 45분 개러지 투어, 크루 치프 설명 포함.","45-minute Thursday garage tour with the crew chief.","Tour del garage di 45 minuti il giovedì con il capotecnico.")],
 [t("기업 파트너 행사","Corporate events","Eventi aziendali"),t("문의","On request","Su richiesta"),t("오피치나 리버티 대관, 시뮬레이터 챌린지, 맞춤 그랑프리 패키지.","Officina Liberty venue hire, simulator challenge, tailored Grand Prix packages.","Officina Liberty per eventi, sfida al simulatore, pacchetti GP su misura.")]
];
const JOBS = [
 [t("레이스 엔지니어","Race Engineer","Race Engineer"),t("볼로냐 · 정규직 · 레이스 출장","Bologna · Full time · Travel","Bologna · Tempo pieno · Trasferte"),t("섀시 세팅과 라이더 피드백 분석. MO1 또는 Moto2 경력 3년 이상.","Chassis set-up and rider feedback. 3+ years in MO1 or Moto2.","Assetto e analisi feedback. 3+ anni in MO1 o Moto2.")],
 [t("데이터 엔지니어","Data Engineer","Data Engineer"),t("볼로냐 · 정규직","Bologna · Full time","Bologna · Tempo pieno"),t("텔레메트리 처리와 타이어 전략 모델링. Python, MATLAB.","Telemetry processing and tyre strategy modelling. Python, MATLAB.","Elaborazione telemetria e modelli gomme. Python, MATLAB.")],
 [t("머신 메카닉","Race Mechanic","Meccanico"),t("볼로냐 · 정규직 · 레이스 출장","Bologna · Full time · Travel","Bologna · Tempo pieno · Trasferte"),t("레이스 위크 개러지 정비. 이탈리아어 또는 영어 필수.","Race-week garage work. Italian or English required.","Lavoro in garage nel weekend. Italiano o inglese richiesto.")],
 [t("텔레메트리 전문가","Telemetry Specialist","Specialista telemetria"),t("볼로냐 · 계약직 12개월","Bologna · 12-month contract","Bologna · Contratto 12 mesi"),t("센서 설치와 리모트 개러지 운영.","Sensor installation and remote garage operations.","Installazione sensori e gestione garage remoto.")],
 [t("운영 · 물류 담당","Operations & Logistics","Operations e logistica"),t("볼로냐 · 정규직","Bologna · Full time","Bologna · Tempo pieno"),t("20개 그랑프리 화물·이동 관리.","Freight and travel for 20 Grands Prix.","Logistica e viaggi per 20 Gran Premi.")],
 [t("마케팅 · PR 담당","Marketing & PR","Marketing e PR"),t("밀라노 또는 볼로냐 · 정규직","Milan or Bologna · Full time","Milano o Bologna · Tempo pieno"),t("파트너 캠페인과 SNS 운영. 데몬의 욕설에 놀라지 않는 분.","Partner campaigns and social media. Must not be shocked by Demon's language.","Campagne partner e social. Non deve spaventarsi del linguaggio di Demon.")]
];
const JUNIORS = [
 ["Enzo Bardi",19,t("이탈리아","Italy","Italia"),"Moto3",t("2025 무릎 부상 후 복귀. 리버티 아카데미 1기.","Back from a 2025 knee injury. First Liberty Academy intake.","Tornato da un infortunio al ginocchio nel 2025. Prima classe Liberty Academy.")],
 ["Marta Ferri",20,t("이탈리아","Italy","Italia"),"Moto2",t("WCR 출신, 2026 Moto2 데뷔.","From WCR, Moto2 debut in 2026.","Dalla WCR, debutto in Moto2 nel 2026.")]
];

/* ---------- SHOP ---------- */
const PRODUCTS = [
 {id:"shirt26",c:"wear",b:"Lumen Milano",n:t("2026 팀 셔츠","2026 Team Shirt","Camicia team 2026"),d:t("패독 크루가 입는 바로 그 셔츠.","The shirt the paddock crew wears.","La camicia della squadra nel paddock."),p:79,s:1,ic:["shirt","#f2f1ed","#c9b07a"],tag:t("베스트","Bestseller","Più venduto")},
 {id:"jacket",c:"wear",b:"Lumen Milano",n:t("패독 재킷","Paddock Jacket","Giacca paddock"),d:t("방수 소프트셸, 안감에 볼로냐 지도.","Waterproof softshell, Bologna map lining.","Softshell impermeabile, fodera con mappa di Bologna."),p:249,s:1,ic:["jacket","#2b2d31","#c9b07a"]},
 {id:"tee20",c:"wear",b:"Lumen Milano",n:t("#20 데몬 리치 티셔츠","#20 Demon Ricci T-shirt","T-shirt #20 Demon Ricci"),d:t("등판에 큰 20, 가슴에 사인 프린트.","Big 20 on the back, signature on the chest.","Grande 20 sulla schiena, firma sul petto."),p:45,s:1,ic:["shirt","#2b2d31","#c9b07a"],tag:t("#20","#20","#20")},
 {id:"night",c:"wear",b:"Lumen Milano",n:t("마리나베이 나이트 티셔츠","Marina Bay Night T-shirt","T-shirt Marina Bay Night"),d:t("R19 싱가포르 한정.","Singapore race week exclusive.","Esclusiva Singapore."),p:49,s:1,ic:["shirt","#3a3d46","#c8202c"],tag:t("한정","Limited","Limitata")},
 {id:"cap",c:"acc",b:"Lumen Milano",n:t("팀 캡","Team Cap","Cappellino team"),d:t("샴페인 골드 자수 로고.","Champagne gold embroidered logo.","Logo ricamato oro champagne."),p:35,ic:["cap","#f2f1ed","#c9b07a"]},
 {id:"cap20",c:"acc",b:"Lumen Milano",n:t("#20 캡","#20 Cap","Cappellino #20"),d:t("챙 밑에 ‘REBUILD’.","‘REBUILD’ under the peak.","‘REBUILD’ sotto la visiera."),p:39,ic:["cap","#2b2d31","#c9b07a"]},
 {id:"helmet",c:"rep",b:"Casco Altare",n:t("#20 레플리카 헬멧","#20 Replica Helmet","Casco replica #20"),d:t("2026 데몬 헬멧 디자인, 1:1.","Demon's 2026 design, full size.","Design 2026 di Demon, in scala 1:1."),p:1290,s:1,ic:["helmet","#a9adb3","#c9b07a"]},
 {id:"mini",c:"rep",b:"Casco Altare",n:t("1:2 미니 헬멧","1:2 Mini Helmet","Mini casco 1:2"),d:t("책상 위의 #20.","A #20 for your desk.","Un #20 per la scrivania."),p:89,ic:["helmet","#f2f1ed","#c8202c"]},
 {id:"key",c:"acc",b:"Liberty Racing",n:t("#20 키링","#20 Keyring","Portachiavi #20"),d:t("미사노 포디움 기념 각인.","Engraved Misano podium edition.","Edizione incisa podio Misano."),p:12,ic:["key","#c9b07a","#2b2d31"]},
 {id:"blend",c:"acc",b:"Aurelia Caffè",n:t("#20 블렌드 원두 250g","#20 Blend Coffee 250g","Caffè #20 Blend 250 g"),d:t("데몬이 고른 다크 로스트.","A dark roast chosen by Demon.","Tostatura scura scelta da Demon."),p:14,ic:["coffee","#2b2d31","#c9b07a"],tag:t("신상","New","Novità")},
 {id:"blever",c:"parts",b:"Officine Ravelli",n:t("빌렛 브레이크 레버","Billet Brake Lever","Leva freno ricavata dal pieno"),d:t("6단 조절, ZP 계열 공용.","6-position, fits all ZP models.","6 regolazioni, per tutti i modelli ZP."),p:389,ic:["lever","#a9adb3","#c9b07a"]},
 {id:"rearset",c:"parts",b:"Officine Ravelli",n:t("레이스 리어셋 키트","Race Rearset Kit","Kit pedane racing"),d:t("리버티 개러지 사양.","Liberty garage spec.","Specifica garage Liberty."),p:1190,ic:["rearset","#a9adb3","#c9b07a"]},
 {id:"fender",c:"parts",b:"Officine Ravelli",n:t("카본 프런트 펜더","Carbon Front Mudguard","Parafango anteriore in carbonio"),d:t("프리프레그 카본, 무광.","Pre-preg carbon, matte.","Carbonio pre-preg, opaco."),p:620,ic:["fender","#2b2d31","#a9adb3"]},
 {id:"exhaust",c:"parts",b:"Officine Ravelli × Zenith",n:t("티타늄 레이싱 배기","Titanium Racing Exhaust","Scarico racing in titanio"),d:t("서킷 전용, 4.1kg.","Track use only, 4.1 kg.","Solo pista, 4,1 kg."),p:3450,ic:["exhaust","#a9adb3","#c9b07a"],tag:t("서킷 전용","Track only","Solo pista")}
];
const SCATS = {all:t("전체","All","Tutti"),wear:t("팀 의류","Teamwear","Abbigliamento"),rep:t("레플리카","Replica","Replica"),acc:t("모자 · 액세서리","Caps & accessories","Cappellini e accessori"),parts:t("부품","Parts","Ricambi")};

/* ---------- MOTIVO ONE TEAMS ---------- */
const TEAMS = [
 {k:"raven",n:"RAVEN",kn:t("레이븐","Raven","Raven"),type:"F",col:"#111216",fg:"#fff",ac:"#ffffff",hq:t("영국 실버스톤","Silverstone, UK","Silverstone, Regno Unito"),
  d:t("성능의 한계를 밀어붙이는 명문 팩토리팀. 안정적인 완주보다 폭발적인 속도와 압도적인 가능성을 선택한다.","A storied factory team that pushes performance to the limit, choosing explosive speed over a safe finish.","Storico team factory che spinge le prestazioni al limite: velocità esplosiva prima di un arrivo sicuro."),
  m:t("극한 성능 · 예민한 조작","Extreme performance · sensitive handling","Prestazioni estreme · guida sensibile"),p:t("천재형 · 본능형","Prodigies · instinctive riders","Talenti · piloti d'istinto"),mo:["LIMIT",t("한계 돌파","Beyond the limit","Oltre il limite")],
  who:t("#9 나인 · 2023 월드 챔피언","#9 Nine · 2023 World Champion","#9 Nine · Campione del Mondo 2023")},
 {k:"seika",n:"SEIKA",kn:t("세이카","Seika","Seika"),type:"F",col:"#152b55",fg:"#fff",ac:"#9fb6e6",hq:t("일본 하마마쓰","Hamamatsu, Japan","Hamamatsu, Giappone"),
  d:t("전자제어와 정밀 공학을 중심으로 움직이는 기술 집단. 정확한 데이터와 재현성 높은 머신을 중시한다.","An engineering house built on electronics and precision, valuing exact data and repeatable machines.","Un gruppo tecnico fondato su elettronica e precisione: dati esatti e moto ripetibili."),
  m:t("정밀 제어 · 높은 안정성","Precise control · high stability","Controllo preciso · grande stabilità"),p:t("분석형 · 피드백형","Analytical · feedback riders","Analitici · piloti da feedback"),mo:["PRECISION",t("정밀 완성","Precision perfected","Precisione assoluta")],
  who:t("#82 한야 · 2026 데뷔 루키","#82 Hanya · 2026 rookie","#82 Hanya · rookie 2026")},
 {k:"ardor",n:"ARDOR",kn:t("아더","Ardor","Ardor"),type:"F",col:"#d9213a",fg:"#fff",ac:"#ffd2d8",hq:t("스페인 바르셀로나","Barcelona, Spain","Barcellona, Spagna"),
  d:t("공격적인 개발과 정면 승부를 선호하는 팩토리팀. 강한 제동과 폭발적인 가속으로 과감한 배틀을 펼친다.","An aggressive factory team that loves head-on fights, with hard braking and explosive acceleration.","Team factory aggressivo che ama lo scontro diretto: frenate forti e accelerazione esplosiva."),
  m:t("강한 제동 · 폭발적 가속","Hard braking · explosive acceleration","Frenata forte · accelerazione esplosiva"),p:t("공격형 · 승부사형","Attackers · fighters","Attaccanti · combattenti"),mo:["PASSION",t("과감한 승부","Fearless racing","Lotta senza paura")],
  who:t("#7 세븐 · 2025 월드 챔피언 (디펜딩)","#7 Seven · 2025 World Champion (defending)","#7 Seven · Campione 2025 (in carica)")},
 {k:"zenith",n:"ZENITH",kn:t("제니스","Zenith","Zenith"),type:"F",col:"#f3f0ff",fg:"#1b1d21",ac:"#7d6fc0",hq:t("호주 멜버른","Melbourne, Australia","Melbourne, Australia"),
  d:t("오랜 우승 역사와 높은 완성도를 자랑하는 전통의 강호. 균형과 타이어 관리, 안정적인 레이스 페이스에 강하다.","A traditional powerhouse with a long winning history, strong on balance, tyre management and consistent pace.","Una potenza storica dalla lunga tradizione vincente: equilibrio, gestione gomme e passo costante."),
  m:t("높은 균형 · 타이어 관리","High balance · tyre management","Equilibrio · gestione gomme"),p:t("침착형 · 완성형","Composed · complete riders","Calmi · piloti completi"),mo:["PEAK",t("정점 추구","Chasing the peak","Verso la vetta")],
  who:t("#8 에이트 · 2024 월드 챔피언 · 리버티의 모기업","#8 Eight · 2024 World Champion · Liberty's parent team","#8 Eight · Campione 2024 · casa madre di Liberty")},
 {k:"atlas",n:"ATLAS",kn:t("아틀라스","Atlas","Atlas"),type:"F",col:"#1a3d33",fg:"#fff",ac:"#cfe3da",hq:t("프랑스 르망","Le Mans, France","Le Mans, Francia"),
  d:t("내구성과 안정성을 최우선으로 한다. 악천후와 거친 노면에서도 무너지지 않고 꾸준히 포인트를 가져온다.","Durability and stability first. Atlas keeps scoring in bad weather and on rough surfaces.","Affidabilità e stabilità prima di tutto: punti costanti anche con maltempo e asfalto difficile."),
  m:t("높은 내구성 · 안정적 반응","High durability · stable response","Grande affidabilità · risposta stabile"),p:t("안정형 · 실무형","Steady · pragmatic riders","Costanti · piloti pragmatici"),mo:["FORTRESS",t("끝까지 완주","Finish every race","Fino al traguardo")],
  who:t("#2 이반 · 2025 시즌 2위","#2 Ivan · 2025 runner-up","#2 Ivan · secondo nel 2025")},
 {k:"novara",n:"NOVARA",kn:t("노바라","Novara","Novara"),type:"F",col:"#3f1d66",fg:"#fff",ac:"#d9c8f2",hq:t("덴마크 코펜하겐","Copenhagen, Denmark","Copenaghen, Danimarca"),
  d:t("공기역학과 소프트웨어, 실험적인 섀시를 빠르게 도입한다. 성공과 실패의 폭이 크지만 누구보다 변화가 빠르다.","Fast to adopt new aero, software and experimental chassis. Big swings, but nobody changes faster.","Prima ad adottare aerodinamica, software e telai sperimentali. Alti e bassi, ma nessuno cambia più in fretta."),
  m:t("실험 설계 · 빠른 변화","Experimental design · rapid change","Progetti sperimentali · evoluzione rapida"),p:t("적응형 · 도전형","Adaptable · daring riders","Adattabili · piloti audaci"),mo:["INNOVATION",t("미래 개척","Building the future","Costruire il futuro")],who:null},
 {k:"liberty",n:"LIBERTY",kn:t("리버티","Liberty","Liberty"),type:"S",par:"ZENITH",col:"#f2ece0",fg:"#1b1d21",ac:"#937a47",hq:t("이탈리아 볼로냐","Bologna, Italy","Bologna, Italia"),img:"machine",
  d:t("제니스 계열 위성팀. 부상과 부진, 방출 이후 다시 커리어를 세우려는 라이더에게 재기의 기회를 제공한다.","Zenith satellite team giving riders a second chance after injury, poor form or losing their seat.","Team satellite Zenith che offre una seconda possibilità dopo infortuni, cali o sella persa."),
  m:t("균형 세팅 · 안정 페이스","Balanced set-up · steady pace","Assetto equilibrato · passo costante"),p:t("회복형 · 재기형","Recovering · comeback riders","In recupero · piloti del ritorno"),mo:["REBUILD",t("다시 시작","Start again","Ripartire")],
  who:t("#20 데몬 리치","#20 Demon Ricci","#20 Demon Ricci")},
 {k:"origin",n:"ORIGIN",kn:t("오리진","Origin","Origin"),type:"S",par:"RAVEN",col:"#d4d6dc",fg:"#1b1d21",ac:"#55585f",hq:t("독일 슈투트가르트","Stuttgart, Germany","Stoccarda, Germania"),
  d:t("레이븐 계열 위성팀. 천재 신인과 아직 거친 문제적 재능을 맡아 팩토리 승격 가능성을 시험한다.","Raven satellite team that takes on rookie prodigies and rough, troublesome talents to test them for a factory seat.","Team satellite Raven che prende giovani prodigi e talenti difficili per metterli alla prova per una sella factory."),
  m:t("강한 출력 · 거친 반응","Strong power · raw response","Molta potenza · risposta brusca"),p:t("신인 천재 · 문제적 재능","Rookie prodigies · problem talents","Giovani prodigi · talenti difficili"),mo:["TALENT",t("재능 발굴","Finding talent","Scoprire talenti")],who:null},
 {k:"titan",n:"TITAN",kn:t("타이탄","Titan","Titan"),type:"S",par:"ARDOR",col:"#d40f7d",fg:"#1b1d21",ac:"#ffd0e8",hq:t("네덜란드 에인트호번","Eindhoven, Netherlands","Eindhoven, Paesi Bassi"),
  d:t("아더 계열 위성팀. 운영과 자금, 인력 배치가 불안정해 라이더의 무덤이라 불리며, 생존 자체가 능력의 증명이 된다.","Ardor satellite team. Unstable management, money and staffing have earned it the name ‘the riders' graveyard’. Surviving here is proof of ability.","Team satellite Ardor. Gestione, fondi e personale instabili gli valgono il nome di ‘cimitero dei piloti’: sopravvivere è già una prova."),
  m:t("강한 출력 · 불안정 세팅","Strong power · unstable set-up","Molta potenza · assetto instabile"),p:t("생존형 · 독립형","Survivors · independents","Sopravvissuti · indipendenti"),mo:["GRAVEYARD",t("생존 증명","Prove you survive","Prova di sopravvivenza")],
  who:t("크루 치프 단 반 레인 · 아더에서 제명된 뒤 합류","Crew chief Dan van Rein · joined after being expelled from Ardor","Capotecnico Dan van Rein · arrivato dopo l'espulsione da Ardor")},
 {k:"falcon",n:"FALCON",kn:t("팔콘","Falcon","Falcon"),type:"S",par:"NOVARA",col:"#3e7d76",fg:"#fff",ac:"#d7ece8",hq:t("핀란드 헬싱키","Helsinki, Finland","Helsinki, Finlandia"),
  d:t("노바라 계열 위성팀. 제한된 예산과 인력으로 날씨와 타이어, 전략적 타이밍을 활용해 강팀을 잡는다.","Novara satellite team. With a small budget and crew, it uses weather, tyres and timing to beat the big teams.","Team satellite Novara. Budget e squadra ridotti, ma sfrutta meteo, gomme e tempismo per battere i grandi."),
  m:t("효율적 세팅 · 전략 중심","Efficient set-up · strategy first","Assetto efficiente · strategia"),p:t("영리형 · 언더독형","Clever riders · underdogs","Piloti furbi · outsider"),mo:["UNDERDOG",t("약자의 반격","The underdog bites back","La rivincita degli outsider")],
  who:t("#00 제로 · 그리드에서 가장 많이 넘어지는 라이더","#00 Zero · the grid's most frequent crasher","#00 Zero · il pilota che cade più spesso")},
 {k:"vector",n:"VECTOR",kn:t("벡터","Vector","Vector"),type:"S",par:"SEIKA",col:"#eef8ff",fg:"#163a6b",ac:"#163a6b",hq:t("중국 상하이","Shanghai, China","Shanghai, Cina"),
  d:t("세이카 계열 개발형 위성팀. 신형 머신과 프로토타입 부품을 가장 먼저 실전에 투입해 가능성을 시험한다.","Seika's development satellite team, first to race new bikes and prototype parts.","Team satellite di sviluppo Seika, il primo a portare in gara moto nuove e componenti prototipo."),
  m:t("신형 머신 · 시험 부품","New bikes · test parts","Moto nuove · componenti test"),p:t("분석형 · 적응형","Analytical · adaptable riders","Analitici · adattabili"),mo:["DEVELOPMENT",t("실전 개발","Developing in battle","Sviluppo in gara")],who:null}
];
const CHAMPS = [[2025,"#7 Seven","Ardor",t("2위 #2 이반 (아틀라스)","Runner-up #2 Ivan (Atlas)","Secondo #2 Ivan (Atlas)")],[2024,"#8 Eight","Zenith",t("데몬 리치 3위","Demon Ricci third","Demon Ricci terzo")],[2023,"#9 Nine","Raven",null]];
const STAND = [[1,"#7","Seven","Ardor",351],[2,"#2","Ivan","Atlas",334],[6,"#8","Eight","Zenith",214],[8,"#20","Demon Ricci","Liberty",191],[13,"#9","Nine","Raven",128],[17,"#82","Hanya","Seika",64],[22,"#00","Zero","Falcon",18]];

return {TEAMS,CHAMPS,STAND,t,UI,R,NIGHT,CAREER,INTERVIEW,STAFF,SPEC,DEV,ENG,TESTS,NEWS,CATS,PARTNERS,SEASONS,ALUMNI,MOMENTS,HOSP,JOBS,JUNIORS,PRODUCTS,SCATS};
})();
