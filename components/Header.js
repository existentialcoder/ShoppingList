import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Header.styles';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.text}>
                    Shopping List
                </Text>
            </View>
        )
    }
};

export default Header;
