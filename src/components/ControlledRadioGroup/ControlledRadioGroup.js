import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

const ControlledRadioGroup = ({ group, name, label }) => {
  const { control } = useFormContext();
  const { key, options } = group;

  return (
    <>
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
    </>
  );
};

export default ControlledRadioGroup;
