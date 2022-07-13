import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

const Produtos = ({ page }) => {

    const navigate = useNavigate()
    return (
        <>
            <h1>Produtos: {page}</h1>
            <button onClick={() => navigate('/')}>Navegar</button>
            <button onClick={() => alert('Olá mundo')}>Enviar</button>
            <Outlet />
        </>
        
    )
}

export default Produtos
