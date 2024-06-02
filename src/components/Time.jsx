import Chart from "react-apexcharts";
import data from "../data.json";

function Time() {

  const extractHours = (timestamp) => {
    const date = new Date(timestamp);
    return date.getHours();
  };

  const hoursArray = data.map((item) => extractHours(item.timestamp));
  const uniqueHoursArray = [...new Set(hoursArray)];
  // Count frequencies of each hour
  const hourFrequencies = hoursArray.reduce((acc, hour) => {
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {});

  const frequenciesArray = uniqueHoursArray.map(
    (hour) => hourFrequencies[hour]
  );

  console.log(uniqueHoursArray);

  return (
    <>
      <div className="w-[500px] rounded-xl bg-[#202c44fc] pt-5 px-3 mx-3 translate-x-5">
        <Chart
          type="line"
          height={300}
          width={450}
          series={[
            {
              name: "Frequencies",
              data: frequenciesArray, // Use the hoursArray data
            },
          ]}
          options={{
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              colors:['#0ea5e9']
            },
            title: {
              text: "Alert Chart",
              align: "left",
              style: {
                color: "#cccccc88", 
                fontSize: "20px",
              },
            },
            grid: {
              row: {
                colors: ["#202c44c0", "#303c5c"], 
                opacity: 0.5,
              },
            },
            chart: {
                background: '#202c44c0', // Background color of the plot area
                foreColor: '#cccccc88', // Text color within the plot area
              },
            xaxis: {
              categories: uniqueHoursArray, 
              labels: {
                style: {
                  colors: "#ccc", 
                },
              },
              title: {
                text: 'Time of day in hours',
                style: {
                  color: "#ccc", 
                },
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: "#ccc", 
                },
              },
              title: {
                text: 'No. of alerts',
                style: {
                  color: "#ccc",
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default Time;
