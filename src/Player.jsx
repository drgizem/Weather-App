function Player(props){

return (
    <div className="Player"><ul><li> {props.fName} {props.sName} {props.age} {props.team} <button onClick={() => props.deletefunc(props.id)}>DELETE</button> <button onClick={() => props.editfunc(props.id)}>Edit</button></li>
    </ul>
    </div>
)
}
export default Player;
