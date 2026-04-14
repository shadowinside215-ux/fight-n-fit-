import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, onAuthStateChanged, doc, onSnapshot } from './firebase';
import { User } from 'firebase/auth';

interface SiteSettings {
  logoUrl?: string;
  heroImageUrl?: string;
  aboutImageUrl?: string;
  boxingImageUrl?: string;
  kickboxingImageUrl?: string;
  mmaImageUrl?: string;
  fitnessImageUrl?: string;
}

interface AppContextType {
  user: User | null;
  isAdmin: boolean;
  settings: SiteSettings;
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Simple admin check based on your email
        setIsAdmin(currentUser.email === "dragonballsam86@gmail.com");
      } else {
        setIsAdmin(false);
      }
    });

    const unsubscribeSettings = onSnapshot(doc(db, 'settings', 'global'), (snapshot) => {
      if (snapshot.exists()) {
        setSettings(snapshot.data() as SiteSettings);
      }
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeSettings();
    };
  }, []);

  return (
    <AppContext.Provider value={{ user, isAdmin, settings, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
