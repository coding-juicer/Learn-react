import { useState } from 'react'
import Heart from 'react-heart'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-xl '>Tailwind test </h1>
      <Card uls="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g" title="just chill!"/>
      <Card uls="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJvcWduam93Z21hdmJsd3R0N2dwNnhsd3FmMTcxbDRheHNrZGpzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9kFbNJ5pyWPSM/giphy.gif" title ="Just take it"/>
      <Card uls="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDRpZm9ibHRnZmJybzU1bnFjcDh2bzFjcjVocnMxMGYyaGV5MTJmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sy9PqyueWAJ4jBLIrS/giphy.gif" title="What!!1"/>
    </>
  )
}

export default App
