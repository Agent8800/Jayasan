import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Layout } from '../constants/Theme';

interface GlassCardProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    intensity?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style, intensity = 60 }) => {
    return (
        <View style={[styles.container, style]}>
            <BlurView intensity={intensity} tint="light" style={styles.blur}>
                {children}
            </BlurView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: Layout.borderRadius,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        ...Layout.cardShadow,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    blur: {
        padding: Layout.padding,
        width: '100%',
    },
});
