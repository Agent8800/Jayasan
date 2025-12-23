import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserRole = 'admin' | 'technician' | 'user' | null;

interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

interface AuthContextType {
    user: UserProfile | null;
    loading: boolean;
    login: (email: string, role: UserRole) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('user_profile');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (e) {
            console.error('Failed to load user', e);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, role: UserRole) => {
        const profile: UserProfile = {
            id: Math.random().toString(36).substr(2, 9),
            name: email.split('@')[0].toUpperCase(),
            email,
            role,
        };
        await AsyncStorage.setItem('user_profile', JSON.stringify(profile));
        setUser(profile);
    };

    const logout = async () => {
        await AsyncStorage.removeItem('user_profile');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
