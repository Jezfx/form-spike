import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

const ControlledCheckBox = ({ group, name, label }) => {
  const { control, errors } = useFormContext();
  const { key, options = [] } = group;

  const error = errors[name];

  return (
    <FormControl component="fieldset" required error={!!error}>
      {options?.map((props, index) => (
        <FormControlLabel
          key={`${name}[${index}]`}
          label={props.label}
          control={
            <Controller
              name={`${name}[${index}]`}
              control={control}
              render={(
                { onChange, onBlur, value, name, ref },
                { invalid, isTouched, isDirty }
              ) => (
                <Checkbox
                  name={`${name}[${index}]`}
                  value={`${name}[${props.value}]`}
                  onChange={(e) => {
                    e.target.checked ? onChange(props.value) : onChange();
                  }}
                />
              )}
            />
          }
        />
      ))}
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

export default ControlledCheckBox;
