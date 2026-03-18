import { SQLiteProvider } from 'expo-sqlite';
import { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
import MainAppContent from './MainAppContent';
// import verbDB from '@/assets/verbs.db'

export default function App() {
  return (
    <Suspense fallback={<View><ActivityIndicator size="large" /></View>}>
      {/* <SQLiteProvider databaseName="verbs.db" assetSource={{ assetId:  }}></SQLiteProvider> */}
      <SQLiteProvider
        databaseName="verbApp.db" // The name you want to use for the database in the app
        assetSource={{ assetId: require('../assets/verbs.db') }} // Path to your bundled asset
      >
        {/* Your application components that use the database */}
        <MainAppContent />
      </SQLiteProvider>
    </Suspense>
  );
}