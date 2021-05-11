import React from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

const ControlledRadioGroup = ({ group, name, label }) => {
  const { control, errors } = useFormContext();
  const { options } = group;

  const error = errors[name];

  return (
    <FormControl component="fieldset" required error={!!error}>
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
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

ControlledRadioGroup.propTypes = {
  group: PropTypes.shape({
    key: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  name: PropTypes.string,
};

ControlledRadioGroup.defaultProps = {
  group: {
    key: "",
    options: [],
  },
  name: "",
};

export default ControlledRadioGroup;
