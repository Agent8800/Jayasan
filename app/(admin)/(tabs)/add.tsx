import { Briefcase, Image as ImageIcon, UserCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { PremiumButton } from '../../../src/components/PremiumButton';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

export default function AddScreen() {
    const [activeTab, setActiveTab] = useState<'complaint' | 'user'>('complaint');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={Typography.h2}>Create New</Text>
                <Text style={[Typography.body, { color: Colors.gray }]}>Add complaints or users</Text>
            </View>

            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'complaint' && styles.activeTab]}
                    onPress={() => setActiveTab('complaint')}
                >
                    <Briefcase size={18} color={activeTab === 'complaint' ? Colors.white : Colors.gray} />
                    <Text style={[styles.tabText, activeTab === 'complaint' && styles.activeTabText]}>Complaint</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'user' && styles.activeTab]}
                    onPress={() => setActiveTab('user')}
                >
                    <UserCircle size={18} color={activeTab === 'user' ? Colors.white : Colors.gray} />
                    <Text style={[styles.tabText, activeTab === 'user' && styles.activeTabText]}>User</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <GlassCard style={styles.formCard}>
                    {activeTab === 'complaint' ? (
                        <>
                            <Text style={styles.label}>Customer Name</Text>
                            <TextInput style={styles.input} placeholder="Select customer" />

                            <Text style={styles.label}>Issue Description</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="Describe the complaint..."
                                multiline
                                numberOfLines={4}
                            />

                            <Text style={styles.label}>Category</Text>
                            <TextInput style={styles.input} placeholder="e.g. Electrical, Plumbing" />

                            <TouchableOpacity style={styles.uploadBtn}>
                                <ImageIcon size={24} color={Colors.primary} />
                                <Text style={styles.uploadText}>Upload Reference Images</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput style={styles.input} placeholder="Enter name" />

                            <Text style={styles.label}>Email</Text>
                            <TextInput style={styles.input} placeholder="name@example.com" keyboardType="email-address" />

                            <Text style={styles.label}>Role</Text>
                            <View style={styles.roleGrid}>
                                {['User', 'Technician', 'Admin'].map(r => (
                                    <TouchableOpacity key={r} style={styles.roleBtn}>
                                        <Text style={styles.roleBtnText}>{r}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </>
                    )}

                    <PremiumButton
                        title={activeTab === 'complaint' ? "Create Complaint" : "Register User"}
                        onPress={() => { }}
                        style={{ marginTop: 20 }}
                    />
                </GlassCard>

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
        paddingHorizontal: Layout.padding,
        marginBottom: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.lightGray,
        marginHorizontal: Layout.padding,
        padding: 4,
        borderRadius: 12,
        marginBottom: 20,
    },
    tab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 8,
    },
    activeTab: {
        backgroundColor: Colors.primary,
    },
    tabText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '600',
        color: Colors.gray,
    },
    activeTabText: {
        color: Colors.white,
    },
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    formCard: {
        padding: 4, // Inner content is padded by GlassCard (20)
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 8,
        marginTop: 16,
    },
    input: {
        backgroundColor: Colors.white,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 15,
        borderWidth: 1,
        borderColor: Colors.lightGray,
    },
    textArea: {
        height: 100,
        paddingTop: 12,
        textAlignVertical: 'top',
    },
    uploadBtn: {
        height: 100,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderStyle: 'dashed',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: Colors.accentBlue,
    },
    uploadText: {
        marginTop: 8,
        color: Colors.primary,
        fontWeight: '600',
    },
    roleGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    roleBtn: {
        flex: 1,
        height: 44,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
    },
    roleBtnText: {
        fontSize: 13,
        fontWeight: '600',
        color: Colors.gray,
    }
});
