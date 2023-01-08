// Tehtävä 1.3
const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.osa[0].exercises + props.osa[1].exercises + props.osa[2].exercises}</p>
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
  }
]
  }

  return (
    <div>
      <Header kurssi={course.name} />
      <Content parts={course.parts}/>
      <Total osa={course.parts}/>
    </div>
  )
}

// Tehtävä 1.2

/* const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.osa} {props.maara}</p>
    </div>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part osa={part1} maara={exercises1} />
      <Part osa={part2} maara={exercises2} />
      <Part osa={part3} maara={exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.osa1 + props.osa2 + props.osa3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header kurssi={course} />
      <Content />
      <Total osa1={exercises1} osa2={exercises2} osa3={exercises3}/>
</div>
  )
} */

export default App