import { createContext, useContext, useState } from 'react';

const ViewContext = createContext({
  currentView: 'va',
  setCurrentView: () => {}
});

export function ViewProvider({ children }) {
  const [currentView, setCurrentView] = useState('va');
  
  // View configurations
  const viewConfigs = {
    va: {
      title: "Virtual Assistant & Technical Support Specialist",
      theme: 'va',
      sections: {
        hero: "Streamlining workflows and solving technical challenges",
        about: "Detail-oriented Virtual Assistant with 3+ years of remote experience",
        services: "Email management, customer support, and workflow optimization"
      }
    },
    tech: {
      title: "Technical Support Specialist & Developer",
      theme: 'tech', 
      sections: {
        hero: "Providing expert technical solutions and IT support",
        about: "Software engineer with expertise in technical troubleshooting",
        services: "IT support, development, and system administration"
      }
    }
  };

  const value = {
    currentView,
    setCurrentView,
    currentConfig: viewConfigs[currentView],
    isVA: currentView === 'va',
    isTech: currentView === 'tech'
  };

  return (
    <ViewContext.Provider value={value}>
      {children}
    </ViewContext.Provider>
  );
}

export const useView = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};