import React from 'react';
import data from "../data.json";
import Chart from 'react-apexcharts'

function Protocol() {
    const protoTypeCounts = {};
    data.forEach((event) => {
      const protoType = event.proto;
      if (!protoTypeCounts[protoType]) {
        protoTypeCounts[protoType] = 1;
      } else {
        protoTypeCounts[protoType]++;
      }
    });
    console.log(protoTypeCounts);
  return (
    <div className='w-[500px] mx-14 rounded-xl h-[21rem] flex justify-center items-center bg-[#202c44fc] '>
            <Chart type='pie' height={400} width={420} series={[protoTypeCounts["TCP"],protoTypeCounts["UDP"]]} options={{
                labels:[`TCP (${protoTypeCounts["TCP"]})`,`UDP (${protoTypeCounts["UDP"]})`],
                colors:['#01204E', '#028391', '#F7A668','#7BB896','#1073E6','#856562'],
                dataLabels: {
                  enabled: true,
                },
                title: {
                    text: "Protocols",
                    align: 'left',
                    margin: 10,
                    offsetX: 20,
                    offsetY: -10,
                    floating: false,
                    style: {
                      fontSize:  '22px',
                      fontWeight:  'bold',
                      fontFamily:  undefined,
                      color:  '#cccccc90'
                    },
                },
                legend: {
                  show: true,
                  position: 'right',
                  horizontalAlign: 'center', 
                  fontSize: '10px',
                  fontFamily: 'Helvetica, Arial',
                  fontWeight: 500,
                  offsetX: 0,
                  offsetY: 30,
                  itemMargin: {
                      horizontal: 15,
                      vertical: 0
                  },
                  labels: {
                    colors: "white",
                    useSeriesColors: false
                },
                },
            }}/>
        </div>
  )
}

export default Protocol