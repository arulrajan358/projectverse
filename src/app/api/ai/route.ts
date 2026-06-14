import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const query = (prompt || "").toLowerCase();

    // Default responses based on keywords
    let title = "AI-Driven Adaptive Learning Platform";
    let description = "A student-centric learning hub that dynamically changes curriculum paths based on quick, interactive micro-assessments.";
    let techStack = ["Next.js", "Python", "FastAPI", "Prisma", "PostgreSQL", "Gemini API"];
    let difficulty: "Beginner" | "Intermediate" | "Advanced" = "Intermediate";
    let estimatedTime = "40 Hours";
    let costEstimate = "₹1,499 (Kit) / Free (Idea Only)";
    let features = [
      "Real-time student diagnostic assessment modules",
      "AI content recommendation system using Gemini API",
      "Interactive dashboard with progress tracking charts",
      "Automatic flashcard generator based on uploaded PDFs"
    ];
    let futureScope = [
      "Integration with classroom virtual learning systems (LMS)",
      "Voice conversational peer tutor avatars",
      "Blockchain-verifiable micro-credential certificates"
    ];

    if (query.includes("blockchain") || query.includes("decentralized") || query.includes("solidity")) {
      title = "Decentralized Academic Credentials Verification Protocol";
      description = "A trustless, secure blockchain-backed ledger that issues tamper-proof university diplomas and certificates verified via smart contracts.";
      techStack = ["Solidity", "Hardhat", "Next.js", "Ethers.js", "IPFS"];
      difficulty = "Advanced";
      estimatedTime = "50 Hours";
      costEstimate = "₹2,999 (Code Kit) / Free (Idea Only)";
      features = [
        "Cryptographically signed ERC-721 credential tokens",
        "Automated PDF validator that parses metadata hashes",
        "Administrative registry keys for approved institutions",
        "Metamask/Web3 wallet login bindings"
      ];
      futureScope = [
        "Dynamic credential updates matching career track progressions",
        "Cross-chain validation layers using Chainlink",
        "Zero-knowledge identity audits (ZK-KYC)"
      ];
    } else if (query.includes("opencv") || query.includes("image") || query.includes("vision") || query.includes("defect")) {
      title = "Smart Traffic Monitoring & Density Sizing Hub";
      description = "Real-time municipal traffic density profiling and automated signaling optimization using YOLOv8 model inference over local street cameras.";
      techStack = ["Python", "OpenCV", "YOLOv8", "FastAPI", "Next.js"];
      difficulty = "Advanced";
      estimatedTime = "45 Hours";
      costEstimate = "₹3,499 (Code & Video Guide)";
      features = [
        "Multi-lane vehicle count logic with bounding box tracking",
        "Dynamic signal duration calculations based on car queue length",
        "Emergency vehicle (ambulance) detection prioritization overrides",
        "Historical traffic analytical charts dashboard"
      ];
      futureScope = [
        "Anomalous event logs identifying accidents/crashes",
        "License plate extraction using OCR models",
        "Municipal smart grid connection blueprints"
      ];
    } else if (query.includes("cyber") || query.includes("security") || query.includes("phishing") || query.includes("network")) {
      title = "AI-Driven Phishing Mail & Domain Detector";
      description = "Automated email parsing and domain heuristics analyzer identifying credential harvesting pages using Natural Language Processing models.";
      techStack = ["Python", "Scikit-Learn", "FastAPI", "React", "Chrome Extension SDK"];
      difficulty = "Intermediate";
      estimatedTime = "35 Hours";
      costEstimate = "₹1,999 (Code Kit)";
      features = [
        "TF-IDF mail text parser looking for urgencies",
        "WHOIS registrar age and SSL validation scripts",
        "Chrome Extension injecting warnings directly in Gmail client UI",
        "Admin control logs tracking blocked links"
      ];
      futureScope = [
        "Deep link sandbox execution analysis",
        "Autonomous reported domain blacklisting networks",
        "Federated model training over user reports"
      ];
    } else if (query.includes("iot") || query.includes("farm") || query.includes("sensor") || query.includes("crop")) {
      title = "Smart Crop Diagnostic & Precision Soil Hub";
      description = "Microcontroller based farm analyzer measuring moisture, temperature, and sun parameters with MQTT telemetry updates.";
      techStack = ["C++", "Arduino", "ESP32", "MQTT", "Node.js", "React"];
      difficulty = "Intermediate";
      estimatedTime = "30 Hours";
      costEstimate = "₹5,499 (Complete Sensor & Board Kit)";
      features = [
        "Microcontroller sensor polling script (C++) with deep sleep modes",
        "HiveMQ server telemetry client interface",
        "React realtime PWA displaying moisture levels",
        "Agricultural disease forecast feeds"
      ];
      futureScope = [
        "Autonomous water pump solenoid relays",
        "Cam identification of insect colonies",
        "LoRa WAN communication networks"
      ];
    }

    return NextResponse.json({
      title,
      description,
      techStack,
      difficulty,
      estimatedTime,
      costEstimate,
      features,
      futureScope
    });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
