import { useState } from 'react'
import './App.css'
import Quotes from './components/Quotes'
import quotes from './json/quotesAuthor.json'
import colors from './utils/colors'

function App() {

  const getIndexRandom = arr => {
    return Math.floor(Math.random() * arr.length)
  }

  const quotesRandom = quotes[getIndexRandom(quotes)]
  const colorRandom = colors[getIndexRandom(colors)]

  const [quotesRan, setQuotesRan] = useState(quotesRandom)
  const [colorRan, setColorRan] = useState(colorRandom)

  const getRandomAll = () => {
    setQuotesRan(quotes[getIndexRandom(quotes)])
    setColorRan(colors[getIndexRandom(colors)])
  }

  return (
    <div style={{backgroundColor: colorRan}} className="App">
      <Quotes 
      quotesRandom = {quotesRan}
      colorRandom = {colorRan}
      getRandomAll = {getRandomAll}
      />
    </div>
  )
}

export default App
