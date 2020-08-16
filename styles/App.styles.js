
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#242582',
    },
    addBtn: {
        marginTop: 20,
    },
    appInput: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 5,
        margin: 10,
        textAlign: 'center',
        color: '#fff'
    },  
    groceryItem: {
        backgroundColor: '#f64672',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
    },
    itemText: {
        color: '#fff',
        fontSize: 20
    },
});

export default styles;
