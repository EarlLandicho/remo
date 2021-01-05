import React, {useState, useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import { moveTables, setImageUrl, addUserToTable, removeUserFromTable, setLastTable } from 'reducers/actions';
import Seat from './seat';
import TableConfig from './tableConfig.json';

function Table({setLastTable, removeUserFromTable, users, lastTable, addUserToTable, currentUser, currentTable, setImageUrl, moveTables, imageUrl, seats, tableName, width, height, top, left})
{


    function handleClick()
    {
        setImageUrl(imageUrl);
        moveTables(tableName);
        addUserToTable(currentUser);
        if(tableName != lastTable)
        {
            removeUserFromTable(currentUser);
        }
        setLastTable(tableName);

        console.log(users)
    }

    return( 
        <div>
            <div onClick = {handleClick} className='rt-room' style={{width: width, height: height, top: top, left: left}} >

            {
                tableName === currentTable ? <Seat imageUrl = {imageUrl} xPos = {seats[0].x} yPos = {seats[0].y}/> : null
            }
            <div className='rt-room-name'>{tableName}</div>

            </div>

        </div>

    )




}

const mapStateToProps = ({user, tables}) => (
    {
        imageUrl : user.imageUrl,
        currentTable: user.currentTable,
        currentUser: user.currentUser,
        users: tables.users,
        lastTable : tables.lastTable
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

        addUserToTable : (user) => {
            dispatch(addUserToTable(user))
        },

        removeUserFromTable : (user) => {
            dispatch(removeUserFromTable(user))
        },

        setLastTable : (lastTable => {
            dispatch(setLastTable(lastTable))
        })
    }
)

  
  export default connect(mapStateToProps, mapDispatchToProps)(Table);