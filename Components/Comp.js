import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Box from './Box/Box';

function Comp() {
    return (
        <View style={styles.container}>
            <Box>#1</Box>
            <Box>#2</Box>
        </View>
    );
}

export default Comp;