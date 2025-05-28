import type { unstable_MiddlewareFunction as MiddlewareFunction } from "react-router";

export const authResponseMiddleware: MiddlewareFunction<Response> = () => {
  throw Response.json("Forbidden", { status: 403, statusText: "Forbidden" });
};
