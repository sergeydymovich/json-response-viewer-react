import React, { useEffect, useState } from "react";
import { getReqBtnText } from "../../../utils/string.utils";
import { parseJSON } from "../../../utils/json.utils";
import JSXObject from "../JSXObject";

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

  return (
    <div className="req-item req-item_show object-container req-item_open">
      <button className="req-btn">{getReqBtnText(request)}</button>
      <pre className="req-content">
        <div className="req-response">
          {!parsedReq && <div>no content</div>}
          {parsedReq && <JSXObject request={parsedReq} />}
        </div>
      </pre>
    </div>
  );
};

export default ReqItem;
