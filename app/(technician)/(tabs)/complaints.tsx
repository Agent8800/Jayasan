import { Bell, Clock, MapPin } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

export default function TechnicianComplaints() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>Assigned Tasks</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Your job list for today</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Bell color={Colors.black} size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.tabBar}>
                <TouchableOpacity style={[styles.miniTab, styles.activeMiniTab]}>
                    <Text style={styles.activeMiniTabText}>Active</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.miniTab}>
                    <Text style={styles.miniTabText}>Completed</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {[1, 2, 3].map((i) => (
                    <GlassCard key={i} style={styles.taskCard}>
                        <View style={styles.taskHeader}>
                            <Text style={styles.taskTime}>Due: {10 + i}:30 AM</Text>
                            <View style={[styles.priorityBadge, { backgroundColor: Colors.accentBlue }]}>
                                <Text style={styles.priorityText}>HIGH</Text>
                            </View>
                        </View>
                        <Text style={styles.taskTitle}>Server Room AC - Preventive Maintenance</Text>
                        <View style={styles.infoRow}>
                            <MapPin size={14} color={Colors.gray} />
                            <Text style={styles.infoText}>Block C, Floor {i}</Text>
                        </View>
                        <View style={[styles.infoRow, { marginTop: 4 }]}>
                            <Clock size={14} color={Colors.gray} />
                            <Text style={styles.infoText}>Estimated: 45 mins</Text>
                        </View>
                        <TouchableOpacity style={styles.startBtn}>
                            <Text style={styles.startBtnText}>View Details</Text>
                        </TouchableOpacity>
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
    tabBar: {
        flexDirection: 'row',
        paddingHorizontal: Layout.padding,
        marginBottom: 16,
    },
    miniTab: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: Colors.lightGray,
    },
    activeMiniTab: {
        backgroundColor: Colors.primary,
    },
    miniTabText: {
        fontSize: 13,
        fontWeight: '600',
        color: Colors.gray,
    },
    activeMiniTabText: {
        fontSize: 13,
        fontWeight: '600',
        color: Colors.white,
    },
    scrollContent: {
        paddingHorizontal: Layout.padding,
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
        fontSize: 12,
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
        fontSize: 17,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 12,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 13,
        color: Colors.gray,
        marginLeft: 6,
    },
    startBtn: {
        marginTop: 16,
        height: 44,
        borderRadius: 10,
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startBtnText: {
        color: Colors.white,
        fontWeight: '600',
    }
});
