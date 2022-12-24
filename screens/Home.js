import React from 'react';
import { View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { FocusedStatusBar, NFTCard, HomeHeader } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            keyExtractor={(item) => item?.id}
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
