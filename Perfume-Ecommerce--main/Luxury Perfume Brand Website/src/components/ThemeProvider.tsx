import { createContext, useContext, useState, ReactNode } from 'react';

export interface Theme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
}

export const themes: Theme[] = [
  {
    id: 'chocolate',
    name: 'Chocolate Marble',
    primary: '#8B4513',
    secondary: '#D2B48C',
    accent: '#CD853F',
    background: 'linear-gradient(135deg, #FFF8DC 0%, #F5E6D3 50%, #E6D3C1 100%)',
    surface: '#FFFFFF',
    text: '#3C2414'
  },
  {
    id: 'gold',
    name: 'Gold Luxury',
    primary: '#FFD700',
    secondary: '#FFF8DC',
    accent: '#DAA520',
    background: 'linear-gradient(135deg, #FFFEF7 0%, #FFF8DC 50%, #F0E68C 100%)',
    surface: '#FFFFFF',
    text: '#8B4513'
  },
  {
    id: 'rose',
    name: 'Rose Gold',
    primary: '#E8B4B8',
    secondary: '#F4E4E6',
    accent: '#D4A5A9',
    background: 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 50%, #F9A8D4 100%)',
    surface: '#FFFFFF',
    text: '#7C2D12'
  },
  {
    id: 'navy',
    name: 'Deep Navy',
    primary: '#1E293B',
    secondary: '#64748B',
    accent: '#475569',
    background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)',
    surface: '#FFFFFF',
    text: '#0F172A'
  },
  {
    id: 'cream',
    name: 'Cream Dream',
    primary: '#F5F5DC',
    secondary: '#FFF8DC',
    accent: '#F0E68C',
    background: 'linear-gradient(135deg, #FFFEF7 0%, #FFF8DC 50%, #F5F5DC 100%)',
    surface: '#FFFFFF',
    text: '#8B4513'
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  allThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      setTheme: setCurrentTheme, 
      allThemes: themes 
    }}>
      <div 
        style={{ 
          background: currentTheme.background,
          color: currentTheme.text,
          minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}