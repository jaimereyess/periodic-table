"use client"
import React from 'react'
import Table from "@/components/table";
import Tittle from '@/components/title';


function Home() {
  return (
    <div className="select-none pt-0 p-4">
      <header className="flex justify-center align-middle text-4xl text-white mt-4">
        <Tittle text='Periodic table' />
      </header>
      <Table />
    </div>


  )
}

export default Home
