import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
//Buscar os ítens salvos.
   const getItem = async (key) => {
      try{

        const password = await AsyncStorage.getItem(key);
        return JSON.parse(password) || [];

      }catch(error) {
            console.error("Erro ao buscar,", error );
            return [];
      }
   }


//Salvar um item no storage
const saveItem =  async (key, value) => {
   try{
    let password = await getItem(key);

    password.push(value);
    
    await AsyncStorage.setItem(key, JSON.stringify(password));

   }catch(error){
     console.error("Erro ao salvar", error);
   }
}   

//Remover algo do Storage
const removeItem = async (key, item) => {
    try{

    let passwords = await getItem(key);

    let myPasswords = passwords.filter((password) => {
        return(password !== item)
    })

    await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
    return myPasswords;

    }catch(error){
        console.error("Falha ao deletar", error);
    }

}


// tem que ser dentro de chaves
return  {
   getItem,
   saveItem,
   removeItem
}

}

export default useStorage;