import { Gesture } from 'react-native-gesture-handler';
import { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// import { scheduleOnRN } from 'react-native-worklets';

// export const useSelectionAnimation = (response, element, defaultH, mid = null) => {
//    const isDragging = useSharedValue(false);
//    // const isSelected = useSharedValue(false);
//    const heightOffset = useSharedValue(0);

// const dragElement = Gesture.Pan()
//    .onBegin(() => {
//       isDragging.value = true;
//    })
//    .onChange((event) => {
//       heightOffset.value = event.translationY;
//    })
//    .onFinalize(() => {
//       if (heightOffset.value > 100 || heightOffset.value < -100) {
//          // isSelected.value = true;
//          scheduleOnRN(response, element);
//       } else {
//          heightOffset.value = withSpring(0);
//       }
//       // else if (offset.value > 0) console.log('not enough drag down');
//       // else if (offset.value < 0) console.log('not enough drag up');
//       isDragging.value = false;
//    });

// const initialValues = {
//    tense: { height: 300, zIndex: 1 },
//    verb: { height: '24%', zIndex: 2 },
//    start: { height: '12%', zIndex: 4 },
// };

//    const animatedStyles = useAnimatedStyle(() => {
//       const height = interpolate(heightOffset.value, [0, 1], [defaultH, 100]);
//       return {
//          default: `${height * 100}%`,
//          selected: '100%',
//          mid: mid ? `${mid * 100}%` : null,
//       };
//       // tense: { transform: [{ translateY: offset.value }] },
//       // transform: [{ translateY: offset.value }],
//       // bottom: offset.value,
//    });

//    return { dragElement, animatedStyles };

//    /**hidden: { display: 'none' },
//    display: { display: 'inherit' },
//    tenseUp: { height: 675, zIndex: 1 },
//    tenseMid: { height: 200, zIndex: 3 },
//    tenseDown: { height: 300, zIndex: 1 },
//    verbUp: { height: 675, zIndex: 2 },
//    verbDown: { height: 200, zIndex: 2 },
//    startUp: { height: 725, zIndex: 4 },
//    startDown: { height: 100, zIndex: 4 },
//    zeroHeight: { height: 0, padding: 0, overflow: 'hidden' }, */
// };

export const useSelectionAnimation = (updateDisplay) => {
   const displayTense = useSharedValue(false);
   const displayVerb = useSharedValue(false);
   const displayStart = useSharedValue(false);

   // const isDraggingTense = useSharedValue(false);
   // const isDraggingVerb = useSharedValue(false);
   // const isDraggingStart = useSharedValue(false);

   const offsetTense = useSharedValue(0);
   const offsetVerb = useSharedValue(0);
   const offsetStart = useSharedValue(0);

   const submitState = useSharedValue(0);

   const submitSelection = () => {
      submitState.value = 1;
   };

   const updateSelection = (view) => {
      let currentTense = displayTense.value;
      let currentValue = displayVerb.value;
      if (view === 'tense') {
         if (currentTense) displayTense.value = false;
         else {
            displayTense.value = true;
            displayVerb.value = false;
         }
      } else if (view === 'verb') {
         if (currentValue) displayVerb.value = false;
         else {
            displayVerb.value = true;
            displayTense.value = false;
         }
      }
   };

   const openTense = () => {
      displayTense.value = true;
      offsetTense.value = withSpring(600, { duration: 500 });
   };

   const closeTense = () => {
      displayTense.value = false;
      offsetTense.value = withSpring(0, { duration: 500 });
   };

   const openVerb = () => {
      displayVerb.value = true;
      offsetVerb.value = withSpring(600, { duration: 500 });
   };

   const closeVerb = () => {
      displayVerb.value = false;
      offsetVerb.value = withSpring(0, { duration: 500 });
   };

   const dragTense = Gesture.Pan()
      .onChange((e) => {
         if (!displayTense.value && e.translationY < 0) {
            offsetTense.value = -e.translationY;
         } else if (displayTense.value && e.translationY > 0) {
            offsetTense.value = 600 - e.translationY;
         }
      })
      .onEnd((e) => {
         if (e.translationY < 0) {
            if (e.translationY < -100) {
               displayTense.value = true;
               offsetTense.value = withSpring(600, { duration: 500 });
            } else {
               offsetTense.value = withSpring(0, { duration: 200 });
            }
         } else {
            if (e.translationY > 100) {
               displayTense.value = false;
               offsetTense.value = withSpring(0, { duration: 500 });
            } else {
               offsetTense.value = withSpring(600, { duration: 200 });
            }
         }
      });

   const tapTense = Gesture.Tap()
      .maxDuration(250)
      .onStart(() => {
         if (displayTense.value) {
            displayTense.value = false;
            offsetTense.value = withSpring(0, { duration: 500 });
         } else {
            displayTense.value = true;
            offsetTense.value = withSpring(600, { duration: 500 });
         }
      });

   const composedTense = Gesture.Simultaneous(dragTense, tapTense);

   // useAnimatedReaction(
   //    () => submitState.value,
   //    () => {
   //       let current = submitState.value;
   //       if (current === 1) {
   //          setTimeout(() => {
   //             submitState.value = 2;
   //          }, 800);
   //       } else if (current === 2) {
   //          setTimeout(() => {
   //             scheduleOnRN(updateDisplay);
   //          }, 800);
   //       }
   //    },
   // );

   const tenseAnimatedStyle = useAnimatedStyle(() => {
      const height = interpolate(offsetTense.value, [0, 600], [36, 100]);
      const tenseZIndex = offsetVerb.value ? 3 : 1;
      return { height: `${height}%`, zIndex: tenseZIndex };
   });

   return { tenseAnimatedStyle, composedTense };
};
