import { Camera, Image as ImageIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { PremiumButton } from '../../../src/components/PremiumButton';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

export default function SubmitComplaint() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={Typography.h2}>New Complaint</Text>
                <Text style={[Typography.body, { color: Colors.gray }]}>Tell us what needs fixing</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <GlassCard style={styles.formCard}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Issue Title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. AC not cooling"
                            value={title}
                            onChangeText={setTitle}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Please provide more details..."
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                            textAlignVertical="top"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Category</Text>
                        <View style={styles.categoryGrid}>
                            {['Electrical', 'Plumbing', 'AC', 'Other'].map((cat) => (
                                <TouchableOpacity
                                    key={cat}
                                    style={[styles.catBtn, category === cat && styles.catBtnActive]}
                                    onPress={() => setCategory(cat)}
                                >
                                    <Text style={[styles.catText, category === cat && styles.catTextActive]}>{cat}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <Text style={styles.label}>Attachments</Text>
                    <View style={styles.uploadContainer}>
                        <TouchableOpacity style={styles.uploadSlot}>
                            <Camera size={24} color={Colors.primary} />
                            <Text style={styles.uploadLabel}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.uploadSlot}>
                            <ImageIcon size={24} color={Colors.primary} />
                            <Text style={styles.uploadLabel}>Gallery</Text>
                        </TouchableOpacity>
                    </View>

                    <PremiumButton
                        title="Submit Request"
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
        height: 54,
        backgroundColor: Colors.white,
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
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -4,
    },
    catBtn: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        margin: 4,
        backgroundColor: Colors.white,
    },
    catBtnActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    catText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray,
    },
    catTextActive: {
        color: Colors.white,
    },
    uploadContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    uploadSlot: {
        width: 80,
        height: 80,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Colors.primary,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.accentBlue,
    },
    uploadLabel: {
        fontSize: 10,
        color: Colors.primary,
        fontWeight: '700',
        marginTop: 4,
    }
});
