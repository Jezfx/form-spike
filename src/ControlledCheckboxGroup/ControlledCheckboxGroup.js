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
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormGroup>
            {options?.map(({ ...props }, i) => (
              <FormControlLabel
                label={props.label}
                control={
                  <Checkbox
                    {...props}
                    checked={value}
                    value={props.value}
                    name={`${name}.${i}`}
                    id={`${key}.${i}`}
                    key={`${key}.${i}`}
                    onChange={(e) =>
                      onChange({ [props.value]: e.target.checked })
                    }
                  />
                }
                {...props}
              />
            ))}
          </FormGroup>
        )}
        name={key}
        control={control}
      />
    </>
  );
};

export default ControlledCheckboxGroup;
