import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { images, COLORS, FONTS, SIZES, icons } from '../../constants';
import { MotiView, useAnimationState } from 'moti';
import { FormInput, TextButton, IconButton, CountryDropDown, CheckBox } from '../../components';
//import { Shadow } from 'react-native-shadow-2';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthMain = () => {

    //  State 
    const [mode, setMode] = useState("signIn");
    const [isVisible, setIsVisible] = useState(false);

    // Country
    const [countries, setCountries] = useState(false);
    const [showCountryModal, setShowCountryModal] = useState(false);

    // Form
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [password, setPassword] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);

    //  Animation State
    const animationState = useAnimationState({
        singIn: {
            height: SIZES.height * 0.55,
        },
        singUp: {
            height: SIZES.height * 0.7,
        }
    })

    useEffect(() => {
        animationState.transitionTo("singIn")

        // Fetch countires
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                let countryData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
                    }
                })
                setCountries(countryData)
            })
    }, [])


    function renderSingIn() {
        return (
            <MotiView
                state={animationState}
                style={{
                    marginTop: SIZES.padding,
                    height: SIZES.height * 0.55,
                }}
            >
                <View style={styles.authContainer}>
                    <Text
                        style={{
                            width: "90%",
                            lineHeight: 45,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            textAlign: "center",
                            color: COLORS.dark,
                            ...FONTS.h1
                        }}
                    >
                        Sign In To Continue
                    </Text>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        keyboardDismissMode="on-drag"
                        keyboardShouldPersistTaps={"handled"}
                        extraScrollHeight={-300}
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'center',
                        }}
                    >
                        {/* Email */}
                        <FormInput
                            containerStyle={{
                                borderRadius: SIZES.radius,
                                //backgroundColor: COLORS.error,
                            }}
                            placeholder="Email"
                            value={email}
                            onChange={(text) => setEmail(text)}
                            prependComponent={
                                <Image
                                    source={icons.email}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginLeft: SIZES.base,
                                    }}
                                />
                            }
                        />
                        {/* Password */}
                        <FormInput
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                //backgroundColor: COLORS.error,
                            }}
                            secureTextEntry={!isVisible}
                            placeholder="Password"
                            value={password}
                            onChange={(text) => setPassword(text)}
                            prependComponent={
                                <Image
                                    source={icons.lock}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginLeft: SIZES.base,
                                    }}
                                />
                            }
                            appendComponent={
                                <IconButton
                                    icon={isVisible ? icons.eye_off : icons.eye}
                                    iconStyle={{
                                        tintColor: COLORS.grey
                                    }}
                                    containerStyle={{

                                    }}
                                    onPress={() => setIsVisible(!isVisible)}
                                />
                            }
                        />
                        <View
                            style={{
                                alignItems: "flex-start"
                            }}
                        >
                            <TextButton
                                label="Forget Password"
                                contentContainerStyle={{
                                    marginTop: SIZES.radius,
                                    backgroundColor: null,
                                }}
                                labelStyle={{
                                    color: COLORS.support3,
                                    ...FONTS.h4
                                }}

                            />
                        </View>
                    </KeyboardAwareScrollView>
                    <TextButton
                        label="Log In"
                        contentContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary,
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}
                        onPress={() => console.log("Log In")}
                    />
                </View>
            </MotiView >
        )
    }

    //  Render
    function renderSingUp() {
        return (
            <MotiView
                state={animationState}
                style={{
                    marginTop: SIZES.padding,
                }}
            >
                <View style={styles.authContainer}>
                    <Text
                        style={{
                            width: "90%",
                            lineHeight: 45,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            textAlign: "center",
                            color: COLORS.dark,
                            ...FONTS.h1
                        }}
                    >
                        Create New account
                    </Text>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        keyboardDismissMode="on-drag"
                        keyboardShouldPersistTaps={"handled"}
                        extraScrollHeight={-300}
                        contentContainerStyle={{
                            flexGrow: 1,
                            marginTop: SIZES.padding,
                            paddingBottom: SIZES.padding * 2,
                        }}
                    >
                        {/* Name */}
                        <FormInput
                            containerStyle={{
                                borderRadius: SIZES.radius,
                                //backgroundColor: COLORS.error,
                            }}
                            placeholder="Name"
                            value={name}
                            onChange={(text) => setName(text)}
                            prependComponent={
                                <Image
                                    source={icons.person}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginRight: SIZES.base,
                                    }}
                                />
                            }
                        />
                        {/* Email */}
                        <FormInput
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                //backgroundColor: COLORS.error,
                            }}
                            placeholder="Email"
                            value={email}
                            onChange={(text) => setEmail(text)}
                            prependComponent={
                                <Image
                                    source={icons.email}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginRight: SIZES.base,
                                    }}
                                />
                            }
                        />
                        {/* Phone */}
                        <FormInput
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                //backgroundColor: COLORS.error,
                            }}
                            placeholder="Phone"
                            value={phone}
                            onChange={(text) => setPhone(text)}
                            prependComponent={
                                <Image
                                    source={icons.phone}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginRight: SIZES.base,
                                    }}
                                />
                            }
                        />
                        {/* Country */}
                        <CountryDropDown
                            containerStyle={{
                                marginTop: SIZES.radius,
                            }}
                            selectedCountry={selectedCountry}
                            onPress={() => setShowCountryModal(!showCountryModal)}
                        />
                        {/* Password */}
                        <FormInput
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                //backgroundColor: COLORS.error,
                            }}
                            secureTextEntry={!isVisible}
                            placeholder="Password"
                            value={password}
                            onChange={(text) => setPassword(text)}
                            prependComponent={
                                <Image
                                    source={icons.lock}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginLeft: SIZES.base,
                                    }}
                                />
                            }
                            appendComponent={
                                <IconButton
                                    icon={isVisible ? icons.eye_off : icons.eye}
                                    iconStyle={{
                                        tintColor: COLORS.grey
                                    }}
                                    containerStyle={{

                                    }}
                                    onPress={() => setIsVisible(!isVisible)}
                                />
                            }
                        />
                        {/* Terms and Conditions */}
                        <CheckBox
                            containerStyle={{
                                marginTop: SIZES.radius,
                            }}
                            isSelected={termsChecked}
                            onPress={() => setTermsChecked(!termsChecked)}
                        />

                    </KeyboardAwareScrollView>
                    <TextButton
                        label="Create Account"
                        contentContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary,
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}
                        onPress={() => console.log("Create Account")}
                    />
                </View>
            </MotiView>

        )
    }

    function renderAuthContainer() {
        if (mode == "singIn") {
            return renderSingIn()
        } else {
            return renderSingUp()
        }
    }

    function renderCountryModal() {
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={showCountryModal}
            >
                <TouchableWithoutFeedback onPress={() => setShowCountryModal(false)}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: 'center',
                            backgroundColor: COLORS.dark80,
                        }}
                    >
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.light,
                                borderRadius: SIZES.radius,
                            }}
                        >
                            <FlatList
                                data={countries}
                                keyExtractor={(item) => item.code}
                                contentContainerStyle={{
                                    paddingHorizontal: SIZES.padding,
                                    paddingBottom: SIZES.padding,
                                }}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: SIZES.radius,
                                            }}
                                            onPress={() => {
                                                console.log(item)
                                                setSelectedCountry(item)
                                                setShowCountryModal(false)
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.flag }}
                                                resizeMode="contain"
                                                style={{
                                                    width: 40,
                                                    height: 30,
                                                }}
                                            />
                                            <Text style={{ flex: 1, marginLeft: SIZES.radius, }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    function renderAuthContainerFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    alignItems: "flex-end",
                    justifyContent: 'center',
                    marginTop: -30,
                    marginHorizontal: SIZES.radius,
                    paddingBottom: SIZES.radius,
                    borderBottomLeftRadius: SIZES.radius,
                    borderBottomRightRadius: SIZES.radius,
                    backgroundColor: COLORS.light60,
                    zIndex: 0,
                }}
            >
                <TextButton
                    label={mode == "singIn" ? "Create New Account" : "Sing In"}
                    contentContainerStyle={{
                        marginLeft: SIZES.base,
                        backgroundColor: null,
                    }}
                    labelStyle={{
                        color: COLORS.support3,
                        ...FONTS.h5,
                    }}
                    onPress={() => {
                        if (animationState.current === "singIn") {
                            animationState.transitionTo("singUp")
                            setMode("singUp")
                        } else {
                            animationState.transitionTo("singIn")
                            setMode("singIn")
                        }
                    }}
                />
                <Text
                    style={{
                        marginLeft: 5,
                        color: COLORS.grey,
                        ...FONTS.body5
                    }}
                >
                    {mode == "singIn" ? "Don't have an account?" : "I already have an account."}
                </Text>
            </View>
        )
    }

    function renderSocialLogins() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: -30,
                    zIndex: -1,
                }}
            >
                <Text
                    style={{
                        color: COLORS.dark,
                        ...FONTS.body3,
                    }}
                >
                    Or login with
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                    }}
                >
                    <IconButton
                        icon={icons.linkedin}
                        iconStyle={{ tintColor: COLORS.dark }}
                        containerStyle={{
                            ...styles.socialButtonContainer,
                        }}
                    />
                    <IconButton
                        icon={icons.google}
                        iconStyle={{ tintColor: COLORS.dark }}
                        containerStyle={{
                            ...styles.socialButtonContainer,
                            marginLeft: SIZES.radius,
                        }}
                    />
                    <IconButton
                        icon={icons.twitter}
                        iconStyle={{ tintColor: COLORS.dark }}
                        containerStyle={{
                            ...styles.socialButtonContainer,
                            marginLeft: SIZES.radius,
                        }}
                    />
                </View>

            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.lightGrey,
        }}>
            {/* Logo */}
            <Image
                source={images.logo}
                style={{
                    alignSelf: 'center',
                    marginTop: SIZES.padding * 2,
                    width: 50,
                    height: 50,
                }}
            />
            {/* Aunt Container */}
            <View
                style={{
                    zIndex: 1,
                }}
            >
                {renderAuthContainer()}
            </View>

            {renderAuthContainerFooter()}

            {mode == "singIn" && renderSocialLogins()}

            {/* Country Modal */}
            {renderCountryModal()}
        </View>
    )
}

export default AuthMain

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        width: SIZES.width - (SIZES.padding * 2),
        padding: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.light,
        elevation: 10,
        zIndex: 1,
    },
    socialButtonContainer: {
        width: 55,
        height: 55,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.grey20,
    }
})