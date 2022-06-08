import Styles from './GameOfLife.module.css';
import { Grid } from '../Grid/Grid'
import React, { useState, useEffect } from 'react'
import { GameOfLifeModel } from '../../Model/GameOfLife';
import { Inputs } from '../Inputs/Inputs';

export const GameOfLife = () => {

  const defaultSize = 25

  const [gridSize, setGridSize] = useState(defaultSize)
  const [items, setItems] = useState(Array<boolean>(defaultSize * defaultSize).fill(false))
  const [playing, setPlaying] = useState(false)
  
  let timeout: NodeJS.Timer;

  useEffect(() => {
    playing ? startTimer() : clearTimer()
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
    const model = new GameOfLifeModel(items, gridSize)
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
    setItems(Array<boolean>(gridSize * gridSize).fill(false))
  }

  function changeGridSize(size: number) {
    setGridSize(size)
    resetGame()
  }

  return (
    <div className={Styles.body}>
      <h1>Game Of Life</h1>
      <Inputs size={gridSize} callback={changeGridSize}></Inputs>
      <Grid items={items} size={gridSize} callBack={toggleStateOfCell} />
      <div>
        <button className={Styles.button} onClick={resetGame}>Reset</button>
        <button className={Styles.button} onClick={toggleGame}>{playing ? "Stop" : "Play"}</button>
        <button className={Styles.button} disabled={playing} onClick={changeGridToNextGeneration}>Next</button>
      </div>
    </div>
  )
}