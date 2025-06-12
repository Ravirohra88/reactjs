import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let strPass = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjkkkklzxcvbnm"
    if (numallowed) strPass += "1234567890";
    if (charallowed) strPass += "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strPass.length + 1)
      pass += strPass.charAt(char)
    }
    setpassword(pass)
  }
    , [length, numallowed, charallowed, setpassword])

    const copypasswordtoclipboard = useCallback(()=>{
      passRef.current?.select()
      passRef.current?.setSelectionRange(0,12)
       window.navigator.clipboard.writeText(password)
    },[password])


    useEffect(()=>{
      passwordgenerator()
    }, [length,numallowed,charallowed,passwordgenerator])


   const passRef =  useRef(null)
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-gray-400 text-center py-2'>password generator
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-grey-300 bg-amber-50 '
            placeholder='password' read-only ref={passRef} />
          <button className='bg-gray-800 text-gray-100 p-2' onClick={copypasswordtoclipboard}>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input type="range" min={6} max={25} value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            <label > length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallowed}
              id="numberInput"
              onChange={() => {
                setnumallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                setcharallowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
