import { useState } from 'react'

const Header = ({header}) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const Display = ({stat, value}) => {
  return (
  <div>
  <p>{stat} {value}</p>
  </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = (props) => {
if (props.arvot[3] < 1) {
    return (
      <div>
        <p>No feedback :3</p>
      </div>
    )
}

  return (
    <div>
      <Display stat={props.parts[0]} value={props.arvot[0]}/>
      <Display stat={props.parts[1]} value={props.arvot[1]}/>
      <Display stat={props.parts[2]} value={props.arvot[2]}/>
      <Display stat={props.parts[3]} value={props.arvot[3]}/>
      <Display stat={props.parts[4]} value={props.arvot[3] / props.arvot[3]}/>
      <Display stat={props.parts[5]} value={(props.arvot[5] / props.arvot[3]) * 100}/>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const otsikko = 'Give feedback'
  const stats = 'Statistics'
  const [allClicks, setAll] = useState(0)
  const [clicks, setAvrg] = useState(0)
  const [positive, setPositive] = useState(0)

  const parts = ['Good', 'Neutral', 'Bad', 'All', 'Average', 'Positive']

  const setToGood = newValue => {
    console.log('value now', newValue)
    setAll(allClicks+1)
    setAvrg(clicks + 1)
    setPositive(positive +1)
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setAll(allClicks+1)
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    console.log('value now', newValue)
    setAll(allClicks+1)
    setAvrg(clicks - 1)
    setBad(newValue)
  }

  const arvot = [good, neutral, bad, allClicks, clicks, positive];

  return (
    <div>
      <Header header={otsikko}/>
      <Button handleClick={() => setToGood(good+1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setToBad(bad+1)} text="bad" />
      <Header header={stats}/>
      <Stats parts={parts} arvot={arvot} />
    </div>
  )
}

export default App