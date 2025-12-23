import { AlertTriangle, Bell, PlusCircle, UserPlus } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

const ADMIN_NOTIFICATIONS = [
    {
        id: '1',
        title: 'New Complaint Filed',
        message: 'A new high-priority complaint #JPL-9001 has been registered by Alex Riva.',
        time: '2 mins ago',
        type: 'new_complaint',
        icon: PlusCircle,
        color: Colors.primary,
    },
    {
        id: '2',
        title: 'Escalation Alert',
        message: 'Complaint #JPL-8772 has exceeded the 24-hour response window.',
        time: '45 mins ago',
        type: 'warning',
        icon: AlertTriangle,
        color: Colors.warning,
    },
    {
        id: '3',
        title: 'New Technician Sign-up',
        message: 'A new technician profile "Oscar Isaac" is pending approval.',
        time: '3 hours ago',
        type: 'user',
        icon: UserPlus,
        color: Colors.success,
    }
];

export default function AdminNotifications() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>System Alerts</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Global overview of activities</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Bell color={Colors.black} size={24} />
                    <View style={styles.badge} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {ADMIN_NOTIFICATIONS.map((item) => (
                    <GlassCard key={item.id} style={styles.notiCard}>
                        <View style={styles.row}>
                            <View style={[styles.iconBox, { backgroundColor: item.color + '15' }]}>
                                <item.icon size={22} color={item.color} />
                            </View>
                            <View style={styles.info}>
                                <View style={styles.topRow}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <Text style={styles.msg}>{item.message}</Text>
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
    notiCard: {
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
    },
    iconBox: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    info: {
        flex: 1,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.black,
    },
    time: {
        fontSize: 10,
        color: Colors.gray,
        fontWeight: '600',
    },
    msg: {
        fontSize: 13,
        color: Colors.darkGray,
        lineHeight: 18,
    }
});
