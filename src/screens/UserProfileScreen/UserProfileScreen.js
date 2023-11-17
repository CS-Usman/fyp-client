/* eslint-disable prettier/prettier */
import React, {useState, useEffect, cloneElement} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Btn from '../../components/Button';
import {
  getUserDataFromSecureStorage,
  deleteDataFromSecureStore,
} from '../../utils/localStorageData';
import {deleteUserApi, getUserApi} from '../../services/ApiService';
import {logoutApi} from '../../services/AuthApiService.js';
import {CommonActions} from '@react-navigation/native';
import ProfileBg from '../../components/profilebg.js';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the Icon component
import {
  responsiveWidth,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Profilebuttons from '../../components/profilebuttons.js';
import LinearGradient from 'react-native-linear-gradient';
const UserProfileScreen = props => {
  const [token, setToken] = useState({});
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    console.log('Effect ran!');
    // async function fetchData() {
    //     const response = await getUserApi(token);
    //     if (response) {
    //         setData(response);
    //     }
    // }

    // async function fetchToken() {
    //     const response = await getUserDataFromSecureStorage();
    //     setToken(response);
    // }

    // if (token) {
    //     console.log(token);
    //     fetchData();
    // } else {
    //     fetchToken();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    // const response = await deleteUserApi(token);
    // if (response.success) {
    //   props.navigation.dispatch(
    //     CommonActions.reset({
    //       index: 0,
    //       routes: [{ name: 'LoginScreen' }],
    //     })
    //   );
    // }
  };

  const handleLogout = async () => {
    // await deleteDataFromSecureStore();
    // const responseFromServer = await logoutApi(token);
    // console.log(responseFromServer.success);
    // if (responseFromServer.success) {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      }),
    );
    // }
  };
  const handleEdit = () => {
    console.log('edit');
    // if (data) {
    //   props.navigation.navigate('EditCredentialsScreen', {
    //     userData: data,
    //     token: token,
    //   });
    // }
  };
  const handleEditContacts = () => {
    console.log('edit contacts btn');
    // if (data) {
    //   props.navigation.navigate('EditContactsScreen', { userData: data, token: token });
    // }
  };
  const handleChangePassword = () => {
    console.log('change password clicked');
    console.log(token);
    // if (token) {
    //   props.navigation.navigate('EditPasswordScreen', {token: token});
    // }
  };
  const renderItem = ({item}) => (
    <View>
      <Text>{item.name} </Text>
      <Text> {item.number} </Text>
    </View>
  );
  return (
    <LinearGradient
      colors={['#3dc6b9', '#4df8e8']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <ProfileBg></ProfileBg>
          <View style={styles.innercontainer}>
          <View>
            <Text style={styles.profileName}>My Profile</Text>
          </View>
          <Profilebuttons
            icon="account-edit"
            // Press={handleEdit}
            color='#3dc6b9'
            text="Change Profile Info"
            textsmall="View and edit your profile"
          />
          <Profilebuttons
            icon="lock-reset"
            // Press={handleChangePassword}
            color='#3dc6b9'
            text="Change Password"
            textsmall="Tap here to change password"
          />
          <Profilebuttons
            icon="delete-circle"
            // Press={handleSubmit}
            color='#3dc6b9'
            text="Delete Account"
            textsmall="Tap here to delete account"
          />
          <Profilebuttons
            icon="logout"
            Press={handleLogout}
            color='#3dc6b9'
            text="Logout"
            textsmall="Tap here to logount"
          />

          <View style={{margin: 40}} />

          </View>
          
          {/* Flatlist cant be nested inside scrollview */}
          {/* <FlatList
            style={styles.listContainer}
            data={data.emergencyContacts}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}-${item.name}`}
          /> */}
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
  innercontainer:{
    paddingLeft:responsiveWidth(5),

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
    // Add additional styling as needed
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
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
    // Add additional styling as needed
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
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
