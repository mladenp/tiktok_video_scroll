import React, { useState } from 'react';
import { View, StyleSheet, Header, Text } from 'react-native';

import ViewPager from '@react-native-community/viewpager';

import server from '../../../server.json';
import Feed from './Feed/index';


const Home = () => {
  const [tab, setTab] = useState(1);
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
        <Text> FEED </Text>
      <ViewPager
        onPageSelected={e => {
          setActive(e.nativeEvent.position);
        }}
        orientation="vertical"
        style={{ flex: 1 }}
        initialPage={0}
      >
        {server.feed.map(item => (
          <View key={item.id}>
            <Feed item={item} play={Number(item.id) === active} />
          </View>
        ))}
      </ViewPager>
    </View>
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
});
export default Home;
