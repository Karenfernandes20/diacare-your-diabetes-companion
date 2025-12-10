import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LandingPage } from "@/components/views/LandingPage";
import { QuizView } from "@/components/views/QuizView";
import { AppView } from "@/components/views/AppView";
import { ChatView } from "@/components/views/ChatView";
import { UserProfile, ChatMessage } from "@/types";
import { getAIResponse } from "@/utils/aiHelper";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

type ViewType = 'landing' | 'quiz' | 'app' | 'chat';

const Index = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
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

  useEffect(() => {
    if (!loading && user) {
      // User is logged in, go to quiz or app
      if (!userProfile) {
        setCurrentView('quiz');
      } else {
        setCurrentView('app');
      }
    }
  }, [user, loading, userProfile]);

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleSignup = () => {
    navigate("/auth");
  };

  const handleStartQuiz = () => {
    if (user) {
      setCurrentView('quiz');
    } else {
      navigate("/auth");
    }
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

  const handleLogout = async () => {
    await signOut();
    setUserProfile(null);
    setCurrentView('landing');
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      {currentView === 'landing' && (
        <LandingPage 
          onStartQuiz={handleStartQuiz} 
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
      )}
      {currentView === 'quiz' && <QuizView onComplete={handleCompleteQuiz} />}
      {currentView === 'app' && userProfile && (
        <AppView 
          userProfile={userProfile} 
          onOpenChat={handleOpenChat}
          onLogout={handleLogout}
        />
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
