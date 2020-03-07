import { api_images } from "../../../api/apiExampleI";
import axios from "axios";

export const FetchDataImages = async callback => {
  try {
    axios.get(api_images).then(result => {
      callback({ result: result.data, code: result.status });
    });
  } catch (error) {
    callback({ result: error, code: "500" });
  }
};
