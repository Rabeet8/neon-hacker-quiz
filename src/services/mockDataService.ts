
import { Quiz, QuizCategory, QuizMode, QuizQuestion, LeaderboardEntry } from "@/types/quiz";

// Mock Categories
export const mockCategories: QuizCategory[] = [
  {
    id: "cat1",
    name: "Network Security",
    description: "Test your knowledge of digital defense systems and vulnerabilities",
    icon: "shield",
    backgroundImage: "network-security.jpg"
  },
  {
    id: "cat2", 
    name: "AI & Machine Learning",
    description: "Challenge yourself with questions about artificial intelligence",
    icon: "brain-circuit",
    backgroundImage: "ai-ml.jpg"
  },
  {
    id: "cat3",
    name: "Cryptography",
    description: "Decode the secrets of encryption and secure communications",
    icon: "key-square",
    backgroundImage: "cryptography.jpg"
  },
  {
    id: "cat4",
    name: "Hardware Hacking",
    description: "Physical systems, IoT devices and hardware vulnerabilities",
    icon: "terminal",
    backgroundImage: "hardware.jpg"
  }
];

// Mock Quiz Modes
export const mockQuizModes: QuizMode[] = [
  {
    id: "mode1",
    name: "Quick Play",
    description: "Fast-paced 10 questions with 15 seconds per question",
    icon: "zap",
    rules: [
      "10 random questions",
      "15 seconds per question",
      "No power-ups allowed"
    ]
  },
  {
    id: "mode2",
    name: "Survival",
    description: "Answer until you make 3 mistakes. Can you survive?",
    icon: "heart",
    rules: [
      "Unlimited questions until you fail",
      "20 seconds per question",
      "3 lives total",
      "Power-ups enabled"
    ]
  },
  {
    id: "mode3",
    name: "Challenge",
    description: "Timed challenge with escalating difficulty",
    icon: "swords",
    rules: [
      "15 questions of increasing difficulty",
      "90 seconds total time limit",
      "Bonus points for speed",
      "Power-ups enabled"
    ]
  }
];

// Mock Questions for Network Security
const networkSecurityQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the primary purpose of a firewall in network security?",
    type: "multiple-choice",
    options: [
      "Monitoring network traffic",
      "Filtering network traffic based on security rules",
      "Encrypting data during transmission",
      "Authenticating users on the network"
    ],
    correctAnswer: "Filtering network traffic based on security rules",
    difficulty: "easy",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q2",
    question: "Which attack involves overwhelming a system with excessive traffic?",
    type: "multiple-choice",
    options: [
      "Man-in-the-middle attack",
      "SQL injection",
      "Denial of Service (DoS) attack",
      "Cross-site scripting"
    ],
    correctAnswer: "Denial of Service (DoS) attack",
    difficulty: "easy",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q3",
    question: "A VPN (Virtual Private Network) encrypts your internet traffic.",
    type: "true-false",
    options: ["True", "False"],
    correctAnswer: "True",
    difficulty: "easy",
    timeLimit: 10,
    points: 5
  },
  {
    id: "q4",
    question: "What security mechanism verifies the integrity of a message?",
    type: "multiple-choice",
    options: [
      "Digital signature",
      "Symmetric encryption",
      "Access control list",
      "Biometric authentication"
    ],
    correctAnswer: "Digital signature",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  },
  {
    id: "q5",
    question: "Which protocol is commonly used to secure web traffic?",
    type: "multiple-choice",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    correctAnswer: "HTTPS",
    difficulty: "easy",
    timeLimit: 15,
    points: 10
  }
];

// Mock Quiz for Network Security
export const mockQuizzes: Quiz[] = [
  {
    id: "quiz1",
    title: "Network Security Basics",
    description: "Test your knowledge of fundamental network security concepts",
    category: mockCategories[0],
    questions: networkSecurityQuestions,
    timeLimit: 120,
    difficulty: "easy"
  }
];

// Mock Leaderboard Data
export const mockLeaderboard: LeaderboardEntry[] = [
  {
    userId: "user1",
    username: "NeonHacker",
    avatar: "avatar1.jpg",
    level: 42,
    score: 9850,
    timeTaken: 237,
    timestamp: new Date().toISOString()
  },
  {
    userId: "user2",
    username: "CyberPunk2077",
    avatar: "avatar2.jpg",
    level: 38,
    score: 9200,
    timeTaken: 245,
    timestamp: new Date().toISOString()
  },
  {
    userId: "user3",
    username: "GhostInTheShell",
    avatar: "avatar3.jpg",
    level: 36,
    score: 8500,
    timeTaken: 263,
    timestamp: new Date().toISOString()
  },
  {
    userId: "user4",
    username: "SynthWave85",
    avatar: "avatar4.jpg",
    level: 29,
    score: 7200,
    timeTaken: 288,
    timestamp: new Date().toISOString()
  },
  {
    userId: "user5",
    username: "NeuralLink",
    avatar: "avatar5.jpg", 
    level: 27,
    score: 6900,
    timeTaken: 312,
    timestamp: new Date().toISOString()
  }
];

// Generate a simple mock quiz based on category and mode
export const getMockQuiz = (categoryId: string, modeId: string): Quiz => {
  const category = mockCategories.find(c => c.id === categoryId) || mockCategories[0];
  
  // Determine number of questions based on mode
  let questionCount = 10;
  let quizTimeLimit = 150;
  
  if (modeId === "mode2") { // Survival mode
    questionCount = 15;
    quizTimeLimit = 300;
  } else if (modeId === "mode3") { // Challenge mode
    questionCount = 15;
    quizTimeLimit = 90;
  }
  
  return {
    id: `quiz-${categoryId}-${modeId}`,
    title: `${category.name} Quiz`,
    description: `Test your knowledge about ${category.name}`,
    category,
    questions: networkSecurityQuestions.slice(0, questionCount),
    timeLimit: quizTimeLimit,
    difficulty: "medium",
  };
};
