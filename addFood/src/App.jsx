import { useState } from 'react'



function App() {
  const [Foods, setFood] = useState(['apple','orange','banana'])
  function addFood(){
    const wadd = document.getElementById('foodinput').value;
    document.getElementById('foodinput').value="";

    setFood(f=>[...f,wadd])

  }
  function removeFood(index){
    const rFood = Foods.filter((_,i) => i!=index);
    setFood(rFood)
  }

  const [Cars,setCars] = useState([])
  const [caryear,setyear] = useState(new Date().getFullYear())
  const [carmodel,setModel] = useState("")
  const [carmake,setMake] = useState("")

  function AddCar(){
    const newCar = {
      year:caryear,make:carmake,model:carmodel
    }
    setCars(c=>[...c,newCar])
    setyear(new Date().getFullYear())
    setMake("")
    setModel("")
    
  }
  function handleyear(event){
    setyear(event.target.value)
  }

  function handlemakechange(event){
    setMake(event.target.value)
  }
  function handlemodlechange(event){
    setModel(event.target.value)
  }
  function Removecar(index){
    setCars(c => c.filter((_,i)=> i!=index))
  }
  return (
    <>
      <h1>List of food</h1>
      <ul>
        {Foods.map((food,index)=> <li key={index}>{food} <button onClick={()=>removeFood(index)}>delete</button></li>)}
      </ul>
      <input id="foodinput" type="text" />
      <button onClick={addFood}>add</button>

      <h1>list of cars </h1>

      <ul>
          {Cars.map((car,index)=><li key={index} onClick={()=>Removecar(index)}>{car.year} {car.model} {car.make}</li>)}
      </ul>

      <input type="text" value={caryear}onChange={handleyear} />
      <br />
      <input type="text" value={carmodel}onChange={handlemodlechange}/>
      <br/>
      <input type="text" value={carmake}onChange={handlemakechange} />
      <br />
      
      <button onClick={AddCar}>add</button>
    </>
  )
}

export default App
