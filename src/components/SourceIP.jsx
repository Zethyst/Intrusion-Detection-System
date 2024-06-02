import React, { useState } from "react";
import data from "../data.json";
import ReactApexChart from "react-apexcharts";

function SourceIP() {
  const srcIPCounts = {};
  const eventCounts = {};

  data.forEach((event) => {
    const srcIP = event.src_ip;
    const eventType = event.event_type;
    if (!srcIPCounts[srcIP]) {
      srcIPCounts[srcIP] = 1;
    } else {
      srcIPCounts[srcIP]++;
    }

    if (!eventCounts[srcIP]) {
        eventCounts[srcIP] = {};
      }
    
      if (!eventCounts[srcIP][eventType]) {
        eventCounts[srcIP][eventType] = 1;
      } else {
        eventCounts[srcIP][eventType]++;
      }
  });

  const srcIPArray = Object.keys(srcIPCounts).map((srcIP) => ({
    srcIP,
    count: srcIPCounts[srcIP],
  }));
  const eventArray = Object.keys(eventCounts).map((srcIP) => ({
    srcIP,
    count: srcIPCounts[srcIP],
    alertcount: eventCounts[srcIP]["alert"] || 0,
    sshcount: eventCounts[srcIP]["ssh"] || 0,
    dnscount: eventCounts[srcIP]["dns"] || 0,
    httpcount: eventCounts[srcIP]["http"] || 0,
    filecount: eventCounts[srcIP]["fileinfo"] || 0,
  }));
  

  srcIPArray.sort((a, b) => b.count - a.count);
  eventArray.sort((a, b) => b.count - a.count);


const top5 = srcIPArray.slice(0, 5);
const top5event = eventArray.slice(0, 5);
// console.log(eventArray);

  const [chartData] = useState({
    series: [
      {
        name: "Alerts",
        data: [top5event[0].alertcount, top5event[1].alertcount,top5event[2].alertcount, top5event[3].alertcount, top5event[4].alertcount],
      },
      {
        name: "SSH",
        data: [top5event[0].sshcount, top5event[1].sshcount, top5event[2].sshcount, top5event[3].sshcount, top5event[4].sshcount],
      },
      {
        name: "DNS",
        data: [top5event[0].dnscount, top5event[1].dnscount, top5event[2].dnscount, top5event[3].dnscount, top5event[4].dnscount],
      },
      {
        name: "HTTP",
        data: [top5event[0].httpcount, top5event[1].httpcount, top5event[2].httpcount, top5event[3].httpcount, top5event[4].httpcount],
      },
      {
        name: "FILE_INFO",
        data: [top5event[0].filecount, top5event[1].filecount, top5event[2].filecount, top5event[3].filecount, top5event[4].filecount],
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
        text: "Source IP Addresses",
        style: {
          color: "#cccccc88",
          fontSize: "20px",
        },
      },
      xaxis: {
        categories: [top5[0].srcIP, top5[1].srcIP, top5[2].srcIP, top5[3].srcIP, top5[4].srcIP],
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
        className="w-[500px] rounded-xl h-96 flex justify-center items-center bg-[#202c44fc] text-white"
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

export default SourceIP;
