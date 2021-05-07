import React from "react";
import { Controller } from "react-hook-form";
import { TextField, Button, ButtonGroup, Box } from "@material-ui/core";

import { useFormContext, useFieldArray } from "react-hook-form";

const ControlledFieldArray = ({ name, label }) => {
  const { control } = useFormContext();
  const { fields = [], append, remove } = useFieldArray({
    control,
    name,
  });

  const appendField = () => {
    append({
      value: "",
    });
  };

  const removeField = () => {
    remove(-1);
  };

  return (
    <>
      {fields.map((field, index) => (
        <Controller
          key={field.id}
          name={`${name}[${index}].value`}
          control={control}
          defaultValue={field.value}
          render={(
            { onChange, onBlur, value, name, ref },
            { invalid, isTouched, isDirty }
          ) => (
            <TextField
              label={label}
              name={name}
              variant="filled"
              value={value || ""}
              onChange={onChange}
              // error={!!error}
              // helperText={error ? error.message : null}
            />
          )}
        />
      ))}
      <Box>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={appendField}>Add</Button>
          <Button onClick={removeField}>Remove</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default ControlledFieldArray;
