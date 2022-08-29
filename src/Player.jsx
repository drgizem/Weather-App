function Player(props){

return (
    <div className="Player">
    <p>{props.fName} {props.sName} {props.age} {props.team} <button onClick={() => props.deletefunc(props.id)}>DELETE</button> <button onClick={() => props.editfunc(props.id)}>Edit</button></p>
    </div>
)
}
export default Player;
