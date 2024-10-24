import {onInputSearchStr, getSearchStr} from '../../store'
import {useDispatch, useSelector} from "react-redux";

export default function() {
    const dispatch = useDispatch()
    const searchStr = useSelector(getSearchStr)

    const onInput = (e) => {
        dispatch(onInputSearchStr(e.target.value))
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