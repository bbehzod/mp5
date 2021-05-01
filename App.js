import React, {useState} from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,} from 'react-native';
import md5 from 'md5';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');

  const convertMD5 = () => {
    let encodedVal = md5(inputText);
    setText(encodedVal);
  };

  return (
  
      <View style = {{backgroundColor: '#fff', width: '100%', height: '100%'}}>
      <View style ={styles.header}>
        <Text style={styles.headerText}>Xеш по алгоритму MD-5</Text> 
      </View>
        <Text style = {{paddingTop:10,color: '#2196F3',fontWeight: 'bold', fontSize: 22, paddingLeft:10}}
       paddingTop>Введите текст хеш которой хотите получить:</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder="Введите текст хеш которой хотите получить"
          value={inputText}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={convertMD5}>
          <Text style={styles.buttonTextStyle}>
        получить
          </Text>
        
        <Text style = {{color:'#2196F3', paddingTop: 10, fontSize: 22, paddingLeft: 10, fontWeight: 'bold'}}>Ответ:</Text>
        <Text style={styles.Otvet}>{text}</Text>
        </TouchableOpacity>
      </View> 
  );
};
export default App;

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2196F3',
    
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  header: {
      backgroundColor: '#007AFF',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign:'center',
    paddingTop: 25,
    paddingBottom: 20
  },
  Otvet: {
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    textAlign:'center',
  },
});
