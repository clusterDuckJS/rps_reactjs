import React from 'react'
import { useEffect, useState } from 'react';
import './game.css';
import {FaRegHandRock, FaRegHandScissors, FaRegHandPaper} from 'react-icons/fa'


function Game() {

    const choices = ['Rock', 'Paper', 'Scissors']
    const [userChoice, setUserChoice] = useState('')
    const [computerChoice, setComputerChoice] = useState('')
    const [userScore, setUserScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [winner, setWinner] = useState(false)
  
    const handleClick = (value) => { 
      generateComputerChoice()
      setUserChoice(value)
      compareInputs()
      checkResult()
    }
  
    const generateComputerChoice = () => {
      const randomChoice = choices[Math.floor(Math.random()*choices.length)]
      setComputerChoice(randomChoice)
      
    }
  
    const compareInputs = () => {
      switch (userChoice + computerChoice) {
        case 'ScissorsPaper':
        case 'RockScissors':
        case 'PaperRock':
          setUserScore(prevScore => prevScore + 1)
          break
        case 'PaperScissors':
        case 'ScissorsRock':
        case 'RockPaper':
          setComputerScore (prevScore => prevScore + 1)
          break
      }
    }
  
    const resetGame = () => {
      setUserChoice('')
      setComputerChoice('')
      setUserScore(0)
      setComputerScore(0)
      setWinner(!winner)
    }
    
    const checkResult = () => {
      (userScore === 7 || computerScore === 7) ? setWinner(true) : setWinner(false)
    }
  
    useEffect(() => {
      compareInputs()
    },[userChoice, computerChoice])
  
    return (
      <div className="container container-game">
        <div className="player-selection-container">
            <div className="user-container">
                <h3>You</h3>
                <div className="user-icon-container">
                    {(userChoice === 'Rock') ? <FaRegHandRock className='btn-icon btn-selection'/> 
                    :(userChoice === 'Scissors') ? <FaRegHandScissors className='btn-icon btn-selection'/>
                    :(userChoice === 'Paper') ?<FaRegHandPaper className='btn-icon btn-selection'/>
                    :''}
                </div>
            </div>

            <h3>{userScore} : {computerScore}</h3>

            <div className="user-container">
                <h3>Computer</h3>
                <div className="user-icon-container">
                    {(computerChoice === 'Rock') ? <FaRegHandRock className='btn-icon btn-selection'/> 
                    :(computerChoice === 'Scissors') ? <FaRegHandScissors className='btn-icon btn-selection'/>
                    :(computerChoice === 'Paper') ?<FaRegHandPaper className='btn-icon btn-selection'/>
                    :''}
                </div>
            </div>
        </div>
        <h4>First to score 7 wins</h4>
        <div className="btn-container">
            {choices.map((choice, index) => (
            <button className='btn' key={index} onClick={() => handleClick(choice)} disabled={userScore === 7 || computerScore === 7}>{(choice === 'Rock') 
            ? (<div className="btn-item">
                    <FaRegHandRock className='btn-icon'/>
                    <h5>Rock</h5>
                </div>) 
            :(choice === 'Scissors') 
            ? (<div className="btn-item">
                    <FaRegHandScissors className='btn-icon'/>
                    <h5>Scissors</h5>
                </div> )
            :(choice === 'Paper') 
            ?(<div className="btn-item">
                    <FaRegHandPaper className='btn-icon'/>
                    <h5>Paper</h5>
            </div> )
            :''}</button>
            ))} 
        </div>
  
        {((userScore > computerScore)&&(userScore ===7 || computerScore === 7)) 
        ? (<h2 style={{color:'#18634B'}}>Hurray!!! You Won!!!</h2>) : null
        }
  
        {((userScore < computerScore)&&(userScore ===7 || computerScore === 7)) 
        ? (<h2 style={{color:'#A91E2C'}}>You Lost</h2>) : null
        }
  
        {(userScore === 7 || computerScore === 7) 
        ? (
        <button className='btn' onClick={() => resetGame()}>Play Again</button>
        ): null
        }
      </div>
    );
  }

export default Game