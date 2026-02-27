import { useState } from "react";
import "./dropdown.css"

 function Dropdown({
     lable,
  options,
  defaultValue,
  hideDropDown,
 
  
  
  

  
  


}) {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);
 

  return (
   
       <div className="dropdown">
      <div
        className="trigger"
        onClick={() => setOpen(!open)}
      >
        {lable}: <b style={{fontSize:"13px"}}>{selected}</b>
      </div>

      {open && (
        <div className="menu">
          {options.map((item) => (
            <div
              key={item}
              className={`option ${selected === item ? "active" : ""}`}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
            >
            {item}
            </div>
          ))}
        </div>
      )}
    </div>

   
   
  );
}


export default Dropdown