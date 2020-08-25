export function getSearchParam(location, queryParam) {
  const params = new URLSearchParams(location);
  return params.get(queryParam);
}
