import { useState } from "react"
import { useCategoryZustand } from "../zustand/FoodData"

export const Category = () => {
    const categoreData = useCategoryZustand((state)=>state.map((e)=>{
        return({
            name:e.name,
            id:e.id
        })
    }))
    const [nameTo, setName] = useState("")
    const addName = ()=>{
        const idInput = (Math.floor(Math.random()*1000)+10000).toString()
        const data = categoreData.push({
            name:nameTo,
            id:idInput
        })
        console.log(data)
    }
  return (
     <div className="w-3/12 bg-white flex justify-center py-3 rounded-lg">
          <div>
          <h1 className="text-xl font-bold mt-5 mb-8">Add Category</h1>

                <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add Category
                </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="flex flex-col">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Name' className='p-1 rounded-lg border border-black my-2' onChange={(e)=> setName(e.target.value)} />
                            <button className='p-1 rounded-lg mt-4 bg-[#18BA51] text-white' onClick={addName}>Add</button>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
    </div>
  )
}
