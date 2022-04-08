import React from 'react';
import {Text, View} from 'react-native';
import Box from './Box/Box';
import styles from './styles';

function Comp() {
    return (
        <View style={styles.container}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
        </View>
    );
}

export default Comp;