# 🏎️ Formula 1 Race Intelligence Dashboard

**An interactive Tableau analytics project on Formula 1 driver performance, team strategy and championship trends, presented on a custom React website.**

[![Live Site](https://img.shields.io/badge/Live%20Site-Bolt-brightgreen?style=for-the-badge)](https://f1-race-intelligence-tcuf.bolt.host)
[![Tableau](https://img.shields.io/badge/Tableau-Public-E97627?style=for-the-badge&logo=tableau)](https://public.tableau.com/views/F1VisualsDashboard/Dashboard)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

---

## 📌 Project Overview

This project turns Formula 1 race data into an interactive Tableau Public dashboard and a guided data story, then presents both on a responsive website built with React, Vite and Tailwind CSS.

- **🌐 Live Site:** https://f1-race-intelligence-tcuf.bolt.host
- **📊 Tableau Dashboard:** https://public.tableau.com/views/F1VisualsDashboard/Dashboard
- **📖 Tableau Story:** https://public.tableau.com/views/F1Visuals/F1RaceIntelligenceStory

---

## 📊 Dashboard at a Glance

| Metric | Value |
|:--|:--|
| Circuits showcased | 29 |
| Competing teams | 10 |
| Race outcomes logged | 6,464 |
| Seasons in play | 17 |

---

## ✨ Key Features

| Section | What it shows |
|:--|:--|
| **🏁 Global Driver Distribution** | Map of drivers across Grand Prix nations |
| **🔧 DNF Analysis** | DNF counts per driver |
| **🏆 Podium Achievements** | Podiums by driver and team |
| **🏎️ Team Championship Performance** | Constructor points across seasons |
| **📈 Team Performance Ranking** | Total points by team |
| **🛞 Tyre Compound Usage** | Distribution of soft, medium, hard and intermediate tyres |
| **🌍 Race Participation by Country** | Races hosted per country |
| **📖 Data Story** | A guided narrative through the main findings |

Filters on the dashboard let you slice results by DNF Reason, Year of Race Date and Top N.

---

## 💡 Key Insights

- Red Bull Racing leads team performance with 8,006 points, followed by Mercedes (7,790), Ferrari (5,778) and McLaren (4,270).
- Carlos Sainz has the most DNFs (34) among the listed drivers.
- Bahrain, USA, Spain, Canada and UAE have the highest race participation.

---

## 🔄 Project Workflow

1. Data Collection and Extraction from Database
2. Data Preparation
3. Data Visualization
4. Dashboard
5. Story
6. Performance Testing
7. Web Integration (Tableau Public embed in a web interface)

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Analytics:** Tableau Public (dashboard and story)
- **Hosting:** Bolt
- **Version control:** Git and GitHub

---

## 📁 Repository Structure

```
├── public/            Static assets
├── src/
│   ├── components/    Page sections and Tableau embed
│   ├── hooks/         Custom hooks (scroll animations)
│   ├── config.ts      Tableau URLs
│   ├── App.tsx        Main app
│   └── main.tsx       Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/Pari-Jindal/f1-race-intelligence-dashboard1.git
cd f1-race-intelligence-dashboard1
npm install
npm run dev
```

---

## 👩‍💻 Author

**Pari Jindal**

---

> This is an educational analytics project and is not affiliated with Formula 1.
