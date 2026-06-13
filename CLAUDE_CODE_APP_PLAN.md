# Building the B.ASLP Batch Coordination App with Claude Code

**For:** Mr. Hemaraja Nayaka S — Class Coordinator, B.ASLP 2026–27
**Working folder:** `D:\Class_Coordination_BASLP`
**Starting point:** `BASLP_Batch_Dashboard.html` (already built — open it in any browser)

---

## 1. Can Claude Code build this? Yes.

Claude Code is a command-line tool that edits files in a folder for you. You describe what you
want in plain English; it writes and changes the code. You do **not** need to know how to program —
your job is to describe the goal, test the result in your browser, and ask for changes.

For your situation (one coordinator + a faculty team, basic coding, student PII to protect), the
right architecture is the one already started: **a single self-contained HTML file**. It needs no
server, no hosting fee, no internet, and the data never leaves the computer it runs on. You grow it
by asking Claude Code to add features to that one file.

### What the prototype already does
- Dashboard with live counts (admitted, pending, documents verified, fee paid, joined, hostel).
- Phase pipeline: Counselling → Verification → Admission → Joined → Sem 1 → Sem 2.
- All 21 students seeded; searchable/filterable table; click a student to edit the full record.
- Per-student: profile, 21-point document checklist, day-of-joining issuance, fee/DD, Sem 1 & 2
  academic tracking (attendance, internal assessment, exam, clinical posting), mentor notes.
- Notices log. Export/Import JSON backup. Export students to CSV/Excel. Print view.
- Auto-saves in the browser (localStorage).

### The one limitation to understand
A single offline file saves data **in the browser on one computer**. It does not automatically sync
between faculty. Workflow: keep **one master copy** of the data (use *Data & Backup → Export JSON*)
on your shared/Google Drive; whoever edits exports the JSON back to that master. If you later need
true multi-user live sync, that is the "hosted web app" upgrade (Phase 5 below) — more power, but
hosting cost and security work.

---

## 2. Before you start (one-time, ~15 min)

1. Install Claude Code (search "install Claude Code" on docs.claude.com and follow the steps).
2. Open a terminal in this folder:
   - File Explorer → `D:\Class_Coordination_BASLP` → type `cmd` in the address bar → Enter.
3. Start Claude Code in that folder so it only touches these files.
4. Always keep a backup: copy `BASLP_Batch_Dashboard.html` before a big change, or use the app's
   Export JSON first.

---

## 3. The master prompt (paste this first)

> You are helping me extend a single-file offline HTML app for coordinating a B.ASLP student batch.
> The file is `BASLP_Batch_Dashboard.html` in this folder. Constraints, do not break them:
> (1) Everything stays in ONE HTML file — inline CSS and JavaScript, no build tools, no external
> libraries except Chart.js from a CDN if I ask for charts.
> (2) No backend and no login — it runs by double-clicking the file. Data persists in localStorage
> and via JSON export/import. (3) It stores student personal data, so never send data anywhere
> over the network. (4) Keep the existing navy/white institutional styling and the existing data
> model and seeded 21 students. After each change, tell me exactly what to click to test it, and
> remind me to Export a JSON backup first. Start by reading the file and summarizing its current
> structure before changing anything.

---

## 4. Phased tasks (ask for these one at a time)

**Phase 1 — Polish the tracker (week 1)**
- "Add a column and filter for fee status and hostel status on the Students tab."
- "On the Dashboard, add a Chart.js bar chart of students per phase and a doughnut of admitted vs pending."
- "Add a 'last updated by' free-text field per student and show it in the record."
- "Add a printable one-page summary for a single student (for the physical file)."

**Phase 2 — Day-of-counselling & induction (before 15–16 June)**
- "Add a quick 'counselling check-in' mode: mark a student Present, and stamp arrival time."
- "Add an induction checklist per student (ID issued, library card, hostel allotted, fee DD collected)
   with a single progress bar, separate from academic documents."
- "Add a one-click filter for NRI students whose online verification (15 June) is still pending."

**Phase 3 — First-year academic tracking (Sem 1 & 2)**
- "Let me define the actual Sem 1 and Sem 2 subjects/papers once in a settings area, then track
   attendance % and internal marks per subject per student."
- "Flag any student below 75% attendance in red on the Academic tab."
- "Add a mentor-meeting log per student (date + note), shown newest first."

**Phase 4 — Data safety & sharing (important for PII)**
- "Add a 'Export encrypted backup' option using a passphrase, and matching import."
- "Add an auto-reminder banner if no JSON backup has been exported in the last 7 days."
- "Add a clear data-handling notice on the Data tab about keeping backups on a secure drive."

**Phase 5 — Optional upgrade to multi-user (only if you outgrow the single file)**
- "Outline what it would take to move this to a hosted web app with faculty logins and a shared
   database, the cheapest secure options, and the privacy/consent steps for storing student PII.
   Do not build it yet — give me a plan and rough effort."

---

## 5. Good habits with Claude Code
- Change one thing at a time, then test in the browser before the next request.
- If something breaks, say "undo the last change" or restore your backup copy.
- Keep the master JSON backup on a secure, access-controlled drive — this file holds Aadhaar and
  contact details of minors-adjacent students; treat it as confidential.
- When in doubt, ask Claude Code to "explain in simple terms what this change does."

---

*This plan and the prototype live in `D:\Class_Coordination_BASLP`. You can start using the
dashboard today and bring in Claude Code whenever you want to extend it.*
