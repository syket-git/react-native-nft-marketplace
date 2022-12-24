import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, assets, SIZES, FONTS } from '../constants';

const HomeHeader = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          style={{ width: 90, height: 25 }}
          resizeMode="contain"
          source={assets.logo}
        />
        <View>
          <Image
            source={assets.person02}
            resizeMode="contain"
            style={{
              width: 45,
              height: 45,
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              right: -2,
              bottom: -4,
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <Text style={{ color: COLORS.white, fontFamily: FONTS.regular }}>
          Hello, Victoria 👋
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.large,
            fontFamily: FONTS.bold,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      <View
        style={{
          marginTop: SIZES.font,
          backgroundColor: COLORS.gray,
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 3,
          borderRadius: SIZES.small - 7,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: SIZES.font,
        }}
      >
        <Image
          source={assets.search}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: SIZES.base }}
        />
        <TextInput
          placeholder="Search NFT's"
          style={{ flex: 1, color: COLORS.white }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
