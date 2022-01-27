import React from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { CChart } from '@coreui/react-chartjs';
import Dashbaord_cards from '../components/dashboard_cards';

function Dashboard() {

    let history = useHistory ();

    const line = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor:  'rgba(75,192,192,0.4)',
            borderColor: 'rgba(255,255,255,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,0.4)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      };

    const options = {
        // tooltips: {
        //   enabled: false,
        //   custom: customTooltips
        // },
        maintainAspectRatio: true,
        legend: false,

    }

    const bar = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Daily Requests',
            backgroundColor: 'rgba(54,162,235,0.2)',
            borderColor: 'rgba(54,162,235,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54,162,235,0.4)',
            hoverBorderColor: 'rgba(54,162,235,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      };

      const pie = {
        labels: [
          'Counter Parties',
          'Advance Search',
          'Account Turnover',
          'Closed Accounts',
          'Bank Smart Accounts',
        ],
        datasets: [
          {
            data: [5, 3, 4, 2,1],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#36CE56',
              '#AACE56',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#39CE56',
              '#AACE56',
            ],
          }],
      };

    return (
      
      <div class='w-full h-screen'>

        <Sidebar />
        <div class='content w-full'>
            <Header page="Dashboard" />
            <div className='content-body px-12 py-6'>
                <div class='grid grid-cols-3 gap-4'>
                    {/* <Dashbaord_cards charts='yes' bgClass='bg-gradient-to-r from-blue-700 to-blue-800 py-4' icon='fa-inbox' title='2,652,769' subtitle='Total Accounts' datasets={line.datasets} options={options} /> */}
                    <Dashbaord_cards bgClass='bg-gradient-to-r from-blue-700 to-blue-800 py-4' icon='fa-sort-amount-up-alt' title='3' subtitle='Pending Requests (Today)' datasets={line.datasets} options={options} />
                    <Dashbaord_cards bgClass='bg-gradient-to-r from-blue-400 to-blue-500 py-4' icon='fa-check-circle' title='10' subtitle='Completed Requests (Total)' datasets={line.datasets} options={options} />
                    <div class='flex flex-col justify-between'>
                    {/* <Dashbaord_cards bgClass='bg-gradient-to-r from-red-400 to-red-500 py-4' icon='fa-network-wired' title='5' subtitle='Source Systems' datasets={line.datasets} options={options} /> */}
                    <Dashbaord_cards bgClass='bg-gradient-to-r from-yellow-400 to-yellow-500 py-4' icon='fa-calendar-check' title='12-09-2021' subtitle='Last Updated' datasets={line.datasets} options={options} />
                    </div>
                </div>
                <div class='w-full p-5 bg-white rounded-lg mt-5'>
                    <h2 class='font-semibold'>My Requests </h2>
                    <div class='w-full flex flex-row mt-2'>
                        <div class='w-1/2'>
                            <p class='text-sm text-gray-500 text-center'>Weekly Requests</p>
                            <CChart type="bar" datasets={bar.datasets} options={options} labels={bar.labels} />
                        </div>
                        <div class='w-1/2'>
                            <p class='text-sm text-gray-500 text-center'>Types of Requests</p>
                            <CChart type="pie" datasets={pie.datasets} labels={pie.labels} />
                            {/* <CChart type="bar" datasets={bar.datasets} options={options} labels="months"/> */}
                        </div>
                    </div>
                </div>
                <div class='w-full p-5 bg-white rounded-lg mt-5'>
                    <h2 class='font-semibold'>Frequently Used Templates </h2>
                    <div className='grid grid-cols-3 gap-4 mt-4'>
                      <a onClick={()=>history.push("/templates")}>
                        <div class="card rounded-2xl cursor-pointer text-white bg-white zoomIn">
                          <div class="card-body pl-5">
                            <div class="fs-4 fw-semibold text-blue">Account Turnover</div>
                            <div className='pb-2 border-b text-black mt-1'>Information about account turnover</div>
                            <p class="mt-5 bg-blue-dark text-white px-2 py-1 w-1/4 text-center rounded-lg">2021-10-28</p>
                          </div>
                        </div>
                      </a>
                      <a onClick={()=>history.push("/templates")}>
                        <div class="card rounded-2xl cursor-pointer text-white bg-white zoomIn">
                          <div class="card-body pl-5">
                            <div class="fs-4 fw-semibold text-blue">Advance Customer Search</div>
                            <div className='pb-2 border-b text-black mt-1'>Information about account turnover</div>
                            <p class="mt-5 bg-blue-dark text-white px-2 py-1 w-1/4 text-center rounded-lg">2021-10-28</p>
                          </div>
                        </div>
                      </a>
                      <a onClick={()=>history.push("/templates")}>
                        <div class="card rounded-2xl cursor-pointer text-white bg-white zoomIn">
                          <div class="card-body pl-5">
                            <div class="fs-4 fw-semibold text-blue">Bank Smart Accounts</div>
                            <div className='pb-2 border-b text-black mt-1'>Information about account turnover</div>
                            <p class="mt-5 bg-blue-dark text-white px-2 py-1 w-1/4 text-center rounded-lg">2021-10-28</p>
                          </div>
                        </div>
                      </a>
                    </div>
                </div>
               
            </div>
        </div>
       
      </div>

    );
  }
  
export default Dashboard;