import React from "react";
import { useRequests } from "../../../context/RequestsContext";
const ReqList = () => {
  const { requests } = useRequests();

  return (
    <div>
      {requests.map((req) => (
        <h1>{req.request.url}</h1>
      ))}
    </div>
  );
};

export default ReqList;
