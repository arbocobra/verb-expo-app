import { useTheme } from '@/app/ThemeContext';
import { useSelectionAnimation } from '@/hooks/useSelectionAnimation';
import { StyleSheet, Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import SelectCount from './SelectCount';
import SelectTense from './SelectTense';
import SelectVerb from './SelectVerbs';

const NewSelection = ({ completeSelection, tense, verb, applyFilter }) => {
   const { theme } = useTheme();
   const { animatedStyles, actions } = useSelectionAnimation(completeSelection);
   // const isActive = useSharedValue(false);
   // const isDragging = useSharedValue(false);
   // const offset = useSharedValue(0);

   // const drag = Gesture.Pan()
   //    // .onBegin(() => {
   //    //    isDragging.value = true;
   //    // })
   //    .onChange((e) => {
   //       if (!isActive.value && e.translationY < 0) {
   //          offset.value = -e.translationY;
   //       } else if (isActive.value && e.translationY > 0) {
   //          offset.value = 600 - e.translationY;
   //       }
   //    })
   //    .onEnd((e) => {
   //       if (e.translationY < 0) {
   //          if (e.translationY < -100) {
   //             isActive.value = true;
   //             offset.value = withSpring(600, { duration: 500 });
   //          } else {
   //             offset.value = withSpring(0, { duration: 200 });
   //          }
   //       } else {
   //          if (e.translationY > 100) {
   //             isActive.value = false;
   //             offset.value = withSpring(0, { duration: 500 });
   //          } else {
   //             offset.value = withSpring(600, { duration: 200 });
   //          }
   //       }
   //    });
   // // .onFinalize((e) => {
   // //    isDragging.value = false;
   // // });

   // const singleTap = Gesture.Tap()
   //    .maxDuration(250)
   //    .onStart(() => {
   //       if (isActive.value) {
   //          isActive.value = false;
   //          offset.value = withSpring(0, { duration: 500 });
   //       } else {
   //          isActive.value = true;
   //          offset.value = withSpring(600, { duration: 500 });
   //       }
   //    });

   // const composed = Gesture.Simultaneous(drag, singleTap);

   // const animatedStyle = useAnimatedStyle(() => {
   //    const height = interpolate(offset.value, [0, 600], [36, 100]);
   //    // const tenseZIndex = offset.value ? 3 : 1;
   //    return { height: `${height}%` };
   //    // return {
   //    //    tense: { height: `${tenseHeight}%`, zIndex: tenseZIndex },
   //    // };
   // });

   return (
      <View style={styles.root}>
         <Text style={styles.title}>Selection Container</Text>
         <View style={styles.container}>
            <View style={styles.innerContainer}>
               {/* body here */}

               <Animated.View style={[styles.button, animatedStyles.tense, { backgroundColor: theme.primary }]}>
                  <GestureDetector gesture={actions.tense}>
                     <Animated.View style={[styles.testContainer, animatedStyles.tenseHeader]}>
                        <Text style={[styles.buttonText, { color: 'white' }]}>Select Tense</Text>
                     </Animated.View>
                  </GestureDetector>
                  <SelectTense tense={tense} displayStyle={animatedStyles.tenseDisplay} applyFilter={applyFilter} />
               </Animated.View>

               <Animated.View style={[styles.button, animatedStyles.verb, { backgroundColor: theme.secondary }]}>
                  <GestureDetector gesture={actions.verbs}>
                     <Animated.View style={[styles.testContainer, animatedStyles.verbHeader]}>
                        <Text style={styles.buttonText}>Select Verb</Text>
                     </Animated.View>
                  </GestureDetector>
                  <SelectVerb verb={verb} displayStyle={animatedStyles.verbDisplay} applyFilter={applyFilter} />
               </Animated.View>

               <Animated.View style={[styles.button, animatedStyles.start, { backgroundColor: theme.tertiary }]}>
                  <GestureDetector gesture={actions.start}>
                     <Animated.View style={[styles.testContainer, animatedStyles.startHeader]}>
                        <Text style={styles.buttonText}>Start</Text>
                     </Animated.View>
                  </GestureDetector>
                  <SelectCount
                     tense={tense}
                     verb={verb}
                     displayStyle={animatedStyles.startDisplay}
                     completeSelection={completeSelection}
                  />
               </Animated.View>
            </View>
         </View>
      </View>
   );
};
export default NewSelection;

const styles = StyleSheet.create({
   root: { flex: 1, padding: 10 },
   title: { fontSize: 28, textAlign: 'center', fontWeight: '600', marginTop: 15, marginBottom: 20 },
   container: { flex: 1 },
   innerContainer: { flex: 1, zIndex: 1 },
   bodyText: { flex: 1, paddingLeft: 10, paddingRight: 10 },
   bodyTextItem: { marginBottom: 10, fontSize: 16 },
   button: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      // paddingTop: 30,
      // padding: 20,
      position: 'absolute',
      width: '100%',
      bottom: 0,
      alignItems: 'center',
      maxHeight: '100%',
      // transitionProperty: 'height',
      // transitionDuration: 200,
   },
   testContainer: { width: '100%', alignItems: 'center', justifyContent: 'center' },
   buttonText: { fontSize: 24, fontWeight: '600' },
});
