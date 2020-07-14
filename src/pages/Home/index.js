import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Header, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import server from '../../../server.json';
import Feed from './Feed/index';


const Home = () => {
  console.log('home')
  const [tab, setTab] = useState(1);
  const [active, setActive] = useState(0);
  const [videos, setVideos] = useState([])


  useEffect(() => {
    const res = fetch('https://api.ellorem.xyz/public/mock/tik-tok-feed?start=12&perPage=8')
      .then((res) => res.json())
      .then((res) => {
        const urls = res.data.items.map((item) => {
          return item.videos[0].videoFormats.video[1].presignedUrl
        })

        console.log('urls', urls)
        setVideos(urls)
      })
  }, [])
  return (
    <View style={styles.container}>
      <ViewPager
        onPageSelected={e => {
          setActive(e.nativeEvent.position);
        }}
        orientation="vertical"
        style={{flex: 1}}
        initialPage={0}
      >
        {videos.map((item, id) => (
          <View key={id}>
            <Feed item={item} play={id === active}/>
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
