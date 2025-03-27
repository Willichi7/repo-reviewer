import {   StyleSheet} from "react-native"
import Constants from 'expo-constants';


export const theme = {
   colors: {
         textPrimary: '#24292e',
         textSecondary: '#586069',
         primary: '#0366d6',
         appBar: '#24292e',
         mainBackground: '#e1e4e8',
         itemBackground: 'white',
         error: '#d73a4a',
   },
   fontSizes: {
         body: 14,
         subheading: 16,
   },
   fonts: {
         main: 'System',
   },
   fontWeights: {
         normal: '400',
         bold: '700',
   },
};


export const styles = StyleSheet.create({
   container: {
         paddingTop: Constants.statusBarHeight,
         backgroundColor: '#24292e',
         width: '100%',
         flexDirection: 'row',
         alignItems: 'center',
         height: 100,
   },
   text: {
         color: 'white',
         fontSize: 20,
         fontWeight: 'bold',
         padding: 10,
         marginTop: 40,
   }
});