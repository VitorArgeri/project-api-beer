import React from 'react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Página não encontrada</p>
            <a
                href="/"
                className="bg-blue-500 text-white px-6 pt-10 py-10 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 h-10 flex items-center justify-center w-70 my-10"
            >
                Voltar para a página inicial
            </a>
        </div>
    )
}