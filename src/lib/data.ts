export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDesc: string;
  type: 'IDEA_ONLY' | 'KIT_ONLY' | 'FULL_PROJECT';
  price: number;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  category: string;
  techStack: string[];
  estimatedHours: number;
  features: string[];
  outcomes: string[];
  scope: string[];
  rating: number;
  reviewsCount: number;
  images: string[];
  architecture: string;
  downloads?: {
    sourceCode: string;
    ppt: string;
    documentation: string;
    datasets: string;
    reports: string;
    architectureFiles: string;
  };
  isTrending: boolean;
}

export interface Mentor {
  id: string;
  name: string;
  avatar: string;
  role: string;
  company: string;
  experienceYrs: number;
  specialties: string[];
  bio: string;
  rating: number;
  reviewsCount: number;
  pricingPerHr: number;
  availability: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: 'AI' | 'Data Science' | 'Career' | 'Interview Preparation' | 'Technology';
  image: string;
  tags: string[];
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: string;
}

export const CATEGORIES = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Deep Learning",
  "Blockchain",
  "Cyber Security",
  "Cloud Computing",
  "IoT",
  "Web Development",
  "Mobile Development",
  "Computer Vision",
  "Generative AI"
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "AI-Powered Visual Defect Detection System",
    slug: "ai-visual-defect-detection",
    description: "Real-time automated manufacturing quality inspection using Deep Learning YOLOv8 Models.",
    longDesc: "This project implements an enterprise-grade automated defect detection system designed for manufacturing lines. Utilizing YOLOv8 object detection trained on custom defect datasets, it identifies surface blemishes, cracks, and structural anomalies in real time. It includes an edge-deployment wrapper, a dashboard for factory operators, and an automated alert system when defect rates cross a defined threshold.",
    type: "FULL_PROJECT",
    price: 3499,
    difficulty: "ADVANCED",
    category: "Computer Vision",
    techStack: ["PyTorch", "OpenCV", "YOLOv8", "Next.js", "FastAPI"],
    estimatedHours: 45,
    features: [
      "Real-time object detection at 60 FPS",
      "Custom dataset annotation & augmentation guidelines",
      "FastAPI backend for low latency model inference",
      "Next.js dashboard with live stream and defect metrics",
      "SMTP/Telegram alert system for immediate escalation"
    ],
    outcomes: [
      "Mastery of PyTorch training workflows for object detection",
      "Understanding OpenCV image processing pipelines",
      "Building full-stack AI dashboards with Next.js & WebSockets",
      "Deploying Deep Learning models with ONNX runtime for speed"
    ],
    scope: [
      "Integration with robotic arms for automated sorting",
      "Cloud aggregation of defect telemetry across multiple factories",
      "Self-healing active learning loops based on operator overrides"
    ],
    rating: 4.8,
    reviewsCount: 34,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=800&auto=format&fit=crop&q=80"
    ],
    architecture: "Edge Camera -> Local OpenCV Processor -> FastAPI YOLOv8 Inference -> WebSocket Server -> Next.js Frontend Dashboard",
    downloads: {
      sourceCode: "/downloads/defect-detection-src.zip",
      ppt: "/downloads/defect-detection-presentation.pptx",
      documentation: "/downloads/defect-detection-docs.pdf",
      datasets: "https://roboflow.com/defect-detection-dataset-placeholder",
      reports: "/downloads/defect-detection-report.pdf",
      architectureFiles: "/downloads/defect-detection-architecture.png"
    },
    isTrending: true
  },
  {
    id: "proj-2",
    title: "Decentralized Micro-Finance Platform",
    slug: "decentralized-micro-finance",
    description: "Peer-to-peer lending and borrowing application using Ethereum Smart Contracts and Web3.",
    longDesc: "A blockchain-powered peer-to-peer micro-lending framework targeting students and small businesses. By bypassing traditional banks, this project enables users to borrow fractional funds secured by crypto collaterals. Smart contracts manage interest rates dynamically based on liquidity pools, ensuring transparency, safety, and minimal transaction fees.",
    type: "FULL_PROJECT",
    price: 2999,
    difficulty: "INTERMEDIATE",
    category: "Blockchain",
    techStack: ["Solidity", "Hardhat", "Ethers.js", "Next.js", "Tailwind CSS"],
    estimatedHours: 35,
    features: [
      "Staking pools for automated liquidity providers",
      "ERC-20 token wrapper for custom credit scores",
      "Metamask/Web3Auth wallet login integration",
      "Dynamic interest calculator based on loan-to-value (LTV) ratios",
      "Automated liquidation engine triggered by price feeds"
    ],
    outcomes: [
      "Writing secure Solidity smart contracts & writing unit tests in Hardhat",
      "Interfacing standard UI components with Ethereum network using Ethers.js",
      "Designing trustless financial instruments and managing gas cost optimizations"
    ],
    scope: [
      "Cross-chain asset transfers using Chainlink CCIP",
      "Zero-Knowledge (ZK) Proofs for anonymous KYC verification",
      "Social collateral lending models"
    ],
    rating: 4.6,
    reviewsCount: 22,
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=80"
    ],
    architecture: "React Web3 Client -> Ethers.js Provider -> Ethereum Smart Contracts (Solidity) -> IPFS Storage",
    downloads: {
      sourceCode: "/downloads/defi-microfinance-src.zip",
      ppt: "/downloads/defi-microfinance-presentation.pptx",
      documentation: "/downloads/defi-microfinance-docs.pdf",
      datasets: "https://etherscan.io/placeholder-pool-data",
      reports: "/downloads/defi-microfinance-report.pdf",
      architectureFiles: "/downloads/defi-microfinance-architecture.png"
    },
    isTrending: true
  },
  {
    id: "proj-3",
    title: "AI-Powered Medical Image Segmentation",
    slug: "ai-medical-image-segmentation",
    description: "Brain tumor detection and region extraction using UNet Architecture in PyTorch.",
    longDesc: "This project focuses on biomedical imaging analysis, specifically segmenting brain MRI scans to isolate tumors. Built on the classic UNet CNN architecture, the project includes raw data preprocessing, dice coefficient optimization, and an easy-to-use web interface for radiologists to upload scans and view segmentation overlays instantly.",
    type: "FULL_PROJECT",
    price: 4999,
    difficulty: "ADVANCED",
    category: "Deep Learning",
    techStack: ["PyTorch", "Flask", "React", "Tailwind CSS", "NumPy"],
    estimatedHours: 60,
    features: [
      "UNet convolutional neural network trained on BraTS dataset",
      "Data augmentation including elastic deformations and affine transforms",
      "Interactive slider showing slice-by-slice scan segmentation",
      "PDF medical report generator with diagnostic highlights",
      "Dual GPU training compatibility script"
    ],
    outcomes: [
      "In-depth knowledge of semantic segmentation models",
      "Handling DICOM and NIfTI medical imaging formats",
      "Optimizing overlapping loss parameters like Dice & Focal loss",
      "Building safe medical-tier dashboards"
    ],
    scope: [
      "Multi-class segmentation separating tumor core, edema, and enhancing tumor",
      "Transformer-based Medical segmentations (Swin UNETR)",
      "FDA pre-validation compliance report generator"
    ],
    rating: 4.9,
    reviewsCount: 18,
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80"
    ],
    architecture: "User Browser -> React Frontend -> Flask Model Host -> PyTorch UNet (CUDA) -> Segmented Overlay -> JSON / PNG Response",
    downloads: {
      sourceCode: "/downloads/medical-unet-src.zip",
      ppt: "/downloads/medical-unet-presentation.pptx",
      documentation: "/downloads/medical-unet-docs.pdf",
      datasets: "https://kaggle.com/brats-dataset-placeholder",
      reports: "/downloads/medical-unet-report.pdf",
      architectureFiles: "/downloads/medical-unet-architecture.png"
    },
    isTrending: false
  },
  {
    id: "proj-4",
    title: "Smart Crop Health Monitoring IoT Kit",
    slug: "smart-crop-health-monitoring",
    description: "IoT soil parameters tracker and disease forecasting hub using Raspberry Pi and Sensors.",
    longDesc: "An integrated Hardware-Software project that measures soil moisture, ambient temperature, humidity, and sunlight intensity. Using an ESP32 micro-controller transmitting data via MQTT to a local Node-RED server, the system predicts crop diseases using weather data feeds and warns farmers via sms in vernacular languages.",
    type: "KIT_ONLY",
    price: 5499,
    difficulty: "INTERMEDIATE",
    category: "IoT",
    techStack: ["C++", "Arduino", "ESP32", "Node.js", "MQTT", "React"],
    estimatedHours: 30,
    features: [
      "Micro-controller source code (C++) with deep sleep optimizations",
      "MQTT Broker message broker architecture",
      "Moisture, Temp, Humidity and UV index sensor integrations",
      "Rechargeable battery powered with solar panel layout",
      "PWA dashboard for offline notifications"
    ],
    outcomes: [
      "Programming microcontroller inputs and sensor calibration",
      "MQTT protocol communication under unstable cellular grids",
      "Building offline-capable progressive web apps (PWAs) with React"
    ],
    scope: [
      "Autonomous solar pump triggers when moisture falls below critical level",
      "Pest identification via attached ESP32-CAM module",
      "Community weather mapping networks"
    ],
    rating: 4.5,
    reviewsCount: 15,
    images: [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1463123081488-729f1a8ee3d4?w=800&auto=format&fit=crop&q=80"
    ],
    architecture: "ESP32 Sensors -> MQTT Client -> HiveMQ -> Node.js Backend API -> MongoDB -> Next.js Realtime Charts",
    downloads: {
      sourceCode: "/downloads/iot-farm-src.zip",
      ppt: "/downloads/iot-farm-presentation.pptx",
      documentation: "/downloads/iot-farm-docs.pdf",
      datasets: "/downloads/iot-farm-sample-sensor-data.csv",
      reports: "/downloads/iot-farm-report.pdf",
      architectureFiles: "/downloads/iot-farm-architecture.png"
    },
    isTrending: true
  },
  {
    id: "proj-5",
    title: "AI Project Proposal & Idea Blueprint",
    slug: "ai-proposal-idea-blueprint",
    description: "Complete architectural blueprint, deliverables roadmap, and research outline for a next-gen LLM Agent.",
    longDesc: "This is a detailed Project Idea Store blueprint. It provides the exact layout, problem definition, technology selection matrix, UI wireframes, and sequential API flow charts for building an autonomous generative customer support agent with RAG. It helps students submit comprehensive final-year synopses immediately.",
    type: "IDEA_ONLY",
    price: 499,
    difficulty: "BEGINNER",
    category: "Generative AI",
    techStack: ["LangChain", "VectorDB", "LlamaIndex", "GPT-4o"],
    estimatedHours: 10,
    features: [
      "Approved Academic format synopsis template (Word & PDF)",
      "High-res architecture layout PDF",
      "Complete Step-by-Step implementation roadmap (Gantt style)",
      "100+ sample interview/Viva questions with answers",
      "Preconfigured Boilerplate repository link"
    ],
    outcomes: [
      "Clear idea validation matching industrial demands",
      "Structure of Retrieval-Augmented Generation systems",
      "Designing complex stateful agent workflows using LangGraph"
    ],
    scope: [
      "Ready to be deployed into corporate clouds",
      "Extendable to voice call automation via Twilio"
    ],
    rating: 4.7,
    reviewsCount: 48,
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
    ],
    architecture: "Detailed System Design Document featuring LangChain flow, Vector database indexes, and React state stores",
    downloads: {
      sourceCode: "/downloads/llm-agent-boilerplate.zip",
      ppt: "/downloads/llm-agent-viva-ppt.pptx",
      documentation: "/downloads/llm-agent-synopsis.pdf",
      datasets: "/downloads/llm-agent-sample-kb.json",
      reports: "/downloads/llm-agent-academic-report.pdf",
      architectureFiles: "/downloads/llm-agent-diagram.png"
    },
    isTrending: false
  }
];

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "ment-1",
    name: "Dr. Ananya Iyer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "Senior AI Scientist",
    company: "Google DeepMind",
    experienceYrs: 8,
    specialties: ["Generative AI", "Computer Vision", "Deep Learning"],
    bio: "Ananya has published over 15 papers in top-tier conferences like CVPR and NeurIPS. She specializes in guiding final year students to build publication-grade AI implementations and secure research fellowships.",
    rating: 4.95,
    reviewsCount: 142,
    pricingPerHr: 1200,
    availability: ["Monday 6:00 PM - 8:00 PM", "Saturday 10:00 AM - 2:00 PM"]
  },
  {
    id: "ment-2",
    name: "Vikram Malhotra",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "Principal Blockchain Architect",
    company: "Polygon Labs",
    experienceYrs: 10,
    specialties: ["Blockchain", "Solidity", "Cyber Security"],
    bio: "Vikram was one of the early builders of Ethereum smart contract adapters in India. He conducts intensive system mock reviews, Solidity code optimizations, and helps teams launch project ideas as startups.",
    rating: 4.88,
    reviewsCount: 96,
    pricingPerHr: 1500,
    availability: ["Wednesday 7:00 PM - 9:00 PM", "Sunday 11:00 AM - 3:00 PM"]
  },
  {
    id: "ment-3",
    name: "Rohan Das",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "Staff Engineering Manager",
    company: "Stripe India",
    experienceYrs: 12,
    specialties: ["Web Development", "Cloud Computing", "System Design"],
    bio: "Rohan leads core developer API teams at Stripe. He specializes in full-stack project refactoring, microservices design, and interview/viva preparation for landing placements at MAANG companies.",
    rating: 4.92,
    reviewsCount: 180,
    pricingPerHr: 1000,
    availability: ["Thursday 8:00 PM - 10:00 PM", "Saturday 3:00 PM - 6:00 PM"]
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "How to Build a Final Year Project That Companies Actually Value",
    slug: "build-valuable-final-year-project",
    excerpt: "Ditch the standard library management systems. Learn how choosing industrial problems and implementing robust architectures gets you hired.",
    content: "## The Plight of Academic Projects\nMost university final year projects end up in a drawer. Recruiters see the same standard projects (like Chat apps or Movie Recommender systems) on hundreds of resumes. To stand out, you need to solve real-world problems. This guide outlines how to pick a high-impact topic, build clean system architectures, write clean testing files, and document everything to impress technical interviewers.\n\n### Step 1: Identify Actual Friction Points\nInstead of copy-pasting code, talk to local businesses, open source maintainers, or inspect recent GitHub issues. For instance, build an AI tool that helps local grocery stores manage stock, or a blockchain tool for verifiable university credentials. \n\n### Step 2: Focus on the Non-Functional Requirements\nRecruiters don't just care that it works. They care about:\n- **Scale**: How does it behave with 10,000 requests?\n- **Monitoring**: Are errors logged correctly using tools like Sentry?\n- **Testing**: Is there a code coverage above 80%?\n- **CI/CD**: Does it deploy automatically to Vercel/AWS?\n\nBy adding robust logs, unit tests, and database migrations, you transform a student project into a professional-grade SaaS system.",
    category: "Career",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    tags: ["Final Year Projects", "Engineering Career", "MAANG Placements"],
    authorName: "Rohan Das",
    authorRole: "Staff Engineer, Stripe",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    publishedAt: "June 12, 2026",
    readTime: "5 min read"
  },
  {
    id: "blog-2",
    title: "Demystifying YOLOv8: Training Custom Object Detectors from Scratch",
    slug: "training-custom-yolov8-object-detectors",
    excerpt: "A complete walkthrough of collecting, labeling, and training a neural network model to recognize defect hotspots.",
    content: "## Deep Learning in Manufacturing\nAutomated visual inspection has revolutionized modern production lines. This article provides a comprehensive hands-on guide to training a custom YOLOv8 model for industrial defects.\n\n### 1. Data Collection & Labeling\nGarbage in, garbage out. High-quality data is key. Collect at least 500 images of the defect under consistent lighting. Use annotation tools like Roboflow or CVAT to draw bounding boxes around blemishes, labeling them accurately.\n\n### 2. Model Training with PyTorch\nConfigure the training configuration file, load the YOLOv8-small pre-trained weights, and trigger the training script. We discuss optimizer parameters (SGD vs AdamW) and metrics like mAP50-95 that determine model accuracy.\n\n```python\nfrom ultralytics import YOLO\n\n# Load a model\nmodel = YOLO('yolov8s.pt')  # load a pretrained model\n\n# Train the model\nresults = model.train(data='custom_dataset.yaml', epochs=50, imgsz=640)\n```\n\nRead our details page implementation code to find out how to pipe these visual frames into a live web UI using React and Websockets.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&auto=format&fit=crop&q=80",
    tags: ["Computer Vision", "YOLOv8", "Deep Learning", "Python"],
    authorName: "Dr. Ananya Iyer",
    authorRole: "AI Scientist, DeepMind",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    publishedAt: "June 08, 2026",
    readTime: "8 min read"
  }
];

export const MOCK_TESTIMONIALS = [
  {
    id: "test-1",
    name: "Arjun Verma",
    college: "VIT Vellore",
    text: "ProjectVerse completely saved my final year project. I bought the visual defect detection kit, followed the detailed roadmap, and booked Dr. Ananya for 1:1 Viva prep. The external examiner was blown away by the live webcam dashboard. I got an A+ and landed a job at Nvidia!",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80"
  },
  {
    id: "test-2",
    name: "Sneha Reddy",
    college: "PES University, Bangalore",
    text: "The AI Idea Generator saved me weeks of brainstorming. The system laid out the entire stack, architecture diagram, and data flows. I purchased the Decentralized Micro-Finance blueprint. Clean, well-documented, and the Discord mentor channel answered my Solidity gas queries in minutes.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80"
  }
];
