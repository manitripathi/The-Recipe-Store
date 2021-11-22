import React from 'react';
import './NearbyStores.css';
import StoreImg from './store-img.jpg';

export default function NearbyStores(){
    const stores=[
        {id:1, 
            src:<img src={StoreImg} alt=''></img>, 
            name: 'Store1',discount:20},
        {id:2, src:<img src={StoreImg} alt=''></img>, name: 'Store2',discount:40},
        {id:3, src:<img src={StoreImg} alt=''></img>, name: 'Store3',discount:50},
        {id:4, src:<img src={StoreImg} alt=''></img>, name: 'Store4',discount:60},
        {id:5, src:<img src={StoreImg} alt=''></img>, name: 'Store5',discount:45},
    ]

    

  {/* {stores.filter(discountValue => discountValue.discount > 45).map(filteredDiv => (
      <div>
    <div>{filteredDiv.discount}</div>
                  <div className='stores-list'>{filteredDiv.img}</div>
                  <div>{filteredDiv.name}</div>
                  </div>
  ))} */}

    return (
        <div className='mainDiv'>
        {/* <div>
          <div>Filter</div>
          <div>
          <div>Discount:</div>
          <div>
              <button>Above 45</button>
              <input type='checkbox' value='' ></input> */}
            {/*   {stores.filter(discountValue => discountValue.discount >= 45).map(filteredDiv => (
      <div>
    <div>{filteredDiv.discount}</div>
                  <div className='stores-list'>{filteredDiv.img}</div>
                  <div>{filteredDiv.name}</div>
                  </div>
  ))} */}
              {/* <input type='checkbox' value=''></input> */} 
              {/* </div>
          <div>No discount</div>
          </div>
      </div> */}
            <div className='storeDiv'>
      {stores.map((item,index)=>{
          return(
              <div>
              <div className='store-name'>{item.name}</div>
              <div className='discount'>{item.discount+'%'}</div>
                  <div className='stores-list'>{item.src}</div>
                  
                  
              </div>
          )
      }
        
      )}
      </div>
        </div>
    );
}