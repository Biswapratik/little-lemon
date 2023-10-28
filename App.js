import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './Screens/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from './Screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage'
import SplashScreen from "./Screens/SplashScreen";

const Stack = createNativeStackNavigator()

export default function App() {

  const [signedIn, setSignedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getUserData = async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(1000);
      AsyncStorage.clear();
      AsyncStorage.getItem("firstName").then((firstName) => {
        if (firstName !== null) {
          setSignedIn(true)
        }
      })
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  console.log(`Loading: ${isLoading}, SignedIn: ${signedIn}`);

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          signedIn
            ? (
              <Stack.Screen name="Profile" component={ProfileScreen} />
            )
            : (
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

