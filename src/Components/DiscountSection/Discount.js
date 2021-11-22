import React from 'react';
import StoreImg from '../NearbyStores/store-img.jpg';
import './Discount.css';

export default function Discountsection(){
    const stores=[
        {id:1, img:<img src={StoreImg} alt=''></img>, name: 'Store1',discount:20},
        {id:2, img:<img src={StoreImg} alt=''></img>, name: 'Store2',discount:40},
        {id:3, img:<img src={StoreImg} alt=''></img>, name: 'Store3',discount:50},
        {id:4, img:<img src={StoreImg} alt=''></img>, name: 'Store4',discount:60},
        {id:5, img:<img src={StoreImg} alt=''></img>, name: 'Store5',discount:45},
    ]

    return (
        <div className='mainDiv1'>
        
              {stores.filter(discountValue => discountValue.discount >= 45).map(filteredDiv => (
      <div>
      <div className='store-name1'>{filteredDiv.name}</div>
    <div className='discount1'>{filteredDiv.discount+'%'}</div>
                  <div className='stores-list1'>{filteredDiv.img}</div>
                  
                  </div>
  ))}
            
                  
              </div>
          )
}
        
     