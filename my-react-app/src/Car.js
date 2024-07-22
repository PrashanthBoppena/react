function Car(){
    return <h1>Car file returns</h1>
}
function Car(props){
    return <li>I am a {props.brand}</li>
  }
  
  function Garage(){
    const cars=[
      {id:1, brand:'Ford'},
      {id:2, brand:'TATA'},
      {id:3, brand:'BMW'}
    ];
    return(
      <>
      <h2>my garage members are</h2>
      <ul>
        {cars.map((car)=><Car key={car.id} brand={car.brand}/>)}
      </ul>
      </>
    );
  }
export default Car;