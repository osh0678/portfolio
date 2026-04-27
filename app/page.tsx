"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import { Github, Linkedin, Mail, ChevronDown, Code2, Server, Layers, Link2, Database, Zap } from "lucide-react"

const SKILL_ICONS = [<Server key="s" className="w-6 h-6" />, <Code2 key="c" className="w-6 h-6" />, <Layers key="l" className="w-6 h-6" />, <Link2 key="l2" className="w-6 h-6" />, <Database key="d" className="w-6 h-6" />, <Zap key="z" className="w-6 h-6" />]
const SKILL_TAGS = [["Java","Spring Boot","REST API","JPA"],["React","Next.js","TypeScript","Tailwind"],["Docker","AWS","CI/CD","Linux"],["Spring Boot","WebSocket","MQTT"],["MySQL","PostgreSQL","Redis","MongoDB"],["Open Source","AI / LLM","Mobile"]]
const SKILL_COLORS = [{border:"hover:border-orange-500/40",glow:"from-orange-500/10"},{border:"hover:border-blue-500/40",glow:"from-blue-500/10"},{border:"hover:border-green-500/40",glow:"from-green-500/10"},{border:"hover:border-cyan-500/40",glow:"from-cyan-500/10"},{border:"hover:border-purple-500/40",glow:"from-purple-500/10"},{border:"hover:border-yellow-500/40",glow:"from-yellow-500/10"}]

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const move = (e: MouseEvent) => { if (ref.current) { ref.current.style.left = e.clientX+"px"; ref.current.style.top = e.clientY+"px" } }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])
  return <div ref={ref} className="fixed w-96 h-96 rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-100" style={{background:"radial-gradient(circle, rgba(88,166,255,0.07) 0%, transparent 70%)"}} />
}

function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = texts[index]
    if (!deleting && displayed === current) { const t = setTimeout(() => setDeleting(true), 2200); return () => clearTimeout(t) }
    if (deleting && displayed === "") { setDeleting(false); setIndex(i => (i+1)%texts.length); return }
    const t = setTimeout(() => setDisplayed(deleting ? displayed.slice(0,-1) : current.slice(0, displayed.length+1)), deleting ? 35 : 75)
    return () => clearTimeout(t)
  }, [displayed, deleting, index, texts])
  return <span className="font-mono text-[#7d8590]">{displayed}<span className="blink inline-block w-0.5 h-5 bg-accent ml-0.5 align-text-bottom" /></span>
}

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <motion.button onClick={() => setLang(lang === "ko" ? "en" : "ko")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#21262d] text-xs font-mono text-[#7d8590] hover:text-accent hover:border-accent/40 transition-colors"
      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <span className={lang === "ko" ? "text-accent" : "text-[#484f58]"}>KO</span>
      <span className="text-[#484f58]">/</span>
      <span className={lang === "en" ? "text-accent" : "text-[#484f58]"}>EN</span>
    </motion.button>
  )
}

export default function Home() {
  const { t, lang } = useLang()
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const typewriterTexts = lang === "ko"
    ? ["Java / Spring Boot", "React / Next.js", "풀스택 개발자", "이것저것 다 합니다"]
    : ["Java / Spring Boot", "React / Next.js", "Full-stack Dev", "Does a bit of everything"]

  return (
    <main className="relative bg-[#080b10] min-h-screen noise">
      <motion.div className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-[#bc8cff] z-50" style={{ width: progressWidth }} />
      <CursorGlow />
      {["w-[600px] h-[600px] bg-blue-900 -top-40 -right-20","w-[500px] h-[500px] bg-green-950 bottom-[10%] -left-32 [animation-delay:-10s]","w-[400px] h-[400px] bg-purple-950 top-[40%] right-[20%] [animation-delay:-5s]"].map((cls,i) => (
        <div key={i} className={`fixed rounded-full pointer-events-none z-0 opacity-30 blur-[120px] animate-[drift_20s_ease-in-out_infinite_alternate] ${cls}`} />
      ))}

      <motion.nav initial={{ y:-20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.6 }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-[#21262d] backdrop-blur-xl bg-[#080b10]/70">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="font-mono text-sm text-accent hover:text-accent2 transition-colors">se0ng<span className="text-[#7d8590]">.dev</span></a>
          <div className="flex items-center gap-5">
            {["Skills","Experience","Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-[#7d8590] hover:text-[#e6edf3] transition-colors font-medium hidden sm:block">{item}</a>
            ))}
            <LangToggle />
          </div>
        </div>
      </motion.nav>

      <section id="hero" className="relative z-10 min-h-screen flex items-center pt-14">
        <div className="max-w-4xl mx-auto px-6 py-24 w-full">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3fb950]/30 bg-[#3fb950]/8 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] shadow-[0_0_8px_#3fb950] animate-pulse" />
              <span className="font-mono text-xs text-[#3fb950]">{t.available}</span>
            </motion.div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-4">
              <motion.span initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.3 }} className="block">Seonghwan</motion.span>
              <motion.span initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.4 }} className="block"
                style={{ background:"linear-gradient(135deg, #58a6ff 0%, #bc8cff 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Oh.</motion.span>
            </h1>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }} className="text-lg sm:text-xl mb-8 h-8 flex items-center">
              <TypeWriter texts={typewriterTexts} />
            </motion.div>
            <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
              className="text-[#7d8590] max-w-lg text-base leading-relaxed mb-10 whitespace-pre-line">{t.desc}</motion.p>
            <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7 }} className="flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="#contact"><Mail className="w-4 h-4" />{t.sayHello}</a></Button>
              <Button asChild variant="ghost" size="lg"><a href="https://github.com/osh0678" target="_blank" rel="noopener"><Github className="w-4 h-4" />GitHub</a></Button>
              <Button asChild variant="ghost" size="lg"><a href="https://linkedin.com/in/seonghwan" target="_blank" rel="noopener"><Linkedin className="w-4 h-4" />LinkedIn</a></Button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#484f58]">
            <span className="font-mono text-xs">{t.scrollHint}</span>
            <motion.div animate={{ y:[0,6,0] }} transition={{ duration:1.5, repeat:Infinity }}><ChevronDown className="w-4 h-4" /></motion.div>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      <section id="skills" className="relative z-10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="font-mono text-xs text-accent tracking-widest uppercase mb-3">{t.skillsLabel}</motion.p>
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-4xl font-bold tracking-tight mb-12">{t.skillsTitle}</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.skills.map((skill, i) => (
              <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:0.5, delay:i*0.08 }} whileHover={{ y:-4 }}
                className={`relative group p-6 rounded-xl border border-[#21262d] bg-[#0d1117] overflow-hidden transition-colors duration-300 ${SKILL_COLORS[i].border}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${SKILL_COLORS[i].glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-accent mb-4">{SKILL_ICONS[i]}</div>
                  <h3 className="font-semibold text-base mb-2">{skill.name}</h3>
                  <p className="text-[#7d8590] text-sm leading-relaxed mb-4">{skill.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {SKILL_TAGS[i].map(tag => <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-accent/30 text-accent bg-accent/5">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      <section id="experience" className="relative z-10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="font-mono text-xs text-accent tracking-widest uppercase mb-3">{t.expLabel}</motion.p>
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-4xl font-bold tracking-tight mb-12">{t.expTitle}</motion.h2>
          <div>
            {t.experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                transition={{ duration:0.5, delay:i*0.1 }} className="relative pl-8 pb-10 last:pb-0">
                <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-accent via-[#21262d] to-transparent" />
                <motion.div className={`absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#080b10] ${exp.current ? "bg-[#3fb950] shadow-[0_0_10px_#3fb950]" : "bg-accent shadow-[0_0_8px_#58a6ff]"}`}
                  animate={exp.current ? { scale:[1,1.2,1] } : {}} transition={{ duration:2, repeat:Infinity }} />
                <div className="group p-6 rounded-xl border border-[#21262d] bg-[#0d1117] hover:border-accent/30 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <h3 className="font-semibold text-base">{exp.title}</h3>
                      <p className="font-mono text-xs text-[#484f58] mt-1">{exp.period}</p>
                    </div>
                    {exp.current && <span className="text-xs px-2.5 py-1 rounded-full bg-[#3fb950]/10 border border-[#3fb950]/30 text-[#3fb950]">{lang === "ko" ? "현재" : "Current"}</span>}
                  </div>
                  <p className="text-[#7d8590] text-sm leading-relaxed mb-3">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(tag => <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[#21262d] text-[#7d8590]">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      <section id="contact" className="relative z-10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="relative rounded-2xl border border-[#21262d] bg-[#0d1117] p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-accent/8 blur-3xl pointer-events-none" />
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{t.contactLabel}</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t.contactTitle}</h2>
            <p className="text-[#7d8590] mb-10 max-w-md mx-auto">{t.contactSub}</p>
            <motion.a href="mailto:ping@se0ng.dev" className="font-mono text-xl sm:text-2xl text-accent hover:text-accent2 transition-colors inline-block mb-10" whileHover={{ scale:1.03 }}>ping@se0ng.dev</motion.a>
            <div className="flex gap-4 justify-center flex-wrap">
              {[{icon:<Github className="w-4 h-4" />,label:"GitHub",href:"https://github.com/osh0678"},{icon:<Linkedin className="w-4 h-4" />,label:"LinkedIn",href:"https://linkedin.com/in/seonghwan"},{icon:<Mail className="w-4 h-4" />,label:"Email",href:"mailto:ping@se0ng.dev"}].map(link => (
                <Button key={link.label} asChild variant="ghost"><a href={link.href} target="_blank" rel="noopener">{link.icon}{link.label}</a></Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#21262d] py-8 text-center">
        <p className="font-mono text-xs text-[#484f58]">© 2026 Seonghwan Oh · <a href="mailto:ping@se0ng.dev" className="text-accent hover:text-accent2 transition-colors">ping@se0ng.dev</a></p>
      </footer>
    </main>
  )
}
