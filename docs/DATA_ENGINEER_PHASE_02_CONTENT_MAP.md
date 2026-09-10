# Phase 02 — Content Map and Information Architecture (Deliverable)

Companion to `content/content-model.json` (the structured source of truth for Phases 03–08).
Every public-facing fact below is traced to a source. No visual implementation was started.

**Sources used (complete list):**

| Source | Used for |
|---|---|
| `Assets/cv.pdf` (1 page) | Name, objective, education, trainee experience, certifications, skills, practice projects, activities, location, contact |
| `Assets/info.md` | Name, headline, email, LinkedIn, GitHub |
| `Assets/logo.jpg` (1024×572 JPEG) | Brand identity, palette direction (mint/aqua + glacier blue AH circuit monogram) |
| `Assets/profile.jpg` (400×400 JPEG) | Hero portrait |
| `project_1/about.md` + `preview.png` (1672×941) | Smartphone Specification Analysis 2025 case study |
| `project_2/about.md` + `preview.png` (1344×768) | DataFlow Monitor case study |
| `project_3/about.md` + `preview.png` (1344×768) | BusinessInsights Hub case study |
| `github.com/ahmedHy0` (verified 2026-09-10) | Real project link for project 1; profile fallback for projects 2–3 |
| Owner's reviewed edit of this map (2026-09-10) | Adopted certification list (3 entries), superseding the CV PDF entries |

**Sources NOT used because they do not exist in the repo:** per-project repository URLs for projects 2 and 3, credential IDs / certificate verification links, per-project screenshots beyond the single preview each.

---

## 1. Proposed Sections (Information Architecture)

| # | Section | In navigation | Basis |
|---|---|---|---|
| 1 | Intro — "Initialize Data Session" (skippable, ≤ 1.5 s) | No | Master prompt Phase 1; addendum Stage 1 |
| 2 | Hero — Data Engineer Identity | No | Master prompt Phase 2; addendum Stage 2 |
| 3 | About — Engineer Profile | ABOUT | CV objective + activities; addendum Stage 3 |
| 4 | Stack — Skills / Data Stack | STACK | CV skills block |
| 5 | Background — Trainee Experience + Education timeline | BACKGROUND | CV documents both a practicum and degrees; combined section, honestly typed |
| 6 | Certifications | CERTIFICATIONS | Owner-adopted list (3 items) — supersedes the CV PDF entries |
| 7 | Projects — three pipeline case studies (+ optional static architecture walkthrough) | PROJECTS | The three project folders (source of truth) |
| 8 | Contact — Open to Opportunities | CONTACT | CV objective + `info.md` links |

Navigation is the master prompt's six recruiter-friendly labels: ABOUT · STACK · BACKGROUND · CERTIFICATIONS · PROJECTS · CONTACT.
An Experience timeline **is** supported (CV lists a traineeship and academic project work), but entries are labeled "Traineeship (practicum)" and "Academic project work" — training is never dressed up as industry employment.
Exactly one `h1` sits in the hero.

---

## 2. Profile and Hero Content

- **Name:** Ahmed Hany Khairy (CV header; `info.md`; GitHub display name "Ahmed Hany")
- **Role line:** Junior Data Engineer — the CV's own stated target ("Seeking a Junior Data Engineer position")
- **Role qualifier (honesty guard):** "Data Engineering Trainee @ DEPI · AI Engineering Student" (from `info.md` headline)
- **Positioning statement:** "I build ETL pipelines with Python and SQL — from raw multi-source files to validated, well-modeled PostgreSQL warehouses — currently training in the DEPI Data Engineering track while finishing my BSc in Artificial Intelligence."
- **Metadata rows:** FOCUS: Data Engineering · STACK: Python · SQL · ETL/ELT · PostgreSQL · STATUS: Open to opportunities
- **CTAs:** `View projects` (→ #projects) · `Download CV` (→ CV PDF) · `Contact me` (→ #contact)
- **Visuals:** portrait (`Assets/profile.jpg`) inside a pipeline/lineage diagram connecting the person to his data systems; logo anchors the header/intro
- Every value maps to the CV, `info.md`, or DEPI entries — no metrics, uptime, or volume claims exist anywhere in the hero.

---

## 3. Skills / Data Stack Groups

Groups and items are copied exactly from the CV skills block. **No proficiency percentages** — none are documented.

| Group | Items |
|---|---|
| Languages | Python, SQL, C++, JavaScript |
| Data Engineering | ETL/ELT Pipelines, Data Warehousing, Data Normalization, Pandas, NumPy |
| Databases | PostgreSQL, MySQL, Relational Schema Design, Query Optimization |
| Tools & Platforms | Git, GitHub, Visual Studio Code, Linux Terminal |
| Spoken languages (small side row) | Arabic (Native), English (Fluent) |

Deliberate scope decision: technologies that appear **only** inside project documents (Airflow, Kafka, dbt, Spark, FastAPI, React/Next.js, Docker, AWS S3, Grafana, Prometheus, etc.) are shown on the project case studies, not claimed in the Stack section — the CV never lists them as personal skills. This keeps every stack claim CV-traceable.

---

## 4. Background / Education / Experience Structure

Section label: **Background**, rendered as a data-lineage timeline (Foundation → Learning → Practice → Projects → Next opportunity). Four entries, honestly typed:

| Period | Entry | Type | Key content (from CV) |
|---|---|---|---|
| 01/2026 – Present | Junior Data Engineering Trainee — Digital Egypt Pioneers Initiative (DEPI) | Traineeship (practicum) | ETL pipelines Python+SQL → centralized PostgreSQL warehouse; window functions & indexes cutting query times; Pandas/NumPy validation, error handling, type-checking |
| 09/2025 – 06/2026 | Database & Backend Developer (Academic Projects) — University Faculty Portfolio Work | Academic project work | 3NF-normalized schemas; Python scheduled batch ingestion; Git/GitHub/VS Code workflows |
| 01/2026 – Present | Data Engineering Track — DEPI | Professional training | Enterprise data warehousing, advanced SQL optimization, ETL/ELT pipeline design |
| Expected 06/2027 | BSc in Artificial Intelligence — Faculty of Artificial Intelligence, Kafr El-Sheikh, Egypt | Education | Expected graduation June 2027 (no enrollment date in CV) |

Plus two compact sub-blocks (both CV-sourced, kept out of the case-study section):
- **Practice projects:** Enterprise ETL Pipeline & Data Warehouse Mockup (Python, PostgreSQL, SQL); Automated Log Data Processing & Analytics Tool (Python, Pandas, NumPy, SQLite)
- **Activities:** Programming Club Member; Hackathons Contributor (database automation focus)

---

## 5. Certification Structure

Card/row model with fields: **Name · Issuer · Date · Credential ID · Verification link**. All three entries below were **adopted from the owner's reviewed edit (2026-09-10)** and supersede the older certification entries printed in the current CV PDF.

1. **Associate Data Analyst in SQL** – DataCamp – 02/2026
2. **Professional Data Engineer in Python** – DataCamp – 05/2026
3. **Google Data Analytics Professional Certificate** – Google – 08/2026

Credential IDs and verification links are `null` for all three: none have been provided yet, so **no "verified"/"confirmed" badges and no fabricated credential numbers**. Status chips are omitted entirely rather than faked. If DataCamp/Google verification URLs exist, they can be added later without changing the model.

---

## 6. Project Case Studies — Exact Content Model

All three use one schema: `title · title_suffix · category · project_type · one_liner · purpose · technologies (grouped) · highlights · pipeline (stages + text equivalent) · links · preview · results`.

### 6.1 Smartphone Specification Analysis 2025  *(source: `project_1/about.md`)*
- **Category:** Data Analysis · **Type:** Personal project
- **One-liner:** Exploratory analysis of 930+ smartphones across the 2025 market — comparing specifications, pricing, and performance tiers.
- **Purpose:** Examine 2025 smartphone market trends across brands (specs, pricing, performance tiers).
- **Technologies:** Python, Pandas, NumPy, Matplotlib, Jupyter Notebook
- **Highlights:** cleaning & preprocessing (missing values, duplicates, outliers) · RAM-based tiers (Budget / Mid-Range / Flagship) · statistics + normalization · scatter / histogram / trend visualizations
- **Pipeline:** COLLECT → CLEAN → ENGINEER → ANALYZE → VISUALIZE (+ text equivalent)
- **Links:** repository = `https://github.com/ahmedHy0/smartphone-specification` (**verified live**; contains the dataset and analysis notebook) · live demo = none
- **Preview:** `project_1/preview.png` — Jupyter Notebook analysis screenshot
- **Results:** analysis outputs only; no deployment or production claims

### 6.2 DataFlow Monitor — Real-time Pipeline Analytics  *(source: `project_2/about.md`)*
- **Category:** Data Engineering · Monitoring · **Type:** Personal project
- **One-liner:** A monitoring dashboard that tracks ETL/ELT pipelines in real time — health, throughput, quality metrics, and alerts across multiple data sources.
- **Technologies:** Backend: Python, FastAPI, Apache Airflow, Apache Kafka · Database: PostgreSQL, Redis · Frontend: React, D3.js, Chart.js · Monitoring: Grafana, Prometheus · DevOps: Docker
- **Highlights:** real-time status tracking (active jobs, stage logging, failure/bottleneck alerts) · data-flow architecture visualization · throughput & latency monitoring · data-quality scoring (completeness, freshness)
- **Pipeline:** SOURCES → EXTRACT → TRANSFORM → LOAD → SERVE (+ text equivalent; matches the screenshot's architecture view)
- **Links:** repository = **none documented** · demo = none · public UI may only fall back to the real GitHub profile
- **Preview:** `project_2/preview.png` — dashboard UI screenshot
- **Results:** built application interface; no deployment documented

### 6.3 BusinessInsights Hub — Unified Analytics Platform  *(source: `project_3/about.md`)*
- **Category:** Business Intelligence · Analytics · **Type:** Personal project
- **One-liner:** A BI platform consolidating sales, customer, inventory, and finance data into one interactive dashboard for KPI tracking and data-driven decisions.
- **Technologies:** Data Pipeline: Apache Airflow, dbt, Apache Spark · Backend: Python, FastAPI, SQLAlchemy · Database: PostgreSQL, Redis · Frontend: React (Next.js), Recharts, Tailwind CSS · Cloud & DevOps: AWS S3, Docker, GitHub Actions
- **Highlights:** unified KPI & revenue analytics · RFM customer segmentation with churn-risk metrics · inventory & product performance tracking · filtering, scheduled PDF/Excel exports, Redis caching
- **Pipeline:** SOURCES → PIPELINE → STORE → SERVE (+ text equivalent)
- **Links:** repository = **none documented** · demo = none · same profile-fallback rule
- **Preview:** `project_3/preview.png` — BI dashboard screenshot
- **Results:** built application interface; no deployment documented

Folder names (`project_1`…) exist only in internal asset paths — no public copy exposes them.

---

## 7. Contact / Open to Opportunities

- **Heading:** Open to Opportunities
- **Statement:** "I'm looking for a Junior Data Engineer position where I can build reliable ETL pipelines, well-modeled warehouses, and fast SQL. Based in Cairo, Egypt."
- **Links (direct labels, per the prompt):** Email `ahmed.hy2006@gmail.com` · LinkedIn `linkedin.com/in/ahmed8hany` · GitHub `github.com/ahmedHy0` · Download CV
- **Phone (+20 122 607 0314):** in the CV but **excluded from the public model by default** (privacy); publish only if the owner opts in.

---

## 8. Provenance Confirmation

- Every hero, about, skills, background, certification, project, and contact value above traces to the CV, `info.md`, a project `about.md`, a verified GitHub link, a provided image, **or the owner's reviewed edit (certifications only)**. Nothing else is invented.
- The only numbers in public copy: "930+ devices" (project_1 about file), dates and periods (CV). No rows/uptime/latency/cost figures exist anywhere.
- Project-type honesty: all three folders document built-but-personal work → all modeled as "Personal project"; none upgraded to enterprise/production.
- The DEPI intro lines ("PROFILE STREAM: READY"…) are the addendum's own visitor-facing atmosphere copy, explicitly permitted and non-infrastructure-implying.

## 9. Ambiguities Needing Attention

1. **Missing repo links for projects 2 & 3.** Nothing in `about.md` or the CV documents repositories. Model rule: no fabricated URLs; UI may show the real GitHub profile as a generic fallback or omit "View source". → *If private repos exist, provide URLs before Phase 06.*
2. **CV lists two projects that are not the three folder projects.** The folders are the case-study source of truth, so the CV projects (ETL Warehouse Mockup; Log Analytics Tool) are modeled only as compact "practice projects" inside Background. → *Confirm they should not become additional case studies.*
3. **DEPI date tension inside the CV:** education and practicum both read "01/2026 – Present". The adopted site certification list no longer shows the DEPI completion certificate, so the tension now lives only inside the CV PDF. Model keeps the CV wording verbatim ("01/2026 – Present"). → *Confirm whether the track should read 01/2026 – 06/2026.*
4. **The CV PDF no longer matches the adopted certifications.** The site now lists DataCamp ×2 + Google (owner-adopted), while `Assets/cv.pdf` still prints the two old entries (DEPI Track Completion; Advanced SQL, generic issuer). A recruiter comparing the downloadable CV with the site would see a mismatch. → *Regenerate the CV PDF to match, or confirm which list is authoritative.* (This resolves the earlier "generic issuer" ambiguity.)
5. **No BSc enrollment date** (only "Expected 06/2027"), so the timeline's Foundation node carries no start year.
6. **Hero role wording** uses the CV's target role "Junior Data Engineer" with the honest trainee qualifier adjacent. → *Confirm this framing (alternative: lead with "Data Engineering Trainee").*
7. **Phone number** excluded from public contact by default. → *Opt-in decision.*
8. **Logo is JPEG with a baked near-black background** — usable on dark surfaces as-is, but a cleaned/transparent variant or simplified favicon monogram will be needed in Phase 03 (non-destructive).
9. **Optional Pipeline Replay:** deferred. All three projects support a *static* architecture walkthrough; an interactive sample-data replay is only clearly defensible for DataFlow Monitor. Decision intentionally left to the case-study phase.

## 10. Validation Performed

| Check | Result |
|---|---|
| Content-model JSON parses (`json.load`) | PASS |
| Adopted certification list (3 entries) identical across JSON model and this map | PASS |
| Required blocks present (IA, intro, profile, hero, about, skills, background, certifications, 3 projects, contact, assets) | PASS |
| Every project has title, technologies, pipeline, links, preview, project_type | PASS |
| No `project_N` folder names in any public copy field | PASS |
| No proficiency percentages / fabricated metrics / verification badges | PASS |
| GitHub profile link live (1 public repo) | VERIFIED 2026-09-10 |
| Project-1 repository link live (dataset + notebook present) | VERIFIED 2026-09-10 |
| Email syntax valid; LinkedIn URL taken from `info.md` (page requires login, not anonymously fetchable) | PASS / NOTED |
| Build/lint tests | N/A — no application scaffold exists yet (Phase 02 is content-only by instruction) |
