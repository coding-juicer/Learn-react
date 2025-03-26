import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElemnet = (
  <a href='https://google.com'>Visit</a>
)

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google'

)
createRoot(document.getElementById('root')).render(

     <MyApp/>

)
