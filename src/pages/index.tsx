import { Category } from "@/components/admin/Category";
import { Header } from "@/components/admin/Header";
import { FoodAdd } from "@/components/admin/FoodAdd"

export default function Home() {
  return (
  <div>
    <Header/>
    <div className="flex px-10 py-5
    h-full bg-gray-100 gap-10">
     <Category/>
     <FoodAdd/>
    </div>
  </div>
  );
}
