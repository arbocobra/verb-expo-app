import { SQLiteProvider } from 'expo-sqlite';
import { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MainAppContent from './MainAppContent';
import ThemeProvider from './ThemeContext';
// import verbDB from '@/assets/verbs.db'

export default function App() {
  return (
    
      <Suspense fallback={<View><ActivityIndicator size="large" /></View>}>
        <SQLiteProvider
          databaseName="verbApp.db"
          assetSource={{ assetId: require('../assets/verbs.db') }}
        >
          <ThemeProvider>
            <GestureHandlerRootView>
          <MainAppContent />
          </GestureHandlerRootView>
          </ThemeProvider>
        </SQLiteProvider>
      </Suspense>
  );
}