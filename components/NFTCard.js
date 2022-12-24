import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { assets, COLORS, SHADOWS, SIZES } from '../constants';
import { CircleButton, RectButton } from './Button';
import { ETHPrice, NFTTitle, SubInfo } from './SubInfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data?.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTitle
          title={data?.name}
          subTitle={data?.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.small,
          marginBottom: SIZES.font,
        }}
      >
        <ETHPrice price={data.price} />
        <RectButton
          handlePress={() => navigation.navigate('Details', data)}
          text="Place a bid"
        />
      </View>
    </View>
  );
};

export default NFTCard;
