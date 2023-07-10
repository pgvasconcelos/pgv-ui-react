import { useLocation } from "react-router-dom";
import { useState } from 'react'

import {  useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

function DropDown() {
    const types = ["Design", "Development", "Business"];
    const [selectedValue, setSelectedValue] = useState('')

    const router = useLocation()
    const options = types.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))

      let [searchParams] = useSearchParams();

      useEffect(()=> {
  
          async function GetURLParams(){
              const query = searchParams.get('selected')
             
              setSelectedValue(query)
          }
          GetURLParams()
       
      }, [])
  

    

      const onSelect = (event) => {
        const value = event.target.value.trim();
 
         const search = value

       
        // console.log(selectedValue)

         window.location.replace(`${router.pathname}?selected=${search}`);

    };

   
    
   
    return (
        
      <select className=" flex text-dark-green font-semibold focus:border-gray   active:border-gray focus-visible:ring-1 focus-within:border-gray focus-within:ouline-none p-2 text-lg " 
      value={selectedValue}
       onChange={onSelect}>
                <option value="all"> ______________ </option>

        {options}
      </select>

    );
}
export default DropDown;
