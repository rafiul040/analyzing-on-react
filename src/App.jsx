
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottle/Bottles/Bottles'


const bottlesPromise = fetch('bottles.json').then(res => res.json())

function App() {

  return (
    <>
      
      <h1>Buy Awesome Bottle</h1>
    <Suspense fallback={<h3>Bottles are Loading...</h3>}>
    <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </Suspense>

    </>
  )
}

export default App
