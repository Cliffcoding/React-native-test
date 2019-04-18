import { Navigation } from "react-native-navigation";
import SplashScreen from './screens/onBoarding/Splash/Splash';
// Register Screens
Navigation.registerComponent('testApp.splashScreen', () => SplashScreen)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "testApp.splashScreen"
      }
    }
  });
});