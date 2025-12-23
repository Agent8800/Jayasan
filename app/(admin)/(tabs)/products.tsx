import { Cpu, Filter, Search, Tag } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../../src/components/GlassCard';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';

const PRODUCT_DATA = [
    { id: '1', name: 'Voltas 1.5 Ton AC', brand: 'Voltas', client: 'John Doe', model: 'V-2024-XP' },
    { id: '2', name: 'Panasonic Inverter AC', brand: 'Panasonic', client: 'Jane Smith', model: 'P-55-INV' },
    { id: '3', name: 'BlueStar Split AC', brand: 'BlueStar', client: 'Mike Johnson', model: 'BS-990' },
];

export default function ProductsScreen() {
    const [search, setSearch] = useState('');

    const renderItem = ({ item }: { item: typeof PRODUCT_DATA[0] }) => (
        <GlassCard style={styles.productCard}>
            <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                    <Cpu color={Colors.primary} size={24} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.clientName}>Owner: {item.client}</Text>
                    <View style={styles.tagRow}>
                        <View style={styles.tag}>
                            <Tag size={12} color={Colors.gray} />
                            <Text style={styles.tagText}>{item.brand}</Text>
                        </View>
                        <Text style={styles.modelText}>{item.model}</Text>
                    </View>
                </View>
            </View>
        </GlassCard>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.h2}>Inventory</Text>
                    <Text style={[Typography.body, { color: Colors.gray }]}>Manage client products</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Filter color={Colors.black} size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
                <Search size={20} color={Colors.gray} />
                <TextInput
                    placeholder="Search model or serial..."
                    style={styles.searchInput}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            <FlatList
                data={PRODUCT_DATA.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
            <View style={{ height: 100 }} />
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
    listContent: {
        paddingHorizontal: Layout.padding,
    },
    productCard: {
        marginBottom: 12,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: Colors.accentBlue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        marginLeft: 16,
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 2,
    },
    clientName: {
        fontSize: 13,
        color: Colors.gray,
        marginBottom: 6,
    },
    tagRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 10,
    },
    tagText: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.gray,
        marginLeft: 4,
    },
    modelText: {
        fontSize: 11,
        color: Colors.primary,
        fontWeight: '700',
    }
});
