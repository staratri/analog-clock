import { useState, useLayoutEffect, useEffect } from 'react'

import Clock from './components/Clock'

import './App.scss'

function App() {
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const handleInputeChange = (type='minute') => (event) => {
    const number = Number(event.target.value)
    if(isNaN(number)) {
      alert('Enter a valid number')
      event.target.value = ""
      return
    }

    if (number > 60) {
      alert('Enter value under 60')
      return
    }
    // validate number
    if(type === 'minute') {
      setMinute(number)
      return
    }
    setSecond(number)
  }

  useEffect(() => {
    let secondInterval = setInterval(() => {
      setSecond(second + 1)
      if (second + 1 === 60) {
        setMinute(minute + 1)
        if(minute + 1 === 60) {
          setMinute(0)
        }
        setSecond(0)
      }
    }, 1000)
    return () => clearInterval(secondInterval)
  })

  return (
    <>
      <Clock minute={ minute } second={second} />
      <div className="time">
        <input onChange={handleInputeChange()} value={minute} />
          :
        <input onChange={handleInputeChange('second')} value={second} />
      </div>
    </>
  )
}

export default App
