import * as React from 'react';
import './Theater.scss'; 
import MapImage from '../assets/conference-map.svg';
import TableConfig from './tableConfig.json';
import {auth} from '../services/firebase'
import {connect} from 'react-redux'

const Theater = ({imageUrl}) => {

  const [imageURL, setImageURL] = React.useState("");

  const firstTable = TableConfig.tables[0];
    

  function handleClick()
  {
    setImageURL(imageUrl);
  }

  return ( 
    <div className='remo-theater' style={{width: TableConfig.width, height: TableConfig.height}}>
      <div className='rt-app-bar'>
        {
           
        }
        <a href='javascript:;'>Logout</a>
      </div>
      <div className='rt-rooms'>
        <div onClick = {handleClick} className='rt-room' style={{width: firstTable.width, height: firstTable.height, top: firstTable.y, left: firstTable.x}}>
          <img src={imageURL} alt="No Image"></img>
          <div className='rt-room-name'>{firstTable.id}
          
          </div>
        </div>
      </div>
      <div className='rt-background'>
        <img src={MapImage} alt='Conference background'/>
      </div>
    </div>
  );
};

 

const mapStateToProps = ({user}) => (
  {
      currentUser : user.currentUser,
      imageUrl : user.imageUrl
  }
)

export default connect(mapStateToProps)(Theater);