import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Layout, Typography } from '../../src/constants/Theme';
import { PremiumButton } from '../../src/components/PremiumButton';
import { GlassCard } from '../../src/components/GlassCard';
import { useAuth } from '../../src/context/AuthContext';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) return;
        setLoading(true);
        try {
            // Mock logic: choose role based on email suffix or default to admin for dev
            const role = email.includes('admin') ? 'admin' : email.includes('tech') ? 'technician' : 'user';
            await login(email, role);
            router.replace(`/( ${role} )`);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={{ fontSize: 24 }}>←</Text>
                </TouchableOpacity>

                <View style={styles.header}>
                    <Text style={Typography.h1}>Welcome Back</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Sign in to your account</Text>
                </View>

                <GlassCard style={styles.card}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="name@example.com"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="••••••••"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={styles.forgotPass}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <PremiumButton
                        title="Log In"
                        onPress={handleLogin}
                        loading={loading}
                    />
                </GlassCard>

                <View style={styles.footer}>
                    <Text style={Typography.body}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
                        <Text style={[Typography.body, { color: Colors.primary, fontWeight: 'bold' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    scrollContent: {
        padding: Layout.padding,
        paddingTop: 60,
    },
    backButton: {
        marginBottom: 30,
    },
    header: {
        marginBottom: 40,
    },
    card: {
        padding: 2, // GlassCard internal padding is 20
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 8,
    },
    input: {
        backgroundColor: Colors.white,
        height: 56,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: Colors.lightGray,
    },
    forgotPass: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotText: {
        color: Colors.primary,
        fontWeight: '500',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
    }
});
