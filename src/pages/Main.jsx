import AddList from '../components/AddList'
import Button from '../components/Button'
import Detail from '../components/Detail';
import List from '../components/List'
import { useState } from 'react'


export default function Main() {

  const[items, setItems] = useState([]);

  function handleAddItem(item){
    setItems([...items, item]);
  }

  function handleDeleteItem(id){
    setItems(items.filter((item)=>item.id!==id))
  }

  function handleDeleteAll(){
    setItems([])
  }

  function handleDoneClick(id){
    setItems(items.map((item)=>{
      if(item.id===id){
        return {...item, checked: !item.checked}
      }
      return item
    }))
  }

  return(
    <>
      <section>
        <div className='container font-[poppins]'>
          <div className='text-center pt-20'>
            <h1 className='text-5xl font-bold gradients font-[Kalam]'>MY TO DO LIST</h1>
            <AddList onAddItem={handleAddItem}/>
          </div>
          <div className='mt-10 flex justify-center gap-10 font-[poppins]'>
            <Button items={items}/>
          </div>

          {items.length===0&&(
            <h1 className='text-lg text-center mt-10'>🙌Tugas masih kosong🙌</h1>
          )}

          <div className='mt-10'>
            <List items={items} onDeleteItem={handleDeleteItem} onDoneClick={handleDoneClick}/>
          </div>
         
        

          <footer className='mt-8 text-center'>
            <button onClick={()=>{
              const confirm = window.confirm('Apakah anda yakin ingin menghapus semua tugas?')
              if(confirm){
                handleDeleteAll()
              }
            }} className={`${items.length===0 ? 'bg-red-200' : 'bg-red-500'}  text-sm p-2 rounded-md text-white font-semibold hover:bg-red-300`}>
              Hapus Semua
            </button>
          </footer>
        </div>
      </section>
    </>
  )
}