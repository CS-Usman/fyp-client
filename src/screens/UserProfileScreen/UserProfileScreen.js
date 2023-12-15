/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import ProfileBg from '../../components/profilebg.js';
import {
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

import {
  responsiveWidth,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Profilebuttons from '../../components/profilebuttons.js';
import LinearGradient from 'react-native-linear-gradient';

const UserProfileScreen = props => {
  const { data, token } = props.route.params;

  const handleSubmit = async () => {
    props.navigation.navigate('DeleteAccountConfirmationScreen', {
      userData: token,
    });
  };

  const handleLogout = async () => {
    props.navigation.navigate('LogoutConfirmationScreen', {
      userData: token,
    });
  };

  const handleEdit = () => {
    props.navigation.navigate('EditCredentialsScreen');
    if (data) {
      props.navigation.navigate('EditCredentialsScreen', {
        userData: data,
        token: token,
      });
    }
  };
  const handleEditContacts = () => {
    if (data) {
      props.navigation.navigate('UserContactScreen', { userData: data, token: token });
    }
  };
  const handleChangePassword = () => {
    props.navigation.navigate('EditPasswordScreen');
    if (token) {
      props.navigation.navigate('EditPasswordScreen', { token: token });
    }
  };
  return (
    <LinearGradient
      colors={['#3dc6b9', '#4df8e8']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <ProfileBg name={data.name} email={data.email} number={data.userPhoneNumber} />
          <View style={styles.innercontainer}>
            <View>
              <Text style={styles.profileName}>PROFILE</Text>
            </View>
            <Profilebuttons
              icon="account-edit"
              Press={handleEdit}
              color="#3dc6b9"
              text="Change Profile Info"
              textsmall="View and edit your profile"
            />
            <Profilebuttons
              icon="lock-reset"
              Press={handleChangePassword}
              color="#3dc6b9"
              text="Change Password"
              textsmall="Tap here to change password"
            />
            <Profilebuttons
              icon="contacts"
              Press={handleEditContacts}
              color="#3dc6b9"
              text="Change Contacts"
              textsmall="Tap here to change contacts"
            />
            <Profilebuttons
              icon="delete-circle"
              Press={handleSubmit}
              color="#3dc6b9"
              text="Delete Account"
              textsmall="Tap here to delete account"
            />
            <Profilebuttons
              icon="logout"
              Press={handleLogout}
              color="#3dc6b9"
              text="Logout"
              textsmall="Tap here to logout"
            />

            <View style={{ margin: 40 }} />

          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1B1B1B',
    opacity: 0.95,
  },
  innercontainer: {
    paddingLeft: responsiveWidth(5),

  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    flex: 1,
    justifyContent: 'center',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    elevation: 5,
  },
  profileName: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    marginLeft: responsiveScreenWidth(7),
    marginTop: 20,
    alignItems: 'center',
  },
  profileEmail: {
    fontSize: 16,
    color: '#ffffff',
  },
  section: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statisticsSection: {
    backgroundColor: 'gray',
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  featureSection: {
    backgroundColor: 'black',
    elevation: 1,
    borderRadius: 25,
    height: responsiveScreenHeight(9),
    flex: 1,
    flexDirection: 'row',
  },
});

export default UserProfileScreen;
