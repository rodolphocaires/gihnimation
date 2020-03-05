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
} from 'react-native';

import {Colors, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
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
        <View style={styles.scrollView}>
          {/* <Header /> */}
          {/* {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )} */}
          <View style={styles.body}>
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => setIsSearching(!isSearching)}>
              <Animated.View
                style={[
                  styles.firstItem,
                  {
                    transform: [
                      {
                        translateY: translateAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 80],
                        }),
                      },
                    ],
                  },
                ]}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.sectionContainer}
              onPress={() => setIsSearching(!isSearching)}>
              <Animated.View
                style={[
                  styles.secondItem,
                  {
                    transform: [
                      {
                        translateY: translateAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -80],
                        }),
                      },
                    ],
                  },
                ]}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </Animated.View>
            </TouchableOpacity>
            {isSearching ? (
              <SearchComponent animation={translateAnim} />
            ) : (
              <DefaultComponent animation={translateAnim} />
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export function SearchComponent({animation}) {
  return (
    <Animated.View
      style={[
        styles.firstItem,
        styles.fullItem,
        {
          opacity: animation,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0],
              }),
            },
          ],
        },
      ]}>
      <Text>Roxo</Text>
    </Animated.View>
  );
}

export function DefaultComponent({animation}) {
  return (
    <Animated.View
      style={[
        styles.secondItem,
        styles.fullItem,
        {
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 500],
              }),
            },
          ],
        },
      ]}>
      <Text>Laranja</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
    top: 100,
    flex: 1,
    borderRadius: 20,
  },
  firstItem: {
    backgroundColor: 'purple',
    paddingHorizontal: 24,
  },
  secondItem: {
    backgroundColor: 'orange',
    paddingHorizontal: 24,
  },
  body: {
    marginTop: 32,
  },
  fullItem: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
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

export default App;
