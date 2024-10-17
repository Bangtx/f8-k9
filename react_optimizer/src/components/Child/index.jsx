import {memo, useState} from 'react'

const Child = ({func}) =>{
    // console.log('re-render child')
    return (
        <>
            <p>tessssssssssssssss: {func()}</p>
        </>
    )
}

export default memo(Child)