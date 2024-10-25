import {searchStrReducer, getSearchStr} from '../../store'
import {thunkFunction} from '../../store/reducer/searchStr.js'
import {useDispatch, useSelector} from "react-redux";

export default function() {
    const dispatch = useDispatch()
    const searchStr = useSelector(getSearchStr)

    const onInput = (e) => {
        dispatch(thunkFunction)
        // dispatch(searchStrReducer.actions.input(e.target.value))
    }

    return (
        <>
            <input
                value={searchStr}
                name={'searchStr'}
                placeholder={'search'}
                onChange={onInput}
            />
        </>
    )
}