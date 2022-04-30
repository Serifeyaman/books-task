import React from 'react'
import { Spinner } from 'reactstrap'
import "assets/css/loading.css"

const Loading = ({ block, backgroundShow, children }) => {
    return (
        <div className='loading-div'>
            <Spinner type='border' size="md" color="#417d7a">
                Loading
            </Spinner>
        </div>
    )
}

export default Loading