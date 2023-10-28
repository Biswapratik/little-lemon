
import {
    Text,
    View,
    Image,
    StyleSheet,
  } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/logo.png')}
          />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: 60,
      width: '100%',
      resizeMode: 'contain'
    },
})