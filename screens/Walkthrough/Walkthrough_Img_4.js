import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SIZES, images } from '../../constants';
import { useDynamicAnimation, MotiImage } from 'moti';


const Walkthrough_Img_4 = ({ animate }) => {

    // Moti initial position 
    const motiImage1 = useDynamicAnimation(() => ({
        top: "10%",
        left: "55%"
    }))
    const motiImage2 = useDynamicAnimation(() => ({
        top: "54%",
        left: "50%"
    }))

    const motiImage3 = useDynamicAnimation(() => ({
        top: "40%",
        left: "60%"
    }))

    const motiImage4 = useDynamicAnimation(() => ({
        top: "26%",
        left: "50%",
    }))

    useEffect(() => {
        if (animate) {
            motiImage1.animateTo({
                top: "30%",
                left: "55%"
            })
            motiImage2.animateTo({
                top: "36%",
                left: "30%"
            })
            motiImage3.animateTo({
                top: "60%",
                left: "33%"
            })
            motiImage4.animateTo({
                top: "56%",
                left: "58%"
            })
        }

    }, [animate])



    return (
        <View style={{ flex: 1, overflow: "hidden" }}>
            <MotiImage
                state={motiImage1}
                source={images.walkthrough_01_03}
                style={styles.image}
            />
            <MotiImage
                state={motiImage2}
                source={images.walkthrough_01_04}
                style={styles.image}
            />
            <MotiImage
                state={motiImage3}
                source={images.walkthrough_01_05}
                style={styles.image}
            />
            <MotiImage
                state={motiImage4}
                source={images.walkthrough_01_06}
                style={styles.image}
            />
        </View>
    )
}

export default Walkthrough_Img_4

const styles = StyleSheet.create({
    image: {
        position: "absolute",
        width: 86,
        height: 112,
        borderRadius: SIZES.radius,
    }
})