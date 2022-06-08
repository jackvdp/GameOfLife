import React, { useState } from 'react'
import { Cell } from '../Cell/Cell';
import { GridProps } from '../Model/Models'

export const Grid = ({items, size, callBack}: GridProps) => {

    return (
        <div className="grid">
            {items.map((item, index) => (
                <Cell isActive={item} callBack={callBack} index={index} key={index} />
            ))}
            <style jsx>{`
        .grid {
            width: ${size * size}px;
            display: grid;
            grid-gap: 0px;
            grid-template-columns: repeat(${size}, 25px);
            grid-template-rows: repeat(${size}, 25px);
            grid-auto-flow: column;
            margin: auto;
            padding: 10px;
          }
      `}</style>
        </div>
    )
}
