import React from 'react'

const Header = ({ setSection }) => {

  const buttons = [
    {
      value: "All",
      section: "all"
    },
    {
      value: "Name",
      section: "name"
    },
    {
      value: "Description",
      section: "description"
    },
  ]
  return (
    <header>
      {buttons.map((button) => (
        <button key={button.section} onClick={() => setSection(button.section)}>{button.value}</button>
      ))}
    </header>
  )
}

export default Header
