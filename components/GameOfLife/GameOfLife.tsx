import Styles from './GameOfLife.module.css';
import { Grid } from '../Grid'
import React, { useState, useEffect } from 'react'
import { GameOfLifeModel } from '../Model/GameOfLife';

export const GameOfLife = () => {

  const [items, setItems] = useState(Array<boolean>(625).fill(false))
  const [playing, setPlaying] = useState(false)

  let interval: NodeJS.Timer;

  useEffect(() => {
    if (playing) {
      startTimer()
    } else {
      clearTimer()
    }
  })
  
  function toggleStateOfCell(index: number, newValue: boolean) {  
    if (!playing) {
      const newArray = [...items]
      newArray[index] = newValue
      setItems(newArray)
    }
  }

  function startTimer() {
    interval = setTimeout(() => {
      changeGridToNextGeneration()
    }, 1000);
  }

  function clearTimer() {
    clearInterval(interval)
  }

  function changeGridToNextGeneration() {
    const model = new GameOfLifeModel(items)
    const newGrid = model.gridInNextGeneration()
    setItems(newGrid)
  }

  function toggleGame() {
    playing ? setPlaying(false) : setPlaying(true)
  }

  return (
    <div className={Styles.body}>
      <div>Game Of Life</div>
      <Grid items={items} callBack={toggleStateOfCell} />
      <button onClick={toggleGame}>{playing ? "Stop" : "Play"}</button>
    </div>
  )
}