
function Weekly(props){
  return (
    <div className="weekday">
      <p>{props.day}</p>
      <p>{props.temp}</p>
      <p>{props.description}</p>
      <p className="weekday-icon">{props.icon}</p>
    </div>
  )
}

export default Weekly