import React,{useState,useEffect} from 'react'
import './Navbar.css';
function Navbar() {
    const [scrolled ,setscrolled]=useState(false);
    const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
 };
    useEffect(()=>
    {
        function handlescroll()
        {
            if(window.scrollY>100)
            {
                setscrolled(true)
            }
            else{
                setscrolled(false)
            }
        }
        window.addEventListener("scroll",handlescroll);
        return ()=> window.removeEventListener("scroll",handlescroll);
    },[]);
  return (
    <header>
        <div className={`header-content ${scrolled && "scrolled"}`}>
            <img className='logo' src="logo.png" height="80px"  />
                    
            <img className="profile" src="profile.png" height="40px"/>
        </div>
    </header>
  )
}

export default Navbar