import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = props => {
    return (
        <Text style={styles.title}>{props.title}</Text>
    )
};

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontWeight: '300',
        fontSize: 34,
        textAlign: 'center',
        marginTop: 30
    }
});

export default Title;
