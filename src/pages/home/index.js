import { StyleSheet, Text, View, Modal} from 'react-native';
import Slider from "@react-native-community/slider";
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import IndexModal from "../../../src/components/Modal/index"
import { useState } from 'react';

export function Home () {
  

  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  const [value, setValue] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  

  const generationPassword = () => {
    let password = "";
    for(let i = 0, n = charset.length; i < value; i++ ){
      password += charset.charAt(Math.floor(Math.random() * n ));
    }

    setPasswordValue(password);
    setIsModalVisible(true);

  }


  return (
    <View style={styles.container}>
        <Image source={require("../../../assets/cadeado.png")} 
        style={styles.image}/>
      
       <Text style={styles.myComponent}>{value} caracteres</Text>

      <View style={styles.containerSlider}>
        <Slider 
        style={{height:50}}
        maximumValue={20}
        minimumValue={6}
        maximumTrackTintColor="#FF0000"
        minimumTrackTintColor="#00008B"
        thumbTintColor="#1E90FF"
        onValueChange={(value) => setValue(value.toFixed(0))}
        value={value}/>
      </View>
      
    
      <TouchableOpacity style={styles.button}
      onPress={generationPassword}>
         <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal
      visible={isModalVisible}
      animationType='fade'
      transparent={true}>
        <IndexModal password={passwordValue} handleClose={() => setIsModalVisible(false)}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
      marginBottom:25
  },

  containerSlider: {
    width: "80%",
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 10,
  },

  button: {
    marginTop: 20,
    width: "80%",
    height: 60,
    backgroundColor: "#0000FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },

  textButton: {
    fontSize: 20,
    color: "#fff",
  },

  myComponent: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000080"
}
});
