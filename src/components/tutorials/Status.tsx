
import * as React from 'react'
type StatusProps={
    status:'Loading'| 'success' | 'error'

}

export const Status =(props: StatusProps)=>{
    let message;
    if(props.status=='Loading'){
        message='Loading...'
    }
    else if(props.status=='success'){
        message='Data fetched successfully'
    }
    else if(props.status=='error'){
        message='Error fetching data'
    }
    return (
        <div>
            <h2>Status={message}</h2>
        </div>
    )
}