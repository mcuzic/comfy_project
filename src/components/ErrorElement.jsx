import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return <h4 className="font-bold">Error</h4>;
};
export default ErrorElement;
