import React, { useEffect, useState } from "react";
import { getReqBtnText } from "../../../utils/string.utils";
import { parseJSON } from "../../../utils/json.utils";
import JSXObject from "../JSXObject";
import clsx from "clsx";

const ReqItem = ({ request }) => {
  const [parsedReq, setParsedReq] = useState<any>(null);

  const [isResponseOpen, setIsResponseOpen] = useState(false);

  const resStatus = request.response.status;
  const isSuccessStatus = resStatus > 199 && resStatus < 300;

  const reqPayload = request.request.postData?.text;

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
    <div
      className={clsx("req-item req-item_show object-container ", {
        "req-item_open": isResponseOpen,
        "req-item_success": isSuccessStatus,
        "req-item_error": !isSuccessStatus,
      })}
    >
      <button
        className="req-btn"
        onClick={() => setIsResponseOpen((prev) => !prev)}
      >
        {getReqBtnText(request)}
      </button>
      <pre className="req-content">
        <div className="req-response">
          {!parsedReq && <div>no content</div>}
          {parsedReq && <JSXObject request={parsedReq} />}
          {reqPayload && (
            <div className="req-payload">
              <h3 className="req-subtitle">request payload</h3>
              <JSXObject request={parseJSON(reqPayload)} />
            </div>
          )}
        </div>
      </pre>
    </div>
  );
};

export default ReqItem;
