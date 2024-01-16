import React from 'react'
import Card from '../Card/Card'

const Name = ({ section }) => {
  return (
    <div>
      <Card
        color='blue'
        section={section}
        type="name"
      >
        Name
      </Card>
    </div>
  )
}

export default Name
