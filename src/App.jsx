import {useState} from "react"
import InputArea from "./InputArea";
import Player from "./Player";

function App(){
    const [playerData,setPlayerData]=useState([])
    

    function onAdd(newPlayer){
        setPlayerData((prevObj) => {
            return [...prevObj, newPlayer];
          }
          );
          
          console.log(playerData)
        }
        function deleteButton(id) {
       
            setPlayerData((preArr) => {
              return preArr.filter((item, index) => 
              index !== id);
            });
          }
        //edit yapılacak
    function Editbutton(id) {
        const editable=playerData.filter((item, index) => 
        index === id)[0]
            return editable
    }
    return(
        <>
        <div>
        <p>This is App area</p>
        <InputArea
        onAdd={onAdd} 
        />
        {playerData.map((player,index)=>{ 
            return(     
            <Player  
            key={index}
            id={index}
            fName={player.firstname}
            sName={player.surname}
            age={player.age}
            team={player.team} 
            deletefunc={deleteButton}
            editfunc={Editbutton}
                
            />
            )}
           
            )
            }
   
   
            </div>
        </>
    )
}
export default App;


