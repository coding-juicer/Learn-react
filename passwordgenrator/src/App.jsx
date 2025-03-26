import { useState , useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberallme, setNumberall] = useState(false)
  const[character,setCharacter] =useState(false)

  const[password,setpassword] = useState("")

  const passwordref = useRef(null)

  const copypasswodetoclipbord = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenrator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallme) str += "0123456789"
    if (character) str+= "!@#%^&*-+=[]{}~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
    
  },[length,numberallme,character,setpassword])

  useEffect(()=>{
    passwordGenrator()
  },[length,numberallme,character,passwordGenrator])


  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg shadow-md px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3 bg-white'
          readOnly ref={passwordref}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypasswodetoclipbord}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
            <label> Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <label className='text-white'>Numbers</label>
            <input type="checkbox" defaultChecked={numberallme} onChange={()=>{setNumberall((prev)=>!prev)}}/>
          </div>
          <div className='flex items-center gap-x-1'>
            <label className='text-white'>Character</label>
            <input type="checkbox" defaultChecked={numberallme} onChange={()=>{setCharacter((prev)=>!prev)}}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
