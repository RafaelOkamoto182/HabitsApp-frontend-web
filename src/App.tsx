import './styles/global.css'

//import { Habit } from "./components/Habit"
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {/* the main, most generic screen */}

      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        {/* the div that contains all the contents (logo, habits etc) */}

        <Header />
        <SummaryTable />


      </div>
    </div>

  )
}

//export default App (not very nice to use)

//Fundamental do REACT:
//Componente: tudo o que a gente vai reaproveitar/isolar (ex.: os varios quadradinhos que vao ter no projeto)
//Propriedade: Uma informação enviada para modificar um componente visualmente ou comportamentalmente