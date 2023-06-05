import React, { FC, useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { updateMeter } from "../api/updateMeter";
import MeterForm from "./MeterForm";
import { SelectChangeEvent } from "@mui/material/Select";
import { deleteMeter } from "../api/deleteMeter";

const MeterDetailsPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { state: { data } } = location;

  const [displayName, setDisplayName] = React.useState<string>(data.display_name);
  const [apiName, setApiName] = React.useState<string>(data.api_name);
  const [type, setType] = React.useState<string>(data.type);
  const [usedForBilling, setUsedForBilling] = React.useState<boolean>(data.used_for_billing);
  const [active, setActive] = React.useState<boolean>(data.active);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {  
    event.preventDefault();
    updateMeter({
      id: data.id,
      display_name: displayName,
      api_name: apiName,
      type: type,
      used_for_billing: usedForBilling,
      active: active,
    }).then(() => {
      navigate('/');
    });
  }, [data.id, displayName, apiName, type, usedForBilling, active, navigate]);

  const handleDelete = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteMeter({ id: data.id }).then(() => {
      navigate('/');
    });
  }, [data.id, navigate]);

  const handleChangeDisplayName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(event.target.value);
  }, []);

  const handleChangeApiName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setApiName(event.target.value);
  }, []);

  const handleChangeType = useCallback((event: SelectChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as string);
  }, []);

  const handleChangeUsedForBilling = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUsedForBilling(event.target.checked);
  }, []);

  const handleChangeActive = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked);
  }, []);

  return (
    <div>
      <h2>{`${data.display_name} details page`}</h2>
      <MeterForm
        formType="edit"
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        displayName={displayName}
        apiName={apiName}
        type={type}
        usedForBilling={usedForBilling}
        active={active}
        handleChangeDisplayName={handleChangeDisplayName}
        handleChangeApiName={handleChangeApiName}
        handleChangeType={handleChangeType}
        handleChangeUsedForBilling={handleChangeUsedForBilling}
        handleChangeActive={handleChangeActive}
      />
    </div>
  )
}

export default MeterDetailsPage
