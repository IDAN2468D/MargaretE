import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SIZES, images } from '../../constants';
import { useDynamicAnimation, MotiImage } from 'moti';

const Walkthrough_Img_5 = ({ animate }) => {

    // Moti initial position 
    const motiImage1 = useDynamicAnimation(() => ({
        top: 180,
        left: 80
    }))
    const motiImage2 = useDynamicAnimation(() => ({
        top: 180,
        left: 172
    }))

    const motiImage3 = useDynamicAnimation(() => ({
        top: 250,
        left: 131
    }))

    useEffect(() => {
        if (animate) {
            motiImage1.animateTo({
                top: 10,
                left: 310
            })
            motiImage2.animateTo({
                top: 110,
                left: -60
            })
            motiImage3.animateTo({
                top: 420,
                left: -60
            })
        }
    }, [animate])



    return (
        <View style={{ flex: 1, overflow: "hidden" }}>
            <Image source={images.walkthrough_02_01}
                style={{
                    ...styles.image,
                    top: "20%",
                    left: "20%",
                    width: 220,
                    height: 325,
                    zIndex: 1,
                }}
            />
            <MotiImage
                state={motiImage1}
                source={images.walkthrough_02_04}
                style={styles.image}
            />
            <MotiImage
                state={motiImage2}
                source={images.walkthrough_02_02}
                style={styles.image}
            />
            <MotiImage
                state={motiImage3}
                source={images.walkthrough_02_07}
                style={styles.image}
            />
        </View>
    )
}

export default Walkthrough_Img_5

const styles = StyleSheet.create({
    image: {
        position: "absolute",
        width: 130,
        height: 130,
        zIndex: 2,
        borderRadius: SIZES.radius,
    }
})