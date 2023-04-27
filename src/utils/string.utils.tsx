export const getReqPath = (headers) =>
  headers.find((headersItem) => headersItem.name === ":path")?.value;

export const getReqBtnText = (request) =>
  request.request.method +
  " " +
  (getReqPath(request.request.headers) || request.request.url);
