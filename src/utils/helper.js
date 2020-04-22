export const renderPromiseAsJson = (promise, res) =>
  promise
    .then(({ status, data }) => res.status(status).json(data))
    .catch(({ status, data }) => res.status(status).json(data));
