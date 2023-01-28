import { useRouteError } from "react-router-dom";
import Nav from "../Nav";

export default function ErrorLayout() {
  const error = useRouteError();

  return (
    <article>
      <Nav />
      <h1>
        {(error as any)?.status}
        {(error as any)?.statusText}
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </article>
  );
}
