import React from 'react'
import { Spinner } from 'reactstrap'
import "assets/css/loading.css"

const Loading = ({ block, backgroundShow, children }) => {
    return (
        // block ?
        //     <>
        //         <div className='loading-div'>
        //             {/* <Loader size={large} color="#417d7a" /> */}
        //             <Spinner type='border' size="md" color="#417d7a">
        //                 Loading
        //             </Spinner>
        //         </div>
        //         {
        //             backgroundShow ?
        //                 <div className='show-loading-div'>
        //                     {children}
        //                 </div>
        //                 :
        //                 null
        //         }
        //     </>
        //     :
        //     <div className='show-loading-div'>
        //         {children}
        //     </div>

        <div className='loading-div'>
            <Spinner type='border' size="md" color="#417d7a">
                Loading
            </Spinner>
        </div>
    )
}

export default Loading