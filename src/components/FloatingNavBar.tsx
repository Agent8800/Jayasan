import { BlurView } from 'expo-blur';
import { useRouter, useSegments } from 'expo-router';
import { Bell, ClipboardList, Home, PieChart, PlusCircle, Settings, Users } from 'lucide-react-native';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Theme';

import { LucideIcon } from 'lucide-react-native';

interface NavItemProps {
    icon: LucideIcon;
    label: string;
    isActive: boolean;
    onPress: () => void;
}

const NavItem = ({ icon: Icon, isActive, onPress }: NavItemProps) => (
    <TouchableOpacity onPress={onPress} style={styles.navItem}>
        <Icon size={24} color={isActive ? Colors.primary : Colors.gray} strokeWidth={isActive ? 2.5 : 2} />
        {isActive && <View style={styles.activeDot} />}
    </TouchableOpacity>
);

export const FloatingNavBar = () => {
    const router = useRouter();
    const segments = useSegments() as string[];

    const currentTab = segments[segments.length - 1];
    const roleSegment = segments.find(s => s.includes('admin') || s.includes('technician') || s.includes('user'));
    const role = roleSegment?.replace('(', '').replace(')', '').trim() || 'user';

    const getNavItems = () => {
        const base = [
            { id: 'index', icon: Home, path: `/( ${role} )/(tabs)` },
        ];

        if (role === 'admin') {
            return [
                ...base,
                { id: 'users', icon: Users, path: `/( ${role} )/(tabs)/users` },
                { id: 'add', icon: PlusCircle, path: `/( ${role} )/(tabs)/add` },
                { id: 'analytics', icon: PieChart, path: `/( ${role} )/(tabs)/analytics` },
                { id: 'settings', icon: Settings, path: `/( ${role} )/(tabs)/settings` },
            ];
        } else if (role === 'technician') {
            return [
                ...base,
                { id: 'complaints', icon: ClipboardList, path: `/( ${role} )/(tabs)/complaints` },
                { id: 'add', icon: PlusCircle, path: `/( ${role} )/(tabs)/add` },
                { id: 'notifications', icon: Bell, path: `/( ${role} )/(tabs)/notifications` },
                { id: 'settings', icon: Settings, path: `/( ${role} )/(tabs)/settings` },
            ];
        } else {
            return [
                ...base,
                { id: 'complaints', icon: ClipboardList, path: `/( ${role} )/(tabs)/complaints` },
                { id: 'notifications', icon: Bell, path: `/( ${role} )/(tabs)/notifications` },
                { id: 'settings', icon: Settings, path: `/( ${role} )/(tabs)/settings` },
            ];
        }
    };

    const navItems = getNavItems();

    return (
        <View style={styles.container}>
            <BlurView intensity={80} tint="light" style={styles.blurContainer}>
                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        icon={item.icon}
                        label={item.id}
                        isActive={currentTab === item.id || (item.id === 'index' && currentTab === '(tabs)')}
                        onPress={() => router.push(item.path as any)}
                    />
                ))}
            </BlurView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 40 : 25,
        left: 20,
        right: 20,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        overflow: 'hidden',
        elevation: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    blurContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    navItem: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: Colors.primary,
        marginTop: 4,
        position: 'absolute',
        bottom: 2,
    },
});
