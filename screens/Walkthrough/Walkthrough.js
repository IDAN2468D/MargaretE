import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { TextButton } from '../../components'
import { COLORS, SIZES, constants, FONTS } from '../../constants';
import Walkthrough_Img_1 from './Walkthrough_Img_1';
import Walkthrough_Img_2 from './Walkthrough_Img_2';
import Walkthrough_Img_4 from './Walkthrough_Img_4';
import Walkthrough_Img_5 from './Walkthrough_Img_5';

const Walkthrough = ({ navigation }) => {
    //Walkthrough Img 2
    const [walkthrough2Animate, setWalkthrough2Animate] = useState(false);

    //Walkthrough Img 3
    const [walkthrough3Animate, setWalkthrough3Animate] = useState(false);

    //Walkthrough Img 4
    const [walkthrough4Animate, setWalkthrough4Animate] = useState(false);


    const onViewChangeRef = useRef(({ viewableItems, changed }) => {
        if (viewableItems[0].index == 1) { // //Walkthrough Img 2,3,4
            setWalkthrough2Animate(true)
        }
        if (viewableItems[0].index == 2) {
            setWalkthrough3Animate(true)
        }
        if (viewableItems[0].index == 3) {
            setWalkthrough4Animate(true)
        }

    })


    const scrollX = useRef(new Animated.Value(0)).current;

    function Dots() {
        const DotPosition = Animated.divide(scrollX, SIZES.width)

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {
                    constants.walkthrough.map((item, index) => {
                        const dotColor = DotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.dark, COLORS.primary, COLORS.dark],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                style={{
                                    borderRadius: 5,
                                    marginHorizontal: 6,
                                    width: 10,
                                    height: 10,
                                    backgroundColor: dotColor,
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: SIZES.height * 0.2,
                    alignItems: 'center',
                    justifyContent: "space-between",
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
                }}
            >
                <Dots />
                {/* Button */}
                <View style={{
                    flexDirection: 'row',
                    height: 55,
                }}>
                    <TextButton
                        label="Join New"
                        contentContainerStyle={{
                            flex: 1,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGrey,
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                    />
                    <TextButton
                        label="Log In"
                        contentContainerStyle={{
                            flex: 1,
                            marginLeft: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary,
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.reset({
                            index: 0,
                            routes: [{ name: "AuthMain" }]
                        })}
                    />
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.light,
            }}
        >
            <Animated.FlatList
                data={constants.walkthrough}
                keyExtractor={(item) => item.id}
                horizontal
                snapToInterval={SIZES.width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onViewableItemsChanged={onViewChangeRef.current}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false
                    }
                )}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width,
                                justifyContent: 'center',
                            }}
                        >
                            {/* Walkthrough Image */}
                            <View style={{ flex: 1, justifyContent: 'center', }}>
                                {index == 0 && <Walkthrough_Img_1 />}
                                {index == 1 && <Walkthrough_Img_2 animate={walkthrough2Animate} />}
                                {index == 2 && <Walkthrough_Img_4 animate={walkthrough3Animate} />}
                                {index == 3 && <Walkthrough_Img_5 animate={walkthrough4Animate} />}
                            </View>
                            {/* Title & Descriptions */}
                            <View
                                style={{
                                    height: SIZES.height * 0.35,
                                    alignItems: 'center',
                                    justifyContent: "flex-start",
                                    paddingHorizontal: SIZES.padding,
                                }}
                            >
                                <Text style={{
                                    ...FONTS.h1,
                                    fontWeight: "bold",
                                    color: COLORS.dark
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={{
                                    ...FONTS.body3,
                                    color: COLORS.grey,
                                    marginTop: SIZES.radius,
                                    textAlign: "center",
                                }}>
                                    {item.sub_title}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
            {renderFooter()}
        </View>
    )
}

export default Walkthrough

const styles = StyleSheet.create({})