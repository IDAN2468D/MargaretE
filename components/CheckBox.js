import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FONTS, SIZES, COLORS, icons } from '../constants';

const CheckBox = ({ containerStyle, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    flex: 1,
                    marginRight: SIZES.base,
                    ...FONTS.body5,
                    lineHeight: 20
                }}
            >
                By registering, you agree to our Terms and that you have
                read our Data Use Policy.
            </Text>

            <View
                style={{
                    width: 25,
                    height: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.base,
                    borderWidth: 3,
                    borderColor: isSelected ? COLORS.primary : COLORS.grey,
                    backgroundColor: isSelected ? COLORS.primary : null,
                }}
            >
                {isSelected &&
                    <Image
                        source={icons.checkmark}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.light
                        }}
                    />
                }
            </View>
        </TouchableOpacity>
    )
}

export default CheckBox

const styles = StyleSheet.create({})