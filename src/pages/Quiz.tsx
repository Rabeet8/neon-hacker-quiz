
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { getMockQuiz } from "@/services/mockDataService";
import { QuizQuestion, Quiz as QuizType, QuizResult } from "@/types/quiz";
import MainLayout from "@/components/layout/MainLayout";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuestionDisplay from "@/components/quiz/QuestionDisplay";
import ResultsScreen from "@/components/quiz/ResultsScreen";
import QuizTimer from "@/components/quiz/QuizTimer";
import { generateQuizResult } from "@/utils/quizUtils";

const Quiz = () => {
  const { categoryId = "", modeId = "" } = useParams<{ categoryId: string; modeId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Quiz state
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3); // For survival mode
  const [startTime, setStartTime] = useState(Date.now());

  // Game mode specific states
  const isSurvivalMode = modeId === "mode2";
  const isChallengeMode = modeId === "mode3";
  
  // Initialize quiz
  useEffect(() => {
    try {
      const quizData = getMockQuiz(categoryId, modeId);
      setQuiz(quizData);
      
      // Set initial time based on mode
      if (isChallengeMode) {
        // Challenge mode has total time limit
        setTimeRemaining(quizData.timeLimit);
      } else if (isSurvivalMode) {
        // Survival mode has per-question time limit
        setTimeRemaining(20); // 20 seconds per question in survival
      } else {
        // Quick play has per-question time limit
        setTimeRemaining(15); // 15 seconds per question in quick play
      }
      
      setStartTime(Date.now());
      
      toast({
        title: "Quiz Started",
        description: `${quizData.category.name} - ${isSurvivalMode ? "Survival Mode" : isChallengeMode ? "Challenge Mode" : "Quick Play"}`,
        variant: "default",
      });
    } catch (error) {
      console.error("Error loading quiz:", error);
      toast({
        title: "Error",
        description: "Failed to load quiz. Please try again.",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [categoryId, modeId, navigate, toast, isSurvivalMode, isChallengeMode]);

  // Timer effect
  useEffect(() => {
    if (!quiz || isQuizCompleted || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          
          // In survival mode, wrong answer when time runs out costs a life
          if (isSurvivalMode) {
            handleLifeLost();
          } else if (isChallengeMode) {
            // Time's up for entire challenge
            finishQuiz();
          } else {
            // Time's up for this question in quick play
            handleAnswerSubmit(""); // Empty answer means timeout
          }
          
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quiz, timeRemaining, isQuizCompleted, isSurvivalMode, isChallengeMode, currentQuestionIndex]);

  // Handle life lost in survival mode
  const handleLifeLost = useCallback(() => {
    setLives(prev => {
      const newLives = prev - 1;
      
      if (newLives <= 0) {
        // Game over in survival mode
        finishQuiz();
        return 0;
      }
      
      // Reset timer for next question
      setTimeRemaining(20);
      handleAnswerSubmit("");
      return newLives;
    });
  }, []);

  // Handle answer submission
  const handleAnswerSubmit = useCallback((selectedAnswer: string) => {
    if (!quiz) return;
    
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    // Update answers array
    setAnswers(prev => [...prev, selectedAnswer]);
    
    // Update streak
    if (isCorrect) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
      
      // In survival mode, wrong answer costs a life
      if (isSurvivalMode) {
        setLives(prev => {
          const newLives = prev - 1;
          if (newLives <= 0) {
            finishQuiz();
            return 0;
          }
          return newLives;
        });
      }
    }
    
    // Move to next question or finish quiz
    if (currentQuestionIndex < quiz.questions.length - 1 && 
        (!isSurvivalMode || lives > 0)) {
      setCurrentQuestionIndex(prev => prev + 1);
      
      // Reset timer for next question
      if (!isChallengeMode) {
        // For quick play and survival, reset timer per question
        setTimeRemaining(isSurvivalMode ? 20 : 15);
      }
    } else {
      finishQuiz();
    }
  }, [quiz, currentQuestionIndex, isSurvivalMode, isChallengeMode, lives]);

  // Finish quiz and calculate results
  const finishQuiz = useCallback(() => {
    if (!quiz) return;
    
    setIsQuizCompleted(true);
    
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const result = generateQuizResult(quiz, answers, timeTaken, streak);
    
    setQuizResult(result);
    
    toast({
      title: "Quiz Completed!",
      description: `You scored ${result.score} points with ${result.accuracy}% accuracy`,
      variant: "default",
    });
  }, [quiz, answers, startTime, streak, toast]);

  // Navigate back to home
  const handleBackToHome = () => {
    navigate("/");
  };

  // Try again with same quiz
  const handleTryAgain = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsQuizCompleted(false);
    setStreak(0);
    setLives(3);
    setStartTime(Date.now());
    
    if (isChallengeMode && quiz) {
      setTimeRemaining(quiz.timeLimit);
    } else {
      setTimeRemaining(isSurvivalMode ? 20 : 15);
    }
  };

  if (!quiz) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <div className="cyber-loading"></div>
          <p className="mt-4 text-cyber-neon-blue animate-pulse">INITIALIZING QUIZ MATRIX...</p>
        </div>
      </MainLayout>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <MainLayout>
      {isQuizCompleted ? (
        <ResultsScreen 
          result={quizResult!}
          onTryAgain={handleTryAgain}
          onBackToHome={handleBackToHome}
        />
      ) : (
        <div className="relative animate-fade-in">
          {/* Quiz header with progress and mode information */}
          <QuizHeader 
            quiz={quiz}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={isSurvivalMode ? "∞" : quiz.questions.length.toString()}
            streak={streak}
            lives={isSurvivalMode ? lives : undefined}
          />
          
          {/* Timer display */}
          <QuizTimer 
            timeRemaining={timeRemaining} 
            totalTime={isChallengeMode ? quiz.timeLimit : (isSurvivalMode ? 20 : 15)}
            mode={modeId}
          />
          
          {/* Question display */}
          <QuestionDisplay
            question={currentQuestion}
            onAnswerSubmit={handleAnswerSubmit}
            timeRemaining={timeRemaining}
          />
        </div>
      )}
    </MainLayout>
  );
};

export default Quiz;
