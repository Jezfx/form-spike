import React from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  FormGroup,
} from "@material-ui/core";

const ControlledCheckBox = ({ name, label, options = [] }) => {
  const { control, errors } = useFormContext();
  const error = errors[name];

  return (
    <FormControl component="fieldset" error={!!error}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {options?.map((props, index) => (
          <FormControlLabel
            key={`${name}[${index}]`}
            label={props.label}
            control={
              <Controller
                name={`${name}[${index}]`}
                control={control}
                render={({ onChange, name }) => (
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
      </FormGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

ControlledCheckBox.propTypes = {
  group: PropTypes.shape({
    key: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  name: PropTypes.string,
};

ControlledCheckBox.defaultProps = {
  group: {
    key: "",
    options: [],
  },
  name: "",
};

export default ControlledCheckBox;
