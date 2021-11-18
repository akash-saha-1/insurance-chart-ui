import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "./Graph.scss";
import Loader from "../Loader/Loader";

const Graph = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let backgroundColor1 = "rgba(255, 99, 132, 0.2)";
  let backgroundColor2 = "rgba(54, 162, 235, 0.2)";
  let backgroundColor3 = "rgba(255, 206, 86, 0.2)";
  let backgroundColor4 = "rgb(204, 255, 204)";

  let borderColor1 = "rgba(255, 99, 132, 1)";
  let borderColor2 = "rgba(54, 162, 235, 1)";
  let borderColor3 = "rgba(255, 206, 86, 1)";
  let borderColor4 = "rgba(75, 192, 192, 1)";

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      let res = await axios.get(`${serverUrl}/chart`);
      setData(res.data.data);
      if (res.data.data) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLoading(false);
    };
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && show && data && (
        <>
          <h3 className="sales-heading">No of Insurance Sales Region Wise</h3>
          <div className="col-12 chart-wrapper">
            <Bar
              height={450}
              width={"100%"}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                },
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
              data={{
                labels: months,
                datasets: [
                  {
                    label: "North Region",
                    data: data["North"],
                    backgroundColor: backgroundColor1,
                    borderColor: borderColor1,
                    borderWidth: 1,
                  },
                  {
                    label: "South Region",
                    data: data["South"],
                    backgroundColor: backgroundColor2,
                    borderColor: borderColor2,
                    borderWidth: 1,
                  },
                  {
                    label: "East Region",
                    data: data["East"],
                    backgroundColor: backgroundColor3,
                    borderColor: borderColor3,
                    borderWidth: 1,
                  },
                  {
                    label: "West Region",
                    data: data["West"],
                    backgroundColor: backgroundColor4,
                    borderColor: borderColor4,
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Graph;
