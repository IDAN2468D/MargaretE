import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import { FONTS, SIZES, COLORS, icons } from "../constants"

const CountryDropDown = ({ containerStyle, selectedCountry, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: SIZES.height > 800 ? 55 : 45,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                backgroundColor: COLORS.lightGrey,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Image
                    source={icons.arrow_down_fill}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />

                {!selectedCountry &&
                    <Text style={{ color: COLORS.grey, ...FONTS.body3 }}>Country</Text>
                }

                {selectedCountry &&
                    <>
                        <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.h3 }}>{selectedCountry?.name}</Text>
                        <Image
                            source={{ uri: selectedCountry?.flag }}
                            resizeMode="cover"
                            style={{
                                width: 30,
                                height: 30,
                                marginLeft: 10,
                                borderRadius: SIZES.radius
                            }}
                        />
                    </>
                }
            </View>

        </TouchableOpacity>
    )
}

export default CountryDropDown;