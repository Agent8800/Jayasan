import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Colors, Layout, Typography } from '../../../src/constants/Theme';
import { GlassCard } from '../../../src/components/GlassCard';
import { Search, MapPin, Phone, User as UserIcon } from 'lucide-react-native';

const USERS_DATA = [
  { id: '1', name: 'John Doe', role: 'Technician', status: 'Online', phone: '+123456789' },
  { id: '2', name: 'Jane Smith', role: 'User', status: 'Offline', phone: '+987654321' },
  { id: '3', name: 'Mike Johnson', role: 'Technician', status: 'Online', phone: '+112233445' },
  { id: '4', name: 'Robert Brown', role: 'User', status: 'Online', phone: '+556677889' },
];

export default function UsersScreen() {
  const [search, setSearch] = useState('');

  const renderItem = ({ item }: { item: typeof USERS_DATA[0] }) => (
    <GlassCard style={styles.userCard}>
      <View style={styles.cardHeader}>
        <View style={styles.avatar}>
          <UserIcon color={Colors.primary} size={24} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>
        <View style={[styles.statusDot, { backgroundColor: item.status === 'Online' ? Colors.success : Colors.gray }]} />
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.actionBtn}>
          <Phone size={16} color={Colors.gray} />
          <Text style={styles.actionText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <MapPin size={16} color={Colors.gray} />
          <Text style={styles.actionText}>Locate</Text>
        </TouchableOpacity>
      </View>
    </GlassCard>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={Typography.h2}>Manage Users</Text>
        <Text style={[Typography.body, { color: Colors.gray }]}>Technicians and Clients</Text>
      </View>

      <View style={styles.searchBar}>
        <Search size={20} color={Colors.gray} />
        <TextInput 
          placeholder="Search users..." 
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={USERS_DATA.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))}
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
    paddingHorizontal: Layout.padding,
    marginBottom: 20,
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
  userCard: {
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.accentBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  role: {
    fontSize: 12,
    color: Colors.gray,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    paddingTop: 12,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    color: Colors.gray,
    fontWeight: '500',
  }
});
