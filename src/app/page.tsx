import Table from "@/components/table";

export default function Home() {


  return (
    <div className="select-none pt-0 p-4">
      <header className="flex justify-center align-middle text-4xl font-bold text-white mt-4 ">
        Periodic Table
      </header>
      <main className="flex">
        <Table />
      </main>
    </div>
  )
}
