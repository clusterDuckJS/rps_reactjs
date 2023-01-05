import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'

function Home() {
    const navigate = useNavigate();
  return (
    <div className='container container-home'>
        <div className='text-home'>
            <h1>Rock Paper Scissors</h1>
            <h4>A Neumorphism UI Rock Paper Scissors game made with ReactJS by <strong>clusterDuckJS</strong> </h4>
        </div>
       <button className='btn btn-primary' onClick={() => navigate('/game')}>Play Game</button>
    </div>
  )
}
export default Home