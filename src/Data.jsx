import { useState } from "react";
import Player from "./Player";

function Data(){
    const [playerData,setPlayerData]=useState([])
    const [players,setPlayers]=useState({
        fname:"",
        sName:"",
        age:"",
        team:""
    })




    return (
    <Player  
    fName={"Koray"}
    sName={"Akpinar"}
    age={30}
    team={"Galatasaray"} 
        
    />
   
   
    )
}

export default Data;