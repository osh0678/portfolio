import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Kanban Board & Wallboard Gadget for Jira",
  description: "The app does not collect, store, or transmit any personal data. It runs entirely inside Atlassian infrastructure.",
}

const H1 = "text-3xl font-bold tracking-tight mb-2"
const SUB = "font-mono text-xs text-[#484f58] mb-12"
const H2 = "text-lg font-semibold mt-12 mb-4 pb-2 border-b border-[#21262d]"
const P = "text-[#7d8590] leading-7 mb-4"
const A = "text-[#58a6ff] hover:text-[#bc8cff] transition-colors"
const TD = "py-3 px-4 text-sm text-[#7d8590] align-top border-t border-[#21262d]"
const TH = "py-3 px-4 text-xs font-mono text-[#484f58] text-left uppercase tracking-wider"

export default function Privacy() {
  return (
    <>
      <h1 className={H1}>Privacy Policy</h1>
      <p className={SUB}>Kanban Board &amp; Wallboard Gadget for Jira · Last updated 26 August 2026</p>

      <div className="rounded-lg border border-[#3fb950]/30 bg-[#3fb950]/[0.06] px-5 py-4 mb-4">
        <p className="text-[#e6edf3] leading-7">
          <strong className="font-semibold">This app does not collect, store, or transmit any personal data.</strong>
        </p>
      </div>
      <p className={P}>
        The app is built on Atlassian Forge and runs entirely inside Atlassian&apos;s infrastructure.
        It qualifies for the{" "}
        <a href="https://go.atlassian.com/runs-on-atlassian" className={A} target="_blank" rel="noopener noreferrer">Runs on Atlassian</a>{" "}
        program, which means no data leaves the Atlassian cloud.
      </p>

      <h2 className={H2}>What the app reads</h2>
      <div className="overflow-x-auto rounded-lg border border-[#21262d]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0d1117]">
              <th className={TH}>Data</th>
              <th className={TH}>Purpose</th>
              <th className={TH}>Stored?</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className={TD}>Board configuration (columns, statuses)</td><td className={TD}>Group work items into columns</td><td className={TD}>No</td></tr>
            <tr><td className={TD}>Work item fields (key, summary, status, assignee name, priority, type)</td><td className={TD}>Render cards</td><td className={TD}>No</td></tr>
            <tr><td className={TD}>Selected board ID</td><td className={TD}>Remember which board the gadget shows</td><td className={TD}>Yes — as gadget configuration, held by Atlassian</td></tr>
          </tbody>
        </table>
      </div>
      <p className={P + " mt-4"}>
        All Jira data is fetched on demand when the gadget renders and is discarded once rendering finishes.
        The app keeps no database, no cache, and no logs of your content.
      </p>

      <h2 className={H2}>Permissions</h2>
      <p className={P}>The app requests read-only scopes:</p>
      <ul className="mb-4 space-y-1.5">
        {["read:project:jira","read:board-scope:jira-software","read:board-scope.admin:jira-software","read:issue-details:jira","read:sprint:jira-software","read:jira-work"].map(s => (
          <li key={s} className="font-mono text-xs text-[#7d8590] before:content-['·'] before:mr-2 before:text-[#484f58]">{s}</li>
        ))}
      </ul>
      <p className={P}>
        The app has <strong className="text-[#e6edf3] font-semibold">no write permissions</strong>.
        It cannot create, modify, or delete anything in your Jira instance.
      </p>

      <h2 className={H2}>Third parties</h2>
      <p className={P}>None. The app makes no external network calls.</p>

      <h2 className={H2}>Changes</h2>
      <p className={P}>
        If this policy changes in a way that affects how data is handled, the updated version will be published
        on this page with a new date.
      </p>

      <h2 className={H2}>Contact</h2>
      <p className={P}>
        <a href="mailto:ping@se0ng.dev" className={A}>ping@se0ng.dev</a>
      </p>
    </>
  )
}
