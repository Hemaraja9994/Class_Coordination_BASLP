# One-shot build prompt — B.ASLP Batch Coordination App

Paste everything in the box below into Claude Code (opened inside `D:\Class_Coordination_BASLP`).
It will build, or extend, the single-file app. If `BASLP_Batch_Dashboard.html` already exists,
Claude Code will improve it instead of starting over.

---

```
Build me a single self-contained offline web app called "B.ASLP 2026–27 Batch Coordination
Dashboard" as ONE file named BASLP_Batch_Dashboard.html in this folder. If that file already
exists, read it first and extend it instead of replacing it.

HARD CONSTRAINTS (do not break):
- Everything in ONE .html file: inline CSS and vanilla JavaScript. No build tools, no frameworks.
  The only external library allowed is Chart.js from a CDN, and only if I ask for charts.
- No backend and no login. It must run by double-clicking the file in a browser.
- It stores student personal data (Aadhaar, contacts). NEVER send data over the network.
  Persist data in the browser via localStorage, plus JSON export/import for backup.
- Institutional styling: deep navy (#1F3864) and white, Arial, clean tables and cards.

PURPOSE: help one coordinator + a faculty team track a B.ASLP student batch from counselling day
through induction and the whole first year (Semesters 1 and 2). No student logins.

SEED DATA: 21 students. Regular (Karnataka/Non-Karnataka), 13:
FATHIMATH SALVA KC / UG/26/10780; CHRIS PINTO / UG/26/14261; Ameena Filza / UG/26/14765;
Fathimath Asna / UG/26/12974; Haya Ibrahim Rahmathulla / UG/26/10851; Shimaaz Asiya / UG/26/12748;
Alia KT / UG/26/11266; Nadha Fathima / UG/26/10960; Fathima Riza / UG/26/10593;
Raniya Nasrin M / UG/26/10792; Nasna Sherin PM / UG/26/13003;
PV Fathimathul Jasna Musammilu / UG/26/10481; Sefna K / UG/26/10128.
NRI, 8: NIYA SUSAN ABY / UG/26/10119; SALIHA ZAKIR HUSSAIN / UG/26/10494;
DEVINA MATHEW / UG/26/13565; Fathima Sheza / UG/26/14838; Aleena O P / UG/26/16799;
HIBA FATHIMA / UG/26/11825; FATHIMATH SAFA / UG/26/14416; Noula / UG/26/10381.

PHASES (pipeline per student): Counselling -> Verification -> Admission Confirmed ->
Joined / Inducted -> Sem 1 -> Sem 2.

DOCUMENT CHECKLIST per student (checkboxes, show % verified): Aadhaar; APAAR ID; Secondary ID;
10+2/HSE Marks Card; Class 12 Passing Cert; SSLC Marks Card; SSLC Passing Cert; Birth Certificate;
Transfer Certificate; Conduct Certificate; Migration Cert; Domicile/Nativity (mandatory);
Income Certificate; Caste/Category Cert; Physical Fitness Cert; Photos (7+2); NEET Admit & Score;
Allotment Order; Extracurricular Proof; Undertaking (Rs.100 stamp); Two attested sets.

PER-STUDENT RECORD (editable in a modal): profile (mobile, email, parent, local guardian);
admission status (Pending/Approved/Rejected); the document checklist above; day-of-joining issuance
(Campus ID No., Roll/Register No., Library Card No., Hostel resident Yes/No, Block, Room);
fee Demand Draft (DD No., DD Date, Bank, Branch, Amount, Fee Head, Receipt No., Status
Pending/Partial/Paid); Semester 1 and Semester 2 each with attendance %, internal assessment,
university exam status (Not started/Appeared/Passed/Reattempt), clinical posting, remarks;
and mentor notes.

TABS:
1) Dashboard: KPI cards (total, admitted, pending, avg documents verified %, fee paid, joined,
   hostel residents, NRI vs Regular), a phase-pipeline table, and a "needs attention" list of any
   student not fully cleared. (Add Chart.js charts only if I ask.)
2) Students: searchable, filterable table (by stream and phase); click a row to open the record.
3) Academic (Sem 1 & 2): table of attendance/IA/exam per semester; flag attendance below 75% in red.
4) Notices: add/list/delete dated announcements.
5) Data & Backup: Export JSON, Import JSON, Export students to CSV/Excel, Print, Reset to seed.
   Show a note that data stays on this computer and must be backed up to a secure shared drive.

Auto-save to localStorage on every change. After you finish, tell me exactly what to click to test
each tab, and remind me to Export a JSON backup before any future big change.
```

---

## Tips
- Change one thing at a time, then test in the browser.
- Keep a copy of the .html file before big edits, or Export a JSON backup first.
- This file holds student PII — keep it and its backups on a secure, access-controlled drive.
