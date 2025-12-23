import { Briefcase, Image as ImageIcon, Package, UserCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { PremiumButton } from '../../../src/components/PremiumButton';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

export default function AdminAddScreen() {
    const [activeTab, setActiveTab] = useState<'complaint' | 'user' | 'product'>('complaint');
    const [selectedRole, setSelectedRole] = useState('User');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={Typography.h2}>Create New</Text>
                <Text style={[Typography.body, { color: Colors.gray }]}>Manage system entities</Text>
            </View>

            <View style={styles.tabContainer}>
                {[
                    { id: 'complaint', label: 'Complaint', icon: Briefcase },
                    { id: 'user', label: 'User', icon: UserCircle },
                    { id: 'product', label: 'Product', icon: Package },
                ].map((tab) => (
                    <TouchableOpacity
                        key={tab.id}
                        style={[styles.tab, activeTab === tab.id && styles.activeTab]}
                        onPress={() => setActiveTab(tab.id as any)}
                    >
                        <tab.icon size={16} color={activeTab === tab.id ? Colors.white : Colors.gray} />
                        <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>{tab.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <GlassCard style={styles.formCard}>
                    {activeTab === 'complaint' && (
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
                        </>
                    )}

                    {activeTab === 'user' && (
                        <>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput style={styles.input} placeholder="Enter name" />

                            <Text style={styles.label}>Email Address</Text>
                            <TextInput style={styles.input} placeholder="name@example.com" keyboardType="email-address" />

                            <Text style={styles.label}>Select Role</Text>
                            <View style={styles.roleGrid}>
                                {['User', 'Technician', 'Admin'].map(r => (
                                    <TouchableOpacity
                                        key={r}
                                        style={[styles.roleBtn, selectedRole === r && styles.roleBtnActive]}
                                        onPress={() => setSelectedRole(r)}
                                    >
                                        <Text style={[styles.roleBtnText, selectedRole === r && styles.roleBtnTextActive]}>{r}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </>
                    )}

                    {activeTab === 'product' && (
                        <>
                            <Text style={styles.label}>Product Name</Text>
                            <TextInput style={styles.input} placeholder="e.g. Voltas 1.5 Ton AC" />

                            <Text style={styles.label}>Model Code</Text>
                            <TextInput style={styles.input} placeholder="J-2025-XXXX" />

                            <Text style={styles.label}>Assign to Client</Text>
                            <TextInput style={styles.input} placeholder="Search client name" />

                            <Text style={styles.label}>Warranty Period (Months)</Text>
                            <TextInput style={styles.input} placeholder="12" keyboardType="numeric" />
                        </>
                    )}

                    <TouchableOpacity style={styles.uploadBtn}>
                        <ImageIcon size={24} color={Colors.primary} />
                        <Text style={styles.uploadText}>Upload Reference Media</Text>
                    </TouchableOpacity>

                    <PremiumButton
                        title={`Create ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
                        onPress={() => { }}
                        style={{ marginTop: 24 }}
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
        marginLeft: 6,
        fontSize: 12,
        fontWeight: '700',
        color: Colors.gray,
    },
    activeTabText: {
        color: Colors.white,
    },
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    formCard: {
        padding: 4,
    },
    label: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 8,
        marginTop: 16,
    },
    input: {
        backgroundColor: Colors.white,
        height: 52,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 15,
        borderWidth: 1,
        borderColor: Colors.lightGray,
    },
    textArea: {
        height: 100,
        paddingTop: 16,
        textAlignVertical: 'top',
    },
    uploadBtn: {
        height: 90,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderStyle: 'dashed',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: Colors.accentBlue,
    },
    uploadText: {
        marginTop: 8,
        color: Colors.primary,
        fontWeight: '700',
        fontSize: 12,
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
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
    },
    roleBtnActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    roleBtnText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.gray,
    },
    roleBtnTextActive: {
        color: Colors.white,
    }
});
