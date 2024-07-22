import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const updateCount = () => {
    setCount(count + multiplier);
  }
  const buyDoubledStuff = () => {
    if(count >= 10) {
      setMultiplier(multiplier * 2)
      setCount(count - 10)
    }
  }
  const buyPartyPack = () => {
    if(count >= 100) {
      setMultiplier(multiplier * 5)
      setCount(count - 100)
    }
  }
  const buyFullFeast= () => {
    if(count >= 1000) {
      setMultiplier(multiplier * 10)
      setCount(count - 1000)
    }
  }
  const buyAbsolutePack= () => {
    if(count >= 10000000000) {
      setMultiplier(multiplier * 1000000000)
      setCount(count - 100000000000)
    }
  }


  return (
    <div>
    <div className='flex justify-center align-middle'>
      <h1 className='text-4xl text-red-300'>Potato Selector</h1>
      <h2 className='text-3xl'>Count: {count}</h2>
      <img className='w-50 h-40' 
      src="https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488"
      alt="potato picture"
      onClick={updateCount}
      />
    </div>
    <div className='flex justify-center'>
    <div>
      <h2>Double Stuff</h2>
      <p>2x per click</p>
      <button className="pl-2 pr-2 pb-5 mr-6 w-48 bg-red-500" onClick={buyDoubledStuff}>10 potatoes</button>
    </div>
    <div>
      <h2>Party Pack</h2>
      <p>5x per click</p>
      <button className="pl-2 pr-2 pb-5 mr-6 w-48 bg-red-500" onClick={buyPartyPack}>100 potatoes</button>
    </div>
    <div>
      <h2>Full Feast</h2>
      <p>10x per click</p>
      <button className="pl-2 pr-2 pb-5 mr-6 w-48 bg-red-500" onClick={buyFullFeast}>1000 potatoes</button>
    </div>
    <div>
      <h2>Absolute Pack</h2>
      <p>100000000x per click</p>
      <button className="pl-2 pr-2 pb-5 mr-6 w-48 bg-red-500" onClick={buyFullFeast}>100000000000 potatoes</button>
    </div>
    </div>
    </div>

  )

}
export default App
