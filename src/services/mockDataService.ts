import { Quiz, QuizCategory, QuizMode, QuizQuestion, LeaderboardEntry, User, Badge, UserStats } from "@/types/quiz";

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

// Network Security Questions
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
  },
  {
    id: "q6",
    question: "What is a honeypot in network security?",
    type: "multiple-choice",
    options: [
      "A sweet treat for hackers",
      "A vulnerable system designed to attract attackers",
      "A security protocol for encrypting data",
      "A type of firewall configuration"
    ],
    correctAnswer: "A vulnerable system designed to attract attackers",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  },
  {
    id: "q7",
    question: "Which encryption type uses the same key for encryption and decryption?",
    type: "multiple-choice",
    options: [
      "Symmetric encryption",
      "Asymmetric encryption",
      "Hashing",
      "Quantum encryption"
    ],
    correctAnswer: "Symmetric encryption",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  },
  {
    id: "q8",
    question: "Man-in-the-middle attacks intercept communication between two parties.",
    type: "true-false",
    options: ["True", "False"],
    correctAnswer: "True",
    difficulty: "easy",
    timeLimit: 10,
    points: 5
  },
  {
    id: "q9",
    question: "What does CSRF stand for in web security?",
    type: "multiple-choice",
    options: [
      "Cross-Site Request Forgery",
      "Client-Server Response Framework",
      "Common Security Risk Factor",
      "Content Security Response Function"
    ],
    correctAnswer: "Cross-Site Request Forgery",
    difficulty: "hard",
    timeLimit: 25,
    points: 20
  },
  {
    id: "q10",
    question: "Which network security tool is primarily used for detecting intrusions?",
    type: "multiple-choice",
    options: [
      "Firewall",
      "IDS (Intrusion Detection System)",
      "Load Balancer",
      "VPN"
    ],
    correctAnswer: "IDS (Intrusion Detection System)",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  }
];

// AI & Machine Learning Questions
const aiMlQuestions: QuizQuestion[] = [
  {
    id: "q11",
    question: "What is the primary goal of supervised learning?",
    type: "multiple-choice",
    options: [
      "To cluster similar data points",
      "To predict outputs based on labeled training data",
      "To reduce the dimensionality of data",
      "To learn without any labeled examples"
    ],
    correctAnswer: "To predict outputs based on labeled training data",
    difficulty: "easy",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q12",
    question: "Which of these is NOT a common type of neural network?",
    type: "multiple-choice",
    options: [
      "Convolutional Neural Network (CNN)",
      "Recurrent Neural Network (RNN)",
      "Linear Regression Network (LRN)",
      "Generative Adversarial Network (GAN)"
    ],
    correctAnswer: "Linear Regression Network (LRN)",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  },
  {
    id: "q13",
    question: "Deep learning is a subset of machine learning.",
    type: "true-false",
    options: ["True", "False"],
    correctAnswer: "True",
    difficulty: "easy",
    timeLimit: 10,
    points: 5
  },
  {
    id: "q14",
    question: "What does GPT stand for in AI language models?",
    type: "multiple-choice",
    options: [
      "General Processing Technology",
      "Generative Pre-trained Transformer",
      "Global Pattern Training",
      "Gradient Process Technique"
    ],
    correctAnswer: "Generative Pre-trained Transformer",
    difficulty: "medium",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q15",
    question: "Which algorithm is commonly used for decision trees in machine learning?",
    type: "multiple-choice",
    options: [
      "K-means",
      "DBSCAN",
      "ID3",
      "Gradient Descent"
    ],
    correctAnswer: "ID3",
    difficulty: "hard",
    timeLimit: 25,
    points: 20
  },
  {
    id: "q16",
    question: "What is the vanishing gradient problem in neural networks?",
    type: "multiple-choice",
    options: [
      "When GPU memory is insufficient",
      "When gradients become too small during backpropagation",
      "When network weights become too large",
      "When input data is not normalized"
    ],
    correctAnswer: "When gradients become too small during backpropagation",
    difficulty: "hard",
    timeLimit: 25,
    points: 20
  },
  {
    id: "q17",
    question: "Reinforcement learning always requires labeled data.",
    type: "true-false",
    options: ["True", "False"],
    correctAnswer: "False",
    difficulty: "medium",
    timeLimit: 15,
    points: 15
  },
  {
    id: "q18",
    question: "Which technique is used to prevent overfitting in machine learning models?",
    type: "multiple-choice",
    options: [
      "Data augmentation",
      "Hyperparameter tuning",
      "Regularization",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  }
];

// Cryptography Questions
const cryptographyQuestions: QuizQuestion[] = [
  {
    id: "q19",
    question: "What is the difference between encryption and hashing?",
    type: "multiple-choice",
    options: [
      "Encryption is two-way, hashing is one-way",
      "Encryption is one-way, hashing is two-way",
      "They are the same thing",
      "Encryption uses keys, hashing doesn't use any keys"
    ],
    correctAnswer: "Encryption is two-way, hashing is one-way",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  },
  {
    id: "q20",
    question: "Which of these is an asymmetric encryption algorithm?",
    type: "multiple-choice",
    options: [
      "AES",
      "Blowfish",
      "RSA",
      "DES"
    ],
    correctAnswer: "RSA",
    difficulty: "easy",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q21",
    question: "In cryptography, a Caesar cipher is an example of a substitution cipher.",
    type: "true-false",
    options: ["True", "False"],
    correctAnswer: "True",
    difficulty: "easy",
    timeLimit: 10,
    points: 5
  },
  {
    id: "q22",
    question: "What does HMAC stand for in cryptography?",
    type: "multiple-choice",
    options: [
      "Hash-based Message Authentication Code",
      "Highly Managed Access Control",
      "Hybrid Method Authentication Cipher",
      "Hash Method Algorithm Computation"
    ],
    correctAnswer: "Hash-based Message Authentication Code",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  },
  {
    id: "q23",
    question: "Which of these is NOT a common use of cryptography?",
    type: "multiple-choice",
    options: [
      "Ensuring data integrity",
      "Authentication",
      "Data compression",
      "Ensuring confidentiality"
    ],
    correctAnswer: "Data compression",
    difficulty: "medium",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q24",
    question: "What is a zero-knowledge proof?",
    type: "multiple-choice",
    options: [
      "A method to prove you know nothing about a subject",
      "A method to prove you know something without revealing what you know",
      "A cryptographic algorithm that uses zero as a seed",
      "A hashing method that returns all zeros"
    ],
    correctAnswer: "A method to prove you know something without revealing what you know",
    difficulty: "hard",
    timeLimit: 25,
    points: 20
  },
  {
    id: "q25",
    question: "Blockchain technology relies heavily on cryptographic hash functions.",
    type: "true-false",
    options: ["True", "False"],
    correctAnswer: "True",
    difficulty: "easy",
    timeLimit: 10,
    points: 5
  }
];

// Hardware Hacking Questions
const hardwareHackingQuestions: QuizQuestion[] = [
  {
    id: "q26",
    question: "What is a side-channel attack in hardware security?",
    type: "multiple-choice",
    options: [
      "Attacking a system through its physical implementation rather than its software",
      "Hacking into a system through an unused network port",
      "Attacking a system from multiple directions simultaneously",
      "Using a secondary computer to launch an attack"
    ],
    correctAnswer: "Attacking a system through its physical implementation rather than its software",
    difficulty: "hard",
    timeLimit: 25,
    points: 20
  },
  {
    id: "q27",
    question: "Which of these is a common hardware vulnerability in IoT devices?",
    type: "multiple-choice",
    options: [
      "Default credentials",
      "Unencrypted data storage",
      "Lack of firmware updates",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    difficulty: "medium",
    timeLimit: 20,
    points: 15
  },
  {
    id: "q28",
    question: "JTAG is primarily used for software debugging, not hardware.",
    type: "true-false",
    options: ["True", "False"],
    correctAnswer: "False",
    difficulty: "medium",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q29",
    question: "What is a hardware keylogger?",
    type: "multiple-choice",
    options: [
      "A software that logs encryption keys",
      "A physical device that records keystrokes",
      "A tool for resetting hardware passwords",
      "A specialized key for locking hardware components"
    ],
    correctAnswer: "A physical device that records keystrokes",
    difficulty: "easy",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q30",
    question: "Which attack involves manipulating a device's temperature to cause errors?",
    type: "multiple-choice",
    options: [
      "Cold boot attack",
      "Thermal imaging attack",
      "Heat manipulation attack",
      "Temperature fault injection"
    ],
    correctAnswer: "Temperature fault injection",
    difficulty: "hard",
    timeLimit: 25,
    points: 20
  },
  {
    id: "q31",
    question: "The Trusted Platform Module (TPM) is a dedicated microprocessor designed to secure hardware.",
    type: "true-false",
    options: ["True", "False"],
    correctAnswer: "True",
    difficulty: "medium",
    timeLimit: 15,
    points: 10
  },
  {
    id: "q32",
    question: "What is 'fuzzing' in the context of hardware security?",
    type: "multiple-choice",
    options: [
      "Adding noise to confuse hardware sensors",
      "Testing hardware with random or invalid inputs to find vulnerabilities",
      "Using static electricity to disrupt circuits",
      "Applying a fuzzy logic algorithm to hardware interfaces"
    ],
    correctAnswer: "Testing hardware with random or invalid inputs to find vulnerabilities",
    difficulty: "hard",
    timeLimit: 20,
    points: 15
  }
];

// Update mock quizzes with all categories
export const mockQuizzes: Quiz[] = [
  {
    id: "quiz1",
    title: "Network Security Basics",
    description: "Test your knowledge of fundamental network security concepts",
    category: mockCategories[0],
    questions: networkSecurityQuestions,
    timeLimit: 150,
    difficulty: "easy"
  },
  {
    id: "quiz2",
    title: "AI & Machine Learning Fundamentals",
    description: "Challenge yourself with questions about artificial intelligence and machine learning",
    category: mockCategories[1],
    questions: aiMlQuestions,
    timeLimit: 180,
    difficulty: "medium"
  },
  {
    id: "quiz3",
    title: "Cryptography Essentials",
    description: "Test your knowledge about encryption, hashing, and secure communications",
    category: mockCategories[2],
    questions: cryptographyQuestions,
    timeLimit: 150,
    difficulty: "medium"
  },
  {
    id: "quiz4",
    title: "Hardware Hacking Challenges",
    description: "Explore the world of physical systems and hardware vulnerabilities",
    category: mockCategories[3],
    questions: hardwareHackingQuestions,
    timeLimit: 200,
    difficulty: "hard"
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

// Mock User Data for Profile
export const mockUser: User = {
  id: "user1",
  username: "NeonHacker",
  avatar: "avatar1.jpg",
  level: 42,
  xp: 9850,
  totalScore: 157240,
  badges: [
    {
      id: "badge1",
      name: "First Blood",
      description: "Complete your first quiz",
      icon: "award",
      unlocked: true
    },
    {
      id: "badge2",
      name: "Perfect Score",
      description: "Get 100% on any quiz",
      icon: "award",
      unlocked: true
    },
    {
      id: "badge3",
      name: "Speed Demon",
      description: "Complete a quiz in under 60 seconds",
      icon: "zap",
      unlocked: true
    },
    {
      id: "badge4",
      name: "Hacker Elite",
      description: "Reach level 40",
      icon: "shield",
      unlocked: true
    },
    {
      id: "badge5",
      name: "Cryptographer",
      description: "Master the Cryptography category",
      icon: "key-square",
      unlocked: false
    }
  ],
  stats: {
    gamesPlayed: 178,
    questionsAnswered: 1462,
    correctAnswers: 1183,
    accuracy: 80.9,
    averageTime: 12.3,
    longestStreak: 23,
    currentStreak: 7,
    powerUpsUsed: 42
  }
};

// Generate a quiz based on category and mode
export const getMockQuiz = (categoryId: string, modeId: string): Quiz => {
  const category = mockCategories.find(c => c.id === categoryId) || mockCategories[0];
  
  // Find questions for the selected category
  let questions: QuizQuestion[] = [];
  switch (category.id) {
    case "cat1": // Network Security
      questions = networkSecurityQuestions;
      break;
    case "cat2": // AI & Machine Learning
      questions = aiMlQuestions;
      break;
    case "cat3": // Cryptography
      questions = cryptographyQuestions;
      break;
    case "cat4": // Hardware Hacking
      questions = hardwareHackingQuestions;
      break;
    default:
      questions = networkSecurityQuestions;
  }
  
  // Determine number of questions and time limit based on mode
  let questionCount = 10;
  let quizTimeLimit = 150;
  let difficulty = "medium";
  
  if (modeId === "mode1") { // Quick Play
    questionCount = 10;
    quizTimeLimit = 150;
    difficulty = "easy";
  } else if (modeId === "mode2") { // Survival mode
    questionCount = 15;
    quizTimeLimit = 300;
    difficulty = "medium";
  } else if (modeId === "mode3") { // Challenge mode
    questionCount = 15;
    quizTimeLimit = 90;
    difficulty = "hard";
  }
  
  // Shuffle and select questions
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffled.slice(0, questionCount);
  
  return {
    id: `quiz-${categoryId}-${modeId}`,
    title: `${category.name} Quiz - ${mockQuizModes.find(m => m.id === modeId)?.name || 'Quick Play'}`,
    description: `Test your knowledge about ${category.name}`,
    category,
    questions: selectedQuestions,
    timeLimit: quizTimeLimit,
    difficulty: difficulty as 'easy' | 'medium' | 'hard',
  };
};
