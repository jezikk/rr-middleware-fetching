import { useEffect } from "react";
import { href } from "react-router";
import { useFetcher } from "react-router";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  const fetcher = useFetcher();

  async function callFetchData() {
    const res = await fetch(href("/api/data"), { method: "POST", body: null });
    const data = await res.json();
    console.log("From fetch:", data);
  }

  async function callFetchResponse() {
    const res = await fetch(href("/api/response"), {
      method: "POST",
      body: null,
    });
    const data = await res.json();
    console.log("From fetch:", data);
  }

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      console.log("From fetcher:", fetcher.data);
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-[600px] w-full flex flex-col gap-4 px-4">
          <div className="flex gap-4">
            <button
              type="button"
              className="py-2 px-4 rounded-lg bg-indigo-500 hover:cursor-pointer hover:bg-indigo-600 text-indigo-50 text-sm font-semibold"
              onClick={callFetchData}
            >
              Fetch data
            </button>

            <button
              type="button"
              className="py-2 px-4 rounded-lg bg-indigo-500 hover:cursor-pointer hover:bg-indigo-600 text-indigo-50 text-sm font-semibold"
              onClick={() =>
                fetcher.submit(null, {
                  action: href("/api/data"),
                  encType: "application/json",
                  method: "POST",
                })
              }
            >
              Fetcher data
            </button>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              className="py-2 px-4 rounded-lg bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-blue-50 text-sm font-semibold"
              onClick={callFetchResponse}
            >
              Fetch response
            </button>

            <button
              type="button"
              className="py-2 px-4 rounded-lg bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-blue-50 text-sm font-semibold"
              onClick={() =>
                fetcher.submit(null, {
                  action: href("/api/response"),
                  encType: "application/json",
                  method: "POST",
                })
              }
            >
              Fetcher response
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
