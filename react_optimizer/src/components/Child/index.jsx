import {memo, useState} from 'react'

const Child = () =>{
    // console.log('re-render child')
    return (
        <>
            <p>tessssssssssssssss</p>
        </>
    )
}

export default memo(Child)