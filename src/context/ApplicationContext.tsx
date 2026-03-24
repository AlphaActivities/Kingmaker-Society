import { createContext, useContext, useState, ReactNode } from 'react';

interface ApplicationContextType {
  leadId: string | null;
  setLeadId: (id: string) => void;
  applicationStep: 'lead-form' | 'questionnaire' | 'call-booking' | 'pricing' | 'complete';
  setApplicationStep: (step: 'lead-form' | 'questionnaire' | 'call-booking' | 'pricing' | 'complete') => void;
  leadSubmitted: boolean;
  setLeadSubmitted: (submitted: boolean) => void;
  questionnaireSubmitted: boolean;
  setQuestionnaireSubmitted: (submitted: boolean) => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

// Safe sessionStorage helpers to prevent crashes if storage is unavailable
const safeGetSession = (key: string): string | null => {
  try {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(key);
    }
  } catch (error) {
    console.warn('sessionStorage.getItem failed:', error);
  }
  return null;
};

const safeSetSession = (key: string, value: string): void => {
  try {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, value);
    }
  } catch (error) {
    console.warn('sessionStorage.setItem failed:', error);
  }
};

export const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  // Hydrate leadId from sessionStorage on initial mount
  const [leadId, setLeadIdState] = useState<string | null>(() => {
    return safeGetSession('kingmaker_lead_id');
  });

  // Hydrate applicationStep based on what's completed
  const [applicationStep, setApplicationStep] = useState<'lead-form' | 'questionnaire' | 'call-booking' | 'pricing' | 'complete'>(() => {
    const storedLeadId = safeGetSession('kingmaker_lead_id');
    if (storedLeadId) return 'questionnaire';
    return 'lead-form';
  });

  // Hydrate leadSubmitted from presence of stored leadId
  const [leadSubmitted, setLeadSubmitted] = useState(() => {
    return safeGetSession('kingmaker_lead_id') !== null;
  });

  const [questionnaireSubmitted, setQuestionnaireSubmitted] = useState(false);

  // Wrapper for setLeadId that also updates sessionStorage
  const setLeadId = (id: string) => {
    setLeadIdState(id);
    safeSetSession('kingmaker_lead_id', id);
  };

  return (
    <ApplicationContext.Provider
      value={{
        leadId,
        setLeadId,
        applicationStep,
        setApplicationStep,
        leadSubmitted,
        setLeadSubmitted,
        questionnaireSubmitted,
        setQuestionnaireSubmitted,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
};
