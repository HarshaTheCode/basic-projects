import React, { useState } from 'react'


const Form = () => {

  const [userinput, setUserInput] = useState("")
  const [userDescrip, setUserDescrip] = useState('')
  const [task, setTask] = useState([])

  const inputhandler = (elem) => {
    setUserInput(elem.target.value)

  }


  const UserDescrip = (elem) => {
    setUserDescrip(elem.target.value)

  }

  const handleform = (e) => {
    e.preventDefault();
    const copyuserdata = [...task]

    copyuserdata.push({ title: userinput, descp: userDescrip })
    setTask(copyuserdata)

    setUserInput('')
    setUserDescrip('')


  }
  const handleDelete=(elem,idx)=> {
    const copyuserdata=[...task]

    copyuserdata.splice(idx,1)
    console.log("now your going to delete",idx);
    setTask(copyuserdata)
    
  }
  return (
    <>
      <div className='bg-black   lg:flex  p-5  h-screen'>

        <form className=' lg:flex p-5 bg-amber-100   flex-col rounded-2xl rounded-r-none  gap-4 w-1/2' onSubmit={(e) => {
          handleform(e);
        }
        }>

          <h1 className='font-bold'>This is From</h1>

          <input className='w-3/4 px-4 py-2 font-semibold rounded-2xl border-2 outline-none' type="text" placeholder='Enter your Title plaese '
            value={userinput} onChange={((elem) => {
              inputhandler(elem)


            }

            )}
          />

          <textarea className=' flex text-xl text-black font-semibold items-start p-2 content-start border-2 h-1/4 w-3/4 rounded-2xl outline-none'
            placeholder='Enter your notes hear '
            value={userDescrip} onChange={(elem) => {
              UserDescrip(elem)


            }

            }

          />

          <button className='
          border-2 cursor-pointer active:scale-95 hover:bg-white    border-black w-1/4 p-1 rounded-full    '
            type='submit'
          >
            click me
          </button>

        </form>

        <div className='flex flex-col bg-[#111] rounded-2xl rounded-l-none text-white w-screen p-10'>

          <h1 className='font-bold text-5xl'>Recnet notes</h1>

          <div className='flex w-full  flex-wrap  items-start justify-start   '>

            {
              task.map(function (elem, idx) {
                return <>
                  <div className='flex-col justify-between p-7'>

                    <div key={idx} className='flex bg-[url("https://i.pinimg.com/736x/fb/3c/63/fb3c63a6d73cea63785a6468245269a9.jpg")] bg-cover 
                 h-70 w-50 flex-col justify-between p-7 rounded-2xl relative  m-1 overflow-auto '>

                      <div className=''>
                        <h1 className='font-bold mb-2.5 ' >{elem.title}</h1>
                        <h1 className='font-semibold '>{elem.descp}</h1>

                      </div>
                      <div className='flex items-center justify-center  '>
                        <button className='border-2 border-white px-5 py-1 rounded-2xl bg-white text-black cursor-pointer active:scale-90 hover:bg-transparent hover:text-white font-bold' onClick={() => {
                            handleDelete(elem,idx);
                          }
                        }>Delete</button>

                      </div>

                    </div>
                  </div>
                </>
              })

            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Form


