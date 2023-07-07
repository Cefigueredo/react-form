import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRole } from "../features/BasicInfo/basicInfoSlice";

export default function RoleAutocomplete(props) {
  const dispatch = useDispatch();
  const { roles } = props;
  const role = useSelector((state) => state.basicInfo.role);
  const [value, setValue] = React.useState(role);
  let myValue = value;
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    setValue(role);
    forceUpdate();
  }, [role]);
  return (
    <Autocomplete
      value={myValue}
      onChange={(event, newValue) => {
        setValue(newValue);
        dispatch(updateRole(newValue));
      }}
      id="controllable-states-demo"
      options={roles}
      sx={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} label="Enter desired role" />
      )}
    />
  );
}
