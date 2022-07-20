import { useEffect, useState } from 'react'

const easeOutExpo = (x: number) => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

export default function useCounter(end = 0, start = 0, duration = 3000) {
  const [count, setCount] = useState(start)
  const frameRate = 1000 / 60
  const totalFrame = Math.round(duration / frameRate)

  useEffect(() => {
    let currentNumber = start
    const counter = setInterval(() => {
      const progress = easeOutExpo((currentNumber - start) / totalFrame)
      ++currentNumber
      setCount(start + Math.round((end - start) * progress))
      if (progress === 1) {
        clearInterval(counter)
      }
    }, frameRate)
  }, [end, frameRate, start, totalFrame])

  return count
}
