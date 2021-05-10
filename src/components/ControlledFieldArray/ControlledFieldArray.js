import React from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  Button,
  ButtonGroup,
  Box,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

import { useFormContext, useFieldArray } from "react-hook-form";

const ControlledFieldArray = ({ name, label }) => {
  const { control, errors, watch } = useFormContext();
  const { fields = [], append, remove } = useFieldArray({
    control,
    name,
  });

  const error = errors[name];

  const appendField = () => {
    append({
      value: "",
    });
  };

  const removeField = () => {
    remove(-1);
  };
  return (
    <FormControl component="fieldset" required error={!!errors}>
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
              error={error && !!error[index]}
              helperText={
                error && error[index] ? error[index]?.value?.message : null
              }
            />
          )}
        />
      ))}
      <Box>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={appendField}>Add</Button>
          {fields?.length >= 1 && <Button onClick={removeField}>Remove</Button>}
        </ButtonGroup>
      </Box>
    </FormControl>
  );
};

export default ControlledFieldArray;
