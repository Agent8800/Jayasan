import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';
import { GlassCard } from '../../../src/components/GlassCard';
import { Bell, Search, Filter } from 'lucide-react-native';

const StatCard = ({ title, value, color }: { title: string, value: string, color: string }) => (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
        <Text style={styles.statLabel}>{title}</Text>
        <Text style={[styles.statValue, { color }]}>{value}</Text>
    </View>
);

export default function AdminHome() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>Dashboard</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Welcome back, Admin</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Bell color={Colors.black} size={24} />
                    <View style={styles.badge} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.statsGrid}>
                    <StatCard title="Total Complaints" value="128" color={Colors.primary} />
                    <StatCard title="Active Techs" value="12" color={Colors.success} />
                    <StatCard title="Pending" value="45" color={Colors.warning} />
                    <StatCard title="Resolved" value="71" color={Colors.secondary} />
                </View>

                <Text style={[Typography.h3, { marginTop: 24, marginBottom: 16 }]}>Recent Complaints</Text>

                {[1, 2, 3, 4, 5].map((i) => (
                    <GlassCard key={i} style={styles.complaintCard}>
                        <View style={styles.complaintHeader}>
                            <Text style={styles.complaintId}>#JPL-00{i}</Text>
                            <View style={[styles.statusBadge, { backgroundColor: Colors.accentBlue }]}>
                                <Text style={styles.statusText}>PENDING</Text>
                            </View>
                        </View>
                        <Text style={styles.complaintTitle}>AC Service Required at Block B</Text>
                        <View style={styles.complaintFooter}>
                            <Text style={styles.complaintDate}>23 Dec 2025</Text>
                            <Text style={styles.complaintUser}>John Doe</Text>
                        </View>
                    </GlassCard>
                ))}

                <View style={{ height: 100 }} />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Layout.padding,
        marginBottom: 24,
    },
    iconButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 10,
        height: 10,
        backgroundColor: Colors.error,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.lightGray,
    },
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statCard: {
        width: '48%',
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        borderLeftWidth: 4,
        ...Layout.cardShadow,
    },
    statLabel: {
        fontSize: 12,
        color: Colors.gray,
        fontWeight: '600',
        marginBottom: 4,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    complaintCard: {
        marginBottom: 12,
    },
    complaintHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    complaintId: {
        fontWeight: '700',
        color: Colors.primary,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    statusText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    complaintTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
    },
    complaintFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    complaintDate: {
        fontSize: 12,
        color: Colors.gray,
    },
    complaintUser: {
        fontSize: 12,
        color: Colors.black,
        fontWeight: '500',
    }
});
