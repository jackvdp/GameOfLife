
interface CellProps {
    isActive: boolean
    callBack: CallBackFunction
    index: number
}
  
interface CallBackFunction {
    (index: number,
    newValue: boolean): void
}

interface GridProps {
    items: Array<boolean>
    callBack: CallBackFunction
}

export type { GridProps, CallBackFunction, CellProps }