import { CheckCircle, Info, MessageSquare } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

const NOTIFICATIONS = [
    {
        id: '1',
        title: 'Technician Assigned',
        message: 'David Wilson has been assigned to your complaint #JPL-8821.',
        time: '10 mins ago',
        type: 'info',
        icon: Info,
        color: Colors.primary,
        isRead: false,
    },
    {
        id: '2',
        title: 'Job Completed',
        message: 'Your request for "Light Flicker" has been resolved.',
        time: '2 hours ago',
        type: 'success',
        icon: CheckCircle,
        color: Colors.success,
        isRead: true,
    },
    {
        id: '3',
        title: 'New Message',
        message: 'Technician: "I will be there in 15 minutes."',
        time: '5 hours ago',
        type: 'message',
        icon: MessageSquare,
        color: Colors.secondary,
        isRead: true,
    }
];

export default function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>Notifications</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Stay updated with your requests</Text>
                </View>
                <TouchableOpacity style={styles.markRead}>
                    <Text style={styles.markReadText}>Mark all as read</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {NOTIFICATIONS.map((item) => (
                    <TouchableOpacity key={item.id} activeOpacity={0.7}>
                        <GlassCard style={[styles.notiCard, !item.isRead && styles.unreadCard]}>
                            <View style={styles.cardContent}>
                                <View style={[styles.iconBox, { backgroundColor: item.color + '15' }]}>
                                    <item.icon size={22} color={item.color} />
                                </View>
                                <View style={styles.textColumn}>
                                    <View style={styles.titleRow}>
                                        <Text style={styles.notiTitle}>{item.title}</Text>
                                        <Text style={styles.notiTime}>{item.time}</Text>
                                    </View>
                                    <Text style={styles.notiMessage} numberOfLines={2}>
                                        {item.message}
                                    </Text>
                                </View>
                                {!item.isRead && <View style={styles.unreadDot} />}
                            </View>
                        </GlassCard>
                    </TouchableOpacity>
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
        alignItems: 'flex-end',
        paddingHorizontal: Layout.padding,
        marginBottom: 24,
    },
    markRead: {
        marginBottom: 4,
    },
    markReadText: {
        fontSize: 13,
        color: Colors.primary,
        fontWeight: '600',
    },
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    notiCard: {
        marginBottom: 12,
        padding: 4,
    },
    unreadCard: {
        borderColor: Colors.primary + '30',
        borderWidth: 1,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    textColumn: {
        flex: 1,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    notiTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.black,
    },
    notiTime: {
        fontSize: 11,
        color: Colors.gray,
    },
    notiMessage: {
        fontSize: 13,
        color: Colors.darkGray,
        lineHeight: 18,
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.primary,
        marginLeft: 8,
    }
});
