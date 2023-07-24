import usePos from '../hooks/usePos'

export default function Category({ category }) {

  const { handleClickCategory, categoryCurrent } = usePos()
  const { icon, name, id } = category

  const activeCategoryCurrent = () => categoryCurrent.id === id ? 'bg-amber-400' : 'bg-white'

  return (
    <button
      type="button"
      onClick={() => handleClickCategory(id)}
      className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer ${ activeCategoryCurrent() }`}
    >
      <img
        src={`/img/icono_${icon}.svg`}
        alt="imagen icono"
        className="w-12"
      />

      <p className="text-lg font-bold cursor-pointer truncate">
        {name}
      </p>
    </button>
  )
}

