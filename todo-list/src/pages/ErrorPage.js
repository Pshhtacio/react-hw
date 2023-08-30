import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return(
    <div>
      <h1>ERROR! ERROR! ERROR!</h1>
      <div>Error Status: {error.statusText}</div>
      <div>Error Message: {error.message}</div>
    </div>
  )
}