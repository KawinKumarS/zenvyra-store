/**
 * ==========================================================================
 * Zenvyra Store & Admin Hub - Core Interactive Engine (Phase 9 - Holo-Spotlight UX)
 * Three.js 3D Holographic Hero Studio + Interactive Laser Spotlight Cards
 * Mega Catalog: 40 Robotics Systems (₹3k-₹5k) + 100 Software Systems (₹1.5k-₹3k)
 * ==========================================================================
 */

const inMemoryCache = {};

const SafeStorage = {
  getItem(key) {
    try {
      return window.localStorage ? window.localStorage.getItem(key) : inMemoryCache[key] || null;
    } catch (e) {
      return inMemoryCache[key] || null;
    }
  },
  setItem(key, value) {
    try {
      if (window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch (e) {}
    inMemoryCache[key] = value;
  },
  removeItem(key) {
    try {
      if (window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (e) {}
    delete inMemoryCache[key];
  }
};

const SafeSession = {
  getItem(key) {
    try {
      return window.sessionStorage ? window.sessionStorage.getItem(key) : inMemoryCache[key] || null;
    } catch (e) {
      return inMemoryCache[key] || null;
    }
  },
  setItem(key, value) {
    try {
      if (window.sessionStorage) {
        window.sessionStorage.setItem(key, value);
      }
    } catch (e) {}
    inMemoryCache[key] = value;
  }
};

/* ==========================================================================
   1. Data Store & Mega Catalog: Robotics (₹3k-₹5k) & Software (₹1.5k-₹3k)
   ========================================================================== */
const DIVERSE_PHOTO_POOL = [
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
];

const RAW_PROJECTS = [
  // =========================================================================
  // 🤖 SECTION 1: ROBOTS & SMART HARDWARE SYSTEMS (Price: ₹3,000 to ₹5,000)
  // =========================================================================
  // Rescue & Safety Robotics (With accurate robotic arm / electronic circuit photography)
  ["bot-001", "Fire Detection & Fire Fighting Robot", "iot", "Rescue & Safety Robotics", "₹4,800", "Autonomous thermal tracking rover that detects flame signatures, avoids obstacles via ultrasonic sensors, and sprays extinguishing foam/water automatically.", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"],
  ["bot-002", "Disaster Rescue Robot", "iot", "Rescue & Safety Robotics", "₹4,900", "All-terrain surveillance rover equipped with IR thermal cameras and acoustic vitals microphones to search for people trapped under rubble.", "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"],
  ["bot-003", "Gas Leak Detection Robot", "iot", "Rescue & Safety Robotics", "₹3,200", "MQ-series electrochemical sensor unit that patrols kitchen and industrial pipes to detect LPG/Methane leaks and trigger GSM emergency SMS sirens.", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"],
  ["bot-004", "Emergency Evacuation Robot", "iot", "Rescue & Safety Robotics", "₹3,800", "Smart building corridor navigator that broadcasts multi-lingual voice announcements and illuminates floor arrow projectors guiding crowds to fire exits.", "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&q=80"],
  ["bot-005", "Industrial Safety Patrol Robot", "iot", "Rescue & Safety Robotics", "₹4,200", "Automated factory floor rover logging ambient temperature spikes, chemical vapor saturation, and unauthorized human presence near high-voltage machinery.", "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80"],

  // Agriculture & AgriTech Robotics
  ["bot-006", "Fruit Harvesting Robot", "iot", "AgriTech Robotics", "₹4,500", "Computer vision robotic arm utilizing TensorFlow object detection to differentiate raw vs ripe agricultural orchard fruit and pick without skin bruising.", "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80"],
  ["bot-007", "Automatic Seed Sowing Robot", "iot", "AgriTech Robotics", "₹3,500", "Autonomous furrow-digging rover that deposits vegetable crops at precisely calibrated spacing distances and covers them with soil automatically.", "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80"],
  ["bot-008", "Weed Removal Robot", "iot", "AgriTech Robotics", "₹4,300", "AI camera rover that differentiates benign crop stalks from invasive weed species, deploying targeted micro-tilling blades to uproot pests.", "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80"],
  ["bot-009", "Smart Irrigation Robot", "iot", "AgriTech Robotics", "₹3,200", "Soil hygrometer rover that travels down furrow tracks, measuring volumetric moisture levels and releasing drip irrigation water exclusively on parched dirt roots.", "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600&q=80"],
  ["bot-010", "Crop Disease Detection Robot", "iot", "AgriTech Robotics", "₹4,000", "High-clearance agricultural drone/rover carrying multi-spectral macro lens sensors to diagnose fungal rot and blight on leaves before entire crops wither.", "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80"],

  // Industrial & Factory Automation Robotics
  ["bot-011", "Warehouse Delivery Robot", "iot", "Industrial Robotics", "₹4,500", "Automated Guided Vehicle (AGV) utilizing floor magnetic line tracking and LiDAR sensors to transport heavy pallet crates safely across logistics floors.", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"],
  ["bot-012", "Inventory Scanning Robot", "iot", "Industrial Robotics", "₹3,800", "Vertical telescoping mast rover that rolls down storage aisle racks, reading QR barcodes and RFID tags at high speeds to sync real-time ERP cloud inventory.", "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"],
  ["bot-013", "Conveyor Belt Sorting Robot", "iot", "Industrial Robotics", "₹4,200", "High-speed Delta robotic picker paired with RGB color and infrared contour sensors to segregate defective or recyclable assembly line components.", "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80"],
  ["bot-014", "Machine Inspection Robot", "iot", "Industrial Robotics", "₹4,000", "Magnetic crawling inspection robot that adheres to steel grain silos and turbine casings, measuring harmonic mechanical vibrations and thermal fatigue.", "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"],
  ["bot-015", "Construction Material Transport Robot", "iot", "Industrial Robotics", "₹4,400", "Heavy-duty tracked dump carrier designed to autonomously haul cement bricks, scaffolding fittings, and welding cylinders across muddy building foundations.", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"],

  // Healthcare & Clinical Telemetry Robotics
  ["bot-016", "Medicine Delivery Robot", "iot", "Healthcare Telemetry", "₹3,800", "Autonomous hospital nursing station ward buggy that transports prescription pharmaceutical vials and sterile gauze directly to quarantined patient isolation rooms.", "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"],
  ["bot-017", "Patient Monitoring Robot", "iot", "Healthcare Telemetry", "₹4,200", "Bedside diagnostic robotic companion measuring contactless IR temperature, pulse oximetry SpO2, and electrocardiogram rhythms with instant doctor alerts.", "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"],
  ["bot-018", "UV Disinfection Robot", "iot", "Healthcare Telemetry", "₹4,600", "Autonomous operating theater sterilization robot blasting germicidal UV-C light waves across surgical tables while deploying human motion shutdown safety interlocks.", "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=600&q=80"],
  ["bot-019", "Smart Wheelchair", "iot", "Healthcare Telemetry", "₹5,000", "Voice-controlled, joystick-assisted smart mobility wheelchair engineered with step-drop ledge detection and automatic emergency braking for physical disability rehab.", "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80"],

  // Automotive & Autonomous Vehicles
  ["bot-020", "Smart Parking Robot", "iot", "Automotive & Autonomous", "₹3,600", "Ultrasonic slot occupancy sensor rover paired with matrix digital billboards that guides incoming vehicles directly to empty multi-level garage bays.", "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80"],
  ["bot-021", "Driver Drowsiness Detection System", "iot", "Automotive & Autonomous", "₹3,500", "Dashboard infrared camera tracking driver eye closure duration (PERCLOS metric) and head nodding to blast awakening alarms before highway accidents happen.", "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80"],
  ["bot-022", "Accident Alert System", "iot", "Automotive & Autonomous", "₹3,000", "3-axis MEMS accelerometer and tilt impact sensor integrated with GPS-GSM telemetry to instantly broadcast distress pin lat-long coordinates to nearby ambulances.", "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"],
  ["bot-023", "Autonomous Mini Delivery Vehicle", "iot", "Automotive & Autonomous", "₹4,900", "Sidewalk pedestrian-navigating courier rover transporting college library parcels and food orders via GPS waypoint geofencing across large campus grounds.", "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80"],

  // Smart City & Municipal Infrastructure
  ["bot-024", "Smart Garbage Collection Robot", "iot", "Smart City Systems", "₹3,800", "Park and street sanitation bot that sweeps up litter bottles, plastic packets, and leaves using revolving brush hoppers and automatic compaction chambers.", "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"],
  ["bot-025", "Water Pipeline Leak Detection Robot", "iot", "Smart City Systems", "₹3,900", "Subsea and underground municipal pipeline crawler measuring acoustic cavitation turbulence and water pressure drops to pinpoint ruptured pipe joints.", "https://images.unsplash.com/photo-1542013936693-8c463f88e0cb?auto=format&fit=crop&w=600&q=80"],
  ["bot-026", "Smart Traffic Monitoring Robot", "iot", "Smart City Systems", "₹4,200", "Overhead AI camera processor counting vehicle queue densities and dynamically prolonging green signal intervals to alleviate rush-hour intersections.", "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80"],
  ["bot-027", "Flood Monitoring Robot", "iot", "Smart City Systems", "₹3,500", "Buoyant ultrasonic riverbank gauge network communicating over LoRa wireless protocol to alert downstream municipal authorities before flash flood surges hit.", "https://images.unsplash.com/photo-1516026974298-531bf4251037?auto=format&fit=crop&w=600&q=80"],

  // Security & Surveillance Robotics
  ["bot-028", "Security Patrol Robot", "iot", "Surveillance Robotics", "₹4,500", "Perimeter defense bot patrolling bank vaults and utility substations with night-vision PTZ surveillance cameras and perimeter fence intrusion sensors.", "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"],
  ["bot-029", "Face Recognition Access Robot", "iot", "Surveillance Robotics", "₹3,800", "Lobby greeter droid utilizing embedded face embedding verification to unlock mag-lock turnstiles solely for credentialed personnel.", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"],
  ["bot-030", "Suspicious Object Detection Robot", "iot", "Surveillance Robotics", "₹4,700", "Railway platform and airport concourse patrol bot that highlights unattended backpacks and baggage remaining stationary beyond threshold timers.", "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"],
  ["bot-031", "Border Surveillance Rover", "iot", "Surveillance Robotics", "₹5,000", "Rugged military solar-assisted boundary rover detecting clandestine border crossing movements via seismic geophone arrays and long-range telephoto infrared feeds.", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"],

  // AI + Robotics Integration
  ["bot-032", "Voice-Controlled Personal Assistant Robot", "ai", "AI & Robotics Integration", "₹4,000", "Desktop robotic AI companion listening to wake words, scheduling calendar reminder alerts, reciting global news RSS feeds, and controlling smart home bulbs.", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"],
  ["bot-033", "Gesture-Controlled Robot", "iot", "AI & Robotics Integration", "₹3,200", "Glove-mounted flex sensor and accelerometer rig directing a two-wheel drive chassis via Bluetooth wireless hand motion articulation.", "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"],
  ["bot-034", "Smart Shopping Assistant Robot", "iot", "AI & Robotics Integration", "₹3,800", "Autonomous superstore grocery cart tracking consumer heels while keeping running inventory totals of items placed inside via integrated weight load cells.", "https://images.unsplash.com/photo-1556742049-0a67d55febc2?auto=format&fit=crop&w=600&q=80"],
  ["bot-035", "Library Book Finder Robot", "iot", "AI & Robotics Integration", "₹3,500", "Automated Dewey Decimal RFID scanner unit navigating academic library bookstacks to identify misplaced texts and deliver requested reserve books to student desks.", "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"],
  ["bot-036", "Classroom Attendance Robot", "iot", "AI & Robotics Integration", "₹3,000", "Desk-to-desk roaming RFID and optical fingerprint scanner verifying student attendance and uploading roll-call registers directly to university cloud databases.", "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"],

  // Environmental & Climate Conservation Rovers
  ["bot-037", "River Cleaning Robot", "iot", "Environmental Rovers", "₹4,600", "Solar-assisted floating catamaran skimmer equipped with front surface conveyor nets designed to clear invasive water hyacinth and floating debris from city lakes.", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"],
  ["bot-038", "Water Surface Trash Collection Robot", "iot", "Environmental Rovers", "₹4,400", "Remote-controlled harbor marine drone sweeping marina docking berths to scoop floating plastic cups, oil sheen films, and styrofoam waste.", "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"],
  ["bot-039", "Air Pollution Monitoring Robot", "iot", "Environmental Rovers", "₹3,400", "Urban roaming ambient weather station logging PM2.5, Nitrogen Oxide (NOx), and Carbon Monoxide density gradients across industrial sectors.", "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"],
  ["bot-040", "Environmental Data Collection Rover", "iot", "Environmental Rovers", "₹4,200", "Rugged wilderness conservation rover gathering soil pH samples, humidity indices, and forest ambient wildlife audio without disturbing delicate fauna ecosystems.", "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"],

  // =========================================================================
  // 💻 SECTION 2: 100 HACKATHON SOFTWARE ARCHITECTURES (Price: ₹699 - ₹1,499)
  // =========================================================================
  ["zen-001", "AI SOC Analyst (Alert Triage Agent)", "ai", "AI & Deep Learning", "₹1,399", "Automated alert prioritization and security incident triage agent powered by LLMs."],
  ["zen-002", "Automated Threat Hunter Agent", "ai", "AI & Deep Learning", "₹1,499", "Proactive cyber threat hunting network utilizing autonomous reasoning frameworks."],
  ["zen-003", "Compliance AI: GDPR Request Handler", "ai", "AI & Deep Learning", "₹1,099", "Automated user data right requests and regulatory compliance documentation checker."],
  ["zen-004", "RAG Retrieval Agent for Docs Q&A", "ai", "AI & Deep Learning", "₹1,299", "Retrieval-Augmented Generation engine for enterprise document comprehension and technical Q&A."],
  ["zen-005", "AI Code Review Assistant for PRs", "ai", "AI & Deep Learning", "₹1,199", "Automated pull request syntax reviewer, refactoring suggestor, and bug identifier."],
  ["zen-006", "AI Slide Generator from Text", "ai", "AI & Deep Learning", "₹799", "Converts raw essay documentation and bullet points into styled viva presentations."],
  ["zen-007", "Work Automation Agent (Calendar + Email)", "ai", "AI & Deep Learning", "₹999", "Autonomous workflow scheduler and smart inbox assistant with multi-calendar routing."],
  ["zen-008", "AI Meeting Summary & Insights Bot", "ai", "AI & Deep Learning", "₹899", "Audio transcript transcription and action-item extraction engine for engineering syncs."],
  ["zen-009", "AI Workflow Automator (CI/CD)", "ai", "AI & Deep Learning", "₹1,199", "Self-healing CI/CD pipeline manager that parses compile failure logs and auto-suggests patch commits."],
  ["zen-010", "AI Habit Coach with Streak Tracker", "ai", "AI & Deep Learning", "₹699", "Personalized cognitive coaching interface with streak gamification and adaptive reminders."],
  ["zen-011", "On-Chain Autonomous DeFi Agent", "blockchain", "Web3 & Blockchain", "₹1,499", "Autonomous on-chain liquidator and arbitrage bot operating on Ethereum decentralized liquidity pools."],
  ["zen-012", "Agentic Swap & Yield Robot", "blockchain", "Web3 & Blockchain", "₹1,399", "Smart smart-contract routing engine maximizing yield farming APR across automated market makers."],
  ["zen-013", "DAO Contributor Agent (Autonomous)", "blockchain", "Web3 & Blockchain", "₹1,299", "Automates decentralized governance task bounty tracking and token payout distribution."],
  ["zen-014", "Swarm AI Agent-Based Marketplace", "blockchain", "Web3 & Blockchain", "₹1,499", "Decentralized multi-agent marketplace where autonomous bots negotiate micro-service contracts."],
  ["zen-015", "Supply-Chain Tracker Agent (Blockchain)", "blockchain", "Web3 & Blockchain", "₹1,399", "Immutable shipping lot verification and counterfeiting detection protocol using smart contracts."],
  ["zen-016", "Agentic Finance Worker (Rebalance + Trade)", "datascience", "Data Science & FinTech", "₹1,299", "Quant algorithmic trading portfolio rebalancer fueled by sentiment NLP indicators."],
  ["zen-017", "Agentic Identity Verifier (DID)", "blockchain", "Web3 & Blockchain", "₹1,199", "Decentralized Identifier (DID) validation layer protecting sovereign personal authentication."],
  ["zen-018", "Agentic Knowledge Miner (Web Crawling + Summary)", "ai", "AI & Deep Learning", "₹1,099", "Autonomous deep-web scraping and structured synthesis agent for corporate competitive analysis."],
  ["zen-019", "Document Privacy Compliance Assistant", "datascience", "Data Science & FinTech", "₹899", "Automated redaction and personally identifiable information (PII) masking system."],
  ["zen-020", "Virtual Security Coach (Phishing Training)", "datascience", "Data Science & FinTech", "₹899", "Interactive cybersecurity training playground that simulates adaptive phishing scenarios."],

  ["zen-021", "Voice-to-Action Organizer", "ai", "AI & Deep Learning", "₹699", "Voice command parser converting dictation directly into categorized kanban tasks."],
  ["zen-022", "Recipe Assistant from Fridge Snapshot", "ai", "AI & Deep Learning", "₹999", "Computer vision model utilizing YOLO to recognize pantry items and generate culinary recipes."],
  ["zen-023", "Expense Auto-Categorizer with OCR", "ai", "AI & Deep Learning", "₹999", "Receipt scanner using optical character recognition to automate personal accounting and tax filing."],
  ["zen-024", "Email Digest & Smart Reply Tool", "ai", "AI & Deep Learning", "₹699", "Summarizes verbose daily email threads and generates contextually tailored response drafts."],
  ["zen-025", "Automatic PDF to Slides Converter", "ai", "AI & Deep Learning", "₹799", "Parses complex PDF academic papers and visualizes key charts onto presentation slides."],
  ["zen-026", "Personal Finance Forecast Assistant", "datascience", "Data Science & FinTech", "₹1,099", "Time-series forecasting financial app predicting cash-flow anomalies and savings runway."],
  ["zen-027", "Resume Analyzer & Job Score", "ai", "AI & Deep Learning", "₹799", "Applicant Tracking System (ATS) optimization tool that matches CV competencies against job postings."],
  ["zen-028", "Automated Quiz Generator from Notes", "ai", "AI & Deep Learning", "₹699", "Generates interactive multiple-choice assessments and exam rubrics from study textbooks."],
  ["zen-029", "Flashcard Builder from Study Notes", "web", "Full-Stack Web Dev", "₹699", "Spaced-repetition learning deck generator integrated with modular Markdown note-taking."],
  ["zen-030", "Chat Transcription & Action Item Auto-capture", "ai", "AI & Deep Learning", "₹699", "Real-time chatroom analyzer that tags assignments and deadlines automatically."],
  ["zen-031", "Task Auto-Paradigmer (CLI Workflow)", "web", "Full-Stack Web Dev", "₹799", "Developer terminal utility that orchestrates daily engineering task flows and git branch automation."],
  ["zen-032", "Snippet Manager with AI Auto-Suggest", "ai", "AI & Deep Learning", "₹899", "Code repository assistant that categorizes reusable scripts with vector similarity search."],
  ["zen-033", "Image to CSS Converter", "web", "Full-Stack Web Dev", "₹1,199", "Visual AI converter that takes website mockups and generates responsive Flexbox/Grid CSS code."],
  ["zen-034", "Low-code Form + Workflow Builder", "web", "Full-Stack Web Dev", "₹1,299", "Drag-and-drop dynamic form designer with automated webhooks and database persistence."],
  ["zen-035", "Website SEO Audit + Optimizer", "web", "Full-Stack Web Dev", "₹899", "Crawls domains to report broken links, missing metadata tags, and core web vitals speed bottlenecks."],
  ["zen-036", "Social Media Posting Scheduler", "web", "Full-Stack Web Dev", "₹899", "Multi-platform queuing dashboard with audience engagement timing predictors."],
  ["zen-037", "Code Documentation Auto-generator", "ai", "AI & Deep Learning", "₹999", "Analyzes raw code repositories to automatically write comprehensive Markdown README and JSDoc files."],
  ["zen-038", "One-click Deploy Boilerplate Generator", "web", "Full-Stack Web Dev", "₹999", "Full-stack starter scaffold builder configuring authentication, ORM schemas, and CI testing instantly."],
  ["zen-039", "Transcript Summarizer for Videos", "ai", "AI & Deep Learning", "₹899", "Extracts key takeaways, chapter timestamps, and highlight reels from technical video lectures."],
  ["zen-040", "AI-Powered Idea Brainstorm Generator", "ai", "AI & Deep Learning", "₹699", "Interactive ideation studio mapping problem statements to actionable technical architectures."],

  ["zen-041", "AI-Enhanced Penetration Testing (PenTest++)", "datascience", "Data Science & FinTech", "₹1,499", "Automated network intrusion vulnerability mapper using reinforcement learning exploration."],
  ["zen-042", "AI SOC Triage Agent", "datascience", "Data Science & FinTech", "₹1,399", "Security Operations Center assistant correlating multi-server intrusion alerts in real-time."],
  ["zen-043", "Malware AI Analysis Toolkit", "datascience", "Data Science & FinTech", "₹1,499", "Static and dynamic executable behavior sandbox designed to flag zero-day Trojan patterns."],
  ["zen-044", "CTF Challenge Generator", "datascience", "Data Science & FinTech", "₹1,199", "Automated Capture The Flag competition platform generating unique cryptographic puzzles."],
  ["zen-045", "Phishing Simulation Platform", "datascience", "Data Science & FinTech", "₹1,099", "Enterprise security awareness simulation suite tracking employee credential vulnerability metrics."],
  ["zen-046", "Vulnerability Scanner with AI Suggestions", "datascience", "Data Science & FinTech", "₹1,299", "Inspects application architecture endpoints and outputs tailored security remediation code diffs."],
  ["zen-047", "Security Alert Auto-Summarizer Agent", "datascience", "Data Science & FinTech", "₹999", "Aggregates noisy SIEM alert firehose streams into digestible high-severity executive digests."],
  ["zen-048", "Code Security Auditor Agent", "datascience", "Data Science & FinTech", "₹1,199", "Static Application Security Testing (SAST) pipeline checking for OWASP Top 10 injection risks."],
  ["zen-049", "Privacy-Aware Data Map Generator", "datascience", "Data Science & FinTech", "₹899", "Enterprise system scanner mapping internal data flows for compliance audit readiness."],
  ["zen-050", "Threat Intelligence Aggregator Bot", "datascience", "Data Science & FinTech", "₹1,099", "Scrapes darkweb forums and IOC threat feeds to warn network administrators of emerging vectors."],
  ["zen-051", "Fake News Detector with AI", "ai", "AI & Deep Learning", "₹999", "Natural Language Processing verification engine checking news credibility against verified primary sources."],
  ["zen-052", "Voice Fraud Detection System", "ai", "AI & Deep Learning", "₹1,399", "Audio spectral classification network designed to flag synthetic cloned voice impostors on phone calls."],
  ["zen-053", "Deepfake Image & Video Checker", "ai", "AI & Deep Learning", "₹1,499", "Vision Transformer architecture detecting manipulated facial boundaries and GAN artifacts in video media."],
  ["zen-054", "Anti-Spam AI Email Filter", "ai", "AI & Deep Learning", "₹899", "Bayesian and transformer dual-filter identifying zero-day phishing attachments and spoofed sender heads."],
  ["zen-055", "Secure Auth with Passkeys Automation", "web", "Full-Stack Web Dev", "₹1,199", "FIDO2 passwordless WebAuthn implementation module with biometrics and secure token fallback."],
  ["zen-056", "2FA Integration Tool for SaaS", "web", "Full-Stack Web Dev", "₹899", "Time-based One-Time Password (TOTP) and SMS verification gateway for multitenant cloud apps."],
  ["zen-057", "Automated Incident Report Generator", "datascience", "Data Science & FinTech", "₹999", "Synthesizes system crash logs and pager notifications into compliant post-mortem documentation."],
  ["zen-058", "Access Logging & Alert System", "web", "Full-Stack Web Dev", "₹1,099", "Real-time role-based access control audit viewer monitoring unauthorized API escalation attempts."],
  ["zen-059", "Gitleaks: Secret Leak Detector Bot", "datascience", "Data Science & FinTech", "₹1,099", "Automated pre-commit git scanner preventing API keys and database tokens from being pushed public."],
  ["zen-060", "Compliance Policy Auto-Monitoring Agent", "datascience", "Data Science & FinTech", "₹1,199", "Continuous infrastructure monitor validating ISO 27001 and SOC2 cloud configuration alignments."],

  ["zen-061", "AI DeFi Portfolio Rebalancer", "blockchain", "Web3 & Blockchain", "₹1,499", "Smart contract automation adjusting decentralized staking allocations based on predictive risk spreads."],
  ["zen-062", "On-chain Snapshot Voting Agent", "blockchain", "Web3 & Blockchain", "₹1,199", "Gasless decentralized proposal governance system with cryptographic signature validation."],
  ["zen-063", "DAO Task Executor Agent", "blockchain", "Web3 & Blockchain", "₹999", "Autonomous smart contract escrow distributing ETH bounties upon successful code merges."],
  ["zen-064", "AI Token Trading Bot (Uniswap)", "blockchain", "Web3 & Blockchain", "₹1,399", "Algorithmic liquidity provider bot detecting arbitrage opportunities across decentralized exchanges."],
  ["zen-065", "Smart Contract Arbitrator Agent", "blockchain", "Web3 & Blockchain", "₹1,399", "Automated escrow dispute resolution mechanism powered by multi-signature consensus rules."],
  ["zen-066", "Agentic NFT Metadata Updater", "blockchain", "Web3 & Blockchain", "₹899", "Dynamic NFT protocol updating on-chain asset properties in response to real-world API events."],
  ["zen-067", "Agent-to-Agent Economy Sim Sandbox", "blockchain", "Web3 & Blockchain", "₹1,499", "Micro-economic simulation environment where AI agents buy and sell computation resources autonomously."],
  ["zen-068", "AI Governance DAO Interface", "blockchain", "Web3 & Blockchain", "₹899", "Web3 dashboard summarizing lengthy governance proposals and predicting token voting impact."],
  ["zen-069", "On-chain Agent Security Auditor", "blockchain", "Web3 & Blockchain", "₹1,499", "Automated Solidity contract bytecode analyzer checking for reentrancy and integer overflow exploits."],
  ["zen-070", "Tokenomics Agent Simulator", "blockchain", "Web3 & Blockchain", "₹999", "Agent-based financial forecasting suite modeling token inflation rates and liquidity curve dynamics."],
  ["zen-071", "Agentic Web (AI-network simulation)", "ai", "AI & Deep Learning", "₹1,399", "Simulated peer-to-peer network routing autonomous tasks between decentralized reasoning models."],
  ["zen-072", "Swarm Agent Coordination Demo", "ai", "AI & Deep Learning", "₹1,299", "Multi-agent swarm consensus system solving distributed routing and load-balancing benchmarks."],
  ["zen-073", "TEEs for Secure Agent Execution", "blockchain", "Web3 & Blockchain", "₹1,499", "Trusted Execution Environment enclave framework running proprietary algorithms with confidential proof."],
  ["zen-074", "Agentic DAO Funding Tool", "blockchain", "Web3 & Blockchain", "₹799", "Quadratic crowdfunding grant allocation portal preventing governance whale sybil voting manipulation."],
  ["zen-075", "On-chain Agent Chatbot (Telegram)", "blockchain", "Web3 & Blockchain", "₹799", "Interactive messaging bot querying live Ethereum blockchain wallet balances and gas tracker stats."],
  ["zen-076", "DeFi Risk Prediction Agent", "blockchain", "Web3 & Blockchain", "₹1,299", "Machine learning oracle evaluating collateral lending pools to forewarn users of impermanent loss risk."],
  ["zen-077", "On-chain Identity Verifier Agent", "blockchain", "Web3 & Blockchain", "₹1,099", "Zero-Knowledge identity protocol letting users prove age and credentials without revealing private secrets."],
  ["zen-078", "Agentic Alert System for DeFi Exploits", "blockchain", "Web3 & Blockchain", "₹1,399", "Mempool monitoring script triggering automated wallet withdrawal upon detecting flash loan attack attempts."],
  ["zen-079", "Multi-Agent Task Marketplace Prototype", "blockchain", "Web3 & Blockchain", "₹1,199", "Decentralized labor matching board linking artificial intelligence agents to human verification jobs."],
  ["zen-080", "ZKP Agent for Private Transactions", "blockchain", "Web3 & Blockchain", "₹1,499", "Zero-Knowledge proof shielded payment transfer app ensuring total financial transaction anonymity."],

  ["zen-081", "Smart Waste Scheduler & Tracker", "iot", "IoT & Robotics", "₹1,099", "Ultrasonic bin fill-level sensor telemetry paired with optimized garbage collection routing algorithms."],
  ["zen-082", "IoT Air Quality Monitor Dashboard", "iot", "IoT & Robotics", "₹1,199", "ESP32 ambient sensor network logging particulate matter (PM2.5) and CO2 on live mapping dashboards."],
  ["zen-083", "Community SOS Reporting Tool (Geo + Chat)", "web", "Full-Stack Web Dev", "₹999", "Geomagnified civic alerting portal connecting citizens to municipal emergency responders in crisis."],
  ["zen-084", "Disaster Alert Aggregator Bot", "web", "Full-Stack Web Dev", "₹899", "Real-time weather radar and earthquake telemetry crawler broadcasting automated SMS warning alerts."],
  ["zen-085", "Carbon Footprint Tracker PWA", "web", "Full-Stack Web Dev", "₹799", "Progressive Web Application calculating individual transport emissions and suggesting green lifestyle habits."],
  ["zen-086", "NGO Donation Transparency Dashboard", "web", "Full-Stack Web Dev", "₹899", "Charitable expenditure portal displaying verified purchase invoices against donor endowment funds."],
  ["zen-087", "Food Rescue Logistics Platform", "web", "Full-Stack Web Dev", "₹999", "Surplus dining inventory dispatcher connecting restaurant banquet leftovers directly to local homeless shelters."],
  ["zen-088", "Remote Energy Micro-Grid Planner", "iot", "IoT & Robotics", "₹1,399", "Solar battery charge controller simulation balancing rural community electricity grid loads dynamically."],
  ["zen-089", "Sustainable Fashion Swap Marketplace", "web", "Full-Stack Web Dev", "₹999", "Peer-to-peer wardrobe exchange platform promoting circular apparel recycling and thrift trading."],
  ["zen-090", "Green Supply Chain Tracker (Blockchain)", "blockchain", "Web3 & Blockchain", "₹1,399", "On-chain ecological certification protocol tracing fair-trade timber and crop origins from farm to shelf."],
  ["zen-091", "AI Climate Prediction Tool", "datascience", "Data Science & FinTech", "₹1,299", "Meteorological machine learning projection suite analyzing temperature anomalies and rainfall variance."],
  ["zen-092", "Telehealth Queue + Video Appointment", "web", "Full-Stack Web Dev", "₹1,299", "Virtual medical clinical examination room with WebRTC encrypted streaming and prescription logging."],
  ["zen-093", "Mental Health Chatbot (Ethical)", "ai", "AI & Deep Learning", "₹899", "Compassionate cognitive behavioral therapy conversational guide engineered with safety crisis escalation triggers."],
  ["zen-094", "Accessibility Overlay for Websites", "web", "Full-Stack Web Dev", "₹799", "Screen-reader enhancement utility injecting high-contrast styling and ARIA navigation shortcuts automatically."],
  ["zen-095", "Educational AR Experience for Remote Learning", "web", "Full-Stack Web Dev", "₹1,399", "Interactive 3D geometry and anatomy simulation laboratory playable directly within smartphone web browsers."],
  ["zen-096", "Flashcard Generator for NGO Training", "web", "Full-Stack Web Dev", "₹699", "Rapid pedagogical onboarding tool crafting multilingual training decks for non-profit volunteers."],
  ["zen-097", "Climate Data Visualization Dashboard", "datascience", "Data Science & FinTech", "₹999", "Interactive visual storytelling analytics portal displaying historical carbon emission tracking matrices."],
  ["zen-098", "PWA Volunteer Coordination Tool", "web", "Full-Stack Web Dev", "₹899", "Offline-capable community organizing app tracking shift attendance and resource distribution."],
  ["zen-099", "Global Hackathon Submission Portal", "web", "Full-Stack Web Dev", "₹1,099", "Innovation contest evaluation platform managing team project submission, judging rubrics, and leaderboards."],
  ["zen-100", "Ethical AI Ideation Toolkit (Workbook)", "mba", "MBA Strategy & Research", "₹699", "Comprehensive academic framing workbook evaluating AI algorithmic bias, societal harm, and regulation."]
];

const DEFAULT_SEED_PROJECTS = RAW_PROJECTS.map((item, idx) => {
  const [id, title, category, categoryLabel, price, desc, customImg] = item;
  const photoUrl = customImg || DIVERSE_PHOTO_POOL[idx % DIVERSE_PHOTO_POOL.length];
  const isBot = id.startsWith('bot-') || category === 'iot';

  return {
    id: id,
    title: title,
    category: category,
    categoryLabel: categoryLabel,
    price: price,
    priceNum: parseInt(price.replace(/[^0-9]/g, ''), 10) || 1099,
    img: photoUrl,
    desc: desc,
    tech: isBot 
      ? ['ESP32 / Arduino', 'PCB & Wiring Schematics', 'C++/Python Code', 'Assembly Video'] 
      : ['Source Code', 'Project Report (60+ pgs)', 'PPT Deck', 'Setup Video'],
    deliverables: isBot
      ? ['Embedded Controller Codebase', 'Complete Circuit Diagram & BOM', 'Technical Thesis & Testing Matrix', 'Step-by-Step Hardware Assembly Video', 'Zero Plagiarism Guarantee']
      : ['Full Source Code Folder', 'Technical Project Report', 'PowerPoint Slides', 'Setup Video Guide', 'Zero Plagiarism Guarantee'],
    architecture: isBot
      ? 'Microcontroller Telemetry Sensors ➔ Embedded Real-Time Control Loop ➔ Wireless IoT Cloud Gateway & Actuator Output.'
      : 'Input Module & API Layer ➔ Processing Business Backbone ➔ Database Persistence & Interactive Client Visualization.'
  };
});

const ZenvyraStore = {
  key: 'zenvyra_products_v8_software_budget_calibration',
  init() {
    const existing = SafeStorage.getItem(this.key);
    if (!existing) {
      this.save(DEFAULT_SEED_PROJECTS);
    }
  },
  getAll() {
    const data = SafeStorage.getItem(this.key);
    try {
      const parsed = data ? JSON.parse(data) : null;
      return (Array.isArray(parsed) && parsed.length > 0) ? parsed : DEFAULT_SEED_PROJECTS;
    } catch (e) {
      return DEFAULT_SEED_PROJECTS;
    }
  },
  save(products) {
    try {
      SafeStorage.setItem(this.key, JSON.stringify(products));
    } catch (e) {}
  },
  add(project) {
    const list = this.getAll();
    list.unshift(project);
    this.save(list);
    if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.saveProductToCloud === 'function') {
      window.ZenvyraFirebase.saveProductToCloud(project);
    }
  },
  updatePrice(id, newPriceString) {
    const list = this.getAll();
    const target = list.find(p => p.id === id);
    if (target) {
      target.price = newPriceString.startsWith('₹') ? newPriceString : `₹${newPriceString}`;
      this.save(list);
      if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.saveProductToCloud === 'function') {
        window.ZenvyraFirebase.saveProductToCloud(target);
      }
    }
  },
  updateProduct(id, updatedData) {
    let list = this.getAll();
    list = list.map(p => p.id === id ? { ...p, ...updatedData } : p);
    this.save(list);
    const target = list.find(p => p.id === id);
    if (target && window.ZenvyraFirebase && typeof window.ZenvyraFirebase.saveProductToCloud === 'function') {
      window.ZenvyraFirebase.saveProductToCloud(target);
    }
  },
  delete(id) {
    let list = this.getAll();
    list = list.filter(p => p.id !== id);
    this.save(list);
    if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.deleteProductFromCloud === 'function') {
      window.ZenvyraFirebase.deleteProductFromCloud(id);
    }
  },
  async syncWithCloud(onUpdateCallback) {
    if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.getCloudProducts === 'function') {
      try {
        const cloudProducts = await window.ZenvyraFirebase.getCloudProducts();
        if (Array.isArray(cloudProducts) && cloudProducts.length > 0) {
          let list = this.getAll();
          let updated = false;
          cloudProducts.forEach(cloudProd => {
            const index = list.findIndex(p => p.id === cloudProd.id);
            if (index >= 0) {
              if (JSON.stringify(list[index]) !== JSON.stringify({ ...list[index], ...cloudProd })) {
                list[index] = { ...list[index], ...cloudProd };
                updated = true;
              }
            } else {
              list.unshift(cloudProd);
              updated = true;
            }
          });
          if (updated) {
            this.save(list);
            if (typeof onUpdateCallback === 'function') onUpdateCallback(list);
            console.log("[ZENVYRA STORE] Catalog inventory synchronized with cloud repository.");
          }
        }
      } catch (err) {
        console.warn("[ZENVYRA STORE] Cloud inventory sync notice:", err);
      }
    }
  },
  resetToDefault() {
    this.save(DEFAULT_SEED_PROJECTS);
  }
};

const ZenvyraWishlist = {
  key: 'zenvyra_wishlist_v1',
  getAll() {
    try {
      const data = SafeStorage.getItem(this.key);
      return data ? JSON.parse(data) : [];
    } catch(e) { return []; }
  },
  save(list) {
    SafeStorage.setItem(this.key, JSON.stringify(list));
    this.updateUI();
  },
  toggle(id) {
    let list = this.getAll();
    if (list.includes(id)) {
      list = list.filter(item => item !== id);
    } else {
      list.push(id);
    }
    this.save(list);
    renderCatalog();
    return list.includes(id);
  },
  updateUI() {
    const list = this.getAll();
    const countEl = document.getElementById('wishlist-count-badge');
    if (countEl) countEl.innerText = list.length;
  }
};
window.ZenvyraWishlist = ZenvyraWishlist;

const ZenvyraAnalytics = {
  logEvent(eventName, details = {}) {
    try {
      const history = JSON.parse(SafeStorage.getItem('zenvyra_analytics_log') || '[]');
      history.unshift({ event: eventName, timestamp: new Date().toLocaleTimeString(), ...details });
      if (history.length > 200) history.pop();
      SafeStorage.setItem('zenvyra_analytics_log', JSON.stringify(history));
    } catch(e) {}
    if (window.va) {
      try { window.va('event', eventName, details); } catch(e) {}
    }
  },
  getStats() {
    try {
      return JSON.parse(SafeStorage.getItem('zenvyra_analytics_log') || '[]');
    } catch(e) { return []; }
  }
};
window.ZenvyraAnalytics = ZenvyraAnalytics;

/* ==========================================================================
   2. Theme Switcher System (Precision Light/Dark Mode)
   ========================================================================== */
function initThemeSwitcher() {
  const savedTheme = SafeStorage.getItem('zenvyra_theme') || 
                     (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateThemeIcons(true);
  } else {
    document.body.classList.remove('dark-theme');
    updateThemeIcons(false);
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  SafeStorage.setItem('zenvyra_theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  if (sunIcon && moonIcon) {
    sunIcon.style.display = isDark ? 'block' : 'none';
    moonIcon.style.display = isDark ? 'none' : 'block';
  }
}

/* ==========================================================================
   3. Mobile Navigation Controller
   ========================================================================== */
function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('open');
  }
}

/* ==========================================================================
   4. Catalog Architecture & Filter Engine
   ========================================================================== */
let currentCategoryFilter = 'ALL';
let currentSearchQuery = '';
let currentSortOption = 'default';

function initCatalogEngine() {
  renderCatalog();
  try { ZenvyraWishlist.updateUI(); } catch(e) {}
  try { ZenvyraAnalytics.logEvent('Storefront_Loaded', { device: window.innerWidth < 768 ? 'Mobile' : 'Desktop' }); } catch(e) {}
  const attemptCloudSync = (retries = 0) => {
    if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.getCloudProducts === 'function') {
      ZenvyraStore.syncWithCloud(() => renderCatalog());
    } else if (retries < 5) {
      setTimeout(() => attemptCloudSync(retries + 1), 600);
    }
  };
  setTimeout(() => attemptCloudSync(), 500);
}

function filterCatalog(category, btnElement) {
  currentCategoryFilter = category;
  const allBtns = document.querySelectorAll('.filter-btn');
  allBtns.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderCatalog();
  try { ZenvyraAnalytics.logEvent('Filter_Selected', { category }); } catch(e) {}
}

function filterByTechTag(tag, btnElement) {
  const input = document.getElementById('search-input');
  if (btnElement && btnElement.classList.contains('active')) {
    btnElement.classList.remove('active');
    if (input) input.value = '';
    searchCatalog('');
    return;
  }
  document.querySelectorAll('.tech-pill-btn').forEach(p => p.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  if (input) input.value = tag;
  searchCatalog(tag);
  try { ZenvyraAnalytics.logEvent('TechTag_Clicked', { tag }); } catch(e) {}
}

function searchCatalog(query) {
  currentSearchQuery = query.toLowerCase().trim();
  renderCatalog();
}

function sortCatalog(sortOption) {
  currentSortOption = sortOption;
  renderCatalog();
  try { ZenvyraAnalytics.logEvent('Sort_Selected', { option: sortOption }); } catch(e) {}
}

function renderCatalog() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const allSystems = ZenvyraStore.getAll();
  if (!allSystems || allSystems.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; padding: 4rem; text-align:center; color: var(--text-muted); font-family: var(--font-mono);">INVENTORY_EMPTY: 0 ARCHITECTURES DETECTED</div>`;
    return;
  }

  const savedWishlistIds = ZenvyraWishlist.getAll();
  try { ZenvyraWishlist.updateUI(); } catch(e) {}

  const filtered = allSystems.filter(sys => {
    const sysCat = (sys.categoryLabel || sys.category || sys.domain || '').toUpperCase();
    const rawCat = (sys.category || '').toLowerCase();
    const sysId = (sys.id || '').toLowerCase();
    const isHardware = sysId.startsWith('bot-') || rawCat === 'iot' || sysCat.includes('ROBOTICS') || sysCat.includes('HARDWARE') || sysCat.includes('IOT');
    
    let matchesCategory = true;
    if (currentCategoryFilter === 'HARDWARE') {
      matchesCategory = isHardware;
    } else if (currentCategoryFilter === 'SOFTWARE') {
      matchesCategory = !isHardware;
    } else if (currentCategoryFilter === 'AI') {
      matchesCategory = !isHardware && (rawCat === 'ai' || sysCat.includes('AI') || sysCat.includes('DEEP LEARNING'));
    } else if (currentCategoryFilter === 'BLOCKCHAIN') {
      matchesCategory = !isHardware && (rawCat === 'blockchain' || sysCat.includes('BLOCKCHAIN') || sysCat.includes('WEB3') || sysCat.includes('DEFI') || sysCat.includes('DAO'));
    } else if (currentCategoryFilter === 'WEB') {
      matchesCategory = !isHardware && (rawCat === 'web' || sysCat.includes('WEB') || sysCat.includes('PWA') || sysCat.includes('APP'));
    } else if (currentCategoryFilter === 'DATA') {
      matchesCategory = !isHardware && (rawCat === 'datascience' || rawCat === 'mba' || sysCat.includes('DATA') || sysCat.includes('SECURITY') || sysCat.includes('CYBER') || sysCat.includes('FINTECH') || sysCat.includes('SOC') || sysCat.includes('MBA'));
    } else if (currentCategoryFilter === 'WISHLIST') {
      matchesCategory = savedWishlistIds.includes(sys.id);
    }
    
    const titleText = (sys.title || sys.name || '').toLowerCase();
    const descText = (sys.desc || '').toLowerCase();
    const techText = (sys.tech || []).join(' ').toLowerCase();
    const matchesSearch = titleText.includes(currentSearchQuery) || 
                          descText.includes(currentSearchQuery) ||
                          techText.includes(currentSearchQuery);

    return matchesCategory && matchesSearch;
  });

  const getPriceVal = (pStr) => {
    if (!pStr) return 0;
    const cleaned = pStr.toString().replace(/[^0-9]/g, '');
    return parseInt(cleaned, 10) || 0;
  };

  if (currentSortOption === 'price-low') {
    filtered.sort((a, b) => getPriceVal(a.price) - getPriceVal(b.price));
  } else if (currentSortOption === 'price-high') {
    filtered.sort((a, b) => getPriceVal(b.price) - getPriceVal(a.price));
  } else if (currentSortOption === 'name-az') {
    filtered.sort((a, b) => (a.title || a.name || '').localeCompare(b.title || b.name || ''));
  }

  if (filtered.length === 0) {
    if (currentCategoryFilter === 'WISHLIST') {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 1rem; background: var(--surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">⭐️</div>
          <p style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">Your Architecture Wishlist is Currently Empty</p>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Click the ❤️ button on any engineering package in our directory to bookmark systems here for quick comparison.</p>
          <button type="button" onclick="filterCatalog('ALL', document.querySelector('.filter-btn'))" class="btn btn-primary" style="margin-top: 1.25rem;">Browse All Architectures</button>
        </div>
      `;
      return;
    }
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 1rem; background: var(--surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
        <p style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">No architecture matches specified filtering criteria</p>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Modify search parameter or revert category selector to view all systems.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((sys, idx) => {
    const sysCat = (sys.categoryLabel || sys.category || sys.domain || '').toUpperCase();
    const rawCat = (sys.category || '').toLowerCase();
    const isHardware = (sys.id || '').toLowerCase().startsWith('bot-') || rawCat === 'iot' || sysCat.includes('ROBOTICS') || sysCat.includes('HARDWARE') || sysCat.includes('IOT');
    const displayPrice = sys.price || (isHardware ? '₹3,500' : '₹1,199');
    
    let domainTag = 'SOFTWARE ARCHITECTURE';
    if (isHardware) domainTag = 'ROBOTICS & IOT';
    else if (rawCat === 'blockchain' || sysCat.includes('BLOCKCHAIN') || sysCat.includes('WEB3')) domainTag = 'WEB3 & BLOCKCHAIN';
    else if (rawCat === 'datascience' || sysCat.includes('DATA') || sysCat.includes('SECURITY') || sysCat.includes('FINTECH') || rawCat === 'mba') domainTag = 'CYBER & FINTECH';
    else if (rawCat === 'web' || sysCat.includes('WEB') || sysCat.includes('FULL-STACK')) domainTag = 'FULL-STACK WEB';
    else if (rawCat === 'ai' || sysCat.includes('AI') || sysCat.includes('DEEP')) domainTag = 'AI & LLM ARCHITECTURE';

    const deliverables = sys.tech && sys.tech.length > 0 ? sys.tech : 
                         (isHardware ? ['ESP32 / Arduino', 'PCB Schema', '60+ Pg Specs', 'C++ Source'] : ['Full Codebase', 'DB Schematics', '60+ Pg Specs', 'Python / TS']);

    const isSaved = savedWishlistIds.includes(sys.id);
    const ratingVal = (4.8 + (idx % 3) * 0.1).toFixed(1);
    const deployCount = 14 + ((idx * 7) % 28);

    return `
      <article class="project-card scroll-reveal" data-id="${sys.id}" style="--anim-order: ${idx % 9};">
        <div class="pc-img-container">
          <span class="pc-domain-badge">${domainTag}</span>
          <span class="pc-price-badge">${displayPrice}</span>
          <button type="button" onclick="ZenvyraWishlist.toggle('${sys.id}')" class="btn-wishlist ${isSaved ? 'active' : ''}" title="Save Architecture to Wishlist">
            ${isSaved ? '❤️' : '🤍'}
          </button>
          <img src="${sys.img || (isHardware ? './assets/ai_project_thumb.jpg' : './assets/blockchain_project_thumb.jpg')}" alt="${sys.title || sys.name}" loading="lazy">
        </div>
        <div class="pc-body">
          <div class="verified-rating-badge">
            <span>⭐️ ${ratingVal}</span>
            <span style="color: var(--text-muted); font-weight: 600;">(${deployCount} Verified Deployments)</span>
          </div>
          <h3 class="pc-title">${sys.title || sys.name}</h3>
          <p class="pc-desc">${sys.desc || 'Production-grade engineering package containing verified source code, architecture diagrams, and comprehensive technical specification documentation.'}</p>
          <div class="pc-deliverables">
            ${deliverables.slice(0, 4).map(t => `<span class="deliverable-tag">${t}</span>`).join('')}
          </div>
          <div class="pc-actions">
            <button type="button" onclick="openBuyModal('${sys.id}')" class="btn btn-primary" style="padding: 0.75rem 1rem; font-size: 0.9rem;">
              <span>Deploy Architecture</span>
            </button>
            <button type="button" onclick="openProjModal('${sys.id}')" class="btn btn-outline" style="padding: 0.75rem 1rem; font-size: 0.85rem;">
              <span>Specifications</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  try { initSpotlightHover(); } catch(e) {}
  try { initScrollReveal(); } catch(e) {}
}

/* ==========================================================================
   5. Interactive Cursor Spotlight (Stable - Zero Jitter or Shaking)
   ========================================================================== */
function initSpotlightHover() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   6. Engineering Modal Windows & WhatsApp Acquisition Desk
   ========================================================================== */
function openProjModal(sysId) {
  const sys = ZenvyraStore.getAll().find(p => p.id === sysId);
  if (!sys) return;
  try { ZenvyraAnalytics.logEvent('Specification_Modal_Opened', { id: sysId, title: sys.title || sys.name }); } catch(e) {}

  const modal = document.getElementById('proj-modal');
  const titleEl = document.getElementById('proj-modal-title');
  const bodyEl = document.getElementById('proj-modal-body');

  if (!modal || !titleEl || !bodyEl) return;

  const isHardware = (sys.categoryLabel || sys.category || '').toUpperCase().includes('ROBOTICS') || 
                     (sys.categoryLabel || sys.category || '').toUpperCase().includes('HARDWARE');
  const priceDisplay = sys.price || (isHardware ? '₹3,500' : '₹1,199');

  titleEl.innerText = sys.title || sys.name;
  const demoRequestText = encodeURIComponent(`Hello ZENVYRA Engineering Desk, please send me the live 15-second video recording and system test demonstration for: *${sys.title || sys.name}* (${priceDisplay} INR)`);
  
  bodyEl.innerHTML = `
    <div style="margin-bottom: 1.25rem; max-height: 280px; overflow: hidden; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); position: relative;">
      <img src="${sys.img || './assets/ai_project_thumb.jpg'}" alt="${sys.title}" style="width: 100%; height: 280px; object-fit: cover;">
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, rgba(7,8,12,0.95) 0%, transparent 100%); padding: 1.25rem 1.5rem; display:flex; justify-content: space-between; align-items: flex-end;">
        <span style="font-family: var(--font-mono); color: var(--brand-primary); font-weight: 700; font-size: 0.8rem; letter-spacing: 0.05em;">${isHardware ? 'ROBOTICS & EMBEDDED SYSTEM' : 'AI ARCHITECTURE SYSTEM'}</span>
        <span style="font-family: var(--font-mono); color: #fff; background: var(--brand-indigo); padding: 0.35rem 0.85rem; border-radius: var(--radius-xs); font-weight:700;">${priceDisplay} INR</span>
      </div>
    </div>

    <a href="https://wa.me/917012288040?text=${demoRequestText}" target="_blank" class="demo-video-btn" title="Request working system demonstration video">
      <span style="font-size: 1.2rem;">▶️</span>
      <span>Watch Live 15s System Demo Recording & Review</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </a>
    
    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-family: var(--font-heading); color: var(--text-main); font-size: 1.15rem; margin-bottom: 0.5rem; font-weight: 700;">System Overview & Specifications</h4>
      <p style="color: var(--text-muted); line-height: 1.65; font-size: 0.96rem;">${sys.desc || 'This commercial engineering architecture is designed for seamless prototype compilation, research validation, and scalable industrial deployment.'}</p>
    </div>
    
    <div style="background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem; margin-bottom: 2rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--brand-primary); margin-bottom: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">Included Deliverables & Artifacts</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.92rem; color: var(--text-muted);">
        ${isHardware ? `
          <li><span style="color: var(--brand-indigo); font-weight: 700; font-family: var(--font-mono);">[01]</span> <strong style="color: var(--text-main);">Verified Firmware Codebase:</strong> Modular C++ and embedded scripts calibrated for zero latency and precise sensor telemetry.</li>
          <li><span style="color: var(--brand-indigo); font-weight: 700; font-family: var(--font-mono);">[02]</span> <strong style="color: var(--text-main);">PCB & Circuit Schematics:</strong> Complete schematic wiring layouts, Gerber files, and pinout diagrams.</li>
          <li><span style="color: var(--brand-indigo); font-weight: 700; font-family: var(--font-mono);">[03]</span> <strong style="color: var(--text-main);">60+ Page Specification Manual:</strong> Rigorous technical engineering report detailing algorithms, mathematical equations, and sensor tolerances.</li>
          <li><span style="color: var(--brand-indigo); font-weight: 700; font-family: var(--font-mono);">[04]</span> <strong style="color: var(--text-main);">Compile & Deployment Guide:</strong> Clear instructions for setting up toolchains and uploading firmware to embedded boards.</li>
        ` : `
          <li><span style="color: var(--brand-indigo); font-weight: 700; font-family: var(--font-mono);">[01]</span> <strong style="color: var(--text-main);">Full Production Source Code:</strong> Complete repository with cleanly structured components, database scripts, and REST/GraphQL APIs.</li>
          <li><span style="color: var(--brand-indigo); font-weight: 700; font-family: var(--font-mono);">[02]</span> <strong style="color: var(--text-main);">System Architecture Schematics:</strong> Detailed database ER diagrams, structural data flow graphs, and microservices workflows.</li>
          <li><span style="color: var(--brand-indigo); font-weight: 700; font-family: var(--font-mono);">[03]</span> <strong style="color: var(--text-main);">60+ Page Specification Manual:</strong> Comprehensive engineering documentation covering design decisions, evaluation metrics, and security benchmarks.</li>
          <li><span style="color: var(--brand-indigo); font-weight: 700; font-family: var(--font-mono);">[04]</span> <strong style="color: var(--text-main);">Environment Build Configuration:</strong> Virtual environment dependencies, Docker configuration files, and instant launch scripts.</li>
        `}
      </ul>
    </div>
    
    <div style="display: flex; justify-content: flex-end; gap: 1rem; flex-wrap: wrap;">
      <button type="button" class="btn btn-secondary" onclick="closeProjModal()">Close Window</button>
      <button type="button" class="btn btn-primary" onclick="closeProjModal(); openBuyModal('${sys.id}')">Deploy System via WhatsApp (${priceDisplay})</button>
    </div>
  `;

  modal.classList.add('active');
}

function closeProjModal() {
  const modal = document.getElementById('proj-modal');
  if (modal) modal.classList.remove('active');
}

function openBuyModal(sysId) {
  closeAllModals();
  const sys = ZenvyraStore.getAll().find(p => p.id === sysId) || { title: 'ZENVYRA Architecture Bundle', price: '₹3,000' };
  try { ZenvyraAnalytics.logEvent('Deploy_WhatsApp_Modal_Opened', { id: sysId, title: sys.title || sys.name, price: sys.price }); } catch(e) {}
  
  const modal = document.getElementById('buy-modal');
  const nameEl = document.getElementById('buy-proj-name');
  const priceEl = document.getElementById('buy-proj-price');
  const dispEl = document.getElementById('buy-price-display');

  if (!modal) return;
  if (nameEl) nameEl.value = sys.title || sys.name;
  if (priceEl) priceEl.value = sys.price || '₹1,199';
  if (dispEl) dispEl.innerText = sys.price || '₹1,199';

  modal.classList.add('active');
}

function closeBuyModal() {
  const modal = document.getElementById('buy-modal');
  if (modal) modal.classList.remove('active');
}

function openInquiryModal() {
  closeAllModals();
  try { ZenvyraAnalytics.logEvent('Lead_Inquiry_Modal_Opened'); } catch(e) {}
  const modal = document.getElementById('inquiry-modal');
  if (modal) modal.classList.add('active');
}

function closeInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  if (modal) modal.classList.remove('active');
}

function closeAllModals() {
  closeProjModal();
  closeBuyModal();
  closeInquiryModal();
}

/* ==========================================================================
   7. Engineering WhatsApp Checkout Transmission (+91 70122 88040)
   ========================================================================== */
function handleBuySubmit(e) {
  e.preventDefault();
  const sysName = document.getElementById('buy-proj-name')?.value || 'System Architecture';
  const sysPrice = document.getElementById('buy-proj-price')?.value || '₹1,199';
  const clientName = document.getElementById('buy-user-name')?.value || 'Engineer / Client';
  const clientPhone = document.getElementById('buy-user-phone')?.value || 'N/A';
  const clientReq = document.getElementById('buy-user-req')?.value.trim() || 'Standard engineering deliverables as specified.';

  try { ZenvyraAnalytics.logEvent('WhatsApp_Acquisition_Sent', { sysName, sysPrice, clientPhone }); } catch(e) {}

  const message = `Hello ZENVYRA Engineering Team,\n\nI would like to acquire the following system architecture:\n\n*System Architecture:* ${sysName}\n*Fixed Investment:* ${sysPrice} INR\n\n*Client / Engineer details:*\n- Name: ${clientName}\n- Contact: ${clientPhone}\n- Custom Implementation Notes: ${clientReq}\n\nPlease provide direct repository access, specification documentation, and payment instructions.`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/917012288040?text=${encoded}`, '_blank');
  closeBuyModal();
}

function handleInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('inq-name')?.value || 'Prospective Client';
  const phone = document.getElementById('inq-phone')?.value || 'N/A';
  const query = document.getElementById('inq-query')?.value.trim() || 'General architecture inquiry';

  // 1. Archive Direct Engineering Brief to Firebase Firestore Cloud Database
  if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.saveRnDInquiry === 'function') {
    window.ZenvyraFirebase.saveRnDInquiry({ name, phone, query });
    console.log("[ZENVYRA R&D DESK] Brief synchronized with cloud admin database.");
  } else {
    // Fallback if SDK hasn't finished loading yet
    try {
      const existing = JSON.parse(localStorage.getItem('zenvyra_rnd_saved_briefs') || '[]');
      existing.unshift({ name, phone, query, status: 'NEW_BRIEF', timestamp: Date.now(), createdDate: new Date().toLocaleDateString('en-IN') });
      localStorage.setItem('zenvyra_rnd_saved_briefs', JSON.stringify(existing));
    } catch (err) {}
  }

  // 2. Present user confirmation toast/feedback
  alert(`✅ Engineering Brief Registered in Cloud Repository!\n\nThank you, ${name}. Your specifications have been archived to our R&D database and will now open in WhatsApp for immediate engineering assignment.`);

  // 3. Open Direct WhatsApp Engineering Desk
  const message = `Hello ZENVYRA R&D Desk,\n\nI am contacting you regarding a customized architecture consultation:\n\n*Name/Organization:* ${name}\n*WhatsApp Contact:* ${phone}\n\n*Technical Objectives & Specifications:*\n${query}\n\nPlease assign an engineer to discuss appropriate system options within your inventory.`;
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/917012288040?text=${encoded}`, '_blank');
  closeInquiryModal();
}

/* ==========================================================================
   8. Enterprise 3D Spatial Architecture & Cybernetic Horizon Studio
   ========================================================================== */
function init3DHeroStudio() {
  const canvas = document.getElementById('three-hero-canvas');
  const container = document.getElementById('canvas-container');
  if (!canvas || !container || !window.THREE) return;

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 1.5, 15);

  // Master spatial group to handle fluid mouse parallax
  const sceneGroup = new THREE.Group();
  scene.add(sceneGroup);

  // 1. Digital Cyber Horizon Grid
  const gridHelper = new THREE.GridHelper(70, 50, 0xa855f7, 0x334155);
  gridHelper.position.y = -4.5;
  gridHelper.position.z = -5;
  gridHelper.material.transparent = true;
  gridHelper.material.opacity = 0.4;
  sceneGroup.add(gridHelper);

  // 2. Main Orbital Engineering Megastructure (positioned to the right on wide screens)
  const constructGroup = new THREE.Group();
  if (width > 1050) {
    constructGroup.position.set(4.2, 0.2, -1.5);
  } else {
    constructGroup.position.set(0, -1.0, -4);
  }
  sceneGroup.add(constructGroup);

  // Inner Quantum Processor Core
  const coreGeom = new THREE.DodecahedronGeometry(2.1, 1);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.88 });
  const coreMesh = new THREE.Mesh(coreGeom, coreMat);
  constructGroup.add(coreMesh);

  // Middle Neural Ring (Indigo)
  const ringGeom1 = new THREE.TorusGeometry(3.2, 0.035, 24, 120);
  const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true, transparent: true, opacity: 0.8 });
  const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
  ring1.rotation.x = Math.PI / 3.5;
  ring1.rotation.y = Math.PI / 6;
  constructGroup.add(ring1);

  // Outer Telemetry Accelerator Ring (Cyan)
  const ringGeom2 = new THREE.TorusGeometry(4.2, 0.025, 24, 120);
  const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.55 });
  const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
  ring2.rotation.y = -Math.PI / 3;
  ring2.rotation.z = Math.PI / 8;
  constructGroup.add(ring2);

  // Floating Neural Satellite Cloud
  const particleCount = 42;
  const particleGeom = new THREE.SphereGeometry(0.065, 12, 12);
  const particleMat = new THREE.MeshBasicMaterial({ color: 0xe9d5ff });
  const satelliteGroup = new THREE.Group();
  constructGroup.add(satelliteGroup);

  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / particleCount);
    const theta = Math.sqrt(particleCount * Math.PI) * phi;
    const radius = 3.6 + (Math.random() * 1.2 - 0.6);
    
    const particle = new THREE.Mesh(particleGeom, particleMat);
    particle.position.set(
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    );
    satelliteGroup.add(particle);
  }

  // Fluid Mouse Parallax & Drag Telemetry
  let mouseX = 0;
  let mouseY = 0;
  let targetParallaxX = 0;
  let targetParallaxY = 0;
  let isDragging = false;
  let prevDrag = { x: 0, y: 0 };
  let dragRot = { x: 0, y: 0 };

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    targetParallaxX = mouseX * 0.4;
    targetParallaxY = -mouseY * 0.3;
  });

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevDrag = { x: e.clientX, y: e.clientY };
  });
  
  window.addEventListener('mouseup', () => { isDragging = false; });
  
  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - prevDrag.x;
    const deltaY = e.clientY - prevDrag.y;
    dragRot.y += deltaX * 0.007;
    dragRot.x += deltaY * 0.007;
    prevDrag = { x: e.clientX, y: e.clientY };
  });

  function animate() {
    requestAnimationFrame(animate);

    // Smooth inertia camera parallax
    sceneGroup.rotation.y += (targetParallaxX - sceneGroup.rotation.y) * 0.04;
    sceneGroup.rotation.x += (targetParallaxY - sceneGroup.rotation.x) * 0.04;

    // Autonomous orbital rotation
    if (!isDragging) {
      constructGroup.rotation.y += 0.0035;
      constructGroup.rotation.x += 0.001;
      coreMesh.rotation.z += 0.004;
    } else {
      constructGroup.rotation.y += (dragRot.y - constructGroup.rotation.y) * 0.15;
      constructGroup.rotation.x += (dragRot.x - constructGroup.rotation.x) * 0.15;
    }

    ring1.rotation.z += 0.004;
    ring2.rotation.z -= 0.0025;
    satelliteGroup.rotation.y -= 0.002;
    gridHelper.rotation.y += 0.0004;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    if (!container) return;
    const newWidth = container.clientWidth || window.innerWidth;
    const newHeight = container.clientHeight || window.innerHeight;
    
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);

    if (newWidth > 1050) {
      constructGroup.position.set(4.2, 0.2, -1.5);
    } else {
      constructGroup.position.set(0, -1.0, -4);
    }
  });
}

/* ==========================================================================
   9. Professional Motion Architecture & Viewport Reveal Engine
   ========================================================================== */
let scrollObserver = null;

function initScrollReveal() {
  const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  if (!scrollObserver) {
    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });
  }

  elements.forEach(el => scrollObserver.observe(el));
}

function initStatCounters() {
  const stats = document.querySelectorAll('.stat-num');
  if (!stats.length) return;

  const runCount = (el) => {
    if (el.dataset.counted === 'true') return;
    el.dataset.counted = 'true';

    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease out for premium deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * target);

      el.innerText = `${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.innerText = `${target}${suffix}`;
      }
    };
    requestAnimationFrame(animate);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(st => observer.observe(st));
  } else {
    stats.forEach(st => runCount(st));
  }
}

/* ==========================================================================
   10. Administration & R&D Desk Control Engine
   ========================================================================== */
function initAdminEngine() {
  const pinOverlay = document.getElementById('admin-pin-overlay');
  const pinInput = document.getElementById('admin-pin-input');
  const pinSubmit = document.getElementById('admin-pin-submit');
  const pinError = document.getElementById('pin-error-msg');

  // Check if session is already authenticated
  if (SafeSession.getItem('admin_unlocked') === 'true' && pinOverlay) {
    pinOverlay.style.display = 'none';
  }

  if (pinSubmit && pinInput) {
    const unlock = () => {
      if (pinInput.value.trim() === '1234') {
        SafeSession.setItem('admin_unlocked', 'true');
        pinOverlay.style.display = 'none';
        if (pinError) pinError.style.display = 'none';
      } else {
        if (pinError) pinError.style.display = 'block';
        pinInput.style.borderColor = '#EF4444';
      }
    };
    pinSubmit.addEventListener('click', unlock);
    pinInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') unlock(); });
  }

  renderAdminInventory();
  renderRnDTable();
  
  const attemptAdminCloudSync = (retries = 0) => {
    if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.getCloudProducts === 'function') {
      ZenvyraStore.syncWithCloud(() => renderAdminInventory());
    } else if (retries < 5) {
      setTimeout(() => attemptAdminCloudSync(retries + 1), 600);
    }
  };
  setTimeout(() => attemptAdminCloudSync(), 500);
  
  // Setup JSON Backup & Restore actions
  const exportBtn = document.getElementById('btn-export-json');
  const importBtn = document.getElementById('btn-import-json');
  const fileInput = document.getElementById('file-import-json');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ZenvyraStore.getAll(), null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `zenvyra_catalog_backup_${new Date().toISOString().slice(0,10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showAdminToast("📦 Store Inventory backed up successfully!");
    });
  }

  if (importBtn && fileInput) {
    importBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const parsed = JSON.parse(evt.target.result);
          if (Array.isArray(parsed)) {
            ZenvyraStore.save(parsed);
            renderAdminInventory();
            showAdminToast("✅ Inventory restored from backup!");
          }
        } catch(err) {
          alert("Invalid JSON format");
        }
      };
      reader.readAsText(file);
    });
  }

  // Setup Add Product Modal save button
  const saveProdBtn = document.getElementById('btn-save-product');
  if (saveProdBtn) {
    saveProdBtn.addEventListener('click', () => {
      const title = document.getElementById('prod-title')?.value.trim();
      const cat = document.getElementById('prod-cat')?.value || 'ai';
      const price = document.getElementById('prod-price')?.value || '₹1,199';
      const desc = document.getElementById('prod-desc')?.value || '';
      const tech = (document.getElementById('prod-tech')?.value || 'Python, Source Code, Report').split(',').map(s=>s.trim());
      const img = document.getElementById('prod-img-base64')?.value || './assets/ai_project_thumb.jpg';

      if (!title) {
        alert("Please provide a software product title.");
        return;
      }

      ZenvyraStore.add({
        id: 'sys-' + Math.random().toString(36).substring(2, 8),
        title, name: title, category: cat, price, desc, tech, img
      });

      closeAddProductModal();
      renderAdminInventory();
      showAdminToast("✨ New architecture published to store!");
    });
  }

  const imgFile = document.getElementById('prod-img-file');
  if (imgFile) {
    imgFile.addEventListener('change', (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = (ev) => {
        const b64 = ev.target.result;
        const hidden = document.getElementById('prod-img-base64');
        const prev = document.getElementById('prod-img-preview');
        if (hidden) hidden.value = b64;
        if (prev) { prev.src = b64; prev.style.display = 'block'; }
      };
      r.readAsDataURL(f);
    });
  }
}

function renderAdminInventory() {
  const tbody = document.getElementById('admin-table-body');
  if (!tbody) return;

  const items = ZenvyraStore.getAll();
  tbody.innerHTML = items.map(sys => `
    <tr>
      <td><img src="${sys.img || './assets/ai_project_thumb.jpg'}" style="width: 54px; height: 54px; border-radius: 6px; object-fit: cover; border: 1px solid var(--border-subtle);"></td>
      <td>
        <strong style="display:block; font-size: 0.98rem; color: var(--text-main);">${sys.title || sys.name}</strong>
        <span style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">ID: ${sys.id}</span>
      </td>
      <td><span style="background: var(--surface); padding: 0.35rem 0.75rem; border-radius: 4px; border: 1px solid var(--border-subtle); font-size: 0.85rem;">${sys.categoryLabel || sys.category}</span></td>
      <td style="text-align: right;">
        <input type="text" value="${sys.price}" onchange="ZenvyraStore.updatePrice('${sys.id}', this.value); showAdminToast('✅ Price Updated to ' + this.value);" style="width: 100px; padding: 0.45rem; text-align: right; background: var(--bg-primary); color: var(--text-main); border: 1px solid var(--border-subtle); border-radius: 4px; font-weight: 700;">
      </td>
      <td>
        <button onclick="if(confirm('Delete system architecture from inventory?')){ ZenvyraStore.delete('${sys.id}'); renderAdminInventory(); showAdminToast('🗑️ System removed from catalog.'); }" class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.82rem; color: #EF4444; border-color: #EF4444;">Delete</button>
      </td>
    </tr>
  `).join('');
}

async function renderRnDTable() {
  const tbody = document.getElementById('rnd-table-body');
  if (!tbody) return;

  tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 3rem; color: var(--text-muted); font-family: var(--font-mono);">🔄 Connecting to Firebase Cloud Infrastructure...</td></tr>`;

  let inquiries = [];
  if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.getRnDInquiries === 'function') {
    inquiries = await window.ZenvyraFirebase.getRnDInquiries();
  } else {
    try { inquiries = JSON.parse(localStorage.getItem('zenvyra_rnd_saved_briefs') || '[]'); } catch(e){}
  }

  if (inquiries.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 4rem; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔬</div>
          <strong style="font-size: 1.1rem; color: var(--text-main); display: block; margin-bottom: 0.2rem;">No R&D Briefs Recorded Yet</strong>
          <span>When clients submit customized engineering objectives on the live storefront, they will populate here instantly from Firebase!</span>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = inquiries.map((item, index) => {
    const cleanPhone = (item.phone || '').replace(/[^0-9]/g, '');
    const waUrl = cleanPhone ? `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}?text=${encodeURIComponent("Hello " + (item.name || 'Engineer') + ", regarding your ZENVYRA R&D specifications: '" + (item.query || '').slice(0, 50) + "...' - we have assigned our senior architecture lead to your consultation.")}` : '#';

    return `
      <tr>
        <td style="white-space: nowrap;">
          <span style="display: block; font-weight: 700; color: var(--brand-primary); font-size: 0.85rem;">${item.createdDate || new Date(item.timestamp || Date.now()).toLocaleDateString()}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${item.createdTime || 'Recent'}</span>
        </td>
        <td>
          <strong style="color: var(--text-main); font-size: 1rem;">${item.name || 'Unnamed Client'}</strong>
          <span style="display: block; font-size: 0.78rem; color: #10B981; font-family: var(--font-mono); margin-top: 0.2rem;">● CLOUD_RECORD</span>
        </td>
        <td>
          <span style="font-family: var(--font-mono); color: var(--text-main); font-size: 0.95rem;">${item.phone || 'N/A'}</span>
        </td>
        <td style="max-width: 420px; line-height: 1.5; color: var(--text-muted); font-size: 0.92rem;">
          <div style="background: var(--bg-primary); padding: 0.8rem 1rem; border-radius: 6px; border: 1px solid var(--border-subtle); max-height: 100px; overflow-y: auto;">
            ${item.query || 'No specification notes provided.'}
          </div>
        </td>
        <td style="text-align: center;">
          ${cleanPhone ? `
            <a href="${waUrl}" target="_blank" class="btn" style="background: #10B981; color: white; padding: 0.55rem 1rem; font-size: 0.85rem; font-weight: 700; border-radius: 6px; display: inline-flex; align-items: center; gap: 0.4rem; text-decoration: none; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">
              <span>💬 Reply in WhatsApp</span>
            </a>
          ` : `<span style="color: var(--text-muted);">Invalid Number</span>`}
        </td>
      </tr>
    `;
  }).join('');
}

function switchAdminTab(tabName, btnEl) {
  document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const invSection = document.getElementById('section-inventory');
  const rndSection = document.getElementById('section-rnd');

  if (invSection && rndSection) {
    if (tabName === 'inventory') {
      invSection.style.display = 'block';
      rndSection.style.display = 'none';
    } else {
      invSection.style.display = 'none';
      rndSection.style.display = 'block';
      renderRnDTable(); // Refresh from Firebase
    }
  }
}

function showAdminToast(msg) {
  const t = document.getElementById('admin-toast');
  if (!t) return;
  t.innerText = msg;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 3500);
}

function openAddProductModal() {
  const m = document.getElementById('add-product-modal');
  if (m) m.style.display = 'flex';
}

function closeAddProductModal() {
  const m = document.getElementById('add-product-modal');
  if (m) m.style.display = 'none';
}

function executeBulkPriceCalibration() {
  const targetCategory = document.getElementById('bulk-target-category')?.value || 'ALL';
  const newPriceVal = document.getElementById('bulk-new-price')?.value.trim() || '';

  if (!newPriceVal) {
    showAdminToast('⚠️ Please enter a valid INR price value (e.g., ₹899 or 899)');
    return;
  }
  
  let formattedPrice = newPriceVal;
  if (!formattedPrice.startsWith('₹') && !isNaN(parseInt(formattedPrice.replace(/,/g, '')))) {
    formattedPrice = '₹' + parseInt(formattedPrice.replace(/[^0-9]/g, ''), 10).toLocaleString('en-IN');
  }

  const all = ZenvyraStore.getAll();
  let updatedCount = 0;

  const modifiedList = all.map(sys => {
    const sysCat = (sys.categoryLabel || sys.category || sys.domain || '').toUpperCase();
    const rawCat = (sys.category || '').toLowerCase();
    const sysId = (sys.id || '').toLowerCase();
    const isHardware = sysId.startsWith('bot-') || rawCat === 'iot' || sysCat.includes('ROBOTICS') || sysCat.includes('HARDWARE') || sysCat.includes('IOT');

    let isMatch = true;
    if (targetCategory === 'HARDWARE') isMatch = isHardware;
    else if (targetCategory === 'SOFTWARE') isMatch = !isHardware;
    else if (targetCategory === 'AI') isMatch = !isHardware && (rawCat === 'ai' || sysCat.includes('AI') || sysCat.includes('DEEP'));
    else if (targetCategory === 'BLOCKCHAIN') isMatch = !isHardware && (rawCat === 'blockchain' || sysCat.includes('BLOCKCHAIN') || sysCat.includes('WEB3'));
    else if (targetCategory === 'WEB') isMatch = !isHardware && (rawCat === 'web' || sysCat.includes('WEB') || sysCat.includes('APP'));
    else if (targetCategory === 'DATA') isMatch = !isHardware && (rawCat === 'datascience' || rawCat === 'mba' || sysCat.includes('DATA') || sysCat.includes('CYBER'));

    if (isMatch) {
      sys.price = formattedPrice;
      updatedCount++;
      if (window.ZenvyraFirebase && typeof window.ZenvyraFirebase.updateProduct === 'function') {
        try { window.ZenvyraFirebase.updateProduct(sys.id, { price: formattedPrice }); } catch(e) {}
      }
    }
    return sys;
  });

  if (updatedCount > 0) {
    ZenvyraStore.save(modifiedList);
    if (typeof renderAdminInventory === 'function') renderAdminInventory();
    showAdminToast(`⚡ Successfully calibrated pricing for ${updatedCount} architectures to ${formattedPrice}!`);
  } else {
    showAdminToast(`ℹ️ No systems matched target category (${targetCategory}).`);
  }
}

/* ==========================================================================
   11. Document Ready & Initialization Boot
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  if (document.getElementById('projects-grid')) {
    initCatalogEngine();
    init3DHeroStudio();
    initScrollReveal();
    initStatCounters();
  }
  if (document.getElementById('admin-table-body') || document.getElementById('rnd-table-body')) {
    initAdminEngine();
  }
  
  // Expose global controller actions
  window.filterCatalog = filterCatalog;
  window.filterByTechTag = filterByTechTag;
  window.sortCatalog = sortCatalog;
  window.searchCatalog = searchCatalog;
  window.toggleTheme = toggleTheme;
  window.toggleMobileMenu = toggleMobileMenu;
  window.openProjModal = openProjModal;
  window.closeProjModal = closeProjModal;
  window.openBuyModal = openBuyModal;
  window.closeBuyModal = closeBuyModal;
  window.openInquiryModal = openInquiryModal;
  window.closeInquiryModal = closeInquiryModal;
  window.handleBuySubmit = handleBuySubmit;
  window.handleInquirySubmit = handleInquirySubmit;
  window.openAddProductModal = openAddProductModal;
  window.closeAddProductModal = closeAddProductModal;
  window.switchAdminTab = switchAdminTab;
  window.renderRnDTable = renderRnDTable;
  window.executeBulkPriceCalibration = executeBulkPriceCalibration;
  window.ZenvyraStore = ZenvyraStore;
});


