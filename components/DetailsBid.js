import { View, Text, Image } from 'react-native';
import React from 'react';
import { ETHPrice } from './SubInfo';
import { COLORS, FONTS, SIZES } from '../constants';

const DetailsBid = ({ data }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}
    >
      <Image
        style={{ width: 45, height: 45 }}
        resizeMode="contain"
        source={data?.image}
      />

      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontFamily: FONTS.semiBold }}>
          Placed by {data?.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.gray,
          }}
        >
          {data?.date}
        </Text>
      </View>

      <View>
        <ETHPrice price={data?.price} />
      </View>
    </View>
  );
};

export default DetailsBid;
