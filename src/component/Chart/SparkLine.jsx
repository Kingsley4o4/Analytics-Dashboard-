import React from "react";
// import useGetActivityQueryHook from "../../hooks/useGetActivityQueryHook";
import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const sparkData = [
  { month: "Jan", value: 25 },
  { month: "Feb", value: 35 },
  { month: "Mar", value: 28 },
  { month: "Apr", value: 45 },
  { month: "May", value: 38 },
  { month: "Jun", value: 52 },
 
];


const SparkLine = ({data}) => {
  // const {activityDetails , error ,isLoading} = useGetActivityQueryHook();
  return (
    <div className="SparkLine" style={{ width: "88%", height: 60 , marginLeft: "10px", marginTop:"-10px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={sparkData}
          // margin={{ top: -55, right: 5, left: -20, bottom: 15 }}
          margin={{ top: -15, right: 5, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6fb1ff" />
              <stop offset="100%" stopColor="#2f80ed" />
            </linearGradient>
            <linearGradient  id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6fb1ff" stopOpacity={0.5} />
              <stop  offset="60%" stopColor="#2f80ed" stopOpacity={0}  />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" hide />
          <YAxis hide domain={[0, 60]} />
          <Tooltip wrapperStyle={{ borderRadius: 6, border: "none" }} />

          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#areaGradient)"
            isAnimationActive={true}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;
