import React from "react";
import { Controller } from "react-hook-form";
import { TextField, Button, ButtonGroup, Box } from "@material-ui/core";

import { useFormContext, useFieldArray } from "react-hook-form";

// TODO:
// - Validation

const ControlledFieldArray = ({ name, label }) => {
  const { control, error } = useFormContext();
  const { fields, append, remove } = useFieldArray({
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
      {fields &&
        fields.map((field, index) => (
          <Controller
            name={`${name}[${index}].value`}
            control={control}
            defaultValue={field.value}
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
          <Button onClick={appendField}>Add</Button>
          <Button onClick={removeField}>Remove</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default ControlledFieldArray;
