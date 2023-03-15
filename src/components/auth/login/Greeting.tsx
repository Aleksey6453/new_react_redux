import React from 'react'

interface IGreeting {
    age: number,
   name: string
}

const Greeting = ({name, age}: IGreeting) => {
   

  return (
    <div>
      <h2>Hi Michluho Macklay, {name}, you are {age}?</h2>
    </div>
  )
}

export default Greeting

