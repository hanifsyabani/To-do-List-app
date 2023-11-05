import { useState } from "react";
import {
  AiOutlineFileDone,
  AiOutlineDelete,
} from "react-icons/ai";
import Detail from "./Detail";

export default function List({ items, onDeleteItem, onDoneClick}) {

  return (
    <>
      {items.map((item) => (
        <div className={`${item.checked ? 'bg-green-400': 'bg-white'} border border-gray-500 w-[80%] xl:w-full xl:max-w-[50%] mx-auto flex justify-between p-3 rounded-md mb-4`} key={item.id}>
          <p>{item.todo}</p>
          <div className="flex gap-3">
            <AiOutlineDelete size={20} color="red" onClick={()=>{
              const confirmDelete = window.confirm('Apakah anda yakin ingin menghapus tugas ini?')
              if(confirmDelete){
                onDeleteItem(item.id)
              }
            }} className="cursor-pointer"/>
            <Detail id={item.id} items={items}/>
            <div className="flex gap-3">
              <input type="checkbox" id={item.id} checked={item.checked} className="hidden" onClick={()=>{
                 const confirmDone= window.confirm('Yakin ingin mengakhiri tugas ini?')
                 if(confirmDone){
                  onDoneClick(item.id)
                 }               
              }}/>
              <label htmlFor= {item.id}>
                <AiOutlineFileDone size={20} color="green" className="cursor-pointer"/>
              </label>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
