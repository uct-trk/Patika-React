import React from 'react'

const Header = ({ increase}) => {
    console.log("render edilme durumu")
    return (
        <div>
            Header
            <br/>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default React.memo(Header)
// React memo gereksiz renderlerin önüne geçebiliyor
// React memoda componente gönderilen proplar değişmediği sürece render edilmez