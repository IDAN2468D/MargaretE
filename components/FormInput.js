import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SIZES, COLORS, FONTS } from '../constants'

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    placeholder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChange,
    onPress,
    editable,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    maxLength,
    placeholderTextColor = COLORS.grey60
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{
                flexDirection: "row",
                height: 55,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                backgroundColor: COLORS.lightGrey,
            }}>
                {appendComponent}
                <TextInput
                    style={{
                        flex: 1,
                        paddingVertical: 0,
                        ...FONTS.body3,
                        ...inputStyle
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChange={(text) => onChange(text)}
                    onPressIn={onPress}
                    editable={editable}
                />
                {prependComponent}
            </View>
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({

})