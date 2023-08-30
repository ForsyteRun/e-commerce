const throwRouteError = (status: number, statusText: string): never => {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw new Response('Error', { status, statusText });
};

export default throwRouteError;
