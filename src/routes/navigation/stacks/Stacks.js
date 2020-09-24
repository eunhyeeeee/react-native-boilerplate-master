import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import login from 'scenes/login'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import QRcode from 'scenes/QRcode'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}



export const loginNavigator = createStackNavigator({
  login: {screen: login}
})

export const HomeNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})

export const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})

export const QRcodeNavigator = createStackNavigator({
  QRcode: {
    screen: QRcode,
    navigationOptions: ({ navigation }) => ({
      title: 'QRcode',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})

