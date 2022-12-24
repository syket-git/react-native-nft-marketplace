import { View, Text } from 'react-native';
import { useState } from 'react';
import { SIZES, COLORS, FONTS, assets } from '../constants';

const NFTDescription = ({ description }) => {
  const [trimmedText, setTrimmedText] = useState(description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.medium,
          fontFamily: FONTS.semiBold,
          marginBottom: SIZES.small / 2,
        }}
      >
        Description
      </Text>

      <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>
        {readMore ? description : `${trimmedText}..... `}
        {}
        <Text
          onPress={() => setReadMore(!readMore)}
          style={{
            marginLeft: 10,
            color: COLORS.primary,
            fontFamily: FONTS.semiBold,
          }}
        >
          {readMore ? ' Read less' : ' Read More'}
        </Text>
      </Text>
    </View>
  );
};

export default NFTDescription;
