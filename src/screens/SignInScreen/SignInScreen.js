import React, {useState} from 'react'
import { View, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignInScreen = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = ()=> {
    // console.warn('Logged In')
    if (username === 'ak' && password === 'ak') {
      Alert.alert(`Welcome ${username}`)
      navigation.navigate('Welcome')
    }
    else {
      Alert.alert('Please Enter Valid Username or Password')
    }
  }

  return (
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'
      />
      <CustomInput 
        placeholder='username' 
        value={username} 
        setValue={setUsername} 
      />
      <CustomInput 
        placeholder='password'
        value={password}
        setValue={setPassword} 
        secureTextEntry={true} 
      />

      <CustomButton text='Login' onPress={onSignInPressed} />

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '88%',
    maxWidth: 400,
    maxHeight: 300,
    marginBottom: 15
  }
})

export default SignInScreen;