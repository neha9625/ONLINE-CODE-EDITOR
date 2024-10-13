import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};

const fetchSupportedRuntimes = async () => {
  try {
    const response = await API.get("/runtimes");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching runtimes:", error);
  }
};

fetchSupportedRuntimes();
