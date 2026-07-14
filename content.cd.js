/* ═══════════════════════════════════════════════════════════
   잇다 콘텐츠 세트 — CD (크리에이티브 디렉터 패스 v1.0)
   방향: 문장은 짧게 / 전부 실행 동사 / 위트 한 스푼
   보는 법: index.html?set=cd
   구조 키는 base와 동일 — 문구만 다름. 마음에 드는 줄만
   base로 옮겨도 되고, 이 세트를 통째로 승격해도 됨.
   ═══════════════════════════════════════════════════════════ */
window.ITDA_SETS = window.ITDA_SETS || {};

window.ITDA_SETS.cd = {
  meta: { version: "cd v1.2", author: "Claude (CD pass)", date: "2026-07-13" },

  /* ── S1 히어로 ──
     헤드라인은 브랜드 자산이라 유지. 서브만 갈아끼움:
     '실패해도 시작'을 설명하지 말고 태도로 보여주기. */
  hero: {
    lines: ["일산에서", "뭐라도 만드는", "사람들."],
    sub: "완벽할 때까지 기다리지 않습니다.\n오늘 만들고, 내일 고칩니다 — 잇다.",
    mascotSay: "또 뭐 만들어요?",
    media: "https://images.pexels.com/photos/30505255/pexels-photo-30505255.jpeg?w=1600&h=900&fit=crop",
    mascotImg: ""
  },

  /* ── S2 스테이트먼트 ──
     단어 점등 효과라 어절 단위로 힘이 실리게 재배열. */
  statement: {
    eyebrow: "(우리의 선언)",
    text: "서울 안 가도 됩니다. 만들고 싶은 게 있다면 일산에서 시작하면 됩니다. 우리는 그 시작들을 잇습니다."
  },

  /* ── S3 프로세스 ──
     이름 5개는 유지(리듬이 좋음). 설명을 구체적 장면으로. */
  process: [
    { name: "모이고",  desc: "금요일 저녁 7시, 올드13. 노트북 하나면 됩니다." },
    { name: "만들고",  desc: "AI는 배우는 게 아니라 쓰는 것. 오늘 쓸 만큼만." },
    { name: "망하고",  desc: "괜찮습니다. 여기선 망해본 사람이 선배입니다." },
    { name: "또 하고", desc: "실패가 쌓이면, 그게 실력입니다." },
    { name: "잇는다.", desc: "사람이 사람을, 프로젝트가 동네를 잇습니다." }
  ],

  /* ── S4 ★ 쇼케이스 ──
     헤딩 교체: '뭐라도 합니다' → '일단, 벌입니다' (태도 선명하게)
     태그는 정보 + 한 줄 인상 조합으로. */
  showcase: {
    heading: "일단,\n벌입니다",
    badge: "Our Programs",
    items: [
      { title: "일산살롱",        tag: "팟캐스트 · 13주 코호트",  img: "https://images.pexels.com/photos/27616685/pexels-photo-27616685.jpeg?w=1200&h=900&fit=crop", link: "" },
      { title: "어떻게든 (OWOA)", tag: "AI 빌더 · 매주 금요일",   img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?w=1200&h=900&fit=crop", link: "" },
      { title: "일렁일렁",        tag: "러닝크루 · 호수공원",     img: "https://images.pexels.com/photos/325790/pexels-photo-325790.jpeg?w=1200&h=900&fit=crop", link: "" },
      { title: "13상회",          tag: "분기 축제 · 올드13",      img: "https://images.pexels.com/photos/752484/pexels-photo-752484.jpeg?w=1200&h=900&fit=crop", link: "" },
      { title: "클래스",          tag: "AI · 커피 · 다도",        img: "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A14.png", link: "" }
    ]
  },

  /* ── S5 낙하 타이포 ──
     스크롤 중 만나는 혼잣말. 짧을수록 세다. */
  fall: "어?,이게,되네,.",

  /* ── S6 카드 ──
     제목 유지, 본문을 숫자·장면이 있는 문장으로. */
  cards: {
    heading: "잇다의 세 갈래",
    eyebrow: "(교육 · 커뮤니티 · 프로젝트)",
    items: [
      { no: "01 — (교육)", title: "교육",
        body: "AI · 커피 · 다도 클래스. 배우고 끝이 아니라, 오늘 바로 써먹는 수업.",
        icon: "🎓", link: "" },   // ← 노션 교육 페이지 URL
      { no: "02 — (커뮤니티)", title: "커뮤니티",
        body: "일산살롱 · OWOA · 일렁일렁. 만드는 사람들이 서로를 발견하는 판.",
        icon: "🤝", link: "" },   // ← 노션 커뮤니티 페이지 URL
      { no: "03 — (프로젝트)", title: "프로젝트",
        body: "13상회와 로컬 프로젝트. 동네에서 직접 벌이는 일들.",
        icon: "🛠️", link: "" }    // ← 노션 프로젝트 페이지 URL
    ]
  },

  /* ── S7 키워드 ──
     앞줄은 담담하게, **굵은 줄**에서 뒤집기. */
  keywords: [
    { word: "만들기",   sub: "동네를 바꾸는 건 결국\n**손을 움직인 사람입니다.**", icon: "" },
    { word: "커뮤니티", sub: "혼자면 3일 가고\n**같이면 3년 갑니다.**",            icon: "" },
    { word: "실행",     sub: "아이디어는 공짜.\n**실행부터 값이 붙습니다.**",       icon: "" },
    { word: "실패",     sub: "망한 프로젝트도\n**포트폴리오 한 줄입니다.**",        icon: "" },
    { word: "동네",     sub: "서울까지 40분?\n**여기서 하면 0분입니다.**",          icon: "" },
    { word: "잇다",     sub: "사람과 사람 사이 빈칸을\n**프로젝트로 채웁니다.**",   icon: "" }
  ],

  /* ── S8 갤러리 ── */
  gallery: {
    heading: "만들 땐 진심, 놀 땐 더 진심",
    imgs: [
      "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A11.png",
      "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A16.png",
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?w=800&h=1067&fit=crop",
      "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A12.png",
      "https://images.pexels.com/photos/12100413/pexels-photo-12100413.jpeg?w=800&h=1067&fit=crop",
      "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A111.png",
      "https://images.pexels.com/photos/10563412/pexels-photo-10563412.jpeg?w=800&h=1067&fit=crop"
    ]
  },

  /* ── S9 기록 ── */
  awards: {
    eyebrow: "(벌인 일들의 기록)",
    marquee: [
      "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A13.png",
      "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A15.png",
      "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A19.png",
      "https://raw.githubusercontent.com/yampar21/itda-site/main/img/%EC%BB%A4%ED%94%BC%EA%B5%90%EC%9C%A110.png"
    ],
    list: [
      { title: "일산살롱 1기",   cat: "코호트", result: "파운딩 멤버 모집", link: "" },
      { title: "OWOA 1기",       cat: "빌더",   result: "실패 모집 중",     link: "" },
      { title: "13상회 #1",      cat: "축제",   result: "올드13 · 예정",    link: "" },
      { title: "일렁일렁",       cat: "러닝",   result: "매주 일렁이는 중", link: "" },
      { title: "클래스",         cat: "교육",   result: "AI · 커피 · 다도", link: "" }
    ]
  },

  /* ── S10 푸터 ──
     CTA는 질문형 유지하되 문턱을 낮춤. */
  footer: {
    eyebrow: "Ready?",
    ctaLines: ["뭐라도", "만들*래요?*"],
    note: "거창한 계획은 없어도 됩니다. 만들고 싶은 마음이면 충분합니다.",
    bg: "https://images.pexels.com/photos/930402/pexels-photo-930402.jpeg?w=1600&h=900&fit=crop",
    mascots: ["", ""],
    address: [
      "잇다 — 일산에서 뭐라도 만드는 사람들",
      "고양시 ○○ / 올드13",
      "hello@itda.kr · 010-0000-0000"
    ],
    links: [
      { label: "Instagram", url: "#" },
      { label: "Notion",    url: "#" },
      { label: "Podcast",   url: "#" }
    ],
    copyright: "© 2026 ITDA. All Rights Reserved."
  },

  nav: [
    { label: "프로그램", href: "#showcase" },
    { label: "소개",     href: "#cards" },
    { label: "일상",     href: "#gallery" },
    { label: "기록",     href: "#awards" }
  ],
  contactLabel: "일단 오기 →"
};
