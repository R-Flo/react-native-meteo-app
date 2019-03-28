import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Loader = () => {
    return (
        <View style={styles.loaderContainer}>
            <Image source={require('../assets/img/loader.gif')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    loaderContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Loader;
