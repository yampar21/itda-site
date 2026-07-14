/* ═══════════════════════════════════════════════════════════
   잇다 콘텐츠 세트 — BASE
   구조(index.html)는 건드리지 않고 이 파일만 수정하면 됩니다.
   이미지: URL을 넣으면 표시, 빈 문자열("")이면 플레이스홀더 유지.
   GitHub raw URL 예시:
   https://raw.githubusercontent.com/{계정}/{repo}/main/img/hero.jpg
   ═══════════════════════════════════════════════════════════ */
window.ITDA_SETS = window.ITDA_SETS || {};

window.ITDA_SETS.base = {
  meta: { version: "base v1.0", author: "Jakob", date: "2026-07-13" },

  /* ── S1 히어로 ── */
  hero: {
    lines: ["일산에서", "뭐라도 만드는", "사람들."],
    sub: "실패해도 시작합니다. 배우는 대신 씁니다.\n동네에서 뭐라도 만드는 사람들의 커뮤니티, 잇다.",
    mascotSay: "오늘도 뭐라도 만드는 중",
    media: "",            // 비디오(.mp4) 또는 이미지 URL — img/hero.mp4
    mascotImg: ""         // img/mascot-face.jpg
  },

  /* ── S2 스테이트먼트 ── */
  statement: {
    eyebrow: "(What we do)",
    text: "서울 안 가도 됩니다. 동네에서 만들고, 실패하고, 또 시작하는 사람들을 잇습니다."
  },

  /* ── S3 프로세스 (5단계) ── */
  process: [
    { name: "모이고",  desc: "금요일 저녁, 올드13에 모입니다." },
    { name: "만들고",  desc: "AI는 배우는 게 아니라 쓰는 것." },
    { name: "망하고",  desc: "일단 하고 망하고 또 합니다." },
    { name: "또 하고", desc: "실패는 커리큘럼의 일부입니다." },
    { name: "잇는다.", desc: "사람과 사람, 동네와 동네." }
  ],

  /* ── S4 ★ 쇼케이스 (프로그램 5개) ── */
  showcase: {
    heading: "뭐라도\n합니다",
    badge: "Our Programs",
    items: [
      { title: "일산살롱",        tag: "팟캐스트 · 코호트",  img: "", link: "" },  // img/show-01.jpg
      { title: "어떻게든 (OWOA)", tag: "AI 빌더 · 금요일",   img: "", link: "" },  // img/show-02.jpg
      { title: "일렁일렁",        tag: "러닝크루",           img: "", link: "" },  // img/show-03.jpg
      { title: "13상회",          tag: "분기 축제 · 올드13", img: "", link: "" },  // img/show-04.jpg
      { title: "클래스",          tag: "AI · 커피 · 다도",   img: "", link: "" }   // img/show-05.jpg
    ]
  },

  /* ── S5 세로 낙하 타이포 (쉼표로 어절 구분) ── */
  fall: "이게,진짜,되네,?",

  /* ── S6 위트 카드 3장 ── */
  cards: {
    heading: "우리가 하는 방식",
    eyebrow: "(How)",
    items: [
      { no: "01 — (시작)", title: "실패해도 시작",
        body: "완벽한 계획보다 어설픈 시작. 일단 만들어 보고 나서 생각합니다.", icon: "" },  // img/card-01.png
      { no: "02 — (도구)", title: "배우지 말고 쓰기",
        body: "AI는 공부 대상이 아니라 도구입니다. 오늘 필요한 만큼만 씁니다.", icon: "" },  // img/card-02.png
      { no: "03 — (증명)", title: "결과로 말하기",
        body: "설명은 짧게, 결과물은 확실하게. 13상회에서 직접 보여줍니다.", icon: "" }   // img/card-03.png
    ]
  },

  /* ── S7 키워드 6행 (sub의 **굵게** 지원) ── */
  keywords: [
    { word: "만들기",   sub: "동네를 바꾸는 건\n**손을 움직이는 사람입니다.**", icon: "" }, // img/kw-01.png
    { word: "커뮤니티", sub: "혼자 가면 빠르지만\n**같이 가면 계속 갑니다.**",   icon: "" },
    { word: "실행",     sub: "아이디어는 값이 없고\n**실행에만 값이 붙습니다.**", icon: "" },
    { word: "실패",     sub: "망한 기록도\n**포트폴리오입니다.**",               icon: "" },
    { word: "동네",     sub: "서울 안 가도\n**여기서 다 됩니다.**",              icon: "" },
    { word: "잇다",     sub: "사람과 사람 사이를\n**프로젝트로 잇습니다.**",     icon: "" }
  ],

  /* ── S8 드래그 갤러리 ── */
  gallery: {
    heading: "일할 땐 만들고, 놀 땐 논다",
    imgs: ["", "", "", "", "", "", ""]   // img/gal-01.jpg ~ gal-07.jpg
  },

  /* ── S9 기록 ── */
  awards: {
    eyebrow: "(우리의 기록)",
    marquee: ["", "", "", ""],           // img/aw-01.jpg ~ aw-04.jpg
    list: [
      { title: "일산살롱 1기",   cat: "코호트", result: "모집 중" , link: "" },
      { title: "OWOA 데모데이",  cat: "빌더",   result: "준비 중" , link: "" },
      { title: "13상회 #1",      cat: "축제",   result: "예정"    , link: "" },
      { title: "일렁일렁 100회", cat: "러닝",   result: "진행 중" , link: "" },
      { title: "클래스 수료생",  cat: "교육",   result: "누적 —명", link: "" }
    ]
  },

  /* ── S10 푸터 ── */
  footer: {
    eyebrow: "Ready?",
    ctaLines: ["같이", "만들*래요?*"],   // *별표* = 강조색
    note: "뭐라도 만들고 싶은 마음, 그거면 충분합니다.",
    bg: "",                              // img/footer-bg.jpg
    mascots: ["", ""],                   // img/mascot-1.jpg, mascot-2.jpg
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

  /* ── 공통 ── */
  nav: [
    { label: "프로그램", href: "#showcase" },
    { label: "소개",     href: "#cards" },
    { label: "일상",     href: "#gallery" },
    { label: "기록",     href: "#awards" }
  ],
  contactLabel: "같이 하기 →"
};
