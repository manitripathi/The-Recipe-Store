import React,{useState} from "react";
import "./HeaderNavbar.css";

function HeaderNavbar() {

  const [search, setSearch] = useState("");

  const inputChange=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  


  return (
    <div className="HeaderNavbar">
      <div className='MainHeader'>
        <div className="RecipestoreName">
          <div className="The">The</div>
          <div className="RecipeStore">Recipe Store</div>
        </div>
        {/* <div className='locationInputField common'>
            <i className="fi fi-rr-marker"></i>
            <input type='text' placeholder='Delhi, India'></input>
            <div><i className="fi fi-rr-caret-down"></i></div>
        </div> */}
        <div className='SearchBar common'>
            <button><i className="fi fi-rr-search"></i></button>
            <input type='text' value='' placeholder='Search for restaurant/dish' value={search}
              onChange={inputChange}>
            {/* <div className='searchIcon'><i className="fi fi-rr-search"></i></div> */}
            {/* <div>Search for restaurant, cuisine or a dish</div> */}
            </input>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavbar;
