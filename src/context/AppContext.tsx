import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isOrderModalOpen: boolean;
  openOrderModal: (prefilledMedicine?: string) => void;
  closeOrderModal: () => void;
  prefilledMedicineName: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('ashok_dark_mode');
    return saved === 'true';
  });

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [prefilledMedicineName, setPrefilledMedicineName] = useState('');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('ashok_dark_mode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const openOrderModal = (prefilledMedicine?: string) => {
    if (prefilledMedicine) {
      setPrefilledMedicineName(prefilledMedicine);
    } else {
      setPrefilledMedicineName('');
    }
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setPrefilledMedicineName('');
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        isOrderModalOpen,
        openOrderModal,
        closeOrderModal,
        prefilledMedicineName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
