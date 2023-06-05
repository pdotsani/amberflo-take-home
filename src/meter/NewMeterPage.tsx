import React, { FC, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import MeterForm from "./MeterForm";
import { SelectChangeEvent } from "@mui/material/Select";
import { createMeter } from "../api/createMeter";

const NewMeterPage: FC = () => {
  const navigate = useNavigate()

  const [displayName, setDisplayName] = React.useState<string>('');
  const [apiName, setApiName] = React.useState<string>('');
  const [type, setType] = React.useState<string>('sum');
  const [usedForBilling, setUsedForBilling] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {  
    event.preventDefault();
    createMeter({
      display_name: displayName,
      api_name: apiName,
      type: type,
      used_for_billing: usedForBilling,
      active: active,
    }).then(() => {
      navigate('/');
    });
  }, [displayName, apiName, type, usedForBilling, active, navigate]);  

  const handleChangeDisplayName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(event.target.value)
  }, []);

  const handleChangeApiName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setApiName(event.target.value)
  }, []);

  const handleChangeType = useCallback((event: SelectChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as string)
  }, []);

  const handleChangeUsedForBilling = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUsedForBilling(event.target.checked)
  }, []);

  const handleChangeActive = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked)
  }, []);

  return (
    <div>
      <h2>NewMeter</h2>
      <MeterForm
        formType="new"
        handleSubmit={handleSubmit} 
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

export default NewMeterPage;
