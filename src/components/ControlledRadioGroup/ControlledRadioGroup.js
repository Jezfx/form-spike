import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

const ControlledRadioGroup = ({ group, name, label }) => {
  const { control, errors } = useFormContext();
  const { key, options } = group;

  const error = errors[name];

  return (
    <FormControl component="fieldset" required error={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <Controller
        name={key}
        control={control}
        render={(
          { onChange, onBlur, value, name, ref },
          { invalid, isTouched, isDirty }
        ) => (
          <RadioGroup
            key={key}
            name={name}
            value={value || ""}
            onChange={onChange}
          >
            {options?.map(({ ...props }) => (
              <FormControlLabel control={<Radio />} {...props} />
            ))}
          </RadioGroup>
        )}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

export default ControlledRadioGroup;
