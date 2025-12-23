import { Bell } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

export default function UserComplaints() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>My Complaints</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Track your requests</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Bell color={Colors.black} size={24} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {[1, 2, 3].map((i) => (
                    <GlassCard key={i} style={styles.recordCard}>
                        <View style={styles.recordHeader}>
                            <View style={[styles.statusTag, { backgroundColor: i === 1 ? Colors.accentBlue : '#E8F5E9' }]}>
                                <Text style={[styles.statusTagText, { color: i === 1 ? Colors.primary : Colors.success }]}>
                                    {i === 1 ? 'IN PROGRESS' : 'RESOLVED'}
                                </Text>
                            </View>
                            <Text style={styles.dateText}>2{i} Dec, 2025</Text>
                        </View>
                        <Text style={styles.recordTitle}>
                            {i === 1 ? 'Water Leakage in Kitchen' : 'Light Flicker in Bedroom'}
                        </Text>
                        <Text style={styles.recordId}>ID: #JPL-882{i}</Text>

                        <View style={styles.divider} />

                        <View style={styles.footer}>
                            <View style={styles.techInfo}>
                                <View style={styles.techAvatar} />
                                <Text style={styles.techName}>Tech: {i === 1 ? 'David Wilson' : 'Sarah Connor'}</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.detailsLink}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    </GlassCard>
                ))}

                {/* Empty State visual if needed */}
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
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    recordCard: {
        marginBottom: 16,
    },
    recordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    statusTag: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    statusTagText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 12,
        color: Colors.gray,
    },
    recordTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 4,
    },
    recordId: {
        fontSize: 12,
        color: Colors.gray,
        marginBottom: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginBottom: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    techInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    techAvatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.lightGray,
        marginRight: 8,
    },
    techName: {
        fontSize: 13,
        color: Colors.darkGray,
    },
    detailsLink: {
        color: Colors.primary,
        fontWeight: '600',
        fontSize: 14,
    }
});
