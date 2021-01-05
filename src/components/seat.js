import React, {useState} from 'react'
import {connect} from 'react-redux'


function Seat({imageUrl, currentTable, tableName, xPos, yPos})
{
    
    //style={{top: yPos, left: xPos}}
    return(
        <div className='rt-room' style={{top: yPos, left: xPos}}>
            <img src={imageUrl} alt="" />
        </div>

    )




}

const mapStateToProps = ({user}) => (
    {
        imageUrl : user.imageUrl,
        currentTable: user.currentTable
    }
)

export default connect(mapStateToProps)(Seat);