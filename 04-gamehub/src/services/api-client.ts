import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5aa2c88f8c874d7984b6b29cb7d6a3db",
  },
});
