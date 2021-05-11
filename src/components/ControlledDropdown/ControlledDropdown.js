import React from "react";
import PropTypes from "prop-types";
import { TextField, FormLabel, FormControl } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const ControlledDropdown = ({ label, options = [], name }) => {
  const { control, errors } = useFormContext();

  const error = errors[name];

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Controller
        id={name}
        name={name}
        control={control}
        render={(
          { onChange, onBlur, value, name, ref },
          { invalid, isTouched, isDirty }
        ) => (
          <TextField
            select
            onChange={onChange}
            value={value || ""}
            name={name}
            error={!!error}
            helperText={error ? error.message : null}
            SelectProps={{
              native: true,
              inputProps: {
                name: name,
              },
            }}
          >
            <option value="none" disabled>
              Please Select
            </option>
            {options?.map(({ label, value, id }) => (
              <option key={id} value={value}>
                {label}
              </option>
            ))}
          </TextField>
        )}
      />
    </FormControl>
  );
};

ControlledDropdown.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

ControlledDropdown.defaultProps = {
  label: "",
  name: "",
  options: [],
};

export default ControlledDropdown;
