export const serverErrorHandler = (err, req, res, next) => {
  res.status(500).json({ error: err });
};
