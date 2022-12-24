import { TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        width: 40,
        height: 40,
        borderRadius: SIZES.extraLarge,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.dark,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ handlePress, text, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.extraLarge,
        paddingVertical: SIZES.small,
        ...SHADOWS.dark,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{ color: COLORS.white }}>{text}</Text>
    </TouchableOpacity>
  );
};
