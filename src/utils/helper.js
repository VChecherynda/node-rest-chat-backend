export const renderPromiseAsJson = (promise, res) =>
  promise
    .then(({ status, data }) => res.status(status).json(data))
    .catch(({ status, data }) => res.status(status).json(data));

export const isNull = x => (x === null ? [] : x);
