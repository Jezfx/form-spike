import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

const ControlledRadioGroup = ({ title, defaultValue, group }) => {
  const { control, error } = useFormContext();

  const { key, options } = group;

  return (
    <>
      <FormLabel>{title}</FormLabel>
      <Controller
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <RadioGroup key={key} name={name} value={value} onChange={onChange}>
            {options?.map((x) => (
              <FormControlLabel
                key={x?.key}
                value={x?.value}
                name={x?.name}
                label={x?.label}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        )}
        name={key}
        control={control}
      />
    </>
  );
};

export default ControlledRadioGroup;
