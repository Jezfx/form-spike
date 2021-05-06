import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const ControlledCheckBox = ({ group, name, label }) => {
  const { control } = useFormContext();
  const { key, options = [] } = group;

  return (
    <>
      {options?.map((props, index) => (
        <FormControlLabel
          key={props.key}
          label={props.label}
          control={
            <Controller
              name={`${name}[${index}]`}
              control={control}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Checkbox
                  name={`${name}[${index}]`}
                  value={`${name}[${props.value}]`}
                  onChange={(e) => {
                    e.target.checked ? onChange(props.value) : onChange();
                  }}
                />
              )}
            />
          }
        />
      ))}
    </>
  );
};

export default ControlledCheckBox;
