import React from "react";
import "./activityChart.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useGetActivityQueryHook from "../../hooks/useGetActivityQueryHook";



// ];

const ActivityChart = ({ data }) => {



  const { activityDetails, isLoading, error } = useGetActivityQueryHook();
  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>Error loading data</div>;
 
    const maxVal = Math.max(...activityDetails.map((item) => item.value));
  const maxRounded = Math.ceil(maxVal / 50) * 50;
  const chartData = activityDetails.map((item) => ({ ...item, max: maxVal }));

  return (
    <div className="activity-chart" style={{ width: "100%",  height: "290px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            marginLeft: "15px",
            fontWeight: "500",
            fontSize: "14px",
            marginTop: "6px",
          }}
        >
          Activity
        </span>
        <div style={{
          
        }}>
          
          <select
            style={{
              fontWeight: "500",
              fontSize: "12px",
              marginTop: "5px",
              marginRight: "20px",
              outline: "none",
              border: "none",
              cursor: "pointer",
              maxWidth: "90px",
              display: "flex",
              textAlign: "end",
              alignItems: "center",
            }}
            name=""
            id=""
          >
            <option value="">Months</option>
            <option value="">Last 7 Days</option>
            <option value="">M</option>
          </select>
        </div>
      </div>
      <div className="underlineActivity"></div>

      <ResponsiveContainer>
      

        <BarChart
          margin={{ top: 25, right: 20, left: 0, bottom: 30 }}
          barCategoryGap="28%"
          barGap={-12}
          data={chartData}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2f80ed" stopOpacity={1} />
              <stop offset="100%" stopColor="#6fb1ff" stopOpacity={1} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#9aa0ad" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#9aa0ad" }}
            
          />
          <Tooltip
            wrapperStyle={{
              borderRadius: 6,
              border: "none",
              boxShadow: "none",
            }}
            contentStyle={{
              borderRadius: 6,
              fontSize: 12,
              border: "none",
              boxShadow: "none",
            }}
            cursor={{ fill: "transparent" }}
          />

          <Bar
            dataKey="max"
            fill="#eef6ff"
            radius={[10, 10, 10, 10]}
            barSize={14}
            stroke="none"
          />
          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            radius={[8, 8, 0, 0]}
            barSize={12}
            animationDuration={800}
            stroke="none"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
