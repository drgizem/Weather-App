
import Player from "./Player";

function Data(props){
    


   
   

  

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
    deletefunc={props.deleteFunc}
    editfunc={editButton}
        
    />
   
   
    )

}

export default Data;