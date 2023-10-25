import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { validateEmail, validateString } from './utils';

export default function App() {

  const [firstName, setFirstName] = useState('')
  const [validFirstName, setValitFirstName] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)


  const checkFirstName = (text) => {
    setFirstName(text)
    setValitFirstName(firstName.match("^[a-zA-Z]*$") && (firstName.length > 0))
  }

  const checkEmail = (text) => {
    setEmail(text)
    setValidEmail(validateEmail(email) !== null)
  }

  const nextButtonPressed = () => {
    console.log("Next");
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image
          style={styles.image}
          source={require('./assets/logo.png')}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={[styles.text, { marginBottom: 120 }]}>Let us get to know you</Text>
        <View style={styles.form}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={checkFirstName}
          ></TextInput>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={checkEmail}
          ></TextInput>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: (validEmail && validFirstName) ? "#C4CCD3" : '#D9DFE5' }]}
        onPress={nextButtonPressed}
        disabled = {!validEmail && !validFirstName}
        >
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerView: {
    height: 132,
    width: '100%',
    backgroundColor: '#D9DFE5',
    paddingTop: 56
  },
  image: {
    height: 60,
    width: '100%',
    resizeMode: 'contain'
  },
  formContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#C4CCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 24,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    width: '70%',
    fontSize: 24
  },
  bottomContainer: {
    height: 160,
    width: '100%',
    backgroundColor: '#EFF2F6',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 40
  },
  button: {
    padding: 10,
    width: 120,
    alignItems: 'center',
    borderRadius: 8
  }
});
