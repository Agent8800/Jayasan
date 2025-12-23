import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FloatingNavBar } from '../../../src/components/FloatingNavBar';

export default function TabLayout() {
    return (
        <View style={styles.container}>
            <Tabs
                tabBar={() => <FloatingNavBar />}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tabs.Screen name="index" />
                <Tabs.Screen name="users" />
                <Tabs.Screen name="products" />
                <Tabs.Screen name="complaints" />
                <Tabs.Screen name="notifications" />
                <Tabs.Screen name="add" />
                <Tabs.Screen name="analytics" />
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
