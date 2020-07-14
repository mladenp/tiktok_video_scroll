import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

const Feed = ({ play, item }) => {
  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,.3)', 'transparent']}
        style={styles.gradient1}
      />
      <View style={styles.container}>
        <Video
          source={{ uri: item }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={play}
          isLooping
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: '#ffffff',
          marginTop: 20
        }}
      >
        Lorem Ipsum is simply dummy text
      </Text>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.4)']}
        style={styles.gradient2}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  gradient1: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '70%',
  },
  gradient2: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
});
export default Feed;
