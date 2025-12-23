import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Colors } from '../src/constants/Theme';
import { useAuth } from '../src/context/AuthContext';

export default function SplashScreen() {
    const router = useRouter();
    const { user, loading } = useAuth();
    const scaleAnim = new Animated.Value(0.5);
    const opacityAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.parallel([
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();

        if (!loading) {
            const timer = setTimeout(() => {
                if (user) {
                    router.replace(`/( ${user.role} )`);
                } else {
                    router.replace('/(auth)/welcome');
                }
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [loading, user]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.logoContainer, { transform: [{ scale: scaleAnim }], opacity: opacityAnim }]}>
                <View style={styles.logoCircle}>
                    <View style={styles.logoInner} />
                </View>
                <Animated.Text style={styles.title}>JAYASAN</Animated.Text>
                <Animated.Text style={styles.subtitle}>Premium Service Excellence</Animated.Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logoInner: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: Colors.primary,
        transform: [{ rotate: '45deg' }],
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        letterSpacing: 4,
        color: Colors.black,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.gray,
        letterSpacing: 2,
        marginTop: 8,
    },
});
