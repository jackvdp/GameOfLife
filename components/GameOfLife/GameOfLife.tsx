import Styles from './GameOfLife.module.css';
import { Grid } from '../Grid'
import React, { useState, useEffect } from 'react'
import { GameOfLifeModel } from '../Model/GameOfLife';

export const GameOfLife = () => {

  const [items, setItems] = useState(Array<boolean>(625).fill(false))
  const [playing, setPlaying] = useState(false)

  let timeout: NodeJS.Timer;

  useEffect(() => {
    if (playing) {
      startTimer()
    } else {
      clearTimer()
    }
  })

  function startTimer() {
    timeout = setTimeout(() => {
      changeGridToNextGeneration()
    }, 1000);
  }

  function clearTimer() {
    clearTimeout(timeout)
  }
  
  function toggleStateOfCell(index: number, newValue: boolean) {  
    if (!playing) {
      const newArray = [...items]
      newArray[index] = newValue
      setItems(newArray)
    }
  }

  function changeGridToNextGeneration() {
    const model = new GameOfLifeModel(items)
    const newGrid = model.gridInNextGeneration()
    setItems(newGrid)
  }

  function toggleGame() {
    playing ? setPlaying(false) : setPlaying(true)
    clearTimer()
  }

  function resetGame() {
    setPlaying(false)
    clearTimer()
    setItems(Array<boolean>(625).fill(false))
  }

  return (
    <div className={Styles.body}>
      <h1>Game Of Life</h1>
      <p>Select cells and start the game!</p>
      <Grid items={items} callBack={toggleStateOfCell} />
      <div>
        <button className={Styles.button} onClick={resetGame}>Reset</button>
        <button className={Styles.button} onClick={toggleGame}>{playing ? "Stop" : "Play"}</button>
        <button className={Styles.button} disabled={playing} onClick={changeGridToNextGeneration}>Next</button>
      </div>
    </div>
  )
}