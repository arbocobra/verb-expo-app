import NewSelection from '@/components/NewSelection';
import TestContainer from '@/components/TestContainer';
import { useUpdateDisplay } from '@/hooks/useUpdateDisplay';
import { ImageBackground, StyleSheet, View } from 'react-native';

const backgroundImagePath = require('../assets/images/background-pattern.png')

const MainAppContent = () => {
   // const data = useReadOnlyDatabase();
   // const { isActive, updateDisplay, resetDisplay, applyFilter, tense, verb }: {
   //    isActive: boolean,
   //    updateDisplay: () => void,
   //    resetDisplay: () => void,
   //    applyFilter: (filter: string, value: string) => void,
   //    tense: string[],
   //    verb: string[]
   // } = useUpdateDisplay();
   const { isActive, completeSelection, resetDisplay, applyFilter, tense, verb, questionCount } = useUpdateDisplay();

   return (
       <ImageBackground source={backgroundImagePath} resizeMode='cover' style={styles.background} >
         <View style={styles.innerContainer}>
            {isActive ?
               <TestContainer tense={tense} verb={verb} questionCount={questionCount} resetDisplay={resetDisplay} /> :
               // <SelectionContainer completeSelection={completeSelection} tense={tense} verb={verb} applyFilter={applyFilter} />
               <NewSelection completeSelection={completeSelection} tense={tense} verb={verb} applyFilter={applyFilter} />
            }
         </View>
       </ImageBackground>
   );
}

export default MainAppContent;

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   background: {
      flex: 1, overflowX: 'hidden', height: '100%', justifyContent: 'flex-end'
      // height:200, width:200
   },
   innerContainer: {
      height: '92%', width: '100%', backgroundColor: '#fff', borderTopLeftRadius: 28, borderTopRightRadius: 28
   }
})