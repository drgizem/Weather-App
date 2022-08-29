import {useState} from "react"

function InputArea(props){
    const [player,setPlayer]=useState({
        firstname:"",
        surname:"",
        age:"",
        team:""
    })
    function handleChange(event){
        const {name,value}=event.target
       setPlayer(preV=>{
        return {...preV,
            [name]:value}
        })
    }
    function onSubmit(){
        props.onAdd()
        setPlayer({
        firstname:"",
        surname:"",
        age:"",
        team:""
        })
    }
    return (
    <div className="container-input">
        <input name="firstname" placeholder="Firstname" value={player.firstname} onChange={handleChange}/>
        <input name="surname" placeholder="Surname" value={player.surname} onChange={handleChange}/>
        <input name="age" placeholder="Age" value={player.age} onChange={handleChange}/>
        <select className="teams" value={player.team} >
            <option value={""}>Select a Team</option>
            <option value={1}>Manchester United</option>
            <option value={2}>Liverpool</option>
            <option value={3}>Barcelona</option>
            <option value={4}>Atletico Madrida</option>
        </select>
        <button className="submit" onClick={onSubmit}>Submit</button>
    </div>
    )
}

export default InputArea;