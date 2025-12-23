import { Bell, CheckCircle2, MapPin } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

export default function TechnicianHome() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>Work Summary</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Today's schedule</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Bell color={Colors.black} size={24} />
                    <View style={styles.badge} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <GlassCard style={styles.summaryCard}>
                    <View style={styles.summaryRow}>
                        <View style={styles.summaryItem}>
                            <Text style={styles.summaryValue}>04</Text>
                            <Text style={styles.summaryLabel}>Assigned</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.summaryItem}>
                            <Text style={styles.summaryValue}>02</Text>
                            <Text style={styles.summaryLabel}>Completed</Text>
                        </View>
                    </View>
                </GlassCard>

                <Text style={[Typography.h3, { marginTop: 24, marginBottom: 16 }]}>Active Tasks</Text>

                {[1, 2].map((i) => (
                    <GlassCard key={i} style={styles.taskCard}>
                        <View style={styles.taskHeader}>
                            <Text style={styles.taskTime}>10:30 AM</Text>
                            <View style={[styles.priorityBadge, { backgroundColor: Colors.accentBlue }]}>
                                <Text style={styles.priorityText}>HIGH</Text>
                            </View>
                        </View>
                        <Text style={styles.taskTitle}>Main Server AC Repair</Text>
                        <View style={styles.locationRow}>
                            <MapPin size={14} color={Colors.gray} />
                            <Text style={styles.locationText}>Block C, 4th Floor</Text>
                        </View>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Text style={styles.actionBtnText}>Start Working</Text>
                        </TouchableOpacity>
                    </GlassCard>
                ))}

                <Text style={[Typography.h3, { marginTop: 24, marginBottom: 16 }]}>Recently Completed</Text>
                <GlassCard style={styles.completedCard}>
                    <View style={styles.completedContent}>
                        <CheckCircle2 color={Colors.success} size={20} />
                        <Text style={styles.completedText}>Generator Maintenance Check</Text>
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
    summaryCard: {
        backgroundColor: Colors.primary,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },
    summaryItem: {
        alignItems: 'center',
    },
    summaryValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.white,
    },
    summaryLabel: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
        fontWeight: '600',
        marginTop: 4,
    },
    divider: {
        width: 1,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    taskCard: {
        marginBottom: 16,
    },
    taskHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    taskTime: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.primary,
    },
    priorityBadge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    priorityText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 8,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    locationText: {
        fontSize: 13,
        color: Colors.gray,
        marginLeft: 6,
    },
    actionBtn: {
        backgroundColor: Colors.black,
        height: 44,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionBtnText: {
        color: Colors.white,
        fontWeight: '600',
    },
    completedCard: {
        paddingVertical: 16,
        borderLeftWidth: 4,
        borderLeftColor: Colors.success,
    },
    completedContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    completedText: {
        marginLeft: 12,
        fontSize: 14,
        color: Colors.gray,
        fontWeight: '500',
    }
});
