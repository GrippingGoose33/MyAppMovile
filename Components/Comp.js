import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Box from './Box/Box';

const boxes = new Array(10).fill(null).map((v, i) => i+1);

function Comp() {
    return (
        <View style={styles.container}>
            <StatusBar hiden={false}/>{
                boxes.map(v => (
                <Box key={v}>#{v}</Box>
                ))
            }

        </View>
    );
}

export default Comp;