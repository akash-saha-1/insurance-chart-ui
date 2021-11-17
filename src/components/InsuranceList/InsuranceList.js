import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import "./InsuranceList.scss";

const InsuranceList = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(false);
  const [data, setData] = useState([]);
  const pageId = new URLSearchParams(window.location.search).get("page");
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    if (!pageId) {
      setShow(false);
    } else if (isNaN(parseInt(pageId))) {
      setShow(false);
    } else if (parseInt(pageId) < 1 || parseInt(pageId) > 25) {
      setShow(false);
    } else {
      setShow(true);
    }

    let loadData = async () => {
      let res = await axios.get(`${serverUrl}/page/${pageId}`);
      setCount(res.data.count);
      setData(res.data.data);
      setLoading(false);
    };

    loadData();
    // eslint-disable-next-line
  }, []);

  const showFirst = async () => {
    history.push(`/insurance-list?page=1`);
    setLoading(true);
    let res = await axios.get(`${serverUrl}/page/1`);
    setCount(res.data.count);
    setData(res.data.data);
    if (res.data.data) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLoading(false);
  };

  const showPrev = async () => {
    history.push(`/insurance-list?page=${pageId - 1}`);
    setLoading(true);
    let res = await axios.get(`${serverUrl}/page/${pageId - 1}`);
    setCount(res.data.count);
    setData(res.data.data);
    if (res.data.data) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLoading(false);
  };

  const showNext = async () => {
    history.push(`/insurance-list?page=${pageId + 1}`);
    setLoading(true);
    let res = await axios.get(`${serverUrl}/page/${pageId + 1}`);
    setCount(res.data.count);
    setData(res.data.data);
    if (res.data.data) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLoading(false);
  };

  const showLast = async () => {
    history.push(`/insurance-list?page=${count}`);
    setLoading(true);
    let res = await axios.get(`${serverUrl}/page/${count}`);
    setCount(res.data.count);
    setData(res.data.data);
    if (res.data.data) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && show && data && data.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Policy Id</th>
              <th>Customer Id</th>
              <th>Date of Purchase</th>
              <th>Fuel</th>
              <th>Vehicle Segment</th>
              <th>Premium</th>
              <th>Bodily Injury Liability</th>
              <th>Personal Injury Protection</th>
              <th>Property Damage Liability</th>
              <th>Collision</th>
              <th>Comprehensive</th>
              <th>Customer Gender</th>
              <th>Customer Income Group</th>
              <th>Customer_Region</th>
              <th>Customer Marital Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={index}>
                <td>{el.Policy_id}</td>
                <td>{el.Customer_id}</td>
                <td>{el.Date_of_Purchase}</td>
                <td>{el.Fuel}</td>
                <td>{el.VEHICLE_SEGMENT}</td>
                <td>${el.Premium}</td>
                <td>{el.bodily_injury_liability === 1 ? "Yes" : "No"}</td>
                <td>{el.personal_injury_protection === 1 ? "Yes" : "No"}</td>
                <td>{el.property_damage_liability === 1 ? "Yes" : "No"}</td>
                <td>{el.collision === 1 ? "Yes" : "No"}</td>
                <td>{el.comprehensive === 1 ? "Yes" : "No"}</td>
                <td>{el.Customer_Gender}</td>
                <td>{el.Customer_Income_Group}</td>
                <td>{el.Customer_Region}</td>
                <td>{el.Customer_Marital_status === 1 ? "Yes" : "No"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info btn-sm"
                    onClick={() => {
                      history.push(`insurance-edit/${el.Policy_id}`);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!loading && show && (
        <div className="col-12 pagination">
          <button
            type="button"
            className={`btn btn-success btn-large prev-btn ${
              pageId < 2 ? "disable" : ""
            }`}
            disabled={pageId < 2 ? true : false}
            onClick={showFirst}
          >
            {"<< "}First
          </button>
          <button
            type="button"
            className={`btn btn-success btn-large prev-btn ${
              pageId < 2 ? "disable" : ""
            }`}
            disabled={pageId < 2 ? true : false}
            onClick={showPrev}
          >
            {"< "}Previous
          </button>
          <button
            type="button"
            className={`btn btn-success btn-large next-btn ${
              pageId < 1 || pageId >= count ? "disable" : ""
            }`}
            disabled={pageId < 1 || pageId >= count ? true : false}
            onClick={showNext}
          >
            Next{"> "}
          </button>
          <button
            type="button"
            className={`btn btn-success btn-large next-btn ${
              pageId < 1 || pageId >= count ? "disable" : ""
            }`}
            disabled={pageId < 1 || pageId >= count ? true : false}
            onClick={showLast}
          >
            Last{">> "}
          </button>
        </div>
      )}
    </>
  );
};

export default InsuranceList;
