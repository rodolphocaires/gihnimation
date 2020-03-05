/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

import {Colors, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

const App2: () => React$Node = () => {
  const [isSearching, setIsSearching] = useState();
  const [translateAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isSearching === undefined) {
      return;
    }

    Animated.timing(translateAnim, {
      toValue: isSearching ? 1 : 0,
      duration: 300,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearching]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Animated.View
              style={[
                styles.firstItem,
                {
                  zIndex: translateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                  transform: [
                    {
                      translateY: translateAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [112, 0],
                      }),
                    },
                  ],
                },
              ]}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.sectionContainer}
                onPress={() => setIsSearching(!isSearching)}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={[
                styles.secondItem,
                {
                  zIndex: translateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                  transform: [
                    {
                      translateY: translateAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 112],
                      }),
                    },
                  ],
                },
              ]}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.sectionContainer}
                onPress={() => setIsSearching(!isSearching)}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.white,
  //   top: 100,
  //   borderRadius: 20,
  // },
  firstItem: {
    backgroundColor: 'purple',
    height,
    width,
    zIndex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  secondItem: {
    backgroundColor: 'brown',
    height,
    width,
    zIndex: 0,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  body: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.light,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App2;
