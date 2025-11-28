import { useState } from "react";
import { UserProfile, Medicamento } from "@/types";
import { QuizStep } from "@/components/QuizStep";
import { QuizStep1 } from "@/components/quiz/QuizStep1";
import { QuizStep2 } from "@/components/quiz/QuizStep2";
import { QuizStep3 } from "@/components/quiz/QuizStep3";
import { QuizStep4 } from "@/components/quiz/QuizStep4";
import { QuizStep5 } from "@/components/quiz/QuizStep5";
import { QuizStep6 } from "@/components/quiz/QuizStep6";

interface QuizViewProps {
  onComplete: (profile: UserProfile) => void;
}

export function QuizView({ onComplete }: QuizViewProps) {
  const [step, setStep] = useState(1);
  
  // Step 1
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("");
  const [tiposDiabetes, setTiposDiabetes] = useState<string[]>([]);

  // Step 2
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [tempodiagnostico, setTempodiagnostico] = useState("");

  // Step 3 & 4
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);

  // Step 5
  const [metaGlicoseJejum, setMetaGlicoseJejum] = useState(100);
  const [metaGlicosePosPrandial, setMetaGlicosePosPrandial] = useState(140);
  const [objetivosAlimentares, setObjetivosAlimentares] = useState<string[]>([]);
  const [nivelAtividade, setNivelAtividade] = useState("");

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const addMedicamento = (med: Medicamento) => {
    setMedicamentos(prev => [...prev, med]);
  };

  const removeMedicamento = (id: string) => {
    setMedicamentos(prev => prev.filter(m => m.id !== id));
  };

  const updateMedicamento = (id: string, updates: Partial<Medicamento>) => {
    setMedicamentos(prev => prev.map(m => m.id === id ? { ...m, ...updates } : m));
  };

  const toggleObjetivoAlimentar = (objetivo: string) => {
    setObjetivosAlimentares(prev => 
      prev.includes(objetivo) 
        ? prev.filter(o => o !== objetivo)
        : [...prev, objetivo]
    );
  };

  const completeQuiz = () => {
    const profile: UserProfile = {
      nome,
      idade: parseInt(idade),
      genero,
      tiposDiabetes,
      peso: parseFloat(peso),
      altura: parseFloat(altura),
      tempodiagnostico,
      medicamentos,
      metaGlicoseJejum,
      metaGlicosePosPrandial,
      objetivosAlimentares,
      nivelAtividade,
      isPremium: true,
      premiumExpiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 dias
    };
    onComplete(profile);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <QuizStep1
            nome={nome}
            setNome={setNome}
            idade={idade}
            setIdade={setIdade}
            genero={genero}
            setGenero={setGenero}
            tiposDiabetes={tiposDiabetes}
            setTiposDiabetes={setTiposDiabetes}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <QuizStep2
            peso={peso}
            setPeso={setPeso}
            altura={altura}
            setAltura={setAltura}
            tempodiagnostico={tempodiagnostico}
            setTempodiagnostico={setTempodiagnostico}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <QuizStep3
            medicamentos={medicamentos}
            onAddMedicamento={addMedicamento}
            onRemoveMedicamento={removeMedicamento}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <QuizStep4
            medicamentos={medicamentos}
            onUpdateMedicamento={updateMedicamento}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <QuizStep5
            metaGlicoseJejum={metaGlicoseJejum}
            setMetaGlicoseJejum={setMetaGlicoseJejum}
            metaGlicosePosPrandial={metaGlicosePosPrandial}
            setMetaGlicosePosPrandial={setMetaGlicosePosPrandial}
            objetivosAlimentares={objetivosAlimentares}
            onToggleObjetivo={toggleObjetivoAlimentar}
            nivelAtividade={nivelAtividade}
            setNivelAtividade={setNivelAtividade}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 6:
        return (
          <QuizStep6
            nome={nome}
            tiposDiabetes={tiposDiabetes}
            medicamentos={medicamentos}
            objetivosAlimentares={objetivosAlimentares}
            onComplete={completeQuiz}
            onPrev={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return renderStep();
}
