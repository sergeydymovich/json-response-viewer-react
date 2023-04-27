import React, { useEffect, useState } from "react";
import { getReqBtnText } from "../../../utils/string.utils";
import { parseJSON } from "../../../utils/json.utils";

const ReqItem = ({ request }) => {
  const [parsedReq, setParsedReq] = useState<any>(null);

  const resStatus = request.response.status;
  const isSuccessStatus = resStatus > 199 && resStatus < 300;

  useEffect(() => {
    request.getContent((content) => {
      const parsedResponse = parseJSON(content);

      if (!parsedResponse || typeof parsedResponse === "string") {
        setParsedReq(null);
      } else {
        setParsedReq(parsedResponse);
      }
    });
  }, [request]);

  console.log("parsedReq", parsedReq);

  return (
    <div className="flex flex-col overflow-hidden">
      <button>{getReqBtnText(request)}</button>
      <pre>{!parsedReq && <div>no content</div>}</pre>
    </div>
  );
};

export default ReqItem;
