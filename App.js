import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import Main from './src/components/Main';



export default function App() {
  return (
    <>
    <Main/>
    <StatusBar style="auto" />
    </>
  );
}


