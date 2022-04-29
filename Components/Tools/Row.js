import React from 'react';
import {View} from 'react-native';
import styles from '../styles';
import PropTypes from 'prop-types';

function Row(props) {
    return (
        <View style={styles.row}>
            {children}
        </View>
    );
}

Row.propTypes = {
    children: propTypes.node.isRequired,
}

export default Row;