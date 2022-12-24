import { SIZES, FONTS } from '../constants';
import { SafeAreaView, View, Text, FlatList, ScrollView } from 'react-native';
import NFTBanner from '../components/NFTBanner';
import { ETHPrice, NFTTitle, SubInfo } from '../components/SubInfo';
import NFTDescription from '../components/NFTDescription';
import DetailsBid from '../components/DetailsBid';

const Details = ({ route }) => {
  const data = route?.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 30 }}>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.font,
            paddingHorizontal: SIZES.font,
          }}
        >
          <FlatList
            keyExtractor={(item) => item?.id}
            data={data?.bids}
            renderItem={({ item }) => <DetailsBid data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <NFTBanner data={data} />
                <SubInfo />
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: SIZES.font,
                  }}
                >
                  <NFTTitle
                    title={data?.name}
                    subTitle={data?.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                  />
                  <ETHPrice price={data.price} />
                </View>

                <NFTDescription description={data?.description} />
                <Text
                  style={{
                    fontSize: SIZES.medium,
                    fontFamily: FONTS.semiBold,
                    marginBottom: SIZES.small / 2,
                  }}
                >
                  Current Bids
                </Text>
              </>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
