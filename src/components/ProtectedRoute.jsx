import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  let Comp = props.comp;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate.push("/login");
    }
  }, []);
  return (
    <div>
      <Comp />
    </div>
  );
}

export default ProtectedRoute;
