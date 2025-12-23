import { Bell, ChevronRight, HelpCircle, Shield, User } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { PremiumButton } from '../../../src/components/PremiumButton';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';
import { useAuth } from '../../../src/context/AuthContext';

const SettingItem = ({ icon: Icon, label, onPress }: any) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
        <View style={styles.itemLeft}>
            <View style={styles.itemIcon}>
                <Icon size={20} color={Colors.primary} />
            </View>
            <Text style={styles.itemLabel}>{label}</Text>
        </View>
        <ChevronRight size={20} color={Colors.gray} />
    </TouchableOpacity>
);

export default function SettingsScreen() {
    const { logout, user } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={Typography.h2}>Settings</Text>
                <Text style={[Typography.body, { color: Colors.gray }]}>Profile and preferences</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <GlassCard style={styles.profileCard}>
                    <View style={styles.profileInfo}>
                        <View style={styles.avatar}>
                            <User size={40} color={Colors.primary} />
                        </View>
                        <View>
                            <Text style={styles.profileName}>{user?.name || 'Admin User'}</Text>
                            <Text style={styles.profileRole}>{user?.role?.toUpperCase() || 'ADMIN'}</Text>
                            <Text style={styles.profileEmail}>{user?.email || 'admin@jayasan.com'}</Text>
                        </View>
                    </View>
                </GlassCard>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Account</Text>
                    <GlassCard style={styles.sectionCard}>
                        <SettingItem icon={User} label="Personal Information" />
                        <SettingItem icon={Shield} label="Security" />
                        <SettingItem icon={Bell} label="Notifications" />
                    </GlassCard>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Support</Text>
                    <GlassCard style={styles.sectionCard}>
                        <SettingItem icon={HelpCircle} label="Help Center" />
                    </GlassCard>
                </View>

                <PremiumButton
                    title="Sign Out"
                    onPress={logout}
                    variant="secondary"
                    style={styles.logoutBtn}
                />

                <Text style={styles.versionText}>Jayasan v1.0.0 (Premium)</Text>

                <View style={{ height: 120 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 60,
    },
    header: {
        paddingHorizontal: Layout.padding,
        marginBottom: 20,
    },
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    profileCard: {
        marginBottom: 24,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: Colors.accentBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
    },
    profileRole: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primary,
        marginTop: 2,
        letterSpacing: 1,
    },
    profileEmail: {
        fontSize: 14,
        color: Colors.gray,
        marginTop: 4,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.gray,
        marginBottom: 12,
        marginLeft: 4,
        textTransform: 'uppercase',
    },
    sectionCard: {
        padding: 0,
        overflow: 'hidden',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: Colors.accentBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    itemLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.black,
    },
    logoutBtn: {
        marginTop: 10,
        backgroundColor: '#FF3B30',
    },
    versionText: {
        textAlign: 'center',
        color: Colors.gray,
        fontSize: 12,
        marginTop: 24,
    }
});
