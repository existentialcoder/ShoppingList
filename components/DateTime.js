import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/DateTime.styles';

class Datetime extends React.Component {
    constructor(props) {
        super(props);
    }

    currentDate = () => {
      const now = new Date();
      return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
    };

    render() {
        return (
            <Text style={styles.text}>
                Add shopping items on {this.currentDate()}
            </Text>
        )
    }
};

export default Datetime;
