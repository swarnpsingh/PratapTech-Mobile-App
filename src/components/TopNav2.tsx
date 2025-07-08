import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { verticalScale } from '../utils/styling';
import { colors } from '../constants/theme';
import Typo from './Typo';

// Add type for props
type TopNav2Props = {
  title: string;
};

const TopNav2 = ({ title }: TopNav2Props) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        {/* <Ionicons 
          name="chevron-back"
          size={verticalScale(26)}
          color={colors.white}
        /> */}
        <Image source={require('../assets/Icon.png')}  style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Typo style={styles.title}>{title}</Typo>
      </View>
    </View>
  )
}

export default TopNav2

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#0F0E1B',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  backButton: {
    zIndex: 2,
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  logo: {
    width: 45,
    height: 45,
  },
})
