import React from "react";
import { TextField, FormLabel, FormControl } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const ControlledDropdown = ({ label, options = [], name }) => {
  const { control } = useFormContext();

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
            // error={!!error}
            SelectProps={{
              native: true,
              inputProps: {
                name: name,
              },
            }}
          >
            <option value="none" disabled>
              Please Select
            </option>
            {options?.map(({ label, value, id }) => (
              <option key={id} value={value}>
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
