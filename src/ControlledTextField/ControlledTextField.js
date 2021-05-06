import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import { useFormContext } from "react-hook-form";

const ControlledTextField = ({ name, labelm, defaultValue, label }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => (
        <TextField
          label={label}
          name={name}
          variant="filled"
          value={value || ""}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default ControlledTextField;
