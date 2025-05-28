import {
  type unstable_MiddlewareFunction as MiddlewareFunction,
  data,
} from "react-router";

export const authDataMiddleware: MiddlewareFunction<Response> = () => {
  throw data("Forbidden", { status: 403, statusText: "Forbidden" });
};
