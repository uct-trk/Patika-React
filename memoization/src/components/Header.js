import React from 'react'

const Header = ({number}) => {
    console.log("render edilme durumu")
    return (
        <div>
            <h1>{number}</h1>
            Header
        </div>
    )
}

export default React.memo(Header)
// React memo gereksiz renderlerin önüne geçebiliyor