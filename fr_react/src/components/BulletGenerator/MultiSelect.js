import { Autocomplete, Chip, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBulletGenerator } from "../../features/BulletGenerator/BulletGeneratorSlice";

export default function MultiSelect(props) {
  // Selectors -------------------------------------------------------
  const what = useSelector((state) => state.bulletGeneratorInfo.what);
  const actionVerb = useSelector(
    (state) => state.bulletGeneratorInfo.actionVerb
  );
  const whichTechnologies = useSelector(
    (state) => state.bulletGeneratorInfo.whichTechnologies
  );
  const forWhom = useSelector((state) => state.bulletGeneratorInfo.forWhom);
  const how = useSelector((state) => state.bulletGeneratorInfo.how);
  const why = useSelector((state) => state.bulletGeneratorInfo.why);
  // Shallow copy to redux bullet generator info
  let bulletGenerator = {
    what: what,
    actionVerb: actionVerb,
    whichTechnologies: whichTechnologies,
    forWhom: forWhom,
    how: how,
    why: why,
  };

  const { options, labelName } = props;
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    bulletGenerator.whichTechnologies = newValue;
    dispatch(updateBulletGenerator(bulletGenerator));
  };

  return (
    <div className="multi-select">
      <Autocomplete
        value={value}
        onChange={handleChange}
        multiple
        id="tags-filled"
        options={options.map((option) => option)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label={labelName}
            placeholder="Search"
          />
        )}
      />
    </div>
  );
}
