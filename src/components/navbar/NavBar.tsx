import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Cura Fácil</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Favoritos</div>
              <div className='hover:underline'>Carrinho</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar