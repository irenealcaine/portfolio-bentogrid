import { useState } from "react"
import Card from "./Components/Card/Card"
import Main from "./Components/Main/Main"
import Name from "./Components/Name/Name"
import Description from "./Components/Description/Description"
import Header from "./Components/Header/Header"

function App() {

  const [section, setSection] = useState('all')

  // const shouldApplyClass = (cardContent) => {
  //   return isActive === 'all' || isActive === cardContent;
  // };

  // const isCardActive = (cardContent) => {
  //   if (!shouldApplyClass(cardContent)) return 'inactive'
  // }

  return (
    <>
      <Header setSection={setSection} />
      <Main>
        <Name section={section} />
        <Description section={section} />
        <Name section={section} />
        <Description section={section} />
        <Name section={section} />
        <Description section={section} />
      </Main>
    </>
  )
}

export default App
