import { useState } from "react";
import Player from "./Player";

function Data(){
    const [playerData,setPlayerData]=useState([])
    const [players,setPlayers]=useState({
        name:"",
        sName:"",
        age:"",
        team:""
    })

    


    return (
    <Player  
    name={"Koray"}
    sName={"Akpinar"}
    age={30}
    team={"Galatasaray"} 
        
    />
   
   
    )
}

export default Data;