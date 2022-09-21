import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './App.css'


const App = () => (
  <div className="popup-container">
    <h1>welcome to page</h1>
    <form>
      <label>username</label>
      <br/>
      <input type="text" placeholder='enter username'/>
      <br/>
      <label>enter password</label>
      <br/>
      <input type="password" placeholder='enter password'/>
      <div className='button'>
      <button  className="trigger-button">
          login
        </button>

        <button  className="trigger-button">
          logout
        </button>
      </div>

    </form>
    <Popup
      modal
      trigger={
        <div className='button'>
          <p>new user</p>
         

           <button type="button" className="trigger-button">
        create new account
        </button>

        </div>

       

     
       
      }
    >
       {close => (
       <>
         <div>
          <form className='signupContainer' >
            <h1>Add new user details</h1>
          <label>Fullname</label>
          <br/>
         <input type="text" placeholder='enter username'/>
         <br/>
        <label>Email</label>
        <br/>
        <input type="email" placeholder='enter your email'/>
        <br/>
        <label>Mobile Number</label>
        <br/>
        <input type="text" placeholder='enter your mobile number'/>
        <br/>
        <label>Address</label>
        <br/>
        <textarea placeholder='enter your address' cols="80" rows="6">
         </textarea>
         <br/>
         <label>city</label>
        <br/>
        <input type="type" placeholder='enter your city'/>
        <br/>
        <label>state</label>
        <br/>
        <input type="type" placeholder='enter your state'/>
        <br/>
        <label>pincode</label>
        <br/>
        <input type="type" placeholder='enter your pincode'/>
        <br/>
        <label>country</label>
        <br/>
        <input type="type" placeholder='enter your country'/>
        <br/>
        <label>company name</label>
        <br/>
        <input type="type" placeholder='enter your companyname'/>
        <br/>
        <label>Occupation</label>
        <br/>
        <input type="type" placeholder='enter your Occupation'/>
        <br/>
        <label>year of experience</label>
        <br/>
        <input type="type" placeholder='year of experience'/>
        <br/>

        <div className="button">
          <button   type="button" className="trigger-button">add details</button>
        </div>


            
          </form>
           
         </div>
         <button
           type="button"
           className="trigger-button"
           onClick={() => close()}
         >
          back
         </button>
       </>
     )}
   </Popup>
 </div>
)
      
 export default App


