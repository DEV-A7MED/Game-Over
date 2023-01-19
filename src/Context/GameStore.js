import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export let GameContext=createContext(0);
export default function GameContextProvider(props){

    const [userData, setUserData] = useState(null);

    function saveUserData(){
      let encoded=localStorage.getItem('userToken');
    let decoded=jwtDecode(encoded)
   
    setUserData(decoded)
    }
      //to avoid refresh logout
      useEffect(() => {
        if(localStorage.getItem('userToken')!==null){
          saveUserData();
        }
      }, [])
    return <GameContext.Provider value={{userData,setUserData,saveUserData}}>
        {props.children}
    </GameContext.Provider>
}