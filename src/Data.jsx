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

    function handleSubmit(){
        setPlayers((prevObj) => {
            return [...prevObj, playerData];
          }
          );

        }
    function handleChange(event){
        const{name,value}=event.target
        setPlayerData((prevPlayer)=>{
            return {...prevPlayer,
                [name]: value}
        })
    }

    function deleteButton(id) {
       
        setPlayerData((preArr) => {
          return preArr.filter((item, index) => 
          index !== id);
        });
      }

    function editButton(id) {
        return ("clicked")
    }


    return (
    <Player  
    id={0}
    fName={"Koray"}
    sName={"Akpinar"}
    age={30}
    team={"Galatasaray"} 
    deletefunc={deleteButton}
    editfunc={editButton}
        
    />
   
   
    )

}

export default Data;