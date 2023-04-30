export const getReqPath = (headers) =>
  headers.find((headersItem) => headersItem.name === ":path")?.value;

export const getReqBtnText = (request) =>
  request.request.method +
  " " +
  (getReqPath(request.request.headers) || request.request.url);

export const insertTagIntoString = (str, subStr) => {
  const elIds = [];
  let lastIndex = -1;
  let resultStr = "";

  while (
    (lastIndex = str.toLowerCase().indexOf(subStr, lastIndex + 1)) !== -1
  ) {
    resultStr +=
      str.substring(elIds[elIds.length - 1] + subStr.length, lastIndex) +
      `<mark class='search-mark'>${str.substring(
        lastIndex,
        lastIndex + subStr.length
      )}</mark>`;

    elIds.push(lastIndex);
  }

  if (!resultStr) return str;

  return resultStr + str.substring(elIds[elIds.length - 1] + subStr.length);
};
