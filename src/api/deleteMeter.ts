import Constants from "../Constants";

interface IDeleteMeterArgs {
  id: string;
}

export const deleteMeter = async ({
  id,
}: IDeleteMeterArgs) => {
    const response = await fetch(Constants.METERS_API_WITH_ID.replace(":id", id), {
      method: "DELETE",
      headers: {
        "API-KEY": process.env.REACT_APP_API_KEY || "",
        "Content-Type": "application/json"
      }
    });
    const meter = await response.json();
    return meter;
}