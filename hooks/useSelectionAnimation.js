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

   const baseHeightTense = useSharedValue(36);
   const baseHeightVerb = useSharedValue(24);

   const offsetTense = useSharedValue(0);
   const offsetVerb = useSharedValue(0);
   const offsetStart = useSharedValue(0);

   const submitState = useSharedValue(0);

   const submitSelection = () => {
      submitState.value = 1;
   };

   const openTense = () => {
      'worklet';

      displayTense.value = true;
      offsetTense.value = withSpring(600, { duration: 500 });
   };

   const closeTense = () => {
      'worklet';

      displayTense.value = false;
      offsetTense.value = withSpring(0, { duration: 500 });
   };

   const openVerb = () => {
      'worklet';

      displayVerb.value = true;
      offsetVerb.value = withSpring(600, { duration: 500 });
      baseHeightTense.value = withSpring(24, { duration: 300 });
   };

   const closeVerb = () => {
      'worklet';

      displayVerb.value = false;
      offsetVerb.value = withSpring(0, { duration: 500 });
      if (!displayStart.value) baseHeightTense.value = withSpring(36, { duration: 300 });
   };

   const openStart = () => {
      'worklet';

      displayStart.value = true;
      offsetStart.value = withSpring(600, { duration: 500 });
      baseHeightTense.value = withSpring(24, { duration: 300 });
      baseHeightVerb.value = withSpring(12, { duration: 300 });
   };

   const closeStart = () => {
      'worklet';

      displayStart.value = false;
      offsetStart.value = withSpring(0, { duration: 500 });
      baseHeightVerb.value = withSpring(24, { duration: 300 });
      if (!displayVerb.value) baseHeightTense.value = withSpring(36, { duration: 300 });
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
               // displayTense.value = true;
               // offsetTense.value = withSpring(600, { duration: 500 });
               openTense();
               if (displayVerb.value) closeVerb();
               if (displayStart.value) closeStart();
            } else {
               offsetTense.value = withSpring(0, { duration: 200 });
            }
         } else {
            if (e.translationY > 70) {
               // displayTense.value = false;
               // offsetTense.value = withSpring(0, { duration: 500 });
               closeTense();
            } else {
               offsetTense.value = withSpring(600, { duration: 200 });
            }
         }
      });
   // .onFinalize((e) => {
   //    console.log(e.translationY);
   //    if (e.translationY < -100) {
   //       displayTense.value = true;
   //    } else if (e.translationY > 70) {
   //       displayTense.value = false;
   //    }
   // });

   const dragVerb = Gesture.Pan()
      .onChange((e) => {
         if (!displayVerb.value && e.translationY < 0) {
            offsetVerb.value = -e.translationY;
         } else if (displayVerb.value && e.translationY > 0) {
            offsetVerb.value = 600 - e.translationY;
         }
      })
      .onEnd((e) => {
         if (e.translationY < 0) {
            if (e.translationY < -100) {
               // displayVerb.value = true;
               // offsetVerb.value = withSpring(600, { duration: 500 });
               openVerb();
               if (displayTense.value) closeTense();
               if (displayStart.value) closeStart();
            } else {
               offsetVerb.value = withSpring(0, { duration: 200 });
            }
         } else {
            if (e.translationY > 70) {
               // displayVerb.value = false;
               // offsetVerb.value = withSpring(0, { duration: 500 });
               closeVerb();
            } else {
               offsetVerb.value = withSpring(600, { duration: 200 });
            }
         }
      });

   const dragStart = Gesture.Pan()
      .onChange((e) => {
         if (!displayStart.value && e.translationY < 0) {
            offsetStart.value = -e.translationY;
         } else if (displayStart.value && e.translationY > 0) {
            offsetStart.value = 600 - e.translationY;
         }
      })
      .onEnd((e) => {
         if (e.translationY < 0) {
            if (e.translationY < -100) {
               openStart();
               if (displayTense.value) closeTense();
               if (displayVerb.value) closeVerb();
            } else {
               offsetStart.value = withSpring(0, { duration: 200 });
            }
         } else {
            if (e.translationY > 70) closeStart();
            else {
               offsetStart.value = withSpring(600, { duration: 200 });
            }
         }
      });

   const tapTense = Gesture.Tap()
      .maxDuration(250)
      .onStart(() => {
         if (displayTense.value) {
            // displayTense.value = false;
            // offsetTense.value = withSpring(0, { duration: 500 });
            closeTense();
         } else {
            // displayTense.value = true;
            // offsetTense.value = withSpring(600, { duration: 500 });
            openTense();
            if (displayVerb.value) closeVerb();
            if (displayStart.value) closeStart();
         }
      });

   const tapVerb = Gesture.Tap()
      .maxDuration(250)
      .onStart(() => {
         if (displayVerb.value) {
            // displayVerb.value = false;
            // offsetVerb.value = withSpring(0, { duration: 500 });
            closeVerb();
         } else {
            // displayVerb.value = true;
            // offsetVerb.value = withSpring(600, { duration: 500 });
            openVerb();
            if (displayTense.value) closeTense();
            if (displayStart.value) closeStart();
         }
      });

   const tapStart = Gesture.Tap()
      .maxDuration(250)
      .onStart(() => {
         if (displayStart.value) closeStart();
         else {
            openStart();
            if (displayTense.value) closeTense();
            if (displayVerb.value) closeVerb();
         }
      });

   const composedTense = Gesture.Simultaneous(dragTense, tapTense);
   const composedVerb = Gesture.Simultaneous(dragVerb, tapVerb);
   const composedStart = Gesture.Simultaneous(dragStart, tapStart);

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
      const height = interpolate(offsetTense.value, [0, 600], [baseHeightTense.value, 100]);
      return { height: `${height}%`, zIndex: 3 };
   });

   const verbAnimatedStyle = useAnimatedStyle(() => {
      const height = interpolate(offsetVerb.value, [0, 600], [baseHeightVerb.value, 100]);
      const zIndex = displayVerb.value ? 2 : 4;
      return { height: `${height}%`, zIndex };
   });

   const startAnimatedStyle = useAnimatedStyle(() => {
      const height = interpolate(offsetStart.value, [0, 600], [12, 100]);
      const zIndex = displayStart.value ? 1 : 5;
      return { height: `${height}%`, zIndex };
   });

   const displayTenseStyle = useAnimatedStyle(() => {
      if (displayTense.value) {
         return { display: 'flex', flex: 1 };
      } else {
         return { display: 'none' };
      }
   });

   const tenseHeader = useAnimatedStyle(() => {
      const height = displayTense.value ? 10 : 33;
      return {
         height: `${height}%`,
      };
   });

   const displayVerbStyle = useAnimatedStyle(() => {
      if (displayVerb.value) {
         return { display: 'flex', flex: 1 };
      } else {
         return { display: 'none' };
      }
   });

   const verbHeader = useAnimatedStyle(() => {
      const height = displayVerb.value ? 10 : 50;
      return {
         height: `${height}%`,
      };
   });

   const displayStartStyle = useAnimatedStyle(() => {
      if (displayStart.value) {
         return { display: 'flex', flex: 1 };
      } else {
         return { display: 'none' };
      }
   });

   const startHeader = useAnimatedStyle(() => {
      const height = displayStart.value ? 10 : 100;
      return {
         height: `${height}%`,
      };
   });

   return {
      animatedStyles: {
         tense: tenseAnimatedStyle,
         verb: verbAnimatedStyle,
         start: startAnimatedStyle,
         tenseDisplay: displayTenseStyle,
         verbDisplay: displayVerbStyle,
         startDisplay: displayStartStyle,
         tenseHeader,
         verbHeader,
         startHeader,
      },
      actions: {
         tense: composedTense,
         verbs: composedVerb,
         start: composedStart,
      },
      // display: {
      //    tense: displayTense,
      //    verbs: displayVerb,
      //    start: displayStart,
      // },
   };
};
