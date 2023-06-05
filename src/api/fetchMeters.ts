import Constants from "../Constants";

export const fetchMeters = async () => {
    const response = await fetch(Constants.METERS_API, {
      headers: {
        "API-KEY": process.env.REACT_APP_API_KEY || ""
      }
    });
    const meters = await response.json();
    return meters;
}
