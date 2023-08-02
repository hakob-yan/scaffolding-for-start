import React from "react";
import { useNavigate } from "react-router-dom";
import * as paths from "../../constants/routerPaths"

import "./styles.scss";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page-wrapper">
      <h1>This page does not exist. </h1>
      <p onClick={() => navigate(paths.HOME)}>Go Home</p>
    </div>
  );
};

export default ErrorPage;
