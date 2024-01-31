import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { FlatList } from "react-native";
import PasswordItem from "./components/passwordItem";


export function Password () {

    const [listPasswords, setListPasswords] = useState([""]);
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage();


    useEffect(() => {

        async function loadPassword(){
            const password = await getItem("@pass");
            setListPasswords(password)
        }

        loadPassword();

    }, [focused]);

    async function  handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item);
        setListPasswords(passwords)
     }


    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                 <Text style={styles.title}>Senhas</Text>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                style={{flex: 1, paddingTop: 14}}
                data={listPasswords}
                keyExtractor={(item) => String(item) }
                renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>}/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0000FF",
        height: "15%",
        justifyContent: "center"
    },

    title: {
        color: "#fff",
        marginLeft: 20,
        fontSize: 25,
        fontWeight: "bold"
    },

    listContainer: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
})