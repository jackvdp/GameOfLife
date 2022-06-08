import React from "react"
import { SizeProps } from "../Model/Models"

export const Inputs = ({size, callback}: SizeProps) => {


    function inputChanged(e: React.FormEvent<HTMLInputElement>) {
        const newNumber = parseInt(e.currentTarget.value)
        if (newNumber != null) {
            callback(newNumber)
        }
    }

    return(
        <div>
            <label>Grid Size:</label>
            <input type="number" value={size} onChange={inputChanged} step="1" />
        </div>
    )

}

