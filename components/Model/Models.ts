
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
    size: number
    callBack: CallBackFunction
}

interface SizeProps {
    size: number
    callback: SizeCallBackFunction
}

interface SizeCallBackFunction {
    (size: number): void
}

export type { GridProps, CallBackFunction, CellProps, SizeProps, SizeCallBackFunction }