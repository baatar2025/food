import { create } from "zustand";

type foodType ={
    id:String,
    name:String,
    orts:String,
}[]
type categoryType = {
    name:String,
    id:String
}[]

export const useFoodZustand = create<foodType>(() => ([{
    name:"hello", 
    orts:"hello",
    id:""
}]))

export const useCategoryZustand = create<categoryType>(()=>([{
    name:"",
    id:""
}]))