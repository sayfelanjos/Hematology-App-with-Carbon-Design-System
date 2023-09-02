import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:4007/auth/signin", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoic2F5bW9uZmVsaXBlQGhvdG1haWwuY29tIiwiaWF0IjoxNjg5Mjg5MzcxLCJleHAiOjE2ODkyODk0MzF9.k0OpQkKYewyZC2AsCqsLjisIc3e3yOJuDM7c4heYpfg",
      }),
    );
  }),

  rest.get("user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        }),
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      }),
    );
  }),
];
