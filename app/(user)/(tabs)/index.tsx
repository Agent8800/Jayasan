import { useRouter } from 'expo-router';
import { ArrowRight, Bell, Clock, Plus } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

const TimelineStep = ({ title, date, active, completed }: any) => (
    <View style={styles.timelineRow}>
        <View style={styles.timelineIndicators}>
            <View style={[styles.dot, completed && styles.dotCompleted, active && styles.dotActive]} />
            <View style={styles.line} />
        </View>
        <View style={styles.timelineContent}>
            <Text style={[styles.stepTitle, active && styles.stepTitleActive]}>{title}</Text>
            <Text style={styles.stepDate}>{date}</Text>
        </View>
    </View>
);

export default function UserHome() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>Welcome, John</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Track your requests</Text>
                </View>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => router.push('/(user)/(tabs)/notifications')}
                >
                    <Bell color={Colors.black} size={24} />
                    <View style={styles.badge} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <GlassCard style={styles.mainCard}>
                    <View style={styles.cardInfo}>
                        <Text style={styles.currentStatusLabel}>Current Request Status</Text>
                        <Text style={styles.currentStatusValue}>In Progress</Text>
                    </View>
                    <View style={styles.timeline}>
                        <TimelineStep title="Request Submitted" date="22 Dec, 10:00 AM" completed />
                        <TimelineStep title="Technician Assigned" date="22 Dec, 02:30 PM" completed />
                        <TimelineStep title="On the Way" date="Today, 09:15 AM" active />
                        <TimelineStep title="Resolution" date="Pending" />
                    </View>
                </GlassCard>

                <View style={styles.quickActions}>
                    <TouchableOpacity style={styles.actionBox} onPress={() => router.push('/(user)/(tabs)/add')}>
                        <View style={[styles.actionIcon, { backgroundColor: Colors.accentBlue }]}>
                            <Plus size={24} color={Colors.primary} />
                        </View>
                        <Text style={styles.actionLabel}>New Complaint</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBox} onPress={() => router.push('/(user)/(tabs)/complaints')}>
                        <View style={[styles.actionIcon, { backgroundColor: '#F2F2F7' }]}>
                            <Clock size={24} color={Colors.black} />
                        </View>
                        <Text style={styles.actionLabel}>History</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[Typography.h3, { marginTop: 24, marginBottom: 16 }]}>Quick Support</Text>
                <GlassCard style={styles.supportCard}>
                    <View style={styles.supportRow}>
                        <View>
                            <Text style={styles.supportTitle}>Need help quickly?</Text>
                            <Text style={styles.supportSub}>Contact our 24/7 support line</Text>
                        </View>
                        <TouchableOpacity style={styles.callBtn}>
                            <ArrowRight size={20} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                </GlassCard>

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Layout.padding,
        marginBottom: 20,
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
        top: 10,
        right: 10,
        width: 10,
        height: 10,
        backgroundColor: Colors.primary,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.lightGray,
    },
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    mainCard: {
        marginBottom: 24,
    },
    cardInfo: {
        marginBottom: 20,
    },
    currentStatusLabel: {
        fontSize: 12,
        color: Colors.gray,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    currentStatusValue: {
        fontSize: 24,
        fontWeight: '800',
        color: Colors.primary,
        marginTop: 4,
    },
    timeline: {
        marginTop: 10,
    },
    timelineRow: {
        flexDirection: 'row',
        height: 60,
    },
    timelineIndicators: {
        alignItems: 'center',
        marginRight: 16,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.lightGray,
        zIndex: 1,
    },
    dotCompleted: {
        backgroundColor: Colors.success,
    },
    dotActive: {
        backgroundColor: Colors.primary,
        borderWidth: 3,
        borderColor: Colors.accentBlue,
    },
    line: {
        width: 2,
        flex: 1,
        backgroundColor: Colors.lightGray,
        marginTop: -2,
        marginBottom: -2,
    },
    timelineContent: {
        justifyContent: 'flex-start',
        paddingTop: 0,
    },
    stepTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.gray,
    },
    stepTitleActive: {
        color: Colors.black,
        fontWeight: '700',
    },
    stepDate: {
        fontSize: 12,
        color: Colors.gray,
        marginTop: 2,
    },
    quickActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionBox: {
        width: '48%',
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        ...Layout.cardShadow,
    },
    actionIcon: {
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    actionLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    },
    supportCard: {
        backgroundColor: Colors.black,
    },
    supportRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    supportTitle: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
    supportSub: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 12,
        marginTop: 4,
    },
    callBtn: {
        width: 44,
        height: 44,
        backgroundColor: Colors.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
