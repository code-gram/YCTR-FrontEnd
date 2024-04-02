
import React, { useState, useEffect } from 'react';
import { AgChartsReact } from "ag-charts-react";
import {useSelector} from "react-redux";
import chartjson from './chartconfig.json';

const Chart = () => {

const yeralyData = useSelector(state => state.fileupload.yeralydata);



  const [options, setOptions] = useState(chartjson);

  useEffect(() => {
    //console.log(yeralyData);
if(yeralyData){

    const tempdata2=monthWiseFilter(yeralyData);
    const clonedConfig=JSON.parse(JSON.stringify(chartjson));
    console.log(tempdata2,"------> tempdata2");

    let totalsum=0;
    tempdata2.forEach(innerArray=>{
        const innerArraylength=innerArray.length;
        totalsum +=innerArraylength;
    })
   
    if(yeralyData.length!=0){
    clonedConfig['subtitle']['text']= new Date(yeralyData[0]['training_start_date']).getFullYear() +" Year Data";
    }

    clonedConfig['series'][0]['yName']="No.Of Training("+totalsum+")";
    clonedConfig['axes'][1]['label']= {
        formatter: (params) => {
         // console.log(params.value);
          return params.value + "";
        },
      };
      clonedConfig['data']=[
        { month: "Jan", numberOfTraining: tempdata2[0].length  },
        { month: "Feb", numberOfTraining: tempdata2[1].length  },
        { month: "Mar", numberOfTraining: tempdata2[2].length },
        { month: "Aprl", numberOfTraining: tempdata2[3].length  },
        { month: "May", numberOfTraining: tempdata2[4].length},
        { month: "June", numberOfTraining: tempdata2[5].length  },
        { month: "Jul", numberOfTraining: tempdata2[6].length },
        { month: "Aug", numberOfTraining: tempdata2[7].length  },
        { month: "Sep", numberOfTraining: tempdata2[8].length},
        { month: "Oct", numberOfTraining:  tempdata2[9].length },
        { month: "Nov", numberOfTraining: tempdata2[10].length },
        { month: "Dec", numberOfTraining: tempdata2[11].length  }
      ];
console.log(clonedConfig['data'],"--data");
console.log(clonedConfig['axes'][1],"--axes");



    setOptions(clonedConfig);
}
   // setDataArray(yeralyData);
}, [yeralyData]);


const monthWiseFilter= (tempData) => {

    const monthArrays = Array.from({ length: 12 }, () => []);

    console.log(tempData,"----tempData");
    // Iterate over the data and organize it into separate arrays for each month
    tempData?.forEach(item => {
        if(item){
     const startDate = new Date(item.training_start_date);
     const monthIndex = startDate.getMonth();
     monthArrays[monthIndex].push(item);
        }
    });
    return monthArrays;
}

  return <AgChartsReact options={options} />;
};

export default Chart;