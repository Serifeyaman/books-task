import React from 'react'
import { Alert, Card } from 'reactstrap'

const CustomAlert = ({ message }) => {
    return (
        <Card style={{width:'100%', height:'100%'}}>
            <div className="m-2">
                <Alert color="primary">
                    <div className="alert-body text-center">
                        <span style={{color:'#123854'}}> {message} </span>
                    </div>
                </Alert>
            </div>
        </Card>
    )
}

export default CustomAlert