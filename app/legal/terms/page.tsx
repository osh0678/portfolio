import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Kanban Board & Wallboard Gadget for Jira",
  description: "Terms governing the use of the Kanban Board & Wallboard Gadget for Jira.",
}

const H1 = "text-3xl font-bold tracking-tight mb-2"
const SUB = "font-mono text-xs text-[#484f58] mb-12"
const H2 = "text-lg font-semibold mt-12 mb-4 pb-2 border-b border-[#21262d]"
const P = "text-[#7d8590] leading-7 mb-4"
const A = "text-[#58a6ff] hover:text-[#bc8cff] transition-colors"

export default function Terms() {
  return (
    <>
      <h1 className={H1}>Terms of Service</h1>
      <p className={SUB}>Kanban Board &amp; Wallboard Gadget for Jira · Last updated 26 August 2026</p>

      <h2 className={H2}>1. Acceptance</h2>
      <p className={P}>
        By installing or using Kanban Board &amp; Wallboard Gadget for Jira (&quot;the Software&quot;), you agree to
        these terms. If you do not agree, do not install or use the Software.
      </p>

      <h2 className={H2}>2. Licence</h2>
      <p className={P}>
        You are granted a non-exclusive, non-transferable right to use the Software on Atlassian Cloud sites you
        administer or are a member of, subject to the Atlassian Marketplace Terms of Use.
      </p>

      <h2 className={H2}>3. What the Software does</h2>
      <p className={P}>
        The Software renders a read-only view of a Jira board inside a Jira dashboard gadget.
        It does not modify Jira data.
      </p>

      <h2 className={H2}>4. Limits</h2>
      <p className={P}>
        The Software reads up to 1,000 work items per board and displays up to 25 cards per column.
        Boards larger than this are shown partially, with a notice in the gadget.
        These limits exist to stay within Atlassian Forge platform constraints.
      </p>

      <h2 className={H2}>5. Availability</h2>
      <p className={P}>
        The Software runs on Atlassian Forge. Availability depends on Atlassian&apos;s platform.
        No uptime guarantee is offered.
      </p>

      <h2 className={H2}>6. Disclaimer</h2>
      <div className="rounded-lg border border-[#21262d] bg-[#0d1117] px-5 py-4 mb-4">
        <p className="text-xs font-mono text-[#7d8590] leading-6 uppercase tracking-wide">
          The Software is provided &quot;as is&quot;, without warranty of any kind, express or implied.
          To the maximum extent permitted by law, the author is not liable for any claim, damages,
          or other liability arising from the use of the Software.
        </p>
      </div>

      <h2 className={H2}>7. Changes</h2>
      <p className={P}>
        These terms may be updated. Continued use after an update constitutes acceptance of the revised terms.
      </p>

      <h2 className={H2}>8. Contact</h2>
      <p className={P}>
        <a href="mailto:ping@se0ng.dev" className={A}>ping@se0ng.dev</a>
      </p>
    </>
  )
}
