import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Box from './Box/Box';
import Row from './Tools/Row';
import Column from './Tools/Column';

function Comp() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <Row>
                <Column>
                    <Box>#1</Box>
                    <Box>#1</Box>
                </Column>
            </Row>

        </View>
    );
}

export default Comp;