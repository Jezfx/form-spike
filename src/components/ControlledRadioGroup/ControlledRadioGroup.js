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
  const { options } = group;

  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={(
          { onChange, onBlur, value, name, ref },
          { invalid, isTouched, isDirty }
        ) => (
          <RadioGroup
            key={name}
            name={name}
            value={value || ""}
            onChange={onChange}
          >
            {options?.map(({ ...props }) => (
              <FormControlLabel
                key={props.name}
                control={<Radio />}
                {...props}
              />
            ))}
          </RadioGroup>
        )}
      />
    </>
  );
};

export default ControlledRadioGroup;
