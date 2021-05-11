import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import { useFormContext } from "react-hook-form";

const ControlledTextField = ({ name, label, defaultValue, ...rest }) => {
  const { control, errors } = useFormContext();

  const error = errors[name];

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
          error={!!error}
          name={name}
          variant="filled"
          value={value || ""}
          onChange={onChange}
          helperText={error ? error.message : null}
          {...rest}
        />
      )}
    />
  );
};

export default ControlledTextField;
