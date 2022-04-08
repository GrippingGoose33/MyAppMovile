import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function Comp() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.boxText}>Caja</Text>
            </View>
        </View>
    );
}

export default Comp;