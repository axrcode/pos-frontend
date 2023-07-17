import Category from "./Category"
import { categories } from "../data/categories"

export default function Sidebar() {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img
          className="w-40"
          src="img/logo.svg"
          alt="imagen logotipo"
        />
      </div>

      <div className="mt-10">
        { categories.map( category => (
          <Category
            key={category.id}
            category={category}
          />
        )) }
      </div>

      <div className="my-5 px-5">
        <button
          type="button"
          className="text-cente bg-red-500 w-full p-3 text-white truncate"
        >
          Cancelar Orden
        </button>
      </div>
    </aside>
  )
}
