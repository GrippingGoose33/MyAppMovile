import React from 'react';
import {View} from 'react-native';
import styles from '../styles';
import PropTypes from 'prop-types'

function Column(props) {
    return (
        <View style={styles.column}>
            {children}
        </View>
    );
}

Column.propTypes = {
    children: propTypes.node.isRequired,
}

export default Column;