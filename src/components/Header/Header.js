import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState(1);
  const [change, setChange] = useState(Math.random);
  const [search, setSearch] = useState("");
  const history = useHistory();

  useEffect(() => {
    console.log(0);
    console.log(window.location.href);
    if (window.location.href.indexOf("/insurance") > -1) {
      console.log(1);
      setActive(1);
    } else if (window.location.href.indexOf("/graph") > -1) {
      setActive(2);
      console.log(2);
    } else {
      console.log(3);
      setActive(3);
    }
  }, [change]);

  let searchItem = () => {
    history.push(`/search?id=${search}`);
    setSearch("");
    setChange(Math.random());
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/insurance-list?page=1">
        Insurace
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${active === 1 ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/insurance-list?page=1"
              onClick={() => setChange(Math.random())}
            >
              Insurance List
            </Link>
          </li>
          <li className={`nav-item ${active === 2 ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/graph"
              onClick={() => setChange(Math.random())}
            >
              Charts
            </Link>
          </li>
          <li className={`nav-item ${active === 3 ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/search"
              onClick={() => setChange(Math.random())}
            >
              Search Results
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search with ID"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 search-btn"
            type="button"
            onClick={searchItem}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
