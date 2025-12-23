import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../src/components/GlassCard';
import { PremiumButton } from '../../src/components/PremiumButton';
import { Colors, Layout, Typography } from '../../src/constants/Theme';
import { useAuth } from '../../src/context/AuthContext';

export default function SignupScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'admin' | 'technician' | 'user'>('user');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth();

    const handleSignup = async () => {
        if (!email || !password || !name) return;
        setLoading(true);
        try {
            await login(email, role);
            router.replace(`/(${role})`);
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
                    <Text style={Typography.h1}>Create Account</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Join the Jayasan community</Text>
                </View>

                <GlassCard style={styles.card}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="John Doe"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

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

                    <Text style={styles.label}>Select Role</Text>
                    <View style={styles.roleContainer}>
                        {(['user', 'technician', 'admin'] as const).map((r) => (
                            <TouchableOpacity
                                key={r}
                                style={[styles.roleOption, role === r && styles.roleActive]}
                                onPress={() => setRole(r)}
                            >
                                <Text style={[styles.roleText, role === r && styles.roleTextActive]}>
                                    {r.charAt(0).toUpperCase() + r.slice(1)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <PremiumButton
                        title="Create Account"
                        onPress={handleSignup}
                        loading={loading}
                    />
                </GlassCard>

                <View style={styles.footer}>
                    <Text style={Typography.body}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                        <Text style={[Typography.body, { color: Colors.primary, fontWeight: 'bold' }]}>Log In</Text>
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
        paddingBottom: 40,
    },
    backButton: {
        marginBottom: 30,
    },
    header: {
        marginBottom: 40,
    },
    card: {
        padding: 2,
    },
    inputGroup: {
        marginBottom: 16,
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
    roleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    roleOption: {
        flex: 1,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        marginHorizontal: 4,
    },
    roleActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    roleText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray,
    },
    roleTextActive: {
        color: Colors.white,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
    }
});
