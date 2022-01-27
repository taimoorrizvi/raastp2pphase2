import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';


function Send() {

  const [send_008, setsend_008] = React.useState([]);
  const [send_008ToShow, setsend_008ToShow] = React.useState([]);
  const [activeFilter, setactiveFilter] = React.useState("ID");
  const [isActive, setIsActive] = React.useState("Pending Requests");
  const [viewResponse, setviewResponse] = React.useState(false);
  const [showdocument, setshowdocument] = React.useState(false);
  const [id, setid] = React.useState("");
  const [dttm, setdttm] = React.useState("");
  const [msgID, setmsgID] = React.useState("");
  const [postReqID, setpostReqID] = React.useState("");
  const [receiver, setreceiver] = React.useState("");
  const [requestType, setrequestType] = React.useState("");
  const [sender, setsender] = React.useState("");
  const [status, setstatus] = React.useState("");
  const [traceReference, settraceReference] = React.useState("");
  const [documents, setdocuments] = React.useState("");
  const [documentToShow, setdocumentToShow] = React.useState("");
  

  React.useEffect(() => {
    axios.get('/getPac008Send', {
        headers: {
          'Content-Type': 'application/json',
        },
    }).then(res => {
      setsend_008(res.data["data"]);
      setsend_008ToShow(res.data["data"]);
    });         
   }, []);


  function refresh(){
    document.getElementById("refresh").classList.add("refresh");
    setInterval(() => {
      document.getElementById("refresh").classList.remove("refresh");
    }, 3000);
  }

  function handleSearch(event){ 

    const value = event.target.value;
    if(value != ""){
      setsend_008ToShow(send_008.filter(template => template[`${activeFilter}`].toString().toLowerCase().startsWith(value.toLowerCase())))
    } else{
      setsend_008ToShow(send_008);
    }

  }

  function getPac002Recieve(messageID){
    axios.get("/getPac002Recieve",
      { 
        params: {
          messageID : messageID, 
        }}
      ).then(res => {
          var recive_002 = res.data["data"][0];
          setid(recive_002.ID);
          setdttm(recive_002.dttm);
          setmsgID(recive_002.msgID);
          setpostReqID(recive_002.postReqID);
          setreceiver(recive_002.reciever);
          setrequestType(recive_002.requestType);
          setsender(recive_002.sender);
          setstatus(recive_002.status);
          settraceReference(recive_002.traceReference);
          setdocuments(recive_002.document);
      });
      setviewResponse(true); 
  }

  function showDocument(document){

    setdocumentToShow(document);
    setshowdocument(true); 

  }

    return (
      
      <div className='w-full h-screen'>

        <Sidebar />
        <div className='content w-full h-full'>
            <Header page="My Requests" />
            <div className='content-body px-12 py-6'>
              <div className='w-full bg-white rounded-lg p-10'>
                {/* <div className='flex justify-end'>
                  <img id="refresh" onClick={refresh} className='w-8 h-auto cursor-pointer' src="Refresh_icon.png" alt="Refresh Icon" />
                </div> */}
                <div className='grid grid-cols-1 mt-4'>
                  <div onClick = {() => setIsActive("Pending Requests")} className={ isActive == "Pending Requests" ? 'w-full cursor-pointer transition duration-200 px-2 pt-3 bg-gray shadow-sm' : 'w-full cursor-pointer transition duration-200 px-2 pt-3'}>
                    <h2 className='text-center text-lg text-blue border-b pb-2'>Sent Requests</h2>                    
                  </div>
                  {/* <div onClick = {() => setIsActive("Completed Requests")}  className={ isActive == "Completed Requests" ? 'w-full cursor-pointer transition duration-200 px-2 pt-3 bg-gray shadow-sm' : 'w-full cursor-pointer transition duration-200 px-2 pt-3'}>
                    <h2 className='text-center text-lg text-blue border-b pb-2'>Completed Requests</h2>                    
                  </div> */}
                </div>

                  { isActive == "Pending Requests" ? 
                  <div className='flex flex-col shadow-md p-4 max-h-96 overflow-y-auto'>
                    {/* <h2 className='text-blue text-center text-2xl pb-3 border-b'>Pending Requests</h2> */}
                    <div className='grid grid-cols-2'>
                      <div class="ui search">
                        <div class="ui icon h-12 input w-full">
                            <input class="border-fix" type="text" placeholder="Search Messages" onChange={(event) => handleSearch(event)}/>
                            <i class="search icon"></i>
                        </div>
                      </div>
                      <div>
                      <div className='ml-4 pt-2'>
                        <select className="form-select w-auto text-gray-500" aria-label="Default select example" value={activeFilter} onChange={event=> setactiveFilter(event.target.value)}>
                          <option value="ID">by ID</option>
                          <option value="msgID">by msgID</option>
                        </select> 
                      </div>
                      </div>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          {/* <th scope="col">No.</th> */}
                          <th scope="col">ID</th>
                          <th scope="col">dttm</th>
                          <th scope="col">msgID</th>
                          <th scope="col">postReqID</th>
                          <th scope="col">receiver</th>
                          <th scope="col">requestType</th>
                          <th scope="col">sender</th>
                          <th scope="col">status</th>
                          <th scope="col">traceReference</th>
                          <th scope="col">document</th>
                          <th scope="col">recieved</th>
                        </tr>
                      </thead>
                      <tbody>
                        {send_008ToShow ? send_008ToShow.map((request, index) => {
                          return (
                            <tr key={index} className="table-info">
                              {/* <th scope="row">{index + 1}</th> */}
                              <td>{request["ID"]}</td>
                              <td>{request["dttm"]}</td>
                              <td>{request["msgID"]}</td>
                              <td>{request["postReqID"]}</td>
                              <td>{request["receiver"]}</td>
                              <td>{request["requestType"]}</td>
                              <td>{request["sender"]}</td>
                              <td>{request["status"]}</td>
                              <td>{request["traceReference"]}</td>
                              <td><button onClick = {() => showDocument(request['document'])} className='p-2 bg-yellow-400 text-white rounded-lg cursor-pointer'>Show</button></td>
                              <td><button onClick = {() => getPac002Recieve(request['msgID'])} className='p-2 bg-green-400 text-white rounded-lg cursor-pointer'>View</button></td>
                            </tr>
                          ) } ) : null }
                      </tbody>
                    </table>
                  </div> : null}
                  { viewResponse ? 
                  <div className='absolute top-0 right-0 bg-white p-16 w-1/3 h-screen overflow-y-auto z-50 shadow-lg slideLeft'>
                    <div className='w-full flex justify-end'>
                      <i onClick={()=>setviewResponse(false)} className="fas fa-times text-xl cursor-pointer text-black"></i>
                    </div>   
                    <p className='text-lg text-black font-medium'>Recieved Message</p>
                    <ul className="mt-8 text-black font-medium">
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>ID:</p><span className='text-gray-500 font-normal ml-4'>{id}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>dttm: </p><span className='text-gray-500 font-normal ml-4'>{dttm}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>msgID: </p><span className='text-gray-500 font-normal ml-4'>{msgID}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>postReqID: </p><span className='text-gray-500 font-normal ml-4'>{postReqID}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>receiver: </p><span className='text-gray-500 font-normal ml-4'>{receiver}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>requestType: </p><span className='text-gray-500 font-normal ml-4'>{requestType}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                       <p className='w-1/5'>sender: </p><span className='text-gray-500 font-normal ml-4'>{sender}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>status: </p><span className='text-gray-500 font-normal ml-4'>{status}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>traceReference: </p><span className='text-gray-500 font-normal ml-4'>{traceReference}</span>
                      </li>
                      <li className='w-full flex flex-row'>
                        <p className='w-1/5'>document: </p><span className='text-gray-500 font-normal ml-10 h-40 overflow-y-auto'>{documents}</span>
                      </li>
                    </ul>
                  </div>  : null}
                  { showdocument ?
                      <div className='absolute left-1/3 top-1/3 bg-white p-16 w-1/3 h-auto overflow-y-auto z-50 shadow-lg zoomIn'>
                        <div className='w-full flex justify-end'>
                          <i onClick={()=>setshowdocument(false)} className="fas fa-times text-xl cursor-pointer text-black"></i>
                        </div>   
                        <p className='text-lg text-black font-medium'>document:</p>
                        <ul className="mt-8 text-black font-medium">
                          <li className='w-full flex flex-row'>
                            <span className='text-gray-500 font-normal h-40 overflow-y-auto'>{documentToShow}</span>
                          </li>
                        </ul>
                      </div>   
                  : null}
              </div>
            </div>
        </div>
       
      </div>

    );
  }
  
export default Send;