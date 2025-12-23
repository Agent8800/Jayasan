import { ChevronRight, Filter, Search } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

export default function AdminComplaints() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>All Complaints</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Manage all service requests</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Filter color={Colors.black} size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
                <Search size={20} color={Colors.gray} />
                <TextInput
                    placeholder="Search complaint ID or client..."
                    style={styles.searchInput}
                />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <GlassCard key={i} style={styles.complaintCard}>
                        <View style={styles.complaintMain}>
                            <View style={styles.complaintInfo}>
                                <View style={styles.row}>
                                    <Text style={styles.complaintId}>#JPL-00{i}</Text>
                                    <View style={[styles.statusBadge, { backgroundColor: i % 2 === 0 ? '#E1F5FE' : '#FFF3E0' }]}>
                                        <Text style={[styles.statusText, { color: i % 2 === 0 ? Colors.primary : Colors.warning }]}>
                                            {i % 2 === 0 ? 'ASSIGNED' : 'PENDING'}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.complaintTitle}>AC Unit Failure - Block {String.fromCharCode(65 + i)}</Text>
                                <Text style={styles.clientName}>Client: Reliable Corp Ltd.</Text>
                            </View>
                            <ChevronRight size={20} color={Colors.lightGray} />
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
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        marginHorizontal: Layout.padding,
        paddingHorizontal: 16,
        height: 50,
        borderRadius: 12,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    complaintCard: {
        marginBottom: 12,
    },
    complaintMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    complaintInfo: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    complaintId: {
        fontWeight: 'bold',
        color: Colors.primary,
        marginRight: 10,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    statusText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    complaintTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 4,
    },
    clientName: {
        fontSize: 12,
        color: Colors.gray,
    }
});
