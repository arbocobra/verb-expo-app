import SelectionContainer from '@/components/SelectionContainer';
import TestContainer from '@/components/TestContainer';
import { useUpdateDisplay } from '@/hooks/useUpdateDisplay';

import { ImageBackground, StyleSheet, View } from 'react-native';

const backgroundImagePath = require('../assets/images/background-pattern.png')

const MainAppContent = () => {
// const MainAppContent = ({resetTest, renderKey}:{resetTest:() => void, renderKey:number}) => {
   const { isActive, completeSelection, resetApp, applyFilter, tense, verb, questions, selectedCount, reset, setResetTest,
      setResetSelection } = useUpdateDisplay();

   return (
       <ImageBackground source={backgroundImagePath} resizeMode='cover' style={styles.background} >
         <View style={styles.innerContainer}>
            {isActive ?
               // <TestContainer key={renderKey} selectedCount={selectedCount} resetDisplay={resetDisplay} questions={questions} totalCount={questions.length} reset={reset} resetTest={resetTest} /> :
               // <SelectionContainer key={renderKey} completeSelection={completeSelection} tense={tense} verb={verb} applyFilter={applyFilter} resetDisplay={resetDisplay} reset={reset} resetTest={resetTest} />
               <TestContainer selectedCount={selectedCount} resetApp={resetApp} questions={questions} totalCount={questions.length} reset={reset} setResetTest={setResetTest} /> :
               <SelectionContainer completeSelection={completeSelection} tense={tense} verb={verb} applyFilter={applyFilter} resetApp={resetApp} reset={reset} setResetSelection={setResetSelection} />
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