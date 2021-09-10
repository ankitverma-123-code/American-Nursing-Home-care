

import "./css/style.css"
import React,{useState} from "react";
import './form.css';



function Form() {
  const [data,setData]=useState(
    {name : "",
    email: "",
    message: "",

      

    }
  );
  const {name,email,message}=data;

  const handleChange= (e)=>
  {
     setData({...data,[e.target.name]:e.target.value})
  };
  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    try{
      const response= await fetch("https://v1.nocodeapi.com/ankitverma_321/google_sheets/IagXxiMSLsXraHov?tabId=Sheet1",
        {
          method: 'POST',
          headers:{
             'Content-Type': 'application/json'
          },
          body: JSON.stringify([[name,email,message,new Date().toLocaleString()]])
        }
      );


      await response.json;
      setData({...data,name: "",email: "",message: ""})
    }
    catch(err){
      console.log(err);
    }
  };
  return (
    <div class="wrapper">
			<div class="inner">
				<form onSubmit={handleSubmit}>
					<h3>Inquiry Form</h3>
					<p>we are heartly welcome your queries regarding anything related to our services.</p>
					<label class="form-group">
                <input 
                type="text" 
                className="form-control"

                name="name"
          
              autocomplete="off"
              required value={name}
                onChange={handleChange}
                />
                <span>Your Name</span>
                <span class="border"></span>
					</label>

					<label class="form-group">
              <input 
                type="text" 
                className="form-control"

                name="email"
          
              autocomplete="off"
              required value={email}
                onChange={handleChange}
                />
                <span>Your Mobile No</span>
                <span class="border"></span>
					</label>
					<label class="form-group" >
					
					</label>
          <label class="form-group">
              <textarea 
                type="text" 
                className="form-control"

                name="message"
          
              autocomplete="off"
              required value={message}
                onChange={handleChange}
                />
                <span>Which Service you want</span>
                <span class="border"></span>
            </label>
					<button>Submit 
						<i class="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
    
  );
}

export default Form;
