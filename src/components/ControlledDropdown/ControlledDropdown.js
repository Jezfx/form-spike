import React from "react";
import { TextField, FormLabel, FormControl } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const ControlledDropdown = ({ label, options = [], name }) => {
  const { control, errors } = useFormContext();

  const error = errors[name];

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Controller
        id={name}
        name={name}
        control={control}
        render={(
          { onChange, onBlur, value, name, ref },
          { invalid, isTouched, isDirty }
        ) => (
          <TextField
            select
            onChange={onChange}
            value={value || ""}
            name={name}
            error={!!error}
            helperText={error ? error.message : null}
            SelectProps={{
              native: true,
              inputProps: {
                name: name,
              },
            }}
          >
            {options?.map(({ label, ...rest }, index) => (
              <option key={index} {...rest}>
                {label}
              </option>
            ))}
          </TextField>
        )}
      />
    </FormControl>
  );
};

export default ControlledDropdown;
