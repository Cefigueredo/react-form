import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBulletGenerator } from "../../features/BulletGenerator/BulletGeneratorSlice";

const filter = createFilterOptions();

export default function AutocompleteField(props) {
  const dispatch = useDispatch();
  // Selectors -------------------------------------------------------
  const bulletGen = useSelector((state) => state.bulletGeneratorInfo);
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

  const { optionsProps, labelProps, index, propValue } = props;
  // 1. Value when clicked
  let value = "";
  const handleChange = (e) => {
    switch (index) {
      case "what":
        if (value) {
          bulletGenerator.what = value.title;
        } else {
          bulletGenerator.what = "";
        }
        break;
      case "actionVerb":
        if (value) {
          bulletGenerator.actionVerb = value.title;
        } else {
          bulletGenerator.actionVerb = "";
        }
        break;
      case "whichTechnologies":
        if (value) {
          bulletGenerator.whichTechnologies = value.title;
        } else {
          bulletGenerator.whichTechnologies = "";
        }
        break;

      default:
        break;
    }
    dispatch(updateBulletGenerator(bulletGenerator));
  };
  let placeValue = () => {
    if (index === "what") {
      myValue = what;
    } else if (index === "actionVerb") {
      myValue = actionVerb;
    } else if (index === "whichTechnologies") {
      myValue = whichTechnologies;
    }
  };
  // 2. Value when it loses the focus
  let myValue = "";
  placeValue();
  return (
    <Autocomplete
      className="autocomplete-inside"
      value={myValue}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          value = {
            title: newValue,
          };
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          value = {
            title: newValue.inputValue,
          };
        } else {
          value = newValue;
        }
        handleChange();
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.title
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={index}
      options={optionsProps}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField className="textfield" {...params} label={labelProps} />
      )}
    />
  );
}
