export function unauthorizedError() {
  return {
    name: 'UnauthorizedError',
    message: `Authentication required`,
  };
}
