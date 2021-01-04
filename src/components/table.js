import React, {useState} from 'react'
import {connect} from 'react-redux'
import { moveTables, setImageUrl } from 'reducers/gameDataActions';
import TableConfig from './tableConfig.json';

function Table({setImageUrl, moveTables, imageUrl, currentTable, tableName, width, height, top, left})
{
    function handleClick()
    {
        
        setImageUrl(imageUrl);
        moveTables(tableName);
    }
    
    
    return(
        <div>
            <div value = "test" onClick = {handleClick} className='rt-room' style={{width: width, height: height, top: top, left: left}} >

                {tableName == currentTable ? <img src={imageUrl} alt="No Image"/>: null}

                <div className='rt-room-name'>{tableName}</div>

            </div>

        </div>

    )




}

const mapStateToProps = ({user}) => (
    {
        imageUrl : user.imageUrl,
        currentTable: user.currentTable
    }
)

const mapDispatchToProps = dispatch => (
    {
        setImageUrl: (imageUrl) => {
            dispatch(setImageUrl(imageUrl))
        },

        moveTables: (tableName) => {
            dispatch(moveTables(tableName))
        },
    }
)

  
  export default connect(mapStateToProps, mapDispatchToProps)(Table);