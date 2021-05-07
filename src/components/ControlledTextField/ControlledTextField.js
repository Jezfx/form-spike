import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import { useFormContext } from "react-hook-form";

const ControlledTextField = ({ name, label, defaultValue }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
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
  );
};

export default ControlledTextField;
