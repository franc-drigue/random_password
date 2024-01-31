import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export default function Modal ({password, handleClose}) {

    const {saveItem} = useStorage();

    
   //função para copiar a senha.
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(password);
        await saveItem("@pass", password);


        alert("Senha salva com sucesso!");
        handleClose();
    }

    

    return(
        //A área o modal vai ficar
        <View style={styles.containerModal}>
            <View style={styles.areaModal}>
                <Text style={styles.textModal}>Senha Gerada</Text>

                <Pressable style={styles.passwordArea} onLongPress={copyToClipboard}>
                  <Text style={styles.textPassword}> {password} </Text>
                </Pressable>
                
                <View style={styles.containerButton}>

                    <TouchableOpacity style={styles.buttonBack} onPress={handleClose}>
                        <Text style={styles.textBack}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonSavePassword} onPress={copyToClipboard}>
                        <Text style={styles.textSavePassword}>Salvar Senha</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: "rgba(24,24,24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    areaModal: {
        backgroundColor: "#fff",
        height: "40%",
        width:"70%",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 8
    },

    textModal: {
       fontWeight: "bold",
       fontSize: 25,
       marginBottom: 20
    },

    passwordArea: {
       justifyContent: "center",
       alignItems: "center",
       height: "15%",
       width: "80%",
       backgroundColor: "#00008B",
       borderRadius: 5,
       marginBottom: 30,
       padding:2
    },

    textPassword: {
        color: '#fff',
        fontSize: 18
    },

    containerButton: {
        flexDirection: "row",
    },

    buttonSavePassword: {
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width:120,
        backgroundColor: "#0000FF",
        borderRadius: 4,
        marginLeft: 30
    },

    textSavePassword: {
        color: "#fff"
    },

    buttonBack: {
        justifyContent: "center",
        alignItems: "center",
    },

    textBack: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 4,
        paddingLeft: 15,
        color: "#0000CD"
    }
})