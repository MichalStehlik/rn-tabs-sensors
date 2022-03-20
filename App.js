import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

import Home from "./screens/Home";
import Compass from "./screens/Compass";

export const SCREEN_HOME = "Home"
export const SCREEN_COMPASS = "Compass"
export const SCREEN_MAP = "Map"
export const SCREEN_CAMERA = "Camera"

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case SCREEN_HOME : iconName = "home-sharp"; break;
                case SCREEN_COMPASS : iconName = "navigate-sharp"; break;
                case SCREEN_MAP : iconName = "map-sharp"; break;
                case SCREEN_CAMERA : iconName = "camera-sharp"; break;
                default: iconName = "information-circle";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "gold",
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name={SCREEN_HOME} component={Home} options={{ title: 'Úvod', headerStyle: { backgroundColor: '#f4511e' } }} />
          <Tab.Screen name={SCREEN_COMPASS} component={Compass} options={{ title: 'Kompas' }} />
          <Tab.Screen name={SCREEN_MAP} component={Compass} options={{ title: 'Mapa' }} />
          <Tab.Screen name={SCREEN_CAMERA} component={Compass} options={{ title: 'Kamera' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
