import './App.css'


// exercise 1:
// const myelement = <h1>I Love JSX!</h1>;
// const sum = 5 + 5;

// function App() {
//   return (
//     <>
//       <p>Hello World!</p>

//       {myelement}

//       <p>React is {sum} times better with JSX</p>
//     </>
//   )
// }

//exercise 2:
// import UserFavoriteAnimals from './UserFavoriteAnimals'

// const user = {

//   firstName: 'Bob',

//   lastName: 'Dylan',

//   favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']

// }
// function App() {

//   return (

//     <>

//       <h3>{user.firstName}</h3>

//       <h3>{user.lastName}</h3>

//       <UserFavoriteAnimals favAnimals={user.favAnimals} />

//     </>

//   )

// }

import Exercise from './Exercise3'

function App() {

  return (

    <>

      <Exercise />

    </>

  )

}

export default App