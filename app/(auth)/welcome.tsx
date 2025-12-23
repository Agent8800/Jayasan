import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Layout, Typography } from '../../src/constants/Theme';
import { PremiumButton } from '../../src/components/PremiumButton';
import { GlassCard } from '../../src/components/GlassCard';

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.logoSlot} />
                    <Text style={Typography.h1}>Jayasan</Text>
                    <Text style={[Typography.body, { color: Colors.gray, marginTop: 4 }]}>Service Management Reinvented</Text>
                </View>

                <GlassCard style={styles.card}>
                    <Text style={[Typography.h3, { textAlign: 'center', marginBottom: 24 }]}>Get Started</Text>

                    <PremiumButton
                        title="Log In"
                        onPress={() => router.push('/(auth)/login')}
                        variant="primary"
                    />

                    <PremiumButton
                        title="Create Account"
                        onPress={() => router.push('/(auth)/signup')}
                        variant="outline"
                    />
                </GlassCard>

                <Text style={styles.footerText}>
                    By continuing you agree to our Terms and Conditions
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    content: {
        flex: 1,
        padding: Layout.padding,
        justifyContent: 'space-between',
        paddingVertical: 80,
    },
    header: {
        alignItems: 'center',
    },
    logoSlot: {
        width: 60,
        height: 60,
        backgroundColor: Colors.primary,
        borderRadius: 12,
        marginBottom: 16,
    },
    card: {
        width: '100%',
    },
    footerText: {
        textAlign: 'center',
        fontSize: 12,
        color: Colors.gray,
        paddingHorizontal: 40,
    }
});
