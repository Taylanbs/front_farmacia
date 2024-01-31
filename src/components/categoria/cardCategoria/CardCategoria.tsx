import {Link} from "react-router-dom"
import Categoria from "../../../model/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-green-800 text-white font-bold text-2xl">{categoria.nome}</header>
            <p className="p-8 text-3xl bg-green-200 h-full">{categoria.descricao}</p>
            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className="w-full text-green-100 bg-green-400 hover:bg-green-600 flex items-center justify-center py-2">
                <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className="text-green-100 bg-fuchsia-800 hover:bg-fuchsia-950 w-full flex items-center justify-center">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias