import React from 'react'
import Styles from './Grid.module.css';
import { CellProps } from '../Model/Models'

export const Cell = ({isActive, callBack, index}: CellProps) => {

  function toggleState() {
    const newValue = !isActive
    callBack(index,newValue)
}

  return (
    <div className={isActive ? Styles.activeCell : Styles.cell} onClick={toggleState} />
  )
}
