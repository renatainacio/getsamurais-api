import httpStatus from 'http-status';

export default function handleApplicationErrors(err, req, res, next) {
  if (err.name === 'InvalidDataError') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);
  }

  if (err.name === 'NotFoundError') {
    return res.status(httpStatus.NOT_FOUND).send(err.message);
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(httpStatus.NOT_FOUND).send(err.message);
  }

  if (err.name === 'ConflictError') {
    return res.status(httpStatus.CONFLICT).send(err.message);
  }

  console.log(err);

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Internal Server Error');
}
