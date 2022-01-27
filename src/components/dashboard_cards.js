import React from 'react';
import { CChart } from '@coreui/react-chartjs'


function Dashbaord_cards( props ) {

    let bgClass = 'w-full h-auto rounded-lg px-5 ' + props.bgClass;
    let iconClass = 'fas ' + props.icon;

    if(props.charts == "yes"){

        return (

            <div class={bgClass}>
                <div class='flex flex-col text-white'>
                    <div class='flex flex-row items-center justify-between'>
                        <h2>{props.title}</h2>
                        <i class={iconClass}></i>
                    </div>
                    <p class='mb-2'>{props.subtitle}</p>
                </div>
                <CChart type="line" datasets={props.datasets} options={props.options} />
            </div>
    
        );

    } else{

        return (

            <div class={bgClass}>
                <div class='flex flex-col text-white'>
                    <div class='flex flex-row items-center justify-between'>
                        <h2>{props.title}</h2>
                        <i class={iconClass}></i>
                    </div>
                    <p class='mb-2'>{props.subtitle}</p>
                </div>
                {/* <CChart type="line" datasets={props.datasets} options={props.options} /> */}
            </div>
    
        );

    }

    
  }
  
export default Dashbaord_cards;