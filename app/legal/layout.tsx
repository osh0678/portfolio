import Link from "next/link"

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative bg-[#080b10] min-h-screen">
      <nav className="sticky top-0 z-40 border-b border-[#21262d] backdrop-blur-xl bg-[#080b10]/70">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-mono text-sm text-[#58a6ff] hover:text-[#bc8cff] transition-colors">
            se0ng<span className="text-[#7d8590]">.dev</span>
          </Link>
          <div className="flex items-center gap-5 font-mono text-xs">
            <Link href="/legal/privacy" className="text-[#7d8590] hover:text-[#e6edf3] transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="text-[#7d8590] hover:text-[#e6edf3] transition-colors">Terms</Link>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16 text-[#e6edf3]">{children}</article>

      <footer className="border-t border-[#21262d]">
        <div className="max-w-3xl mx-auto px-6 py-8 font-mono text-xs text-[#484f58]">
          © {new Date().getFullYear()} Seonghwan Oh ·{" "}
          <a href="mailto:ping@se0ng.dev" className="text-[#7d8590] hover:text-[#58a6ff] transition-colors">ping@se0ng.dev</a>
        </div>
      </footer>
    </main>
  )
}
