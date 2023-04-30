import React, { useEffect, useState } from "react";
import { getReqBtnText } from "../../../utils/string.utils";
import { parseJSON } from "../../../utils/json.utils";
import JSXObject from "../JSXObject";
import { usePanel } from "../../../context/PanelContext";

import clsx from "clsx";

const ReqItem = ({ request }) => {
  const [parsedReq, setParsedReq] = useState<any>(null);

  const [isResponseOpen, setIsResponseOpen] = useState(false);

  const resStatus = request.response.status;
  const isSuccessStatus = resStatus > 199 && resStatus < 300;

  const reqPayload = request.request.postData?.text;
  const buttonText = getReqBtnText(request);

  const { filter } = usePanel();

  const isRequestShow = buttonText.toLowerCase().includes(filter.toLowerCase());

  const { search } = usePanel();

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
      className={clsx("req-item  object-container ", {
        "req-item_show": isRequestShow,
        "req-item_open": isResponseOpen,
        "req-item_success": isSuccessStatus,
        "req-item_error": !isSuccessStatus,
      })}
    >
      <button
        className="req-btn"
        onClick={() => setIsResponseOpen((prev) => !prev)}
      >
        {buttonText}
      </button>
      <pre className="req-content">
        <div className="req-response">
          {!parsedReq && <div>no content</div>}
          {parsedReq && (
            <JSXObject
              isShow={isResponseOpen}
              request={parsedReq}
              search={search}
            />
          )}
          {reqPayload && (
            <div className="req-payload">
              <h3 className="req-subtitle">request payload</h3>
              <JSXObject
                isShow={isResponseOpen}
                request={parseJSON(reqPayload)}
                search={search}
              />
            </div>
          )}
        </div>
      </pre>
    </div>
  );
};

export default ReqItem;
