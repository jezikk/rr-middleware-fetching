import { data } from "react-router";
import { authResponseMiddleware } from "~/modules/auth-response";

export const unstable_middleware = [authResponseMiddleware];

export function action() {
  return data({ hello: "world" });
}
