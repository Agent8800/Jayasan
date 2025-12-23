import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FloatingNavBar } from '../../../src/components/FloatingNavBar';

export default function TechTabLayout() {
    return (
        <View style={styles.container}>
            <Tabs
                tabBar={() => <FloatingNavBar />}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tabs.Screen name="index" />
                <Tabs.Screen name="complaints" />
                <Tabs.Screen name="add" />
                <Tabs.Screen name="notifications" />
                <Tabs.Screen name="settings" />
            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});
