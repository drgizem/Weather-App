function Icon(props){
  return (
<img
  src={`http://openweathermap.org/img/w/${props.data}.png`}
  alt="Weather icon"/>
  )
}
export default Icon