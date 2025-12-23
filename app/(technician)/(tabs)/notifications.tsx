import { Bell, Briefcase, Calendar, CheckCircle } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

const TECH_NOTIFICATIONS = [
    {
        id: '1',
        title: 'New Job Assigned',
        message: 'You have been assigned a new complaint at Block C, Floor 2.',
        time: '5 mins ago',
        type: 'assignment',
        icon: Briefcase,
        isRead: false,
    },
    {
        id: '2',
        title: 'Schedule Updated',
        message: 'Your job for "Server Room AC" has been moved to 2:00 PM.',
        time: '1 hour ago',
        type: 'schedule',
        icon: Calendar,
        isRead: false,
    },
    {
        id: '3',
        title: 'Completion Confirmed',
        message: 'Admin has approved your work report for #JPL-0099.',
        time: 'Yesterday',
        type: 'system',
        icon: CheckCircle,
        isRead: true,
    }
];

export default function TechnicianNotifications() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>Alerts</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>New jobs and updates</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Bell color={Colors.black} size={24} />
                    <View style={styles.badge} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {TECH_NOTIFICATIONS.map((item) => (
                    <GlassCard key={item.id} style={[styles.notiCard, !item.isRead && styles.unreadCard]}>
                        <View style={styles.cardLayout}>
                            <View style={[styles.iconContainer, { backgroundColor: !item.isRead ? Colors.accentBlue : Colors.lightGray }]}>
                                <item.icon size={22} color={!item.isRead ? Colors.primary : Colors.gray} />
                            </View>
                            <View style={styles.textContent}>
                                <Text style={styles.notiTitle}>{item.title}</Text>
                                <Text style={styles.notiMsg}>{item.message}</Text>
                                <Text style={styles.notiTime}>{item.time}</Text>
                            </View>
                        </View>
                    </GlassCard>
                ))}
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
        marginBottom: 24,
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
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
    notiCard: {
        marginBottom: 12,
    },
    unreadCard: {
        borderLeftWidth: 4,
        borderLeftColor: Colors.primary,
    },
    cardLayout: {
        flexDirection: 'row',
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContent: {
        flex: 1,
    },
    notiTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 4,
    },
    notiMsg: {
        fontSize: 14,
        color: Colors.darkGray,
        lineHeight: 20,
        marginBottom: 8,
    },
    notiTime: {
        fontSize: 11,
        color: Colors.gray,
        fontWeight: '600',
    }
});
