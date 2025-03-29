
import { Quiz, QuizResult } from "@/types/quiz";

// Generate quiz result based on user answers
export const generateQuizResult = (
  quiz: Quiz,
  userAnswers: string[],
  timeTaken: number,
  streak: number
): QuizResult => {
  let correctAnswers = 0;
  let totalScore = 0;
  
  // Calculate correct answers and score
  quiz.questions.forEach((question, index) => {
    const userAnswer = userAnswers[index] || "";
    const isCorrect = userAnswer === question.correctAnswer;
    
    if (isCorrect) {
      correctAnswers += 1;
      
      // Base points
      let questionScore = question.points;
      
      // Add time bonus (faster = more points)
      const timePercentRemaining = (question.timeLimit - 5) / question.timeLimit; // Assuming 5 seconds used
      const timeBonus = Math.floor(question.points * 0.5 * timePercentRemaining);
      
      // Add difficulty bonus
      const difficultyMultiplier = 
        question.difficulty === "easy" ? 1 :
        question.difficulty === "medium" ? 1.5 : 2;
      
      questionScore = Math.floor(questionScore * difficultyMultiplier) + timeBonus;
      
      totalScore += questionScore;
    }
  });
  
  // Add streak bonus
  const streakBonus = streak >= 3 ? streak * 10 : 0;
  totalScore += streakBonus;
  
  // Calculate accuracy
  const accuracy = Math.round((correctAnswers / Math.max(1, userAnswers.length)) * 100);
  
  // Calculate XP earned
  const baseXP = totalScore * 0.1;
  const accuracyBonus = accuracy >= 80 ? 50 : 0;
  const xpEarned = Math.floor(baseXP + accuracyBonus);
  
  return {
    quizId: quiz.id,
    userId: "user1", // Mock user ID
    score: totalScore,
    accuracy,
    timeTaken,
    correctAnswers,
    totalQuestions: quiz.questions.length,
    streak,
    powerUpsUsed: 0, // Not implemented yet
    timestamp: new Date().toISOString(),
    xpEarned
  };
};

// Add CSS animations and styling (not inside TypeScript file, just for reference)
/* 
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

.cyber-loading {
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-top: 3px solid #0ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
*/
