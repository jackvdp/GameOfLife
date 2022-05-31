class GameOfLifeModel {

    private startingArray: Array<boolean>

    constructor(grid: Array<boolean>) {
        this.startingArray = grid
    }

    private getNeighbours(index: number): Array<number> {

        let neighbours = Array<number>()

        if (index > 24 && index % 25 != 0) {
            const topLeft = index - 26
            neighbours.push(topLeft) 
        }

        if (index > 24) {
            const left = index - 25
            neighbours.push(left)
        }

        if (index > 24 && index % 25 != 24) {
            const bottomLeft = index - 24
            neighbours.push(bottomLeft)
        }

        if (index % 25 != 24) {
            const bottom = index + 1
            neighbours.push(bottom)
        }
        
        if (index < 600 && index % 25 != 24) {
            const bottomRight = index + 26
            neighbours.push(bottomRight)
        }

        if (index < 600) {
            const right = index + 25
            neighbours.push(right)
        }

        if (index < 600 && index % 25 != 0) {
            const topRight = index + 24
            neighbours.push(topRight) 
        }

        if (index % 25 != 0) {
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