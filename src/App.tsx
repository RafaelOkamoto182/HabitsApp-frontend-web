import './styles/global.css'

import { Habit } from "./components/Habit"

function App() {
  return (

    <div>
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={0} />
    </div>

  )
}

export default App

//Fundamental do REACT:
//Componente: tudo o que a gente vai reaproveitar/isolar (ex.: os varios quadradinhos que vao ter no projeto)
//Propriedade: Uma informação enviada para modificar um componente visualmente ou comportamentalmente