import React, { useState } from 'react'
import Styles from './Grid.module.css';
import { Cell } from './Cell';
import { GridProps } from '../Model/Models'

export const Grid = ({items, callBack}: GridProps) => {

    return (
        <div className={Styles.grid}>
            {items.map((item, index) => (
                <Cell isActive={item} callBack={callBack} index={index} key={index} />
            ))}
        </div>
    )
}
