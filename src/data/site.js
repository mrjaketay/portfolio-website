// all site copy lives here so pages stay thin

export const site = {
  name: 'Jake Tay',
  url: 'https://mrjaketay.com',
  email: 'mrjaketay@gmail.com',
  location: 'Accra, Ghana',
  linkedin: 'https://www.linkedin.com/in/mrjaketay',
  github: 'https://github.com/mrjaketay',
  cv: '/Jake-Tay-CV.pdf',
}

export const nav = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    id: 'it-support',
    primary: true,
    title: 'IT and technical support',
    short: 'Windows faults, device setup, Wi‑Fi and printer problems, account access. Fixed remotely and written up after.',
    long: 'I’m the first call for staff across departments at Construction Monitor, so I know what a normal week of tickets looks like. I fix the problem, find out why it keeps happening, and leave notes so the next person doesn’t start from zero.',
    points: ['Windows 10 and 11 troubleshooting', 'Laptops, accounts and tools for new hires', 'Network and Wi‑Fi faults', 'Phone and device setup and tracking'],
    icons: ['Microsoft Teams', 'Zoom', 'Google Meet', 'Help Scout'],
  },
  {
    id: 'data-operations',
    primary: true,
    title: 'Data operations and reporting',
    short: 'Clean, check and report on your data so the numbers in the meeting can be trusted.',
    long: 'My team turns out more than 1,000 recurring reports a month. Most of the work is the unglamorous part: catching missing fields, mismatched records and duplicates before anyone builds a chart on top of them.',
    points: ['Data validation and quality checks', 'Excel and SQL reporting', 'Python clean-up scripts with pandas', 'KPI and trend reports'],
    icons: ['Excel', 'Google Sheets', 'Python', 'PostgreSQL'],
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual assistance',
    short: 'Inbox, calendar and scheduling across time zones, plus the follow-ups that usually slip.',
    long: 'I already do this for leadership in my day job: keeping inboxes under control, booking calls across time zones and making sure tasks in the project tool match what was agreed on the call.',
    points: ['Inbox and calendar management', 'Scheduling across time zones', 'Research and written summaries', 'Asana, ClickUp, Jira and Help Scout upkeep'],
    icons: ['Gmail', 'Asana', 'ClickUp', 'Help Scout'],
  },
  {
    id: 'web-development',
    title: 'Websites and web apps',
    short: 'Business sites and small web apps in React, deployed and kept up to date.',
    long: 'I build with React and Vite on the front end and Node, Express and Postgres when a project needs a back end. Sites go live on Hostinger or Render with deploys from GitHub, so updates are a push away.',
    points: ['Business and portfolio websites', 'React and Vite front ends', 'Node, Express and Postgres back ends', 'Hosting, domains and deploys'],
    icons: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'video-editing',
    title: 'Video editing',
    short: 'Vertical edits for TikTok, Reels and Shorts, and full podcast and show episodes.',
    long: 'I cut short-form clips and full episodes in DaVinci Resolve and CapCut. The job is mostly pacing: getting to the point fast, keeping captions readable and the audio clean.',
    points: ['Short vertical edits', 'Podcast and show episodes', 'Captions, pacing and audio clean-up', 'Thumbnails and simple graphics'],
    icons: ['DaVinci Resolve', 'CapCut', 'Photoshop', 'Canva'],
  },
  {
    id: 'automation-ai',
    title: 'Automation and AI data work',
    short: 'Workflows in Zapier, Make and n8n, plus labeling and evaluation work for AI datasets.',
    long: 'I wire up the repetitive steps between your tools and write the SOP that goes with them. On the AI side I’ve captioned and labeled training data to strict guidelines and built evaluation sets with automated graders.',
    points: ['Workflow automation', 'SOPs and process documents', 'Data labeling and image captioning', 'Evaluation scenarios and graders'],
    icons: ['Zapier', 'Make', 'n8n', 'ChatGPT'],
  },
]

export const requests = [
  'Set up laptops and accounts for a new hire',
  'Find out why the office Wi‑Fi keeps dropping',
  'Clean up a messy spreadsheet before a report goes out',
  'Take over my inbox and calendar for a few hours a day',
  'Build a website for my business',
  'Edit our podcast into short clips',
  'Automate a task we do by hand every week',
  'Write down how our process works so new staff can follow it',
]

export const steps = [
  { title: 'You tell me what’s wrong', text: 'A short message or a call. What’s broken, slow or unfinished, and when you need it done.' },
  { title: 'I reply with a plan and a time', text: 'Within 24 hours you get what I’ll do, how long it takes and what it costs.' },
  { title: 'I do the work', text: 'You get updates as it moves, not a surprise at the end.' },
  { title: 'You get a handover note', text: 'What changed, why, and how to keep it working without me.' },
]

export const projects = [
  {
    id: 'league-table',
    title: 'The League Table',
    kind: 'Web app',
    text: 'Runs a 12-manager Fantasy Premier League mini-league: live standings, weekly awards, head-to-head fixtures and quarterly challenges, all synced from the official FPL API on a schedule.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Render'],
    flow: ['FPL API', 'Scheduled sync', 'Postgres', 'League site'],
    caseStudy: '/portfolio/league-table',
    links: [
      { label: 'Open the app', href: 'https://fpl-league-frontend.onrender.com/' },
      { label: 'Read the code', href: 'https://github.com/mrjaketay/fpl-league' },
    ],
  },
  {
    id: 'evaluation-sets',
    title: 'IncidentBench, TerminalBench and SecurityBench',
    kind: 'AI evaluation',
    text: 'Three evaluation sets for AI and engineering reasoning: security incidents with logs and timelines, production failures to debug, and five vulnerability cases with Python graders that pass 15 of 15 checks.',
    stack: ['Python', 'GitHub'],
    flow: ['Scenario', 'Logs and config', 'Model answer', 'Grader'],
    links: [
      { label: 'IncidentBench', href: 'https://github.com/mrjaketay/IncidentBench' },
      { label: 'TerminalBench', href: 'https://github.com/mrjaketay/TerminalBench' },
    ],
  },
  {
    id: 'timetrack',
    title: 'TimeTrack',
    kind: 'Attendance app',
    text: 'Clock in and out with an NFC card. Every clock event is stamped with a location, managers see late arrivals and hours on one dashboard, and reports export to CSV or Excel.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    flow: ['NFC card', 'Clock event', 'Location stamp', 'Reports'],
    links: [{ label: 'Read the code', href: 'https://github.com/mrjaketay/timeApp' }],
  },
  {
    id: 'bra-khojos',
    title: 'Bra Khojo’s Kitchen',
    kind: 'Collaboration',
    text: 'A project I’m collaborating on: food delivery for a kitchen in Accra. Customer and rider apps in Flutter, a vendor dashboard in React, and a Node and Firebase back end with MTN MoMo payments.',
    stack: ['Flutter', 'React', 'Node.js', 'Firebase'],
    flow: ['Customer app', 'Orders API', 'Vendor dashboard', 'Rider app'],
    links: [{ label: 'Read the code', href: 'https://github.com/mrjaketay/bra-khojos-kitchen' }],
  },
  {
    id: 'bizconnect',
    title: 'Bizconnect Technologies website',
    kind: 'Collaboration',
    text: 'Team project with Bizconnect Technologies, the web design agency I’m part of: React, TypeScript and Vite, enquiries through Web3Forms, and routing and Search Console fixes on Hostinger.',
    stack: ['React', 'TypeScript', 'Vite', 'Hostinger'],
    flow: ['Design', 'React build', 'Hostinger', 'Search Console'],
    links: [{ label: 'Visit the site', href: 'https://bizconnecttechnologies.com/' }],
  },
]

export const videos = [
  { id: '7662756331769613586', client: 'Tesano Campus Institute', title: 'Devotional promo', href: 'https://www.tiktok.com/@tesanocampusinstitute/video/7662756331769613586' },
  { id: '7661082631747996946', client: 'Tesano Campus Institute', title: 'All Black graduation night', href: 'https://www.tiktok.com/@tesanocampusinstitute/video/7661082631747996946' },
]

export const experience = [
  {
    years: '2022 – now',
    role: 'Data Operations Team Lead and Technical Support',
    org: 'Construction Monitor',
    result: ['Lead a team of 10+ producing ', { mark: '1,000+ reports a month' }, '. Cleared 70+ stuck legacy tasks and ', { mark: 'cut turnaround by 25%' }, '.'],
  },
  {
    years: 'Jan – Mar 2026',
    role: 'AI Data Labeling and Image Captioning Specialist',
    org: 'Invisible',
    result: ['Turned images into structured text to strict annotation rules and flagged edge cases for specialist review.'],
  },
  {
    years: '2023 – 2026',
    role: 'Youth Representative and Committee Advisor',
    org: 'Tesano Stake',
    result: ['Ran programme schedules and reports, and tracked laptop assignments for training classes.'],
  },
  {
    years: '2021 – 2022',
    role: 'Data Entry Specialist',
    org: 'Construction Monitor',
    result: ['Processed 1,000+ permit records a week at ', { mark: '98% accuracy' }, ' against internal checks.'],
  },
  {
    years: '2020 – 2021',
    role: 'Assistant to the Mission President',
    org: 'Nigeria Owerri Mission',
    result: ['Digitised paper records and kept phones, transfers and travel accounted for across several states.'],
  },
]

export const education = [
  { title: 'BSc Information Technology, Systems Administration', place: 'Ensign College', years: 'Expected 2029' },
  { title: 'BSc Software Engineering', place: 'Coventry University', years: '2015 – 2018' },
]

export const certifications = [
  { title: 'Google Data Analytics Professional Certificate', year: '2023' },
  { title: 'Technical Support Fundamentals', year: '2025' },
  { title: 'Foundations of Cybersecurity', year: '2025' },
  { title: 'Connect and Protect: Networks and Network Security', year: '2025' },
  { title: 'Play It Safe: Manage Security Risks', year: '2025' },
  { title: 'Data Analysis with R Programming', year: '2023' },
  { title: 'Share Data Through the Art of Visualization', year: '2023' },
  { title: 'Foundations of User Experience (UX) Design', year: '2023' },
]

export const skills = [
  { group: 'Support', items: ['Windows 10/11', 'Hardware and device setup', 'Network and Wi‑Fi', 'Mobile device management', 'Active Directory basics'] },
  { group: 'Data', items: ['SQL', 'Excel', 'Python, pandas, NumPy', 'Data cleaning and QC', 'KPI reporting'] },
  { group: 'Operations', items: ['Leading teams of 10+', 'Inbox and calendar', 'Travel and scheduling', 'SOPs and documentation', 'Onboarding'] },
  { group: 'Build and create', items: ['React and Vite', 'Node and Express', 'PostgreSQL and Supabase', 'DaVinci Resolve', 'CapCut and Photoshop'] },
]

export const tools = [
  'Asana', 'ClickUp', 'Jira', 'Help Scout', 'Notion', 'Gmail', 'Excel', 'Google Sheets', 'Microsoft Teams', 'Zoom',
  'Python', 'PostgreSQL', 'React', 'Node.js', 'GitHub', 'Zapier', 'Make', 'DaVinci Resolve', 'CapCut', 'Photoshop', 'Canva', 'ChatGPT',
]

// case study: the league table
export const leagueCase = {
  title: 'The League Table: a web app for a 12-manager FPL mini-league',
  lead: 'Our Fantasy Premier League group ran its side competitions on spreadsheets and memory. I built an app that runs them on its own, straight from the official FPL data.',
  facts: [
    { label: 'Managers', value: '12' },
    { label: 'Data source', value: 'Official FPL API' },
    { label: 'Hosting', value: 'Render' },
  ],
  problem: [
    'FPL’s own site only shows overall standings. Our group also wanted weekly winners, head-to-head rivalries and quarterly prizes, and someone had to work all of that out by hand every gameweek.',
    'That meant late results, arguments over who won what, and nothing to look back on at the end of the season.',
  ],
  built: [
    { title: 'Scheduled sync from the FPL API', text: 'Scores, transfers and the league’s name come straight from the official API on a schedule. Nobody types results in.' },
    { title: 'Weekly and monthly awards that lock themselves', text: 'Manager of the Week and Manager of the Month are worked out automatically and locked once the last gameweek of the period is over.' },
    { title: 'Head-to-head table', text: 'Three points for a win, one for a draw, then points difference. Transfer hits count in the standings and awards, and are flagged so everyone can see why a score dropped.' },
    { title: 'Quarterly challenges and a Hall of Fame', text: 'Each quarter starts fresh, and past winners stay on record for the whole league to see.' },
    { title: 'Flyers for the group chat', text: 'An admin-only tool turns fixtures, results and quarterly winners into images ready to post. Admin sessions time out on their own.' },
  ],
  stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'PostgreSQL', 'Render'],
  result: 'The league’s side competitions now run without anyone keeping score by hand, and every result can be traced back to the official data.',
}
