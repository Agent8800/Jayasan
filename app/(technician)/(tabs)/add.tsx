import { Clock, Image as ImageIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { PremiumButton } from '../../../src/components/PremiumButton';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

export default function TechReportScreen() {
    const [status, setStatus] = useState('In Progress');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={Typography.h2}>Work Report</Text>
                <Text style={[Typography.body, { color: Colors.gray }]}>Update job status and details</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <GlassCard style={styles.formCard}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Complaint ID</Text>
                        <TextInput style={styles.input} placeholder="#JPL-00123" editable={false} value="#JPL-00123" />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Work Performed</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Describe what you did..."
                            multiline
                            numberOfLines={5}
                            textAlignVertical="top"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Time Spent</Text>
                        <View style={styles.innerRow}>
                            <Clock size={20} color={Colors.gray} />
                            <TextInput style={[styles.input, { flex: 1, marginLeft: 10 }]} placeholder="e.g. 2 hours" />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Update Status</Text>
                        <View style={styles.grid}>
                            {['In Progress', 'On Hold', 'Completed'].map((s) => (
                                <TouchableOpacity
                                    key={s}
                                    style={[styles.statusBtn, status === s && styles.statusBtnActive]}
                                    onPress={() => setStatus(s)}
                                >
                                    <Text style={[styles.statusText, status === s && styles.statusTextActive]}>{s}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <TouchableOpacity style={styles.uploadBtn}>
                        <ImageIcon size={24} color={Colors.primary} />
                        <Text style={styles.uploadText}>Add Proof of Work (Images)</Text>
                    </TouchableOpacity>

                    <PremiumButton
                        title="Submit Report"
                        onPress={() => { }}
                        style={{ marginTop: 24 }}
                    />
                </GlassCard>

                <View style={{ height: 100 }} />
            </ScrollView>
        </KeyboardAvoidingView>
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
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    formCard: {
        padding: 4,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 8,
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
        height: 120,
        paddingTop: 16,
    },
    innerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 12,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        height: 52,
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusBtn: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        backgroundColor: Colors.white,
    },
    statusBtnActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    statusText: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.gray,
    },
    statusTextActive: {
        color: Colors.white,
    },
    uploadBtn: {
        height: 90,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderStyle: 'dashed',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: Colors.accentBlue,
    },
    uploadText: {
        marginTop: 8,
        color: Colors.primary,
        fontWeight: '700',
        fontSize: 12,
    }
});
