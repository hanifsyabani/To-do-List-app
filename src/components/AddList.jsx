import { useState } from "react"


export default function AddList({onAddItem}) {

  const[name, setName] = useState("")
  const[days, setDays] = useState("")
  const[times, setTimes] = useState("")


  function handleSubmit(e){
    e.preventDefault();
    if(!name || !days || !times) return;

    const newItem = {
      id: Date.now(),
      todo: name,
      days,
      times,
      checked: false,
    }

    onAddItem(newItem);

    setName(""); 
    setDays("");
    setTimes("");
    
  }

  return (
    <>
      <form action="" onSubmit = {handleSubmit}>
        <div className="mt-6 w-full">
          <input type="text" placeholder="Masukkan to do list" className="w-[80%] outline-none shadow-lg shadow-gray-500/50 p-3 rounded-md xl:w-[35%] mb-4" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="Masukkan Hari" className="outline-none shadow-lg shadow-gray-500/50 p-3 rounded-md xl:w-[15%]" value={days}  onChange={(e) => setDays(e.target.value)} required/>
          <input type="time" className="outline-none shadow-lg shadow-gray-500/50 p-3 rounded-md xl:w-[9%]" value={times} onChange={(e) => setTimes(e.target.value)} required/>
          
        </div>
        <button type="submit" className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-gray-500/50 p-3 rounded-md text-white font-semibold w-[6rem] hover:scale-105 ease-in duration-100">
          Save
        </button>
      </form>
    </>
  )
}