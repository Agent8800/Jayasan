import { AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react-native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

const { width } = Dimensions.get('window');

const AnalyticsCard = ({ title, value, sub, icon: Icon, color }: any) => (
    <GlassCard style={styles.anaCard}>
        <View style={styles.cardCol}>
            <View style={[styles.iconBox, { backgroundColor: color + '20' }]}>
                <Icon size={20} color={color} />
            </View>
            <View style={styles.textCol}>
                <Text style={styles.anaTitle}>{title}</Text>
                <Text style={styles.anaValue}>{value}</Text>
                <Text style={styles.anaSub}>{sub}</Text>
            </View>
        </View>
    </GlassCard>
);

export default function AnalyticsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={Typography.h2}>Performance</Text>
                <Text style={[Typography.body, { color: Colors.gray }]}>Insights and statistics</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.grid}>
                    <AnalyticsCard
                        title="Resolution Rate"
                        value="84%"
                        sub="+2.4% from last month"
                        icon={CheckCircle}
                        color={Colors.success}
                    />
                    <AnalyticsCard
                        title="Avg. Resp Time"
                        value="1.2h"
                        sub="-15m from last month"
                        icon={Clock}
                        color={Colors.primary}
                    />
                    <AnalyticsCard
                        title="High Priority"
                        value="08"
                        sub="Active critical issues"
                        icon={AlertTriangle}
                        color={Colors.error}
                    />
                    <AnalyticsCard
                        title="Trend"
                        value="+12%"
                        sub="Growth in requests"
                        icon={TrendingUp}
                        color={Colors.secondary}
                    />
                </View>

                <Text style={[Typography.h3, { marginTop: 24, marginBottom: 16 }]}>Activity Overview</Text>

                <GlassCard style={styles.chartPlaceholder}>
                    <View style={styles.chartHeader}>
                        <Text style={styles.chartTitle}>Monthly Requests</Text>
                    </View>
                    <View style={styles.barsContainer}>
                        {[40, 70, 50, 90, 60, 80, 55].map((h, i) => (
                            <View key={i} style={styles.barWrapper}>
                                <View style={[styles.bar, { height: h }]} />
                                <Text style={styles.barLabel}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</Text>
                            </View>
                        ))}
                    </View>
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
    scrollContent: {
        paddingHorizontal: Layout.padding,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    anaCard: {
        width: '48%',
        marginBottom: 16,
    },
    cardCol: {
        flexDirection: 'column',
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    textCol: {},
    anaTitle: {
        fontSize: 12,
        color: Colors.gray,
        fontWeight: '600',
        marginBottom: 4,
    },
    anaValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
    },
    anaSub: {
        fontSize: 10,
        color: Colors.gray,
        marginTop: 4,
    },
    chartPlaceholder: {
        height: 220,
        justifyContent: 'center',
    },
    chartHeader: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    chartTitle: {
        fontWeight: '700',
        fontSize: 14,
        color: Colors.black,
    },
    barsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: 100,
        marginTop: 40,
        paddingHorizontal: 10,
    },
    barWrapper: {
        alignItems: 'center',
    },
    bar: {
        width: 20,
        backgroundColor: Colors.primary,
        borderRadius: 6,
    },
    barLabel: {
        marginTop: 8,
        fontSize: 10,
        color: Colors.gray,
        fontWeight: '600',
    }
});
