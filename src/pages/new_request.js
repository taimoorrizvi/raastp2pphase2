import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { CCollapse, CButton, CCard, CCardBody } from '@coreui/react';


function New_request() {

  // Required Fileds
  const [customerDetails, setCustomerDetails] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState(false);
  const [transDetails, setTransDetails] = React.useState(false);

  const [isActive, setIsActive] = React.useState("customer");
  
  // Customer Details Accordian
  const [visible1, setVisible1] = React.useState(true);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);

  //Customer Details Filters
  const [customerDetailsAll, setCustomerDetailsAll] = React.useState(true);
  const [customerIDFilter, setcustomerIDFilter] = React.useState(false);
  const [customerIDField, setcustomerIDField] = React.useState("");
  const [customerCNICFilter, setcustomerCNICFilter] = React.useState(false);
  const [customerCNICField, setcustomerCNICField] = React.useState("");
  const [customerSectorFilter, setcustomerSectorFilter] = React.useState(false);
  const [customerSectorField, setcustomerSectorField] = React.useState("");
  const [customerExpiryFilter, setcustomerExpiryFilter] = React.useState(false);
  const [customerExpiryFilterType, setcustomerExpiryFilterType] = React.useState("Range");
  const [customerExpiryFieldFrom, setcustomerExpiryFieldFrom] = React.useState("");
  const [customerExpiryFieldTo, setcustomerExpiryFieldTo] = React.useState("");
  const [customerExpiryFieldDate, setcustomerExpiryFieldDate] = React.useState("");
  const [customerExpiryFieldCondition, setcustomerExpiryFieldCondition] = React.useState("Greater");
  const [customerSegmentFilter, setcustomerSegmentFilter] = React.useState(false);
  const [customerSegmentField, setcustomerSegmentField] = React.useState("");
  const [pep, setpep] = React.useState(false);
  const [pepField, setpepField] = React.useState("YES");

  // Customer Basic Information
  const [CBIcustomerID, setCBIcustomerID] = React.useState(false);
  const [CBIcustomerCNIC, setCBIcustomerCNIC] = React.useState(false);
  const [CBIcustomerName, setCBIcustomerName] = React.useState(false);
  const [CBIfatherName, setCBIfatherName] = React.useState(false);
  const [CBIcnicExpiry, setCBIcnicExpiry] = React.useState(false);

  // Customer KYC
  const [kycOccupation, setkycOccupation] = React.useState(false);
  const [kycCustomerIncome, setkycCustomerIncome] = React.useState(false);
  const [kycEmplyerName, setkycEmplyerName] = React.useState(false);
  const [kycEmployerAddress, setkycEmployerAddress] = React.useState(false);
  const [kycCustomerSegment, setkycCustomerSegment] = React.useState(false);
  const [kycCity, setkycCity] = React.useState(false);
  const [kycCountry, setkycCountry] = React.useState(false);
  const [kycAnnualTurnover, setkycAnnualTurnover] = React.useState(false);
  const [kycNOB, setkycNOB] = React.useState(false);
  const [kycIncomeLevel, setkycIncomeLevel] = React.useState(false);
  const [kycPEP, setkycPEP] = React.useState(false);
  const [kycSourceIncome, setkycSourceIncome] = React.useState(false);
  const [kycBusnessName, setkycBusnessName] = React.useState(false);
  const [kycCustomerType, setkycCustomerType] = React.useState(false);
  const [kycFilerStatus, setkycFilerStatus] = React.useState(false);

  // Customer Demographic
  const [CDcustomerAge, setCDcustomerAge] = React.useState(false);
  const [CDcustomerGender, setCDcustomerGender] = React.useState(false);
  const [CDcustomerAddress, setCDcustomerAddress] = React.useState(false);
  const [CDpermanentAddress, setCDpermanentAddress] = React.useState(false);
  const [CDmobile, setCDmobile] = React.useState(false);

  // Product Details Accordian
  const [visible5, setVisible5] = React.useState(true);
  const [visible6, setVisible6] = React.useState(false);
  const [visible7, setVisible7] = React.useState(false);
  const [visible8, setVisible8] = React.useState(false);

  //Product Details Filters
  const [productDetailsAll, setproductDetailsAll] = React.useState(true);
  const [productCategoryFilter, setproductCategoryFilter] = React.useState(false);
  const [productCategoryField, setproductCategoryField] = React.useState("T");
  const [casaProductType, setcasaProductType] = React.useState("");
  const [accountNumberFilter, setaccountNumberFilter] = React.useState(false);
  const [accountNumberField, setaccountNumberField] = React.useState("");
  const [accountStatusFilter, setaccountStatusFilter] = React.useState(false);
  const [accountStatusField, setaccountStatusField] = React.useState("");
  const [accountOpenDateFilter, setaccountOpenDateFilter] = React.useState(false);
  const [accountOpenDateFieldFrom, setaccountOpenDateFieldFrom] = React.useState("");
  const [accountOpenDateFieldTo, setaccountOpenDateFieldTo] = React.useState("");
  const [accountOpenDateFieldDate, setaccountOpenDateFieldDate] = React.useState("");
  const [accountOpenDateFieldCondition, setaccountOpenDateFieldCondition] = React.useState("Greater");
  const [accountBalanceFilter, setaccountBalanceFilter] = React.useState(false);
  const [accountBalanceFilterType, setaccountBalanceFilterType] = React.useState("Range");
  const [accountBalanceFieldFrom, setaccountBalanceFieldFrom] = React.useState("");
  const [accountBalanceFieldTo, setaccountBalanceFieldTo] = React.useState("");
  const [accountBalanceFieldDate, setaccountBalanceFieldDate] = React.useState("");
  const [accountBalanceFieldCondition, setaccountBalanceFieldCondition] = React.useState("Greater");
 
  

  // Product Details  
  const [PDaccountNumber, setPDaccountNumber] = React.useState(false);
  const [PDaccountTitle, setPDaccountTitle] = React.useState(false);
  const [PDaccountOpenDate, setPDaccountOpenDate] = React.useState(false);
  const [PDaccountCategory, setPDaccountCategory] = React.useState(false);
  const [PDproductName, setPDproductName] = React.useState(false);
  const [PDaccountStatus, setPDaccountStatus] = React.useState(false);
  const [PDaccountBalances, setPDaccountBalances] = React.useState(false);
  const [PDcreditLimit, setPDcreditLimit] = React.useState(false);

  // Account KYC  
  const [AKtransactionLimit, setAKtransactionLimit] = React.useState(false);
  const [AKcurrency, setAKcurrency] = React.useState(false);
  const [AKbranchCode, setAKbranchCode] = React.useState(false);
  const [AKbranchName, setAKbranchName] = React.useState(false);

  // Account Summary  
  const [ASaccountNumber, setASaccountNumber] = React.useState(false);
  const [ASaccountStatus, setASaccountStatus] = React.useState(false);
  const [ASaccountCategory, setASaccountCategory] = React.useState(false);
  const [AScurrentBalance, setAScurrentBalance] = React.useState(false);

  // Product Details Accordian
  const [visible9, setVisible9] = React.useState(true);
  const [visible10, setVisible10] = React.useState(true);
  const [visible11, setVisible11] = React.useState(false);


   //Transaction Details Filters
   const [transactionDetailsAll, settransactionDetailsAll] = React.useState(true);
   const [transactionChannelFilter, settransactionChannelFilter] = React.useState(false);
   const [transactionChannelField, settransactionChannelField] = React.useState("");
   const [transactionTypeFilter, settransactionTypeFilter] = React.useState(false);
   const [transactionTypeField, settransactionTypeField] = React.useState("");


  //  Transaction Date
  const [TDdateFrom, setTDdateFrom] = React.useState(false);
  const [TDdateTo, setTDdateTo] = React.useState(false);
  
  // Transaction Type
  const [TDtransactionType, setTDtransactionType] = React.useState(false);
  const [TDtransactionChannel, setTDtransactionChannel] = React.useState(false);
  const [TDtransactionAmount, setTDtransactionAmount] = React.useState(false);
  const [TDtransactionDate, setTDtransactionDate] = React.useState(false);
  const [TDmerchantName, setTDmerchantName] = React.useState(false);


  // Submit Request
  const [subjectTitle, setsubjectTitle] = React.useState("");
  const [referenceNumber, setreferenceNumber] = React.useState("");
  const [requestType, setrequestType] = React.useState("");



    function next(){
      if(customerDetails || productDetails || transDetails){
        document.getElementById("first-stage").classList.add("hidden");
        document.getElementById("second-stage").classList.remove("hidden");
        if(!customerDetails){
          if(productDetails){
            setIsActive("product");
          } else {
            setIsActive("transaction");
          }
        }
      } else{
        alert("Please select the field below")
      }
    }




    function checkCustomerBasic(){
      if(CBIcnicExpiry || CBIcustomerCNIC || CBIcustomerID || CBIcustomerName || CBIfatherName){
        return true;
      } else{
        return false;
      }
    }

    function checkCustomerKYC(){
      if(kycEmployerAddress || kycEmplyerName || kycFilerStatus || kycIncomeLevel || kycNOB || kycOccupation || kycPEP || kycSourceIncome || kycBusnessName || kycCity || kycCountry || kycCustomerIncome || kycCustomerSegment || kycCustomerType || kycAnnualTurnover){
        return true;
      } else{
        return false;
      }
    }

    function checkCustomerDemographics(){
      if(CDmobile || CDpermanentAddress || CDcustomerAddress || CDcustomerAge || CDcustomerGender){
        return true;
      } else{
        return false;
      }
    }

    function checkCustomerDetails(){

      if(customerDetails){
        if(checkCustomerBasic() || checkCustomerDemographics() || checkCustomerKYC()){
          if(!customerDetailsAll){
            if(customerIDFilter || customerCNICFilter || customerExpiryFilter || customerSectorFilter || customerSegmentFilter || pep){
              return true;
            } else{
              alert("Please select any filter option from customer details.");
              return false;
            }
          } else{
            return true;
          }
        } else{
          alert("Please select atleast one column from customer details.");
          return false;
        }
      } else{
        return false;
      }

    }





    function checkproductDetails(){
      if(PDcreditLimit || PDproductName || PDaccountBalances || PDaccountCategory || PDaccountOpenDate || PDaccountStatus || PDaccountTitle || PDaccountNumber){
        return true;
      } else{
        return false;
      }
    }

    function checkAccountKYC(){
      if(AKbranchCode || AKbranchName || AKcurrency || AKtransactionLimit ){
        return true;
      } else{
        return false;
      }
    }

    function checkAccountSummary(){
      if(ASaccountCategory || ASaccountNumber || ASaccountStatus || AScurrentBalance ){
        return true;
      } else{
        return false;
      }
    }

    function checkProductDetails(){

      if(productDetails){
        if(checkproductDetails() || checkAccountKYC() || checkAccountSummary()){
          if(!productDetailsAll){
            if(accountNumberFilter || accountOpenDateFilter || accountStatusFilter || accountBalanceFilter || productCategoryFilter){
              return true;
            } else{
              alert("Please select any filter option from product details.");
              return false;
            }
          } else{
            return true;
          }
        } else{
          alert("Please select atleast one column from product details.");
          return false;
        }
      } else{
        return false;
      }

    }




    function checkTransactionDate(){
      if(TDdateFrom == "" || TDdateTo == "" ){
        alert("Please select any date from transaction date.");
        return false;
      } else{
        return true;
      }
    }

    function checkTransactionType(){
      if(TDtransactionAmount || TDtransactionChannel || TDtransactionDate || TDtransactionType || TDmerchantName ){
        return true;
      } else{
        alert("Please select atleast one column from transaction details.");
        return false;
      }
    }

    function checkTransDetails(){

      if(transDetails){
        if(checkTransactionDate() && checkTransactionType()){
          if(!transactionDetailsAll){
            if(transactionTypeFilter || transactionChannelFilter){
              return true;
            } else{
              alert("Please select any filter option from transaction details.");
              return false;
            }
          } else{
            return true;
          }
        } else{
          
          return false;
        }
      } else{
        return false;
      }

    }






    function preview(){
      
      var preview_screen = true;
      if(customerDetails){
        if(!checkCustomerDetails()){
          preview_screen = false; 
        }
      }
      if(productDetails){
        if(!checkProductDetails()){
          preview_screen = false; 
        }
      }
      if(transDetails){
        if(!checkTransDetails()){
          preview_screen = false; 
        }
      }
      if(preview_screen){
        document.getElementById("second-stage").classList.add("hidden");
        document.getElementById("third-stage").classList.remove("hidden");
      }

      
    }

    function edit(){
      document.getElementById("third-stage").classList.add("hidden");
      document.getElementById("second-stage").classList.remove("hidden");
    }

    function complete(){
      document.getElementById("third-stage").classList.add("hidden");
      document.getElementById("last-stage").classList.remove("hidden");
    }

    function done(){
      document.getElementById("selected-customer-details").classList.add("hidden");
    }

    function submit(){

      if(subjectTitle != "" && referenceNumber !="" && requestType != ""){

        var jsonToSubmit = {
        
          usr_lg :{usr_name:"s.naqvi",req_type:"new_request",req_dt:"2021121312142",req_name:subjectTitle,request_referenceNo:referenceNumber,
          req_recieved_from:requestType},
          entity:[ customerDetails ? "cust_details" : null, productDetails ? "acct_details" : null, transDetails ? "tran_details" : null],
          
          cust_details:{
            sel_sb_categ:[
              {cus_bsc_info:[CBIcustomerID ? "customer_id" : null, CBIcustomerCNIC ? "id_number" : null, CBIcustomerName ? "full_name" : null,CBIfatherName ? "father_name" : null, CBIcnicExpiry ? "cnic_expiry_dt" : null]},
              {cus_kyc:[kycOccupation ? "occupation" : null, kycCustomerIncome ? "monthly_salary" : null, kycEmplyerName ? "customeremployers_name" : null, kycEmployerAddress ? "company_address" : null, kycCustomerSegment ? "customer_segment" : null, kycCity ? "home_city" : null, kycCountry ? "home_country" : null, kycAnnualTurnover ? "cs_annum_to" : null, kycNOB ? "nat_of_bus": null, kycIncomeLevel ? "income_level" : null, kycPEP ? "rel_political" : null, kycSourceIncome ? "source_of_income" : null, kycBusnessName ? "name_of_bus" : null, kycCustomerType ? "customer_type" : null, kycFilerStatus ? "is_filer" : null]},
              {cus_demographics:[ CDcustomerAge ? "age" : null, CDcustomerGender ? "gender" : null, CDcustomerAddress ? "home_address" : null, CDpermanentAddress ? "customerpadrs" : null, CDmobile ? "mobile_no" : null]}
            ],
            fil:{
              "cus.customer_id":{operator:"IN", value: customerIDField != "" ? customerIDField.split(/[\s,]/g).filter(string => Boolean(string)) : []},
              "cus.id_number":{operator:"IN",value: customerCNICField != "" ? customerCNICField.split(/[\s,]/g).filter(string => Boolean(string)) : []},
              "cus.sector":{operator:"IN",value: customerSectorField != "" ? customerSectorField.split(/[\s,]/g).filter(string => Boolean(string)) : []},
              "cus.customer_segment":{operator:"LIKE",value: customerSegmentField != "" ? [customerSegmentField] : []},
              "cus.rel_political":{operator:"=",value :pepField != "" ? [pepField] : []},
              "cus.cnic_expiry_dt":{operator: customerExpiryFilterType == "Range" ? "BETWEEN" : customerExpiryFieldCondition == "Greater" ? ">" : customerExpiryFieldCondition == "Less" ? "<" : "=" , value: customerExpiryFilter ? customerExpiryFilterType == "Range" ? [customerExpiryFieldFrom, customerExpiryFieldTo] : [customerExpiryFieldFrom, "12-15-2021"] : []}
            }
          },
          acct_details:{
            sel_sb_categ:[
              {acct_bsc_info:[PDaccountNumber ? "account_num" : null, PDaccountOpenDate ? "ac_open_dt" : null, PDaccountCategory ? "category" : null, PDproductName ? "productdesc" : null, PDaccountStatus ? "account_status" : null, PDaccountBalances ? "balance_lcy" : null, PDcreditLimit ? "limit" : null,PDaccountTitle ? "account_title" : null]},
              {acct_kyc:[AKtransactionLimit ? "limit" : null, AKcurrency ? "currency" : null, AKbranchCode ? "branch_code" : null,AKbranchName ? "branchname" : null]},{acct_summary:[ASaccountNumber ? "account_num" : null, ASaccountStatus ? "account_status" : null, ASaccountCategory ? "category" : null, AScurrentBalance ? "balance_lcy" : null]}],
            fil:{
              "deposits_ind":{operator:"IN",value: productCategoryFilter ? productCategoryField.split(/[\s,]/g).filter(string => Boolean(string)) : [] },
              "product_id":{operator:"IN",value: productCategoryField == "C,S" ? [casaProductType] : []},
              "acct.account_num":{operator:"IN",value: accountNumberField != "" ? [accountNumberField] : []},
              "acct.ac_open_dt":{operator: customerExpiryFilterType == "Range" ? "BETWEEN" : accountOpenDateFieldCondition == "Greater" ? ">" : accountOpenDateFieldCondition == "Less" ? "<" : "=" , value: customerExpiryFilter ? customerExpiryFilterType == "Range" ? [accountOpenDateFieldFrom, accountOpenDateFieldTo] : [accountOpenDateFieldFrom, "12-15-2021"] : []},
              "acct.balance_lcy":{operator: customerExpiryFilterType == "Range" ? "BETWEEN" : accountBalanceFieldCondition == "Greater" ? ">" : accountBalanceFieldCondition == "Less" ? "<" : "=" , value: customerExpiryFilter ? customerExpiryFilterType == "Range" ? [accountBalanceFieldFrom, accountBalanceFieldTo] : [accountBalanceFieldDate] : []},
              "acct.account_status":{operator:"",value: accountStatusField != "" ? [accountStatusField] : []}
            }
          },
          tran_details:{
            sel_sb_categ:[
              {tran_det:[TDtransactionChannel ? "channel" : null, TDtransactionType ? "activity" : null, TDtransactionAmount ? "lcy_amt" : null,TDtransactionDate ? "tran_date" : null, TDmerchantName ? "merchant" : null]}],
            fil:{
              "tran.channel":{operator:"",value: transactionChannelField != "" ? [transactionChannelField] : []},
              "tran.activity":{operator:"",value: transactionTypeField != "" ? [transactionTypeField] : []},
              "tran.tran_date":{operator: "BETWEEN",value: transDetails ? [TDdateFrom,TDdateTo] : []}
            }
          }
        }
  
        for (const types in jsonToSubmit){
          if(types != "usr_lg"){
            if(types == "entity"){
              jsonToSubmit.entity = jsonToSubmit.entity.filter(n => n);
            } else{
              jsonToSubmit[types].sel_sb_categ.forEach((category) => {
                Object.keys(category).map((property) => {
                  category[property] = category[property].filter(n => n);
                });
              })
            }
          }
        }
        
  
        console.log(jsonToSubmit);        
        
      }
    }

    return (
      
      <div className='w-full h-screen'>

        <Sidebar />
        <div className='content w-full h-full'>
            <Header page="New Request" />
            <div className='content-body px-12 py-6'>
              <div className='w-full bg-white rounded-lg p-10'>

                {/* first stage */}
                <div id='first-stage' className='fadeRight'>
                    <h2 className='text-black text-2xl'>1. Which fields do you require?</h2>
                    <div className="form-check mt-8">
                      <input className="form-check-input text-lg" id="flexCheckDefault" type="checkbox" checked={customerDetails} onChange={() => setCustomerDetails(!customerDetails)} />
                      <label className="form-check-label text-lg" for="flexCheckDefault">Customer Details</label>
                    </div>
                    <div className="form-check mt-2">
                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={productDetails} onChange={() => setProductDetails(!productDetails)} />
                      <label className="form-check-label text-lg" for="flexCheckChecked">Product Details</label>
                    </div>
                    <div className="form-check mt-2">
                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={transDetails} onChange={() => setTransDetails(!transDetails)} />
                      <label className="form-check-label text-lg" for="flexCheckChecked">Transaction Details</label>
                    </div>
                    <button onClick={next} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-5 new-btn focus:outline-none'
                    >Next
                    </button>
                </div>



                {/* second stage */}
                <div id="second-stage" className='fadeRight hidden'>
                  <h2 className='text-black text-2xl'>2. Which columns do you require for each selected field?</h2>
                  <div className='grid grid-cols-3 mt-5'>
                    { customerDetails ? <div  onClick={() => setIsActive("customer")} className={ isActive == "customer" ? 'w-full cursor-pointer transition duration-200 px-2 pt-3 bg-gray shadow-sm' : 'w-full cursor-pointer transition duration-200 px-2 pt-3'}>
                      <h2 className='text-center text-lg text-blue border-b pb-2'>Customer Details</h2>                    
                    </div> : null}
                    { productDetails ? <div  onClick={() => setIsActive("product")} className={ isActive == "product" ? 'w-full cursor-pointer transition duration-200 px-2 pt-3 bg-gray shadow-sm' : 'w-full cursor-pointer transition duration-200 px-2 pt-3'}>
                      <h2 className='text-center text-lg text-blue border-b pb-2'>Product Details</h2>                    
                    </div> : null }
                    { transDetails ? <div  onClick={() => setIsActive("transaction")} className={ isActive == "transaction" ? 'w-full cursor-pointer transition duration-200 px-2 pt-3 bg-gray shadow-sm' : 'w-full cursor-pointer transition duration-200 px-2 pt-3'}>
                      <h2 className='text-center text-lg text-blue border-b pb-2'>Transaction Details</h2>                    
                    </div> : null }
                  </div>

                  {/* Customer Details */}
                  { isActive == "customer"  ? 
                    <div className='w-full'>
                        {/* Customer Deatils */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible1(!visible1)}  aria-expanded="false" aria-controls="collapseOne">Customer Details</button>
                            </h2>
                            <CCollapse className='px-4 pt-3 pb-4' visible={visible1}>
                              <div class="form-check form-switch ml-1">
                                <input class="form-check-input text-lg" type="checkbox" id="flexSwitchCheckChecked" checked={customerDetailsAll} onChange={() => setCustomerDetailsAll(!customerDetailsAll)} />
                                <label class="form-check-label text-lg text-blue" for="flexSwitchCheckChecked">All</label>
                              </div>
                              { !customerDetailsAll ? 
                              // Filters for Customer Details
                              <div id='selected-customer-details' className='absolute top-0 right-0 bg-white px-16 py-10 w-1/3 h-screen overflow-y-auto z-50 shadow-lg slideLeft'>
                                <p className='text-lg font-medium'>Please select any filter options:</p>
                                <div className='pl-2'>
                                  <div className='col'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={customerIDFilter} onChange={()=>setcustomerIDFilter(!customerIDFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Customer ID</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Enter the requried Customer ID</label>
                                      <input disabled={!customerIDFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="email" placeholder="Customer ID" value={customerIDField} onChange={event=> setcustomerIDField(event.target.value)} />
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={customerCNICFilter} onChange={()=>setcustomerCNICFilter(!customerCNICFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Customer CNIC</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Enter the requried Customer CNIC</label>
                                      <input disabled={!customerCNICFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="email" placeholder="Customer CNIC" value={customerCNICField} onChange={event=> setcustomerCNICField(event.target.value)} />
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={customerSectorFilter} onChange={()=>setcustomerSectorFilter(!customerSectorFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Sector</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Enter the requried Customer Sector</label>
                                      <input disabled={!customerSectorFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="email" placeholder="Customer Sector" value={customerSectorField} onChange={event=> setcustomerSectorField(event.target.value)} />
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={customerExpiryFilter} onChange={()=>setcustomerExpiryFilter(!customerExpiryFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">CNIC Expiry Date</label>
                                    </div>
                                    <div className="mt-2 pl-6">
                                      <div className='row w-4/5'>
                                        <div class="form-check col">
                                          <input disabled={!customerExpiryFilter ? true : false} class="form-check-input text-sm" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={customerExpiryFilterType == "Range"}  onClick={()=>setcustomerExpiryFilterType("Range")}/>
                                          <label class="form-check-label text-sm" for="flexRadioDefault1">
                                            Range
                                          </label>
                                        </div>
                                        <div class="form-check col">
                                          <input disabled={!customerExpiryFilter ? true : false} checked={customerExpiryFilterType == "Single"} class="form-check-input text-sm" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setcustomerExpiryFilterType("Single")} />
                                          <label class="form-check-label text-sm" for="flexRadioDefault2">
                                            Single
                                          </label>
                                        </div>
                                      </div>
                                      { customerExpiryFilterType == "Range" ?
                                      <div >
                                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">From Date</label>
                                        <input disabled={!customerExpiryFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="date" placeholder="Customer Expiry Date" value={customerExpiryFieldFrom} onChange={event=> setcustomerExpiryFieldFrom(event.target.value)} />
                                        <label className="form-label text-sm text-gray-400 font-medium mt-1" for="exampleFormControlInput1">To Date</label>
                                        <input disabled={!customerExpiryFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="date" placeholder="Customer Expiry Date" value={customerExpiryFieldTo} onChange={event=> setcustomerExpiryFieldTo(event.target.value)} />
                                      </div> : 
                                      <div >
                                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Requried Condition</label>
                                        <select disabled={!customerExpiryFilter ? true : false} className="form-select w-4/5" aria-label="Default select example" value={customerExpiryFieldCondition} onChange={event=> setcustomerExpiryFieldCondition(event.target.value)}>
                                          <option value="Greater">Greater than</option>  
                                          <option value="Less">Less than</option>
                                          <option value="Equals">Equals To</option>
                                        </select>
                                        <label className="form-label text-sm text-gray-400 font-medium mt-1" for="exampleFormControlInput1">Date</label>
                                        <input disabled={!customerExpiryFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="date" placeholder="Customer Expiry Date" value={customerExpiryFieldFrom} onChange={event=> setcustomerExpiryFieldFrom(event.target.value)} />
                                      </div>
                                      }
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={customerSegmentFilter} onChange={()=>setcustomerSegmentFilter(!customerSegmentFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Segment</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Enter the requried Customer Segment</label>
                                      <input disabled={!customerSegmentFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="email" placeholder="Customer Segment" value={customerSegmentField} onChange={event=> setcustomerSegmentField(event.target.value)} />
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={pep} onChange={()=>setpep(!pep)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Political Exposed Person</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Select the requried Political Exposed Person</label>
                                      <select disabled={!pep ? true : false} className="form-select w-4/5" aria-label="Default select example" value={pepField} onChange={event=> setpepField(event.target.value)}>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className='flex justify-center'>
                                    <button onClick={done} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-4 new-btn focus:outline-none mr-2'
                                      >Done
                                    </button>
                                  </div>
                                  
                                </div>
                              </div> 
                              : null }
                            </CCollapse>
                        </div>
                        {/* Customer Basic Information */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible2(!visible2)}  aria-expanded="false" aria-controls="collapseOne">Customer Basic Information</button>
                            </h2>
                            <CCollapse className='px-4 py-3' visible={visible2}>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CBIcustomerID} onChange={()=>setCBIcustomerID(!CBIcustomerID)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Customer ID</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CBIcustomerCNIC} onChange={()=>setCBIcustomerCNIC(!CBIcustomerCNIC)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Customer CNIC</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CBIcustomerName} onChange={()=>setCBIcustomerName(!CBIcustomerName)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Customer Name</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CBIfatherName} onChange={()=>setCBIfatherName(!CBIfatherName)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Father's Name</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CBIcnicExpiry} onChange={()=>setCBIcnicExpiry(!CBIcnicExpiry)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">CNIC Expiry Date</label>
                              </div>
                            </CCollapse>
                        </div>
                        {/* Customer KYC */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible3(!visible3)}  aria-expanded="false" aria-controls="collapseOne">Customer KYC</button>
                            </h2>
                            <CCollapse className='px-4 py-3' visible={visible3}>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycOccupation} onChange={()=>setkycOccupation(!kycOccupation)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Occupation</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycCustomerIncome} onChange={()=>setkycCustomerIncome(!kycCustomerIncome)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Customer's Income</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycEmplyerName} onChange={()=>setkycEmplyerName(!kycEmplyerName)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Employer's Name</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycEmployerAddress} onChange={()=>setkycEmployerAddress(!kycEmployerAddress)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Employer's Address</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycCustomerSegment} onChange={()=>setkycCustomerSegment(!kycCustomerSegment)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Customer Segment</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycCity} onChange={()=>setkycCity(!kycCity)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">City</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycCountry} onChange={()=>setkycCountry(!kycCountry)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Country</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycAnnualTurnover} onChange={()=>setkycAnnualTurnover(!kycAnnualTurnover)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Annual Turnover</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycNOB} onChange={()=>setkycNOB(!kycNOB)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Nature of Business</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycIncomeLevel} onChange={()=>setkycIncomeLevel(!kycIncomeLevel)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Income Level</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycPEP} onChange={()=>setkycPEP(!kycPEP)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Politically Exposed Person</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycSourceIncome} onChange={()=>setkycSourceIncome(!kycSourceIncome)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Source of Income</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycBusnessName} onChange={()=>setkycBusnessName(!kycBusnessName)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Business Name</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycCustomerType} onChange={()=>setkycCustomerType(!kycCustomerType)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Customer Type</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={kycFilerStatus} onChange={()=>setkycFilerStatus(!kycFilerStatus)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Filer Status</label>
                              </div>
                            </CCollapse>
                        </div>
                        {/* Customer Demographic */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible4(!visible4)}  aria-expanded="false" aria-controls="collapseOne">Customer Demographic</button>
                            </h2>
                            <CCollapse className='px-4 py-3' visible={visible4}>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CDcustomerAge} onChange={()=>setCDcustomerAge(!CDcustomerAge)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Customer's Age</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CDcustomerGender} onChange={()=>setCDcustomerGender(!CDcustomerGender)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Customer's Gender</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CDcustomerAddress} onChange={()=>setCDcustomerAddress(!CDcustomerAddress)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Current Address</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CDpermanentAddress} onChange={()=>setCDpermanentAddress(!CDpermanentAddress)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Permanent Address</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={CDmobile} onChange={()=>setCDmobile(!CDmobile)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Mobile/Phone Number</label>
                              </div>
                            </CCollapse>
                        </div>
                    </div>
                  : null}

                  {/* Product Details */}
                  { isActive == "product"  ? 
                    <div className='w-full'>
                        {/* Product Details */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible5(!visible5)}  aria-expanded="false" aria-controls="collapseOne">Product Details</button>
                            </h2>
                            <CCollapse className='px-4 pt-3 pb-4' visible={visible5}>
                              <div class="form-check form-switch ml-1">
                                <input class="form-check-input text-lg" type="checkbox" id="flexSwitchCheckChecked" checked={productDetailsAll} onChange={() => setproductDetailsAll(!productDetailsAll)} />
                                <label class="form-check-label text-lg text-blue" for="flexSwitchCheckChecked">All</label>
                              </div>
                              { !productDetailsAll ? 
                              // Filters for Customer Details
                              <div id='selected-customer-details' className='absolute top-0 right-0 bg-white px-16 py-10 w-1/3 h-screen overflow-y-auto z-50 shadow-lg slideLeft'>
                                <p className='text-lg font-medium'>Please select any filter options:</p>
                                <div className='pl-2'>
                                  <div className='col'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={productCategoryFilter} onChange={()=>setproductCategoryFilter(!productCategoryFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Product Category</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Select the requried Product Category</label>
                                      <select disabled={!productCategoryFilter ? true : false} className="form-select w-4/5" aria-label="Default select example" value={productCategoryField} onChange={event=> setproductCategoryField(event.target.value)}>
                                        <option value="T">TERM DEPOSIT</option>
                                        <option value="RP">ROYAL PROFIT</option>
                                        <option value="C,S">CASA</option>
                                      </select>
                                      {productCategoryField == "C,S" ? 
                                      <div>
                                        <label className="form-label text-sm text-gray-400 font-medium mt-2">Product Type</label>
                                        <select className="form-select w-4/5" aria-label="Default select example" value={casaProductType} onChange={event=> setcasaProductType(event.target.value)}>
                                          <option value="All">All</option>
                                          <option value="1017">Current Assan Account</option>
                                          <option value="6018">Saving Assan Account</option>
                                          <option value="6803">Falah Business Account</option>
                                          <option value="1034">Alfalah Pehchaan Account Current</option>
                                        </select>
                                        </div>  : null}
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={accountNumberFilter} onChange={()=>setaccountNumberFilter(!accountNumberFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Account Number</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Enter the requried Customer CNIC</label>
                                      <input disabled={!accountNumberFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="email" placeholder="Customer CNIC" value={accountNumberField} onChange={event=> setaccountNumberField(event.target.value)} />
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={accountOpenDateFilter} onChange={()=>setaccountOpenDateFilter(!accountOpenDateFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Account Opening Date</label>
                                    </div>
                                    <div className="mt-2 pl-6">
                                      <div className='row w-4/5'>
                                        <div class="form-check col">
                                          <input disabled={!accountOpenDateFilter ? true : false} class="form-check-input text-sm" type="radio" name="flexRadioDefaultt" id="flexRadioDefaultt1" checked={customerExpiryFilterType == "Range"}  onClick={()=>setcustomerExpiryFilterType("Range")}/>
                                          <label class="form-check-label text-sm" for="flexRadioDefaultt1">
                                            Range
                                          </label>
                                        </div>
                                        <div class="form-check col">
                                          <input disabled={!accountOpenDateFilter ? true : false} checked={customerExpiryFilterType == "Single"} class="form-check-input text-sm" type="radio" name="flexRadioDefaultt" id="flexRadioDefaultt2" onClick={()=>setcustomerExpiryFilterType("Single")} />
                                          <label class="form-check-label text-sm" for="flexRadioDefaultt2">
                                            Single
                                          </label>
                                        </div>
                                      </div>
                                      { customerExpiryFilterType == "Range" ?
                                      <div >
                                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">From Date</label>
                                        <input disabled={!accountOpenDateFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="date" placeholder="Customer Expiry Date" value={accountOpenDateFieldFrom} onChange={event=> setaccountOpenDateFieldFrom(event.target.value)} />
                                        <label className="form-label text-sm text-gray-400 font-medium mt-1" for="exampleFormControlInput1">To Date</label>
                                        <input disabled={!accountOpenDateFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="date" placeholder="Customer Expiry Date" value={accountOpenDateFieldTo} onChange={event=> setaccountOpenDateFieldTo(event.target.value)} />
                                      </div> : 
                                      <div >
                                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Requried Condition</label>
                                        <select disabled={!accountOpenDateFilter ? true : false} className="form-select w-4/5" aria-label="Default select example" value={accountOpenDateFieldCondition} onChange={event=> setaccountOpenDateFieldCondition(event.target.value)}>
                                          <option value="Greater">Greater than</option>  
                                          <option value="Less">Less than</option>
                                          <option value="Equals">Equals To</option>
                                        </select>
                                        <label className="form-label text-sm text-gray-400 font-medium mt-1" for="exampleFormControlInput1">Date</label>
                                        <input disabled={!accountOpenDateFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="date" placeholder="Customer Expiry Date" value={accountOpenDateFieldDate} onChange={event=> setaccountOpenDateFieldDate(event.target.value)} />
                                      </div>
                                      }
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={accountBalanceFilter} onChange={()=>setaccountBalanceFilter(!accountBalanceFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Account Balance</label>
                                    </div>
                                    <div className="mt-2 pl-6">
                                      <div className='row w-4/5'>
                                        <div class="form-check col">
                                          <input disabled={!accountBalanceFilter ? true : false} class="form-check-input text-sm" type="radio" name="flexRadioDefaulttt" id="flexRadioDefaulttt1" checked={accountBalanceFilterType == "Range"}  onClick={()=>setaccountBalanceFilterType("Range")}/>
                                          <label class="form-check-label text-sm" for="flexRadioDefaulttt1">
                                            Range
                                          </label>
                                        </div>
                                        <div class="form-check col">
                                          <input disabled={!accountBalanceFilter ? true : false} checked={accountBalanceFilterType == "Single"} class="form-check-input text-sm" type="radio" name="flexRadioDefaulttt" id="flexRadioDefaulttt2" onClick={()=>setaccountBalanceFilterType("Single")} />
                                          <label class="form-check-label text-sm" for="flexRadioDefaulttt2">
                                            Single
                                          </label>
                                        </div>
                                      </div>
                                      { accountBalanceFilterType == "Range" ?
                                      <div >
                                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Minimum Balance Required</label>
                                        <input disabled={!accountBalanceFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="number" placeholder="" value={accountOpenDateFieldFrom} onChange={event=> setaccountOpenDateFieldFrom(event.target.value)} />
                                        <label className="form-label text-sm text-gray-400 font-medium mt-1" for="exampleFormControlInput1">Maximum Balance Required</label>
                                        <input disabled={!accountBalanceFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="number" placeholder="" value={accountOpenDateFieldTo} onChange={event=> setaccountOpenDateFieldTo(event.target.value)} />
                                      </div> : 
                                      <div >
                                        <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Requried Condition</label>
                                        <select disabled={!accountBalanceFilter ? true : false} className="form-select w-4/5" aria-label="Default select example" value={accountOpenDateFieldCondition} onChange={event=> setaccountOpenDateFieldCondition(event.target.value)}>
                                          <option value="Greater">Greater than</option>  
                                          <option value="Less">Less than</option>
                                          <option value="Equals">Equals To</option>
                                        </select>
                                        <label className="form-label text-sm text-gray-400 font-medium mt-1" for="exampleFormControlInput1">Maximum Balance Required</label>
                                        <input disabled={!accountBalanceFilter ? true : false} className="form-control w-4/5" id="exampleFormControlInput1" type="number" placeholder="" value={accountOpenDateFieldDate} onChange={event=> setaccountOpenDateFieldDate(event.target.value)} />
                                      </div>
                                      }
                                    </div>
                                  </div>
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={accountStatusFilter} onChange={()=>setaccountStatusFilter(!accountStatusFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Account Status</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Select the requried Political Exposed Person</label>
                                      <select disabled={!accountStatusFilter ? true : false} className="form-select w-4/5" aria-label="Default select example" value={accountStatusField} onChange={event=> setaccountStatusField(event.target.value)}>
                                        <option value="Dormant">Dormant</option>
                                        <option value="Active">Active</option>
                                        <option value="Closed">Closed</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className='flex justify-center'>
                                    <button onClick={done} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-4 new-btn focus:outline-none mr-2'
                                      >Done
                                    </button>
                                  </div>
                                  
                                </div>
                              </div> 
                              : null }
                            </CCollapse>
                        </div>
                        {/* Product Details */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible6(!visible6)}  aria-expanded="false" aria-controls="collapseOne">Product Details</button>
                            </h2>
                            <CCollapse className='px-4 py-3' visible={visible6}>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={PDaccountNumber} onChange={()=>setPDaccountNumber(!PDaccountNumber)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Number</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={PDaccountTitle} onChange={()=>setPDaccountTitle(!PDaccountTitle)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Title</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={PDaccountOpenDate} onChange={()=>setPDaccountOpenDate(!PDaccountOpenDate)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Opening Date</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={PDaccountCategory} onChange={()=>setPDaccountCategory(!PDaccountCategory)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Category</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={PDproductName} onChange={()=>setPDproductName(!PDproductName)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Product Name</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={PDaccountStatus} onChange={()=>setPDaccountStatus(!PDaccountStatus)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Status</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={PDaccountBalances} onChange={()=>setPDaccountBalances(!PDaccountBalances)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Balances</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={PDcreditLimit} onChange={()=>setPDcreditLimit(!PDcreditLimit)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Credit Limit</label>
                              </div>
                            </CCollapse>
                        </div>
                        {/* Account KYC */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible7(!visible7)}  aria-expanded="false" aria-controls="collapseOne">Account KYC</button>
                            </h2>
                            <CCollapse className='px-4 py-3' visible={visible7}>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={AKtransactionLimit} onChange={()=>setAKtransactionLimit(!AKtransactionLimit)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Transaction Limit</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={AKcurrency} onChange={()=>setAKcurrency(!AKcurrency)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Currency</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={AKbranchCode} onChange={()=>setAKbranchCode(!AKbranchCode)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Branch Code</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={AKbranchName} onChange={()=>setAKbranchName(!AKbranchName)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Branch Name</label>
                              </div>
                            </CCollapse>
                        </div>
                        {/* Account Summary */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible8(!visible8)}  aria-expanded="false" aria-controls="collapseOne">Account Summary</button>
                            </h2>
                            <CCollapse className='px-4 py-3' visible={visible8}>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={ASaccountNumber} onChange={()=>setASaccountNumber(!ASaccountNumber)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Number</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={ASaccountStatus} onChange={()=>setASaccountStatus(!ASaccountStatus)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Status</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={ASaccountCategory} onChange={()=>setASaccountCategory(!ASaccountCategory)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Account Category</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={AScurrentBalance} onChange={()=>setAScurrentBalance(!AScurrentBalance)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Current Balance</label>
                              </div>
                            </CCollapse>
                        </div>
                    </div>
                  : null}


                  {/* Transaction Details */}
                  { isActive == "transaction"  ? 
                    <div className='w-full'>
                        {/* Transaction Details */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible9(!visible9)}  aria-expanded="false" aria-controls="collapseOne">Transaction Details</button>
                            </h2>
                            <CCollapse className='px-4 pt-3 pb-4' visible={visible9}>
                              <div class="form-check form-switch ml-1">
                                <input class="form-check-input text-lg" type="checkbox" id="flexSwitchCheckChecked" checked={transactionDetailsAll} onChange={() => settransactionDetailsAll(!transactionDetailsAll)} />
                                <label class="form-check-label text-lg text-blue" for="flexSwitchCheckChecked">All</label>
                              </div>
                              { !transactionDetailsAll ? 
                              // Filters for Customer Details
                              <div id='selected-customer-details' className='absolute top-0 right-0 bg-white px-16 py-10 w-1/3 h-screen overflow-y-auto z-50 shadow-lg slideLeft'>
                                <p className='text-lg font-medium'>Please select any filter options:</p>
                                <div className='pl-2'>
                                  <div className='col'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={transactionChannelFilter} onChange={()=>settransactionChannelFilter(!transactionChannelFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Transaction Channel</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Select the requried Transaction Channel</label>
                                      <select disabled={!transactionChannelFilter ? true : false} className="form-select w-4/5" aria-label="Default select example" value={transactionChannelField} onChange={event=> settransactionChannelField(event.target.value)}>
                                        <option value="BRANCH">BRANCH</option>
                                        <option value="INTERNET BANKING">INTERNET BANKING</option>
                                        <option value="ALFA">ALFA</option>
                                        <option value="POS">POS</option>
                                        <option value="WALLET">WALLET</option>
                                      </select>
                                    </div>
                                  </div> 
                                  <div className='col mt-3'>
                                    <div className="form-check">
                                      <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={transactionTypeFilter} onChange={()=>settransactionTypeFilter(!transactionTypeFilter)} />
                                      <label className="form-check-label text-lg" for="flexCheckChecked">Transaction Type</label>
                                    </div>
                                    <div className="mt-1 pl-6">
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">Select the requried Transaction Type</label>
                                      <select disabled={!transactionTypeFilter ? true : false} className="form-select w-4/5" aria-label="Default select example" value={transactionTypeField} onChange={event=> settransactionTypeField(event.target.value)}>
                                        <option value="WITHDRAWAL">WITHDRAWAL</option>
                                        <option value="DEPOSIT">DEPOSIT</option>
                                        <option value="FT">FT</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className='flex justify-center'>
                                    <button onClick={done} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-4 new-btn focus:outline-none mr-2'
                                      >Done
                                    </button>
                                  </div>
                                  
                                </div>
                              </div> 
                              : null }
                            </CCollapse>
                        </div>
                        {/* Transaction Date */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible10(!visible10)}  aria-expanded="false" aria-controls="collapseOne">Transaction Date</button>
                            </h2>
                            <CCollapse className='px-4 py-3' visible={visible10}>
                                <div className='col'>
                                  <div className="row w-1/2">
                                    <div className='col'>
                                      <label className="form-label text-sm text-gray-400 font-medium" for="exampleFormControlInput1">From Date</label>
                                      <input className="form-control w-4/5" id="exampleFormControlInput1" type="date" placeholder="" value={TDdateFrom} onChange={event=> setTDdateFrom(event.target.value)} />
                                    </div>
                                    <div className='col'>
                                      <label className="form-label text-sm text-gray-400 font-medium mt-1" for="exampleFormControlInput1">To Date</label>
                                      <input className="form-control w-4/5" id="exampleFormControlInput1" type="date" placeholder="" value={TDdateTo} onChange={event=> setTDdateTo(event.target.value)} />
                                    </div>
                                  </div>
                                </div>
                            </CCollapse>
                        </div>
                        {/* Transaction Type */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed text-blue" type="button" onClick={() => setVisible11(!visible11)}  aria-expanded="false" aria-controls="collapseOne">Transaction Type</button>
                            </h2>
                            <CCollapse className='px-4 py-3' visible={visible11}>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={TDtransactionChannel} onChange={()=>setTDtransactionChannel(!TDtransactionChannel)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Transaction Channel</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={TDtransactionType} onChange={()=>setTDtransactionType(!TDtransactionType)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Transaction type</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={TDtransactionAmount} onChange={()=>setTDtransactionAmount(!TDtransactionAmount)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Transaction Amount</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={TDtransactionDate} onChange={()=>setTDtransactionDate(!TDtransactionDate)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Transaction Date</label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input text-lg" id="flexCheckChecked" type="checkbox" checked={TDmerchantName} onChange={()=>setTDmerchantName(!TDmerchantName)} />
                                <label className="form-check-label text-lg" for="flexCheckChecked">Merchant Name</label>
                              </div>
                            </CCollapse>
                        </div>
                    </div>
                  : null}





                  <div className='flex justify-center'>
                    <button onClick={preview} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-5 new-btn focus:outline-none'
                    >Preview
                    </button>
                  </div>
                </div>



                {/* third stage */}
                <div id="third-stage" className='fadeRight hidden'>
                  <h2  className='text-black text-2xl text-center'>Output Example Dataset</h2>
                  <table className="table mt-5">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='flex justify-center'>
                    <button onClick={edit} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-5 new-btn focus:outline-none mr-2'
                      >Edit
                    </button>
                    <button onClick={complete} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-5 new-btn focus:outline-none'
                    >Complete
                    </button>
                  </div>
                </div>



                {/* last stage */}
                <div id='last-stage' className='fadeRight hidden'>
                  <h2 className='text-black text-2xl'>3. Please fill the details below to submit your request</h2>
                  <div className="mt-5 w-1/2">
                    <label className="form-label" for="exampleFormControlInput1">Subject Title</label>
                    <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="FBR 10256" value={subjectTitle} onChange={event=> setsubjectTitle(event.target.value)} />
                  </div>
                  <div className="mt-2 w-1/2">
                    <label className="form-label" for="exampleFormControlInput1">Reference Number</label>
                    <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="102044214" value={referenceNumber} onChange={event=> setreferenceNumber(event.target.value)} />
                  </div>
                  <div className="mt-2 w-1/2">
                    <label className="form-label" for="exampleFormControlInput1">Request Type</label>
                    <select className="form-select" aria-label="Default select example" value={requestType} onChange={event=> setrequestType(event.target.value)}>
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <button onClick={submit} className='w-24 bg-blue py-2 text-white text-base rounded-lg mt-5 new-btn focus:outline-none'
                  >Submit
                  </button>
                </div>

              </div>

            </div>
        </div>
       
      </div>

    );
  }
  
export default New_request;




// {"usr_name":"s.naqvi","req_type":"new_request","req_dt":"20211213122219","req_name":"test","request_referenceNo":"test","req_recieved_from":"OTHERS"},"entity":["cust_details","acct_details","tran_details"],"cust_details":{"sel_sb_categ":[{"cus_bsc_info":["customer_id"]},{"cus_kyc":[]},{"cus_demographics":[]}],"fil":{"cus.customer_id":{"operator":"IN","value":[]},"cus.id_number":{"operator":"IN","value":[]},"cus.sector":{"operator":"IN","value":[]},"cus.customer_segment":{"operator":"LIKE","value":[]},"cus.rel_political":{"operator":"=","value":[]},"cus.cnic_expiry_dt":{"operator":"BETWEEN","value":[]}}},"acct_details":{"sel_sb_categ":[{"acct_bsc_info":["account_num"]},{"acct_kyc":[]},{"acct_summary":[]}],"fil":{"deposits_ind":{"operator":"IN","value":[]},"product_id":{"operator":"IN","value":[]},"acct.account_num":{"operator":"IN","value":[]},"acct.ac_open_dt":{"operator":"","value":[]},"acct.balance_lcy":{"operator":"","value":[]},"acct.account_status":{"operator":"","value":[]}}},"tran_details":{"sel_sb_categ":[{"tran_det":["channel"]}],"fil":{"tran.channel":{"operator":"","value":[]},"tran.activity":{"operator":"","value":[]},"tran.tran_date":{"operator":"BETWEEN","value":["2021-12-01","2021-12-02"]}}}}


// {"usr_name":"s.naqvi","req_type":"new_request","req_dt":"20211213151731","req_name":"test","request_referenceNo":"test","req_recieved_from":"OTHERS"},"entity":["cust_details"],"cust_details":{"sel_sb_categ":[{"cus_bsc_info":["customer_id"]},{"cus_kyc":[]},{"cus_demographics":[]}],"fil":{"cus.customer_id":{"operator":"IN","value":[]},"cus.id_number":{"operator":"IN","value":[]},"cus.sector":{"operator":"IN","value":[]},"cus.customer_segment":{"operator":"LIKE","value":[]},"cus.rel_political":{"operator":"=","value":[]},"cus.cnic_expiry_dt":{"operator":"BETWEEN","value":[]}}},"acct_details":{"sel_sb_categ":[{"acct_bsc_info":[]},{"acct_kyc":[]},{"acct_summary":[]}],"fil":{"deposits_ind":{"operator":"IN","value":[]},"product_id":{"operator":"IN","value":[]},"acct.account_num":{"operator":"IN","value":[]},"acct.ac_open_dt":{"operator":"","value":[]},"acct.balance_lcy":{"operator":"","value":[]},"acct.account_status":{"operator":"","value":[]}}},"tran_details":{"sel_sb_categ":[{"tran_det":["channel","activity","lcy_amt","tran_date","merchant"]}],"fil":{"tran.channel":{"operator":"","value":[]},"tran.activity":{"operator":"","value":[]},"tran.tran_date":{"operator":"BETWEEN","value":["",""]}}}}


// {"usr_name":"s.naqvi","req_type":"new_request","req_dt":"20211213152642","req_name":"test","request_referenceNo":"test","req_recieved_from":"OTHERS"},"entity":["cust_details","acct_details","tran_details"],"cust_details":{"sel_sb_categ":[{"cus_bsc_info":["customer_id","id_number","full_name","father_name","cnic_expiry_dt"]},{"cus_kyc":["occupation","monthly_salary","customeremployers_name","company_address","customer_segment","home_city","home_country","cs_annum_to","nat_of_bus","income_level","rel_political","source_of_income","name_of_bus","customer_type","is_filer"]},{"cus_demographics":["age","gender","home_address","customerpadrs","mobile_no"]}],"fil":{"cus.customer_id":{"operator":"IN","value":["safasf"]},"cus.id_number":{"operator":"IN","value":["asfasf"]},"cus.sector":{"operator":"IN","value":[]},"cus.customer_segment":{"operator":"LIKE","value":[]},"cus.rel_political":{"operator":"=","value":[]},"cus.cnic_expiry_dt":{"operator":"BETWEEN","value":[]}}},"acct_details":{"sel_sb_categ":[{"acct_bsc_info":["account_num","ac_open_dt","category","productdesc","account_status","balance_lcy","limit","account_title"]},{"acct_kyc":["limit","currency","branch_code","branchname"]},{"acct_summary":["account_num","account_status","category","balance_lcy"]}],"fil":{"deposits_ind":{"operator":"IN","value":[]},"product_id":{"operator":"IN","value":[]},"acct.account_num":{"operator":"IN","value":[]},"acct.ac_open_dt":{"operator":"","value":[]},"acct.balance_lcy":{"operator":"","value":[]},"acct.account_status":{"operator":"","value":[]}}},"tran_details":{"sel_sb_categ":[{"tran_det":["channel","activity","lcy_amt","tran_date","merchant"]}],"fil":{"tran.channel":{"operator":"","value":[]},"tran.activity":{"operator":"","value":[]},"tran.tran_date":{"operator":"BETWEEN","value":["2021-12-01","2021-12-02"]}}}}

// {"usr_lg":{"usr_name":"s.naqvi","req_type":"new_request","req_dt":"20211215125448","req_name":"test","request_referenceNo":"test","req_recieved_from":"OTHERS"},"entity":["cust_details"],"cust_details":{"sel_sb_categ":[{"cus_bsc_info":["customer_id"]},{"cus_kyc":[]},{"cus_demographics":[]}],"fil":{"cus.customer_id":{"operator":"IN","value":["123","123","133"]},"cus.id_number":{"operator":"IN","value":[]},"cus.sector":{"operator":"IN","value":[]},"cus.customer_segment":{"operator":"LIKE","value":[]},"cus.rel_political":{"operator":"=","value":[]},"cus.cnic_expiry_dt":{"operator":"BETWEEN","value":[]}}},"acct_details":{"sel_sb_categ":[{"acct_bsc_info":[]},{"acct_kyc":[]},{"acct_summary":[]}],"fil":{"deposits_ind":{"operator":"IN","value":[]},"product_id":{"operator":"IN","value":[]},"acct.account_num":{"operator":"IN","value":[]},"acct.ac_open_dt":{"operator":"","value":[]},"acct.balance_lcy":{"operator":"","value":[]},"acct.account_status":{"operator":"","value":[]}}},"tran_details":{"sel_sb_categ":[{"tran_det":["channel","activity","lcy_amt","tran_date","merchant"]}],"fil":{"tran.channel":{"operator":"","value":[]},"tran.activity":{"operator":"","value":[]},"tran.tran_date":{"operator":"BETWEEN","value":["",""]}}}}