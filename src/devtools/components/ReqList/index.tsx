import React from "react";
import { useRequests } from "../../../context/RequestsContext";
import ReqItem from "../ReqItem";
const ReqList = () => {
  const { requests } = useRequests();

  return (
    <div>
      {requests.map((req) => (
        <ReqItem request={req} />
      ))}
    </div>
  );
};

export default ReqList;
