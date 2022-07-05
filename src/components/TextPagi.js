import React, { useState } from 'react';

export default ({text}) => {
const [readTrigger, setReadTrigger] = useState(' Read More')
const [textData, setTextData] = useState(text.slice(0, 200))
const [clicked, setClicked] = useState(false)

const onExpandHandler = (e) => {
    e.preventDefault()
    setTextData(text)
    setReadTrigger(' ...Less')
    setClicked(true)
}

const onCloseHandler = (e) => {
    e.preventDefault()
    setTextData(text.slice(0, 130))
    setReadTrigger(' Read More')
    setClicked(false)
}


const styles = {
    color: '#95d6fa',
    fontStyle: 'italic',
    cursor: 'pointer',
    fontWeight: '900'
}

    return (
        <>
           {!clicked && <>{textData}...<a onClick={onExpandHandler} style={styles}><u>{readTrigger}</u></a></> ||
            (<>{textData}<a onClick={onCloseHandler} style={styles}><u>{readTrigger}</u></a></>)}
           
            
        </>
    )
}