export const renderPromiseAsJson = (res, status, promise) => {
  return promise.then(data => {
    res.status(status).json({ data });
  });
};
