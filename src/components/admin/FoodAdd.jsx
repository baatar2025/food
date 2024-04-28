import React, { useState } from 'react'
import { useFoodZustand } from '../zustand/FoodData'

export const FoodAdd = () => {
    const FoodData = useFoodZustand((state)=> state.map((e)=>{
        return(
            {
                name:e.name,
                orts:e.orts
            }
        )
    }))
    const [inputValue, setINputValue] = useState({
        name:"",
        orts:""
    })
    console.log(FoodAdd)
    const createAdd = () =>{
        FoodData.push({name:inputValue.name, orts:inputValue.orts})
        console.log(FoodData)
    }
  return (
    <div className='bg-gray-100 w-full rounded p-5'>
        <div className='flex justify-between'>
            <h1 className=' text-xl font-bold'>Food menu</h1>
           <button className="btn bg-[#18BA51] text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add food</button>
        </div>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex flex-col'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='name' className='p-1 rounded-lg border border-black my-2'/>
                    <label htmlFor="">Orts</label>
                    <input type="text" placeholder='orts' className='p-1 rounded-lg border border-black my-2'/>
                    <button className='p-1 rounded-lg my-2 bg-[#18BA51] text-white'>Add</button>
                </div>
            </div>
            </dialog>
    </div>
  )
}
