import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4de91cb9afd54ce8bb8f636233128077",
  },
});
