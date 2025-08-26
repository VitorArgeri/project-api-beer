"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Page() {
  const [bebidas, setBebidas] = useState([])
  const [loading, setLoading] = useState(false)

  const buscarBebidas = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.sampleapis.com/beers/ale')
      const data = response.data;
      setBebidas(data)
      console.table(data)
    } catch (error) {
      console.error('Erro ao buscar bebidas:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h screen bg-blue-100 p-8 text-center">
      <div className="mx-auto text-center mb-12">
        <h1 className="text-center font-bold">Bebidas</h1>
        <div className="text-center mt-10 mb-8">
          <div className="mm-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={buscarBebidas} disabled={loading}>
              {loading ? "Carregando..." : "Buscar Bebidas"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {bebidas.map((bebida) => (
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center h-60" key={bebida.id}>
            <h3 className="font-bold text-lg text-gray-800">{bebida.name}</h3>
            <p className="text-grey-600"><span className="font-bold">Preço</span>: {bebida.price}</p>
            <img src={bebida.image} alt="Imagem da Bebida" className="w-32 h-32 object-cover mt-4" />
          </div>
        ))}
      </div>

    </div>
  )
}
