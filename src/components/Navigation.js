import pic from './images/logo.png'
import '../App.css';

function Navigation(){
    return (
      <nav>
         <div className='logo'>
          <img src={pic} alt="logo"/> 
         </div>

         <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
      </nav>
    );
};

export default Navigation;