import axios from "axios";

const backUrl = process.env.NEXT_PUBLIC_API_URL;

// const instance = axios.create({
//   baseURL: backUrl,
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });

console.log("backUrl: ", backUrl);
