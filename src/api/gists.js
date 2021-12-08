import { request } from "./request";

export const getGistsApi = (page = 1) =>
  request.get(`/gists/public?page=${page}`);
