import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  FormGroup,
} from "@material-ui/core";

const ControlledCheckBox = ({ group, name, label }) => {
  const { control, errors } = useFormContext();
  const { options = [] } = group;

  const error = errors[name];

  return (
    <FormControl component="fieldset" error={!!error}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
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
      </FormGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

export default ControlledCheckBox;
