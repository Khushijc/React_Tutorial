import { useRef } from "react"
import { useDispatch } from "react-redux"
import { counterAction } from "../store"

const Control = () => {
    const dispatch = useDispatch()
    const input = useRef(" ")
    const handleIncrement = () => {
        dispatch(counterAction.increment());
    }
    const handleDecrement = () => {
        dispatch(counterAction.decrement());
    }
    const handleAdd = () => {
        dispatch(counterAction.add(input.current.value))
        input.current.value = ""
    }
    const handleSub = () => {
        dispatch(counterAction.sub(input.current.value))
        input.current.value = ""
    }

    return <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" fdprocessedid="afkywg" onClick={handleIncrement}>+1</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="opa7b" onClick={handleDecrement}>-1</button>
        </div>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <input type="text" className="control-row input-row" placeholder="Enter your number" ref={input} />
            <button type="button" className="btn btn-info control-row" fdprocessedid="opa7b" onClick={handleAdd}>Add</button>
            <button type="button" className="btn btn-danger control-row" fdprocessedid="opa7b" onClick={handleSub}>Sub</button>
        </div>
    </>
}
export default Control