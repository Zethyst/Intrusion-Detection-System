import React, { useState } from "react";
import data from "../data.json";
import ReactApexChart from "react-apexcharts";

function DestIP() {
  const destIPCounts = {};
  const eventCounts = {};

  data.forEach((event) => {
    const destIP = event.dest_ip;
    const eventType = event.event_type;
    if (!destIPCounts[destIP]) {
      destIPCounts[destIP] = 1;
    } else {
      destIPCounts[destIP]++;
    }

    if (!eventCounts[destIP]) {
        eventCounts[destIP] = {};
      }
    
      if (!eventCounts[destIP][eventType]) {
        eventCounts[destIP][eventType] = 1;
      } else {
        eventCounts[destIP][eventType]++;
      }
  });

  const destIPArray = Object.keys(destIPCounts).map((destIP) => ({
    destIP,
    count: destIPCounts[destIP],
  }));
  const eventArray = Object.keys(eventCounts).map((destIP) => ({
    destIP,
    count: destIPCounts[destIP],
    alertcount: eventCounts[destIP]["alert"] || 0,
    sshcount: eventCounts[destIP]["ssh"] || 0,
    dnscount: eventCounts[destIP]["dns"] || 0,
    httpcount: eventCounts[destIP]["http"] || 0,
    filecount: eventCounts[destIP]["fileinfo"] || 0,
  }));
  

  destIPArray.sort((a, b) => b.count - a.count);
  eventArray.sort((a, b) => b.count - a.count);



  const [chartData] = useState({
    series: [
        {
          name: "Alerts",
          data: [eventArray[0].alertcount, eventArray[1].alertcount,eventArray[2].alertcount],
        },
        {
          name: "SSH",
          data: [eventArray[0].sshcount, eventArray[1].sshcount, eventArray[2].sshcount],
        },
        {
          name: "DNS",
          data: [eventArray[0].dnscount, eventArray[1].dnscount, eventArray[2].dnscount],
        },
        {
          name: "HTTP",
          data: [eventArray[0].httpcount, eventArray[1].httpcount, eventArray[2].httpcount],
        },
        {
          name: "FILE_INFO",
          data: [eventArray[0].filecount, eventArray[1].filecount, eventArray[2].filecount],
        },
      ],
    options: {
      chart: {
        type: "bar",
        height: 420,
        stacked: true,
      },

      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: false,
              offsetX: 0,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ["#ccc"],
      },
      title: {
        text: "Destination IP Addresses",
        style: {
          color: "#cccccc88",
          fontSize: "20px",
        },
      },
      xaxis: {
        categories: [destIPArray[0].destIP, destIPArray[1].destIP, destIPArray[2].destIP],
        labels: {
          style: {
            colors: "#ccc",
            fontSize:"10px"
          },
        },
        title: {
            text: "No. of requests",
            style: {
                color: "#ccc", 
              },
              offsetY:10,
          },
      },
      yaxis: {
        labels: {
            style: {
              colors: "#ccc",
              overflow: "visible" 
            }},
        title: {
          text: "ip address",
          style: {
            color: "#ccc", 
          },
          offsetX:10,
        },
        offsetX: 0, 
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        fontSize: "10px",
        fontFamily: "Helvetica, Arial",
        fontWeight: 500,
        offsetX: 0,
        offsetY: 0,
        itemMargin: {
          horizontal: 5,
          vertical: 2,
        },
        labels: {
          colors: "white",
          useSeriesColors: false,
        },
      },
    },
  });

  return (
    <div>
      <div
        id="chart"
        className="w-[500px] rounded-xl mx-14 h-96 flex justify-center items-center bg-[#202c44fc] text-white"
      >
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={320}
          width={450}
        />
      </div>
      {/* <div id="html-dist"></div> */}
    </div>
  );
}

export default DestIP;
