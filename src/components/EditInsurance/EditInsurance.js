import React, { useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import "./EditInsurance.scss";

const EditInsurance = (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const initialFormState = {
    Policy_id: "",
    Date_of_Purchase: "",
    Customer_id: "",
    Fuel: "",
    VEHICLE_SEGMENT: "",
    Premium: "",
    bodily_injury_liability: "",
    personal_injury_protection: "",
    property_damage_liability: "",
    collision: "",
    comprehensive: "",
    Customer_Gender: "",
    Customer_Income_Group: "",
    Customer_Region: "",
    Customer_Marital_status: "",
  };
  const id = props.match.params.id;
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  const history = useHistory();

  const formReducer = (state, action) => {
    switch (action.type) {
      case "text-change":
        return {
          ...state,
          [action.name]: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const onChangeText = (e) => {
    let val = e.target.value;
    if (val === "No" || val === "no") {
      val = 0;
    }
    if (val === "Yes" || val === "yes") {
      val = 1;
    }
    dispatch({
      type: "text-change",
      name: e.target.name,
      payload: val,
    });
  };

  useEffect(() => {
    setLoading(true);
    let loadData = async () => {
      let res = await axios.get(`${serverUrl}/${id}`);
      if (res.data.data) {
        setData(res.data.data);
        let element = res.data.data;
        for (const [key, value] of Object.entries(element)) {
          dispatch({
            type: "text-change",
            name: key,
            payload: value,
          });
        }
      }
      setLoading(false);
    };

    if (!id || id.length < 1 || isNaN(id)) {
      setShow(false);
      setLoading(false);
    } else {
      setShow(true);
      loadData();
    }

    // eslint-disable-next-line
  }, []);

  const update = async () => {
    if (
      state &&
      state.Premium &&
      state.Premium > 0 &&
      state.Premium <= 1000000
    ) {
      setError(false);
      setLoading(true);
      const res = await axios.put(`${serverUrl}/${id}`, { ...state });
      if (res.data) {
        history.push("/insurance-list?page=1");
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && show && data && (
        <div className="col-md-4 offset-md-4 form-wrapper">
          <form className="form" method="POST">
            <div className="form-group">
              <label htmlFor="policyId">Policy Id</label>
              <input
                type="text"
                className="form-control"
                id="policyId"
                name="Policy_id"
                placeholder={state.Policy_id}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="customerId">Customer Id</label>
              <input
                type="text"
                className="form-control"
                id="customerId"
                name="Customer_id"
                placeholder={state.Customer_id.toString()}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date of Purchase</label>
              <input
                type="text"
                className="form-control"
                id="date"
                name="Date_of_Purchase"
                placeholder={state.Date_of_Purchase}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="fuel">Fuel</label>
              <select
                type="text"
                className="form-control"
                id="fuel"
                name="Fuel"
                onChange={(e) => onChangeText(e)}
                value={state.Fuel}
              >
                <option val="CNG">CNG</option>
                <option val="Petrol">Petrol</option>
                <option val="Diesel">Diesel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="segment">Vehicle Segment</label>
              <select
                type="text"
                className="form-control"
                id="segment"
                name="VEHICLE_SEGMENT"
                onChange={(e) => onChangeText(e)}
                value={state.VEHICLE_SEGMENT}
              >
                <option val="A">A</option>
                <option val="B">B</option>
                <option val="C">C</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="premium">Premium</label>
              <input
                type="number"
                className={`form-control ${error ? "red-border" : ""}`}
                id="premium"
                name="Premium"
                onChange={(e) => onChangeText(e)}
                value={state.Premium}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body Injury Liablity</label>
              <input
                type="text"
                className="form-control"
                id="body"
                name="bodily_injury_liability"
                placeholder={
                  state.personal_injury_protection === 0 ? "No" : "Yes"
                }
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="perosnal">Personal Injury Protection</label>
              <input
                type="text"
                className="form-control"
                id="perosnal"
                name="personal_injury_protection"
                placeholder={
                  state.personal_injury_protection === 0 ? "No" : "Yes"
                }
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="property">Property Damage Liablity</label>
              <input
                type="text"
                className="form-control"
                id="property"
                name="property_damage_liability"
                placeholder={
                  state.property_damage_liability === 0 ? "No" : "Yes"
                }
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="collision">Collision</label>
              <input
                type="text"
                className="form-control"
                id="collision"
                name="collision"
                placeholder={state.collision === 0 ? "No" : "Yes"}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="comprehensive">Comprehensive</label>
              <input
                type="text"
                className="form-control"
                id="comprehensive"
                name="comprehensive"
                placeholder={state.comprehensive === 0 ? "No" : "Yes"}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                className="form-control"
                id="Customer_Gender"
                name="Policy_id"
                placeholder={state.Customer_Gender.toString()}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="income">Income Group</label>
              <select
                type="text"
                className="form-control"
                id="income"
                name="Customer_Income_Group"
                onChange={(e) => onChangeText(e)}
                value={state.Customer_Income_Group}
              >
                <option val="0- $25K">0- $25K</option>
                <option val="$25-$70K">$25-$70K</option>
                <option val=">$70K">{">"}$70K</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <select
                type="text"
                className="form-control"
                id="region"
                name="Customer_Region"
                onChange={(e) => onChangeText(e)}
                value={state.Customer_Region}
              >
                <option val="East">East</option>
                <option val="West">West</option>
                <option val="North">North</option>
                <option val="South">South</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="maritial">Maritial Status</label>
              <select
                type="text"
                className="form-control"
                id="maritial"
                name="Customer_Marital_status"
                onChange={(e) => onChangeText(e)}
                defaultValue={
                  state.Customer_Marital_status === 0 ? "No" : "Yes"
                }
              >
                <option val="Yes">Yes</option>
                <option val="No">No</option>
              </select>
            </div>
            {error && (
              <h6 className="error">
                Please enter correct value of Premium, must be between 1 to
                10,00,000
              </h6>
            )}
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={update}
            >
              Update
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditInsurance;
