import { useTheme } from '@/app/ThemeContext';
import { useSelectionAnimation } from '@/hooks/useSelectionAnimation';
import { useSelectionDisplay } from '@/hooks/useSelectionDisplay';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import SelectTense from './SelectTense';

const SelectionContainer = ({ updateDisplay, tense, verb, applyFilter }) => {
   const { displayTense, displayVerb, submitState, submitSelection, updateSelection } =
      useSelectionDisplay(updateDisplay);
   // const { dragElement, initialValues, animatedStyles } = useSelectionAnimation(updateSelection, 'tense');
   const { theme } = useTheme();

   const elementStyles = {
      container: [styles.container, submitState === 2 ? cStyles.hidden : cStyles.display],
      // tenseButton: [
      //    styles.button,
      //    animatedStyles,
      //    displayTense && cStyles.tenseUp,
      //    !displayTense && !displayVerb && cStyles.tenseDown,
      //    !displayTense && displayVerb && cStyles.tenseMid,
      //    submitState === 2 && cStyles.zeroHeight,
      //    { backgroundColor: theme.secondary },
      // ],
      // verbButton: [
      //    styles.button,
      //    displayVerb ? cStyles.verbUp : cStyles.verbDown,
      //    submitState === 2 ? cStyles.zeroHeight : null,
      //    { backgroundColor: theme.primary },
      // ],
      // startButton: [
      //    styles.button,
      //    submitState === 0 ? cStyles.startDown : submitState === 1 ? cStyles.startUp : cStyles.zeroHeight,
      //    { backgroundColor: theme.tertiary },
      // ],
   };

   return (
      <View style={styles.root}>
         <Text style={styles.title}>Selection Container</Text>
         <View style={elementStyles.container}>
            <View style={styles.innerContainer}>
               <SelectionBody submitState={submitState} />
               <TenseBlock
                  updateSelection={updateSelection}
                  displayTense={displayTense}
                  displayVerb={displayVerb}
                  submitState={submitState}
                  theme={theme}
               >
                  <Pressable onPress={() => updateSelection('tense')}>
                     <Text style={styles.buttonText}>Tense Button</Text>
                     <SelectTense tense={tense} submitSelection={submitSelection} display={displayTense} />
                  </Pressable>
               </TenseBlock>
               <VerbBlock displayTense={displayTense} displayVerb={displayVerb} submitState={submitState} theme={theme}>
                  <Pressable onPress={() => updateSelection('verb')}>
                     <Text style={[styles.buttonText, { color: '#fff' }]}>Verb Button</Text>
                  </Pressable>
               </VerbBlock>
               <StartBlock
                  displayTense={displayTense}
                  displayVerb={displayVerb}
                  submitState={submitState}
                  theme={theme}
               >
                  <Pressable>{submitState === 0 && <Text style={styles.buttonText}>Start Button</Text>}</Pressable>
               </StartBlock>

               {/* <Animated.View style={elementStyles.tenseButton}>
                     <Pressable onPress={() => updateSelection('tense')}>
                        <Text style={styles.buttonText}>Tense Button</Text>
                        <SelectTense tense={tense} submitSelection={submitSelection} display={displayTense} />
                     </Pressable>
                  </Animated.View>
               <Animated.View style={elementStyles.verbButton}>
                  <Pressable onPress={() => updateSelection('verb')}>
                     <Text style={[styles.buttonText, { color: '#fff' }]}>Verb Button</Text>
                  </Pressable>
               </Animated.View>
               <Animated.View style={elementStyles.startButton}>
                  <Pressable>{submitState === 0 && <Text style={styles.buttonText}>Start Button</Text>}</Pressable>
               </Animated.View> */}
            </View>
         </View>
      </View>
   );
};

export default SelectionContainer;

const SelectionBody = ({ submitState }) => {
   const bodyText = [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      'Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean.',
      'Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora.',
      'Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus.',
   ];

   return (
      <View style={[styles.bodyText, submitState === 2 ? cStyles.hidden : cStyles.display]}>
         {bodyText.map((el, i) => (
            <Text key={`body-text-${i}`} style={styles.bodyTextItem}>
               {el}
            </Text>
         ))}
      </View>
   );
};

const TenseBlock = ({ children, updateSelection, displayTense, displayVerb, submitState, theme }) => {
   const { dragElement, animatedStyles } = useSelectionAnimation(updateSelection, 'tense', 36, 24);
   const blockStyle = [
      styles.button,
      { backgroundColor: theme.secondary },
      displayTense && { height: animatedStyles.selected, zIndex: 1 },
      !displayTense && !displayVerb && { height: animatedStyles.default, zIndex: 1 },
      !displayTense && displayVerb && { height: animatedStyles.mid, zIndex: 3 },
      submitState === 2 && { height: 0, padding: 0, overflow: 'hidden' },
   ];
   return (
      <GestureDetector gesture={dragElement}>
         <Animated.View style={blockStyle}>{children}</Animated.View>
      </GestureDetector>
   );
};

const VerbBlock = ({ children, displayTense, displayVerb, submitState, theme }) => {
   const blockStyle = [
      styles.button,
      displayVerb ? cStyles.verbUp : cStyles.verbDown,
      submitState === 2 ? cStyles.zeroHeight : null,
      { backgroundColor: theme.primary },
   ];
   return (
      // <GestureDetector gesture={dragElement}>
      <Animated.View style={blockStyle}>{children}</Animated.View>
      // </GestureDetector>
   );
};

const StartBlock = ({ children, displayTense, displayVerb, submitState, theme }) => {
   const blockStyle = [
      styles.button,
      submitState === 0 ? cStyles.startDown : submitState === 1 ? cStyles.startUp : cStyles.zeroHeight,
      { backgroundColor: theme.tertiary },
   ];
   return (
      // <GestureDetector gesture={dragElement}>
      <Animated.View style={blockStyle}>{children}</Animated.View>
      // </GestureDetector>
   );
};

const styles = StyleSheet.create({
   root: { flex: 1, padding: 20 },
   title: { fontSize: 28, textAlign: 'center', fontWeight: '600', marginTop: 15, marginBottom: 20 },
   container: { flex: 1 },
   innerContainer: { flex: 1, zIndex: 1 },
   bodyText: { flex: 1, paddingLeft: 10, paddingRight: 10 },
   bodyTextItem: { marginBottom: 10, fontSize: 16 },
   button: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingTop: 30,
      padding: 20,
      position: 'absolute',
      width: '100%',
      bottom: 0,
      alignItems: 'center',
      transitionProperty: 'height',
      transitionDuration: 200,
   },
   buttonText: { fontSize: 24, fontWeight: '600' },
});

const cStyles = StyleSheet.create({
   hidden: { display: 'none' },
   display: { display: 'inherit' },
   // tenseUp: { height: 675, zIndex: 1 },
   // tenseMid: { height: 200, zIndex: 3 },
   // tenseDown: { height: 300, zIndex: 1 },
   // verbUp: { height: 675, zIndex: 2 },
   // verbDown: { height: 200, zIndex: 2 },
   // startUp: { height: 725, zIndex: 4 },
   // startDown: { height: 100, zIndex: 4 },
   tenseUp: { height: '100%', zIndex: 1 },
   tenseMid: { height: '24%', zIndex: 3 },
   tenseDown: { height: '36%', zIndex: 1 },
   verbUp: { height: '100%', zIndex: 2 },
   verbDown: { height: '24%', zIndex: 2 },
   startUp: { height: '100%', zIndex: 4 },
   startDown: { height: '12%', zIndex: 4 },
   zeroHeight: { height: 0, padding: 0, overflow: 'hidden' },
});
