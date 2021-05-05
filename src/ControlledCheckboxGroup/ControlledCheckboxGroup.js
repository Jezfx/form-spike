import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from "@material-ui/core";

const ControlledCheckboxGroup = ({ title, group }) => {
  const { control, error } = useFormContext();

  const { key, options } = group;

  return (
    <>
      <FormLabel>{title}</FormLabel>
      <Controller
        render={({ field: { onChange, value, name }, fieldState: { error } }) =>
          options?.map(({ ...props }, i) => (
            <FormControlLabel
              label={props.label}
              key={`${key}.${i}`}
              name={`${key}.${i}`}
              control={
                <Checkbox
                  {...props}
                  checked={value}
                  name={`${name}.${i}`}
                  key={`${key}.${i}`}
                  onChange={(e) => onChange(e.target.checked)}
                />
              }
            />
          ))
        }
        name={key}
        control={control}
      />
    </>
  );
};

export default ControlledCheckboxGroup;
