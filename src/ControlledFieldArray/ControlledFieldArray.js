import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField, Button, ButtonGroup, Box } from "@material-ui/core";

import { useFormContext } from "react-hook-form";

import { removeLastItem } from "./ControlledFieldArray.utils";

const ControlledFieldArray = ({ name, defaultValue, label }) => {
  // think we need to remove error from the render to get this one
  const { control, error } = useFormContext();
  const [fields, setFields] = useState(defaultValue);

  const addField = () => {
    const newArray = [...fields, ""];
    setFields(newArray);
  };

  const removeField = () => {
    const newArray = removeLastItem(fields);
    setFields(newArray);
  };

  return (
    <>
      {fields.map((field, i) => (
        <Controller
          name={`${name}[${i}]`}
          control={control}
          defaultValue={field}
          render={({
            field: { onChange, value, name },
            fieldState: { error },
          }) => (
            <TextField
              label={label}
              name={name}
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      ))}
      <Box>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={addField}>Add</Button>
          <Button onClick={removeField}>Remove</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default ControlledFieldArray;
