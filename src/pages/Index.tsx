import { useState } from "react";
import { LandingPage } from "@/components/views/LandingPage";
import { QuizView } from "@/components/views/QuizView";
import { AppView } from "@/components/views/AppView";
import { ChatView } from "@/components/views/ChatView";
import { UserProfile, ChatMessage } from "@/types";
import { getAIResponse } from "@/utils/aiHelper";

type ViewType = 'landing' | 'quiz' | 'app' | 'chat';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Olá! Sou sua assistente de diabetes 24h. Como posso ajudar você hoje? 💚',
      timestamp: new Date()
    }
  ]);

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleCompleteQuiz = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentView('app');
  };

  const handleOpenChat = () => {
    setCurrentView('chat');
  };

  const handleBackToApp = () => {
    setCurrentView('app');
  };

  const handleSendMessage = (message: string) => {
    if (!userProfile) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const aiResponse = getAIResponse(message, userProfile);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  return (
    <>
      {currentView === 'landing' && <LandingPage onStartQuiz={handleStartQuiz} />}
      {currentView === 'quiz' && <QuizView onComplete={handleCompleteQuiz} />}
      {currentView === 'app' && userProfile && (
        <AppView userProfile={userProfile} onOpenChat={handleOpenChat} />
      )}
      {currentView === 'chat' && userProfile && (
        <ChatView 
          messages={chatMessages}
          onSendMessage={handleSendMessage}
          onBack={handleBackToApp}
          userName={userProfile.nome}
        />
      )}
    </>
  );
};

export default Index;
