import http from "./httpService";

const getAllCarsService = (req) => {
  return http.get("/cars", {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });
};

export default getAllCarsService;
