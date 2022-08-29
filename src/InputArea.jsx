import {useState} from "react"

function InputArea(props){
    const [player,setPlayer]=useState({
        id:"",
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
    function onSubmit(event){
        props.onAdd(player) ;
        setPlayer({
            id:"",
            firstname:"",
            surname:"",
            age:"",
            team:""
            })
       
        event.preventDefault()
    }
    return (
    <div className="container-input">
        <input name="firstname" placeholder="Firstname" value={player.firstname} onChange={handleChange}/>
        <input name="surname" placeholder="Surname" value={player.surname} onChange={handleChange}/>
        <input name="age" placeholder="Age" value={player.age} onChange={handleChange}/>
        <select className="teams" value={player.team} name="team"  onChange={handleChange}>
            <option >Select a Team</option>
            <option value="Manchester United">Manchester United</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Atletico Madrid">Atletico Madrid</option>
        </select>
        <button className="submit" onClick={onSubmit}>Submit</button>
    </div>
    )
}

export default InputArea;