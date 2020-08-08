import React from 'react';
import { View, Image } from 'react-native';

import style from './style';

import landingImg from '../../assets/images/landing.png';

function Landing() {
    return (
        <View style={style.container}>
            <Image source={landingImg} />
        </View>
    )
}

export default Landing;