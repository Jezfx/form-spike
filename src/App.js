import React from "react";

import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

import EditableForm from "./EditableForm";
import ControlledTextField from "./ControlledTextField";

// QUESTIONS
// radio fields
// checkboxes
// dropdpwns
// conditional radio checkboxes and radio options (groups / followUps)
// default values

// tabbed forms
// field arrays

const renderButtons = () => (
  <Button type="submit" variant="contained" color="primary">
    Submit
  </Button>
);

const fields = [
  {
    Component: ControlledTextField,
    name: "firstName",
    label: "First Name",
  },
];

const App = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <EditableForm
      methods={methods}
      onSubmit={onSubmit}
      fields={fields}
      buttons={renderButtons}
    />
  );
};

export default App;
