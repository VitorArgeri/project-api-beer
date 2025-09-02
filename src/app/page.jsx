import React from 'react'
import LinkButton from '../Components/LinkButton/page'
import Link from 'next/link'

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 flex-col gap-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md h-120">
        <div className="mb-6 flex justify-center items-center flex-col">
          <img src="/Img/VitorArgeri-Img.jpg" alt="Foto do Vitor de Almeida Argeri" className="w-50 h-50 rounded-full mb-4"/>
          <h1 className="text-2x1 font-bold text-gray-800">Vitor de Almeida Argeri</h1>
        </div>
        <ul className="mt-6 space-y-2 text-left">
          <li className="text-gray-700"><span className="font-semibold">Turma: </span>3ºD</li>
          <li className="text-gray-700"><span className="font-semibold">Idade: </span>18 Anos</li>
          <li className="text-gray-700"><span className="font-semibold">Local de Nascimento: </span>Valinhos, SP</li>
        </ul>
        <h2 className="flex text-center text-lg italic text-gray-600">
          A grandeza de uma pessoa é medida pelo quão grande seu sonho é
        </h2>
      </div>
      <LinkButton link="./Api-Info" text="API-Info"/>
      <LinkButton link="./List" text="List"/>
      <LinkButton link="./Details" text="Details"/>
    </div>
  )
}
