import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://reqres.in/api",
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export const cmsAxiosClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_CMS_URL, // env
  // baseURL: "https://hotstrapi-api.apps.openxcell.dev/api", // dev
  baseURL: "https://cms.skilldb.com/api", // production
  // baseURL: "http://localhost:1337/api", // local
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export const skilldbAxiosClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_APP_API_URL, // env
  baseURL: "http://localhost:5000/api", // local
  // baseURL: "https://api.skilldb.com/api", // skilldb live
  // baseURL: "https://skilldb-api.apps.openxcell.dev/api", // skilldb development
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export const colorPicker = (name: string): string => {
  const toLowerName = name[0].toLowerCase();
  if ("abcde".includes(toLowerName)) {
    return "avatar-bg-a";
  }
  if ("fghij".includes(toLowerName)) {
    return "avatar-bg-b";
  }
  if ("klmno".includes(toLowerName)) {
    return "avatar-bg-c";
  }
  if ("pqrst".includes(toLowerName)) {
    return "avatar-bg-d";
  }
  if ("vuwxyz".includes(toLowerName)) {
    return "avatar-bg-e";
  }
  return "avatar-bg-default";
};

export const getInits = (name: string): string => {
  const pureName = name.trim();
  const nameArray = pureName.split(" ");
  if (nameArray?.length >= 2) {
    return nameArray[0]?.[0] + nameArray[1]?.[0];
  } else if (nameArray?.length === 1) {
    return nameArray[0].slice(0, 2);
  } else {
    return "";
  }
};
