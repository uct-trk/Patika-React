import React from 'react'

const Header = ({number, data}) => {
    console.log("render edilme durumu")
    return (
        <div>
            <h1>{number}</h1>
            Header
            <br/>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

export default React.memo(Header)
// React memo gereksiz renderlerin önüne geçebiliyor
// React memoda componente gönderilen proplar değişmediği sürece render edilmez