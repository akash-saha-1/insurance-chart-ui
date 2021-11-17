import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import "./../InsuranceList/InsuranceList.scss";
import "./SearchResult.scss";

const SearchResult = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const searchId = new URLSearchParams(window.location.search).get("id");
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  const history = useHistory();

  useEffect(() => {
    setLoading(true);

    let loadData = async () => {
      let res = await axios.get(`${serverUrl}/search/${searchId}`);
      setData(res.data.data);
      setLoading(false);
    };

    if (!searchId) {
      setShow(false);
      setLoading(false);
    } else if (isNaN(parseInt(searchId))) {
      setShow(false);
      setLoading(false);
    } else if (parseInt(searchId) < 1) {
      setShow(false);
      setLoading(false);
    } else {
      setShow(true);
      loadData();
    }

    // eslint-disable-next-line
  }, [searchId]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && show && data && data.length > 0 && (
        <table className="table table-striped search-table">
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
      {!loading && !data.length > 0 && (
        <h5>
          No Result Found with your given ID. Plese Search with valid ID to get
          result.
        </h5>
      )}
    </>
  );
};

export default SearchResult;
