import Constants from "../Constants";

interface ICreateMeterArgs {
  api_name: string;
  display_name: string;
  active: boolean;
  used_for_billing: boolean;
  type: string;
}

export const createMeter = async ({
  api_name,
  display_name,
  active,
  used_for_billing,
  type,
}: ICreateMeterArgs) => {
    const response = await fetch(Constants.METERS_API, {
      method: "POST",
      headers: {
        "API-KEY": process.env.REACT_APP_API_KEY || "",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_name,
        display_name,
        active,
        used_for_billing,
        type,
      })
    });
    const meter = await response.json();
    return meter;
}