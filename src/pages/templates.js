import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';


function Templates() {

  const [data, setData] = React.useState([]); 
  const [templateFilters, settemplateFilters] = React.useState(false);
  const [activeTemplate, setActiveTemplate] = React.useState({});
  const [formValues, setformValues] = React.useState([]);
  const [referenceNumber, setreferenceNumber] = React.useState("");
  const [requestType, setrequestType] = React.useState("");

  const inputData = [
    {"template_details:added_on":"2021-12-10","template_details:description":"Information About Account Turnover","template_details:filters":[{"data_type":"textbox","display_name":"Account Number","name":"acct_no","operator":"RLIKE"},{"data_type":"textbox","display_name":"CNIC Number","name":"cnic","operator":"RLIKE"},{"data_type":"textbox","display_name":"Customer Number","name":"cust_id","operator":"RLIKE"}],"template_details:name":"Account turnover"},
    
    {"template_details:added_on":"2021-06-21","template_details:description":"Information about advance customer search","template_details:filters":[{"data_type":"textbox","display_name":"CNIC Number","name":"cnic","operator":"RLIKE"},{"data_type":"textbox","display_name":"Account Title","name":"account_title","operator":"RLIKE"},{"data_type":"textbox","display_name":"Old Account Number","name":"old_account_number","operator":"RLIKE"},{"data_type":"textbox","display_name":"Customer Id","name":"customer","operator":"RLIKE"},{"data_type":"textbox","display_name":"NTN","name":"ntn","operator":"RLIKE"}],"template_details:name":"Advance customer search"},
    
    {"template_details:added_on":"2021-12-09","template_details:description":"Auto Loan","template_details:filters":[],"template_details:name":"Auto loan"},
    
    {"template_details:added_on":"2021-11-25","template_details:description":"Bank Smart Accounts","template_details:filters":[{"data_type":"textbox","display_name":"Branch Code","name":"branch_code","operator":"RLIKE"},{"data_type":"textbox","display_name":"Account Number","name":"acct_no","operator":"RLIKE"},{"data_type":"textbox","display_name":"Account Title","name":"account_title","operator":"RLIKE"}],"template_details:name":"Bank smart accounts"},
    
    {"template_details:added_on":"2021-06-21","template_details:description":"All closed accounts information","template_details:filters":[{"data_type":"date","display_name":"From Date","name":"from_date","operator":"BETWEEN"},{"data_type":"date","display_name":"To Date","name":"to_date","operator":"BETWEEN"}],"template_details:name":"Closed accounts"},
    
    {"template_details:added_on":"2021-01-02","template_details:description":"Information about counter parties (Account Number)","template_details:filters":[{"data_type":"textbox","display_name":"Account Number","name":"acct_no","operator":"IN"}],"template_details:name":"Counter parties"},
    
    {"template_details:added_on":"2021-12-15","template_details:description":"Incorrect Dormancy Accounts","template_details:filters":[],"template_details:name":"Incorrect dormancy"},
    
    {"template_details:added_on":"2021-11-19","template_details:description":"KYC Missing Information","template_details:filters":[{"data_type":"textbox","display_name":"Branch Code","name":"branch_code","operator":"RLIKE"}],"template_details:name":"Kyc missing info"},
    
    {"template_details:added_on":"2021-11-01","template_details:description":"Letter Of Credit Search","template_details:filters":[{"data_type":"textbox","display_name":"LC Number","name":"id","operator":"RLIKE"},{"data_type":"textbox","display_name":"Customer Number","name":"cust_no","operator":"RLIKE"}],"template_details:name":"Letter credit search"},
    
    {"template_details:added_on":"2021-12-09","template_details:description":"Personal Loan","template_details:filters":[],"template_details:name":"Personal loan"},
    
    
    {"template_details:added_on":"2021-10-28","template_details:description":"PO/DD Report","template_details:filters":[{"data_type":"textbox","display_name":"Account Number","name":"acct_no","operator":"RLIKE"},{"data_type":"textbox","display_name":"PO/DD Number","name":"podd_no","operator":"RLIKE"},{"data_type":"textbox","display_name":"CNIC Number","name":"cnic","operator":"RLIKE"}],"template_details:name":"Podd report"},
    
    
    {"template_details:added_on":"2021-11-01","template_details:description":"Remittance Search Report For ATA","template_details:filters":[{"data_type":"textbox","display_name":"Remitter Search","name":"remitt_name","operator":"RLIKE"},{"data_type":"textbox","display_name":"Beneficiary Search","name":"bene_name","operator":"RLIKE"}],"template_details:name":"Remittance search"},
    
    {"template_details:added_on":"2021-10-28","template_details:description":"Counter party (Walkin CNIC Search)","template_details:filters":[{"data_type":"textbox","display_name":"CNIC Number","name":"cnic","operator":"IN"}],"template_details:name":"Walkin cnic search"}
  ];


  React.useEffect(() => {
    setData(inputData);
  }, []);

  function submit(){

    var filterValues = {};
    formValues.map(value => {
      filterValues[`${value.name}`] = {value:[formValues.filter(field => field.name == value.name)[0].value], operator: "RLIKE"}
    })
    var templateJson = {
      usr_lg:{req_name: activeTemplate["template_details:name"],"req_dt":"20211216125430","usr_name":"s.naqvi","req_type":"template_request","request_referenceNo":referenceNumber,"req_recieved_from":requestType},
      temp_qry_fil: filterValues,
    };
    console.log(templateJson);
    settemplateFilters(false);
    setformValues([]);
    setreferenceNumber("");
    setrequestType("");

  }

  function handleSearch(event){ 

    const value = event.target.value;
    if(value != ""){
      setData(inputData.filter(template => template["template_details:name"].toLowerCase().startsWith(value.toLowerCase())))
    } else{
      setData(inputData);
    }

  }

  function handleInputChange(event) {

    const value = event.target.value;
    const name = event.target.name;
    var check = false;
    formValues.forEach(element => {
      if(element.name == name){
        element.value = value;
        check = true;
      }
    });
    if(!check){
      setformValues(prevArray => [...prevArray, {name: name, value: value}]);
    }
    
  }

  function openTemplate(template){

    setActiveTemplate(template);
    settemplateFilters(true);
  
  }

    return (
      
      <div class='w-full h-screen'>

        <Sidebar />
        <div class='content w-full h-auto min-h-screen'>
            <Header page="Templates" />
            <div className='content-body px-12 py-6'>
                <div class="ui search w-1/2">
                    <div class="ui icon h-12 input w-full">
                        <input class="prompt" type="text" placeholder="Search Template" onChange={(event) => handleSearch(event)}/>
                        <i class="search icon"></i>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                  { data ?
                    data.map((template) => {
                      return (
                      <div onClick={() => openTemplate(template)} class="card rounded-2xl cursor-pointer text-white bg-white zoomIn">
                        <div class="card-body pl-5">
                          <div class="fs-4 fw-semibold text-blue">{template["template_details:name"]}</div>
                          <div className='pb-2 border-b text-black mt-1'>{template["template_details:description"]}</div>
                          <p class="mt-5 bg-blue-dark text-white px-2 py-1 w-1/4 text-center rounded-lg">{template["template_details:added_on"]}</p>
                        </div>
                      </div>
                    )})
                  : null}
                  { templateFilters ? 
                  <div id="account-turnover" className='absolute top-0 right-0 bg-white p-16 w-1/3 h-screen overflow-y-auto z-50 shadow-lg slideLeft'>
                    <p className='text-lg font-medium'>{activeTemplate["template_details:name"]}</p>
                    {activeTemplate["template_details:filters"] ?
                      activeTemplate["template_details:filters"].map((filter) =>{
                        return (
                          <div className="mt-4">
                            <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">{filter.display_name}</label>
                            <input className="form-control w-4/5" id="exampleFormControlInput1" type={filter.data_type} name={filter.name} placeholder={filter.display_name} onChange={(event)=> handleInputChange(event)} />
                          </div>
                        )})
                    : null}
                    <div className="mt-4">
                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Request Reference Number</label>
                      <input className="form-control w-4/5" id="exampleFormControlInput1" type="email" placeholder="Enter Reference Number" value={referenceNumber} onChange={(event) => setreferenceNumber(event.target.value)} />
                    </div>
                    <div className="mt-4">
                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Request Type</label>
                      <select className="form-select w-4/5" aria-label="Default select example" value={requestType} onChange={(event) => setrequestType(event.target.value)}>
                        <option selected>Open this select menu</option>
                        <option value="SBP">SBP</option>
                        <option value="FIA">FIA</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className='flex justify-start'>
                      <button onClick={submit} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-5 new-btn focus:outline-none mr-2'
                        >Submit
                      </button>
                      <button onClick={()=>settemplateFilters(false)} className='ml-1 w-24 bg-blue py-2 text-white text-base rounded-lg mt-5 new-btn focus:outline-none mr-2'
                        >Cancel
                      </button>
                    </div>     

                  </div>  : null}
                </div>
            </div>
        </div>
       
      </div>

    );
  }
  
export default Templates;


