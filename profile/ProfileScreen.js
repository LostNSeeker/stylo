// src/screens/main/ProfileScreen.js
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ensure you have this installed or adjust accordingly

const { width } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}/>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Prakhar</Text>
            <Text style={styles.userPhone}>+91 87878 87878</Text>
          </View>
        </View>
        
        {/* First Section */}
        <View style={styles.section}>
          <MenuItem
            iconName="cube-outline"
            label="Recent Orders"
            onPress={() => {}}
          />
          <MenuItem
            iconName="people-outline"
            label="Refer a friend"
            onPress={() => {}}
          />
          <MenuItem
            iconName="alert-circle-outline"
            label="Report an Error"
            onPress={() => {}}
          />
        </View>

        {/* Second Section */}
        <View style={styles.section}>
          <MenuItem
            iconName="star-outline"
            label="Drop a Rating"
            onPress={() => {}}
          />
          <MenuItem
            iconName="share-social-outline"
            label="Follow our socials"
            onPress={() => {}}
          />
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutContainer} onPress={() => {}}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({ iconName, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <Ionicons name={iconName} size={20} color="#999" style={styles.menuIcon}/>
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backButton: {
    paddingRight: 10,
    paddingVertical: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#333',
    marginRight: 15,
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  userPhone: {
    fontSize: 14,
    color: '#666666',
  },
  section: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 10,
  },
  menuLabel: {
    fontSize: 16,
    color: '#666666',
  },
  logoutContainer: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#D6336C',
    fontWeight: '600',
  },
});

export default ProfileScreen;
