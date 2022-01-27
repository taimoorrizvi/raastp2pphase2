import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from "axios";


function Custom() {

  const [username, setusername] = React.useState(""); 
  const [department, setdepartment] = React.useState("");
  const [requestSubject, setrequestSubject] = React.useState("");
  const [priority, setpriority] = React.useState("");
  const [deliveryDate, setdeliveryDate] = React.useState("");
  const [email, setemail] = React.useState("");
  const [description, setdescription] = React.useState("");

  function submitCustomRequest(){

    // if(username != "" || department != "" || requestSubject != "" || priority != "" || deliveryDate != "" || email != "" || description != ""){

      var customRequest = {
        usr_lg:{usr_name:"s.naqvi",req_type:"custom_request",department:department,req_dt:"20211216162329",email:email,req_name:requestSubject},custom_req:{priority:priority,details:description,encoded_file_data:null}
      }
      axios.post('api/custom_requests', {
        headers: { "content-type": "application/json" },
        body: JSON.stringify(customRequest),
        }).then(res=>{
        console.log(res.data);
      })
      
    // }

  }

  // http://172.24.121.30:8000

    return (
      
      <div class='w-full h-screen'>

        <Sidebar />
        <div class='content w-full h-full'>
            <Header page="Custom Requests" />
            <div className='content-body px-12 py-6'>
              <div className='w-full bg-white rounded-lg p-10'>
                <div className='fadeRight'>
                    <h2 className='text-black text-2xl'>Please Provide Details of Data Extraction Requirements</h2>
                    <div className='w-3/5 grid grid-cols-3 gap-4 mt-5'>
                      <div className="">
                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Username</label>
                        <input className="form-control" id="exampleFormControlInput1" type="name" placeholder="Enter Username" value={username} onChange={event => setusername(event.target.value)} />
                      </div>
                      <div className="">
                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Department</label>
                        <input className="form-control" id="exampleFormControlInput1" type="text" placeholder="Enter Department" value={department} onChange={event => setdepartment(event.target.value)} />
                      </div>
                      <div className="">
                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Request Subject</label>
                        <input className="form-control" id="exampleFormControlInput1" type="text" placeholder="Enter Request Subject" value={requestSubject} onChange={event => setrequestSubject(event.target.value)} />
                      </div>
                      <div className="">
                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Priority</label>
                        <input className="form-control" id="exampleFormControlInput1" type="text" placeholder="Enter Priority" value={priority} onChange={event => setpriority(event.target.value)} />
                      </div>
                      <div className="">
                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Expected Delivery Date</label>
                        <input className="form-control" id="exampleFormControlInput1" type="date" placeholder="Enter Expected Delivery Date" value={deliveryDate} onChange={event => setdeliveryDate(event.target.value)} />
                      </div>
                      <div className="">
                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Email</label>
                        <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="Enter Email" value={email} onChange={event => setemail(event.target.value)} />
                      </div>
                    </div>
                    <div className="w-3/5 mt-3">
                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={event => setdescription(event.target.value)}></textarea>
                    </div>
                    <div class="input-group mt-4 w-3/5">
                      <label class="input-group-text" for="inputGroupFile01">Upload</label>
                      <input class="form-control" id="inputGroupFile01" type="file" />
                    </div>
                    
                    <button onClick={submitCustomRequest} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-5 new-btn focus:outline-none'
                    >Submit
                    </button>
                </div>
              </div>
            </div>
        </div>
       
      </div>

    );
  }
  
export default Custom;


