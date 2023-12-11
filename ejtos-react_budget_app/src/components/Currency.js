import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$ Dollar">$ Dollar</option>
        <option value="£ Pound">£ Pound</option>
        <option value="€ Euro">€ Euro</option>
        <option value="₹ Ruppee">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;