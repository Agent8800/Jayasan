import { TextStyle, ViewStyle } from 'react-native';

export const Colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  lightGray: '#F2F2F7',
  darkGray: '#1C1C1E',
  error: '#FF3B30',
  success: '#34C759',
  warning: '#FFCC00',
  glass: 'rgba(255, 255, 255, 0.7)',
  glassDark: 'rgba(0, 0, 0, 0.5)',
  shadow: 'rgba(0, 0, 0, 0.1)',
  accentBlue: 'rgba(0, 122, 255, 0.1)',
};

export interface TypographyType {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  body: TextStyle;
  caption: TextStyle;
  [key: string]: TextStyle;
}

export const Typography: TypographyType = {
  h1: {
    fontSize: 28,
    fontWeight: 'bold' as const,
    color: Colors.black,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600' as const,
    color: Colors.black,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    color: Colors.black,
  },
  body: {
    fontSize: 16,
    color: Colors.black,
  },
  caption: {
    fontSize: 12,
    color: Colors.gray,
  },
};

export const Layout = {
  padding: 20,
  borderRadius: 16,
  cardShadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  } as ViewStyle,
};
