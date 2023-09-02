// prettier-ignore
export const invalidEmailsData = [
  {
    email: "\"\"",
    note: "empty email is invalid",
  },
  {
    email: "Abc.example.com",
    note: "No @ character"
  },
  {
    email: "A@b@c@example.com",
    note: "Only one @ is allowed outside quotation marks"
  },
  {
    email: "a\"b(c)d,e:f;g<\h>i[j\\k]l@example.com",
    note: "None of the special characters in the local-part are allowed"
  },
  {
    email: "just\"not\"right@example.com",
    note: "Quoted strings are not supported"
  },
  {
    email: "this is\"notallowed@example.com",
    note: "Spaces, quotes, and backslashes are not allowed"
  },
  { email:  "this\ still\"notallowed@example.com",
    note: "Putting backslashes before space, still not allowed"
  },
];
