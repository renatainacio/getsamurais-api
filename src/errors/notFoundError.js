export function notFoundError(details) {
  return {
    name: 'NotFoundError',
    message: `${details} not found`,
  };
}
