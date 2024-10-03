import {useContext} from "react";
import {provider} from '../../utils'

export default function () {
    const inject = useContext(provider)
    console.log(inject) // context = 'test12345678'
    return (
        <>
            <p>Child name: {inject.name}</p>
        </>
    )
}