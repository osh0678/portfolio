"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Lang = "ko" | "en"

export const translations = {
  ko: {
    available: "기회를 찾고 있어요",
    tagline: "이것저것 다 하는 개발자",
    desc: "백엔드는 Java / Spring Boot, 프론트엔드는 React / Next.js.\n새로운 기술은 언제나 환영하고 필요하면 뭐든 빠르게 익혀서 씁니다.",
    sayHello: "연락하기",
    scrollHint: "스크롤",
    skillsLabel: "// 기술 스택",
    skillsTitle: "Skills & Stack",
    expLabel: "// 경험",
    expTitle: "Experience",
    contactLabel: "// 같이 일해요",
    contactTitle: "연락하기",
    contactSub: "새로운 기회나 흥미로운 프로젝트가 있다면 언제든 연락주세요.",
    skills: [
      { name: "백엔드", desc: "서버 설계부터 API 개발까지. 안정적이고 확장 가능한 서비스." },
      { name: "프론트엔드", desc: "사용자 경험 중심의 빠르고 반응형 인터페이스." },
      { name: "DevOps & 인프라", desc: "배포 자동화와 클라우드. 효율적인 개발 환경 구축." },
      { name: "IoT & 모니터링", desc: "Spring Boot 기반 센서 데이터 수집 및 실시간 모니터링." },
      { name: "데이터베이스", desc: "상황에 맞는 DB 선택과 쿼리 최적화." },
      { name: "Always Learning", desc: "새로운 기술은 언제나 환영. 필요하면 뭐든 빠르게 익힙니다." },
    ],
    experiences: [
      {
        title: "팀 & 프로젝트 관리",
        period: "2023 — 현재",
        desc: "개발팀 리딩과 프로젝트 방향성 설정. 기술 의사결정부터 일정 관리까지. 코드도 여전히 씁니다.",
        tags: ["Leadership", "Planning"],
        current: true,
      },
      {
        title: "웹 서비스 개발",
        period: "2021 — 2023",
        desc: "Java / Spring Boot 기반 웹 서비스를 처음부터 설계하고 개발. 백엔드 API부터 프론트엔드까지 풀스택으로 참여.",
        tags: ["Java", "Spring Boot", "React"],
        current: false,
      },
      {
        title: "IoT 모니터링 시스템",
        period: "2021",
        desc: "IoT 센서 데이터 수집 및 실시간 모니터링 대시보드 구축. Spring Boot 기반 백엔드와 WebSocket을 활용한 실시간 처리.",
        tags: ["Spring Boot", "IoT", "WebSocket"],
        current: false,
      },
    ],
  },
  en: {
    available: "Available for opportunities",
    tagline: "Developer — does a bit of everything",
    desc: "Java & Spring Boot on the back, React & Next.js on the front.\nAlways down to learn whatever the job needs.",
    sayHello: "Say Hello",
    scrollHint: "scroll",
    skillsLabel: "// what I work with",
    skillsTitle: "Skills & Stack",
    expLabel: "// what I've done",
    expTitle: "Experience",
    contactLabel: "// let's work together",
    contactTitle: "Get In Touch",
    contactSub: "Have a new opportunity or interesting project? Feel free to reach out anytime.",
    skills: [
      { name: "Backend", desc: "From server design to API development. Scalable and reliable services." },
      { name: "Frontend", desc: "Fast, responsive UIs focused on user experience." },
      { name: "DevOps & Infra", desc: "Deployment automation and cloud infrastructure. Efficient dev environments." },
      { name: "IoT & Monitoring", desc: "Sensor data collection and real-time monitoring dashboards with Spring Boot." },
      { name: "Database", desc: "Choosing the right DB for the job and optimizing queries." },
      { name: "Always Learning", desc: "New tech? Adapt fast, deliver faster." },
    ],
    experiences: [
      {
        title: "Team & Project Management",
        period: "2023 — Present",
        desc: "Leading dev teams and setting project direction. From technical decisions to scheduling. Still writing code.",
        tags: ["Leadership", "Planning"],
        current: true,
      },
      {
        title: "Web Service Development",
        period: "2021 — 2023",
        desc: "Designed and built web services from scratch with Java / Spring Boot. Full-stack involvement from backend APIs to frontend.",
        tags: ["Java", "Spring Boot", "React"],
        current: false,
      },
      {
        title: "IoT Monitoring System",
        period: "2021",
        desc: "Built a real-time IoT sensor data collection and monitoring dashboard. Spring Boot backend with WebSocket for real-time data processing.",
        tags: ["Spring Boot", "IoT", "WebSocket"],
        current: false,
      },
    ],
  },
}

type I18nContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations["ko"]
}

const I18nContext = createContext<I18nContextType>({
  lang: "ko",
  setLang: () => {},
  t: translations.ko,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko")
  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useLang() {
  return useContext(I18nContext)
}
