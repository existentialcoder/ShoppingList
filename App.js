import React from 'react';
import Header from './components/Header';
import Datetime from './components/DateTime';
import styles from './styles/App.styles';
import { 
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [],
      doneItems: [],
      inputValue: '',
    };
  }

  addItem = () => {
    if (!this.state.inputValue) {
      return;
    }

    const isAlreadyPresent = this.state.groceryItems
      .map(({ label }) => label)
      .includes(this.state.inputValue);
  
    if (isAlreadyPresent) {
      return;
    }

    this.setState({
      groceryItems: [
        ...this.state.groceryItems,
        {
          label: this.state.inputValue,
        }
      ]
    });

    this.setState({
      inputValue: ''
    })
  };

  setInputValue = (val) => {
    this.setState({
      inputValue: val
    });
  };

  isDoneItem = ({ label }) => this.state.doneItems.length &&
      this.state.doneItems.map(({ label }) => label).includes(label);

  markAsDone = (item) => {
    this.setState({
      doneItems: [
        ...this.state.doneItems,
        item
      ]
    });
  }

  removeItem = (target) => {
    const filteredItems = this.state.groceryItems
      .filter(item => item.label !== target.label);
  
    this.setState({
      groceryItems: filteredItems
    });
  }
  
  render() {
    return (
      <ScrollView style={styles.appContainer}>
        <Header />
        <Datetime />
        <TextInput
          style={styles.appInput}
          onChangeText={text => this.setInputValue(text)}
          value={this.state.inputValue}
          placeholder="Type the grocery item!"
        />
        <Button style={styles.addBtn} 
          onPress={this.addItem}
          title="+ Add Item"
          color="#f64672"
        />

        {
          this.state.groceryItems.length > 0 && 
          <Text style={{...styles.itemText, textAlign: 'center'}}>
            Your items are
          </Text>
        }

        {
          this.state.groceryItems.map((item, index) => (
            <TouchableNativeFeedback key={index}
              onPress={() => this.markAsDone(item)}
              onLongPress={() => this.removeItem(item)}
              >
              <View style={styles.groceryItem}>
                <Text style={{...styles.itemText,
                  textDecorationLine: this.isDoneItem(item) ?  'line-through' : 'none' }}>
                  {index + 1}) {item.label}
                </Text>
            </View>
            </TouchableNativeFeedback>
          ))
        }
      </ScrollView>
    );
  }
};

export default App;
