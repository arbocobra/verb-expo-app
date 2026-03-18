// import pattern from '@/assets/images/pattern.svg';
import SelectionContainer from '@/components/SelectionContainer';
import TestContainer from '@/components/TestContainer';
import { useReadOnlyDatabase } from '@/hooks/useReadOnlyDatabase';
import { useUpdateDisplay } from '@/hooks/useUpdateDisplay';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const backgroundImagePath = require('../assets/images/background-pattern.png')

const MainAppContent = () => {
   const data = useReadOnlyDatabase();
   const {isActive, updateDisplay, resetDisplay, applyFilter, tense, verb} = useUpdateDisplay();

   return (
      <SafeAreaProvider>
         <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
            <ImageBackground source={backgroundImagePath} resizeMode='cover' style={styles.background} >
               <View style={styles.innerContainer}>
                  { isActive ? 
                  <TestContainer data={data} resetDisplay={resetDisplay} tense={tense} verb={verb} /> : 
                  <SelectionContainer updateDisplay={updateDisplay} tense={tense} verb={verb} applyFilter={applyFilter} />
                  }
               </View>
            </ImageBackground>
         </SafeAreaView>
      </SafeAreaProvider>
   );
   }

export default MainAppContent;

const styles = StyleSheet.create({
   container: {
      flex:1
   },
   background: {
      flex:1, overflowX:'hidden', height:'100%', justifyContent:'flex-end'
      // height:200, width:200
   },
   innerContainer: {
      height:'90%', width:'100%', backgroundColor:'#fff', borderTopLeftRadius:24, borderTopRightRadius:24, padding: 20, 
   }
})