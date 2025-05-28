import { data } from "react-router";
import { authDataMiddleware } from "~/modules/auth-data";

export const unstable_middleware = [authDataMiddleware];

export function action() {
  return data({ hello: "world" });
}
