"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Github, Linkedin, Mail, ExternalLink,
  ChevronDown, Code2, Server, Layers,
  Link2, Database, Zap, ArrowRight
} from "lucide-react"

// ── CONSTANTS ──────────────────────────────────────────
const SKILLS = [
  {
    icon: <Server className="w-6 h-6" />,
    name: "Backend",
    desc: "서버 설계부터 API 개발까지. 안정적이고 확장 가능한 서비스.",
    tags: ["Java", "Spring Boot", "REST API", "JPA"],
    color: "from-orange-500/10 to-transparent",
    border: "hover:border-orange-500/40",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    name: "Frontend",
    desc: "사용자 경험 중심의 빠르고 반응형 인터페이스.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "from-blue-500/10 to-transparent",
    border: "hover:border-blue-500/40",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    name: "DevOps & Infra",
    desc: "배포 자동화와 클라우드. 효율적인 개발 환경 구축.",
    tags: ["Docker", "AWS", "CI/CD", "Linux"],
    color: "from-green-500/10 to-transparent",
    border: "hover:border-green-500/40",
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    name: "Blockchain",
    desc: "블록체인 플랫폼 개발 경험. 분산 시스템 구조 이해.",
    tags: ["Smart Contract", "DApp", "Go"],
    color: "from-purple-500/10 to-transparent",
    border: "hover:border-purple-500/40",
  },
  {
    icon: <Database className="w-6 h-6" />,
    name: "Database",
    desc: "상황에 맞는 DB 선택과 쿼리 최적화.",
    tags: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
    color: "from-cyan-500/10 to-transparent",
    border: "hover:border-cyan-500/40",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    name: "Always Learning",
    desc: "새로운 기술은 언제나 환영. 필요하면 뭐든 빠르게.",
    tags: ["Open Source", "AI / LLM", "Mobile"],
    color: "from-yellow-500/10 to-transparent",
    border: "hover:border-yellow-500/40",
  },
]

const EXPERIENCE = [
  {
    title: "Team & Project Management",
    period: "2023 — Present",
    desc: "개발팀 리딩과 프로젝트 방향성 설정. 기술 의사결정부터 일정 관리까지. 코드도 여전히 씁니다.",
    tags: ["Leadership", "Planning"],
    current: true,
  },
  {
    title: "Web Development",
    period: "2021 — 2023",
    desc: "Java / Spring Boot 기반 웹 서비스를 처음부터 설계하고 개발. 백엔드 API부터 프론트엔드까지 풀스택으로 참여.",
    tags: ["Java", "Spring Boot", "React"],
    current: false,
  },
  {
    title: "Blockchain Engineering",
    period: "2021",
    desc: "블록체인 플랫폼 코어 개발 참여. 분산 원장 시스템과 P2P 네트워크 구조를 직접 다뤄봤어요.",
    tags: ["Blockchain", "Go"],
    current: false,
  },
]

// ── COMPONENTS ─────────────────────────────────────────

function Orb({ className }: { className: string }) {
  return (
    <div
      className={`fixed rounded-full pointer-events-none z-0 opacity-30 blur-[120px] animate-[drift_20s_ease-in-out_infinite_alternate] ${className}`}
    />
  )
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px"
        ref.current.style.top = e.clientY + "px"
      }
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])
  return (
    <div
      ref={ref}
      className="fixed w-96 h-96 rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-100"
      style={{
        background: "radial-gradient(circle, rgba(88,166,255,0.07) 0%, transparent 70%)",
      }}
    />
  )
}

function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    if (!deleting && displayed === current) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }
    if (deleting && displayed === "") {
      setDeleting(false)
      setIndex((i) => (i + 1) % texts.length)
      return
    }
    const speed = deleting ? 40 : 80
    const t = setTimeout(() => {
      setDisplayed(deleting ? displayed.slice(0, -1) : current.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [displayed, deleting, index, texts])

  return (
    <span className="font-mono text-[#7d8590]">
      {displayed}
      <span className="blink inline-block w-0.5 h-5 bg-accent ml-0.5 align-text-bottom" />
    </span>
  )
}

function SkillCard({ skill, index }: { skill: typeof SKILLS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`relative group p-6 rounded-xl border border-[#21262d] bg-[#0d1117] overflow-hidden cursor-default transition-colors duration-300 ${skill.border}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className="text-accent mb-4">{skill.icon}</div>
        <h3 className="font-semibold text-base mb-2">{skill.name}</h3>
        <p className="text-[#7d8590] text-sm leading-relaxed mb-4">{skill.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {skill.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-accent/30 text-accent bg-accent/5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ExpCard({ exp, index }: { exp: typeof EXPERIENCE[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-accent via-[#21262d] to-transparent" />
      {/* Dot */}
      <motion.div
        className={`absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-bg ${exp.current ? "bg-[#3fb950] shadow-[0_0_10px_#3fb950]" : "bg-accent shadow-[0_0_8px_#58a6ff]"}`}
        animate={exp.current ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="group p-6 rounded-xl border border-[#21262d] bg-[#0d1117] hover:border-accent/30 transition-colors duration-300">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
          <div>
            <h3 className="font-semibold text-base">{exp.title}</h3>
            <p className="font-mono text-xs text-[#484f58] mt-1">{exp.period}</p>
          </div>
          {exp.current && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#3fb950]/10 border border-[#3fb950]/30 text-[#3fb950]">
              Current
            </span>
          )}
        </div>
        <p className="text-[#7d8590] text-sm leading-relaxed mb-3">{exp.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[#21262d] text-[#7d8590]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── PAGE ───────────────────────────────────────────────
export default function Home() {
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <main className="relative bg-[#080b10] min-h-screen noise">
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-[#bc8cff] z-50"
        style={{ width: progressWidth }}
      />

      <CursorGlow />
      <Orb className="w-[600px] h-[600px] bg-blue-900 -top-40 -right-20" />
      <Orb className="w-[500px] h-[500px] bg-green-950 bottom-[10%] -left-32 [animation-delay:-10s]" />
      <Orb className="w-[400px] h-[400px] bg-purple-950 top-[40%] right-[20%] [animation-delay:-5s]" />

      {/* NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-[#21262d] backdrop-blur-xl bg-[#080b10]/70"
      >
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="font-mono text-sm text-accent hover:text-accent2 transition-colors">
            se0ng<span className="text-[#7d8590]">.dev</span>
          </a>
          <div className="flex items-center gap-6">
            {["Skills", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-[#7d8590] hover:text-[#e6edf3] transition-colors font-medium hidden sm:block"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center pt-14">
        <div className="max-w-4xl mx-auto px-6 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3fb950]/30 bg-[#3fb950]/8 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] shadow-[0_0_8px_#3fb950] animate-pulse" />
              <span className="font-mono text-xs text-[#3fb950]">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Seonghwan
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="block gradient-text"
              >
                Oh.
              </motion.span>
            </h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl mb-8 h-8 flex items-center"
            >
              <TypeWriter
                texts={[
                  "Full-stack developer",
                  "Java + Spring Boot",
                  "React + Next.js",
                  "Does a bit of everything",
                ]}
              />
            </motion.div>

            {/* Desc */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[#7d8590] max-w-lg text-base leading-relaxed mb-10"
            >
              백엔드는 Java / Spring Boot, 프론트엔드는 React / Next.js.
              새로운 기술은 언제나 환영하고 필요하면 뭐든 빠르게 익혀서 씁니다.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg">
                <a href="#contact">
                  <Mail className="w-4 h-4" /> Say Hello
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://github.com/osh0678" target="_blank" rel="noopener">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://linkedin.com/in/seonghwan" target="_blank" rel="noopener">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#484f58]"
          >
            <span className="font-mono text-xs">scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      {/* SKILLS */}
      <section id="skills" className="relative z-10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-accent tracking-widest uppercase mb-3"
          >
            // what I work with
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-12"
          >
            Skills &amp; Stack
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-accent tracking-widest uppercase mb-3"
          >
            // what I&apos;ve done
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-12"
          >
            Experience
          </motion.h2>
          <div>
            {EXPERIENCE.map((exp, i) => (
              <ExpCard key={exp.title} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-[#21262d] bg-[#0d1117] p-16 text-center overflow-hidden"
          >
            {/* glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-accent/8 blur-3xl pointer-events-none" />

            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// let&apos;s work together</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-[#7d8590] mb-10 max-w-md mx-auto">
              새로운 기회나 흥미로운 프로젝트가 있다면 언제든 연락주세요.
            </p>

            <motion.a
              href="mailto:ping@se0ng.dev"
              className="font-mono text-xl sm:text-2xl text-accent hover:text-accent2 transition-colors inline-block mb-10"
              whileHover={{ scale: 1.03 }}
            >
              ping@se0ng.dev
            </motion.a>

            <div className="flex gap-4 justify-center flex-wrap">
              {[
                { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "https://github.com/osh0678" },
                { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "https://linkedin.com/in/seonghwan" },
                { icon: <Mail className="w-4 h-4" />, label: "Email", href: "mailto:ping@se0ng.dev" },
              ].map((link) => (
                <Button key={link.label} asChild variant="ghost">
                  <a href={link.href} target="_blank" rel="noopener">
                    {link.icon} {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#21262d] py-8 text-center">
        <p className="font-mono text-xs text-[#484f58]">
          © 2026 Seonghwan Oh ·{" "}
          <a href="mailto:ping@se0ng.dev" className="text-accent hover:text-accent2 transition-colors">
            ping@se0ng.dev
          </a>
        </p>
      </footer>
    </main>
  )
}
