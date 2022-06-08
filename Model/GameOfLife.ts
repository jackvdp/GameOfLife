class GameOfLifeModel {

    private startingArray: Array<boolean>
    private gridSize: number

    constructor(grid: Array<boolean>, size: number) {
        this.startingArray = grid
        this.gridSize = size
    }

    private getNeighbours(index: number): Array<number> {

        let neighbours = Array<number>()

        if (index > (this.gridSize - 1) && index % this.gridSize != 0) {
            const topLeft = index - (this.gridSize + 1)
            neighbours.push(topLeft) 
        }

        if (index > (this.gridSize - 1)) {
            const left = index - this.gridSize
            neighbours.push(left)
        }

        if (index > (this.gridSize - 1) && index % this.gridSize != (this.gridSize - 1)) {
            const bottomLeft = index - (this.gridSize - 1)
            neighbours.push(bottomLeft)
        }

        if (index % this.gridSize != (this.gridSize - 1)) {
            const bottom = index + 1
            neighbours.push(bottom)
        }
        
        if (index < (this.gridSize * this.gridSize - this.gridSize) && index % this.gridSize != (this.gridSize - 1)) {
            const bottomRight = index + (this.gridSize + 1)
            neighbours.push(bottomRight)
        }

        if (index < (this.gridSize * this.gridSize - this.gridSize)) {
            const right = index + this.gridSize
            neighbours.push(right)
        }

        if (index < (this.gridSize * this.gridSize - this.gridSize) && index % this.gridSize != 0) {
            const topRight = index + (this.gridSize - 1)
            neighbours.push(topRight) 
        }

        if (index % this.gridSize != 0) {
            const top = index - 1
            neighbours.push(top) 
        }

        return neighbours
    }

    private getNumberOfLiveNeighbours(index: number): number {
        const neighbours = this.getNeighbours(index)
        const neighbourStates = neighbours.map(neighbourIndex => this.startingArray[neighbourIndex])
        const numberOfAliveNeighbours = neighbourStates.filter(neighbour => neighbour == true).length
        return numberOfAliveNeighbours
    }

    private cellStateInNextGeneration(index: number): boolean {
        const currentCellState = this.startingArray[index]
        const numberOfLiveNeighbours = this.getNumberOfLiveNeighbours(index)

        return (numberOfLiveNeighbours == 3 || (numberOfLiveNeighbours == 2 && currentCellState))
    }

    gridInNextGeneration(): boolean[] {
        const newGrid = Array<boolean>()

        for (let i = 0; i < this.startingArray.length; i++) {
            const newCell = this.cellStateInNextGeneration(i)
            newGrid.push(newCell)
        }

        return newGrid
    }

}

export { GameOfLifeModel }