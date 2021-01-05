import * as React from 'react';
import './Theater.scss'; 
import MapImage from '../assets/conference-map.svg';
import TableConfig from './tableConfig.json';
import {auth} from '../services/firebase'
import {connect} from 'react-redux'
import Table from './table';

const Theater = () => {
  return ( 
    <div className='remo-theater' style={{width: TableConfig.width, height: TableConfig.height}}>
      
      <div className='rt-app-bar'>
        {
           
        }
        <a href='javascript:;'>Logout</a>
      </div>
      <div className='rt-rooms'>
        
        {
          TableConfig.tables.map(table => {
            return <Table key = {table.id} seats = {table.seats} tableName = {table.id} width = {table.width} height = {table.height} top = {table.y} left = {table.x}/>
          })
        }
        <Table />
      </div>
      <div className='rt-background'>
        <img src={MapImage} alt='Conference background'/>
      </div>
    </div>
  );
};

 


export default Theater;