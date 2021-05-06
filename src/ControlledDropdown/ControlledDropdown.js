import React from "react";
import TextField from "@material-ui/core/TextField";
import { useFormContext, Controller } from "react-hook-form";

const ControlledDropdown = ({ label, options, name }) => {
  const { control } = useFormContext();

  return (
    <>
      <div>hello?</div>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <TextField
            select
            onChange={onChange}
            defaultValue="none"
            value={value}
            name={name}
            error={!!error}
            SelectProps={{
              native: true,
              defaultValue: "none",
              inputProps: {
                name: name,
                defaultValue: "none",
              },
            }}
          >
            <option value="none" disabled>
              Please Select
            </option>
            {options?.map((option) => (
              <option key={option?.id} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </TextField>
        )}
      />
    </>
  );
};

export default ControlledDropdown;
