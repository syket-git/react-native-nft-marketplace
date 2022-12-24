import { View, Image, Text } from 'react-native';
import React from 'react';
import { COLORS, assets, FONTS, SIZES, SHADOWS } from '../constants';
import { CircleButton } from './Button';
import { useNavigation } from '@react-navigation/native';

const NFTBanner = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{ width: '100%', height: 250 }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font,
        }}
        resizeMode="cover"
        source={data?.image}
      />

      <CircleButton
        imgUrl={assets.left}
        top={10}
        left={10}
        handlePress={() => navigation.navigate('Home')}
      />
      <CircleButton imgUrl={assets.heart} top={10} right={10} />
    </View>
  );
};

export default NFTBanner;
