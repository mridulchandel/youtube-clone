import axios from "axios";

export const getData = async (url) => {
  try {
    const response = await axios({
      method: "get",
      url,
    });
    const { data, status } = response;
    let responseData = data;
    if (responseData != null) {
      responseData.status = status;
      responseData.success = true;
    } else {
      responseData = {
        status: response.status,
        success: false,
        errorMessage: "Sorry, something went wrong, Please try again",
      };
    }
    return responseData;
  } catch (error) {
    if (!error.response) {
      return {
        status: 0,
        success: false,
        errorMessage: "Check your Internet",
      };
    }
    const { response } = error;
    return {
      status: response.status,
      success: false,
      errorMessage: "Sorry, something went wrong, Please try again",
    };
  }
};
