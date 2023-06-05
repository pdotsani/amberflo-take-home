import React, { FC, useCallback } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import "./MeterForm.css";

export type FormType = "edit" | "new";

interface IMeterForm {
  formType: FormType;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleDelete?: (event: React.FormEvent<HTMLFormElement>) => void;
  displayName: string;
  apiName: string;
  type: any;
  usedForBilling: boolean;
  active: boolean;
  handleChangeDisplayName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeApiName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeType: (event: SelectChangeEvent<HTMLInputElement>) => void;
  handleChangeUsedForBilling: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeActive: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MeterForm: FC<IMeterForm> = ({ 
  formType,
  handleSubmit,
  handleDelete,
  displayName,
  apiName,
  type,
  usedForBilling,
  active,
  handleChangeDisplayName,
  handleChangeApiName,
  handleChangeType,
  handleChangeUsedForBilling,
  handleChangeActive
}) => {
  const [isHandleSubmit, setHandleSubmit] = React.useState<boolean>(true);

  const handleOnClickDelete = useCallback(() => {
    setHandleSubmit(false);
  }, []);
  
  return (
    <form className="meterForm" onSubmit={isHandleSubmit ? handleSubmit : handleDelete }>
        <Box sx={{
          marginBottom: 2,
        }}>
          <TextField fullWidth id="display_name" label="Display Name" value={displayName} onChange={handleChangeDisplayName} />
        </Box>
        <Box sx={{
          marginBottom: 2,
        }}>
          <TextField fullWidth id="api_name" label="API Name" value={apiName} onChange={handleChangeApiName}/>
        </Box>
        <Box sx={{
          marginBottom: 2.5,
        }}>
          <FormControl fullWidth>
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              label="Type"
              value={type}
              onChange={handleChangeType}>
                <MenuItem value={"sum"}>Sum</MenuItem>
                <MenuItem value={"max"}>Max</MenuItem>
                <MenuItem value={"unique_count"}>Unique Count</MenuItem>
              </Select>
          </FormControl>
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
        }}>
          <div>Used for billing</div>
          <Checkbox
            id="used_for_billing"
            checked={usedForBilling}
            onChange={handleChangeUsedForBilling}
            />
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
        }}>
          <div>Active</div>
          <Checkbox 
            id="active" 
            checked={active}
            onChange={handleChangeActive}
          />
        </Box>
        <Box sx={{
          marginTop: 5,
        }}>
          <Link to="/"><Button variant="text" color="secondary">Cancel</Button></Link>
          {formType === "edit" && <Button variant="contained" color="error" type="submit" onClick={handleOnClickDelete}>Delete</Button>}
          <Button variant="contained" color="primary" type="submit">Save</Button>
        </Box>
      </form>
  )
}

export default MeterForm