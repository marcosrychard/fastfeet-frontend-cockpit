export function arrayAsObject(arr=[], propertyAsKey='') {
  return arr && propertyAsKey && arr.reduce((sum, val) => (sum[val[propertyAsKey]] = val), {}) || [];
}
