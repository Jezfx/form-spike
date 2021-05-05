import React from "react";

import { Button, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";

import EditableForm from "./EditableForm";
import ControlledTextField from "./ControlledTextField";
import ControlledFieldArray from "./ControlledFieldArray";

// QUESTIONS
// radio fields
// checkboxes
// dropdpwns
// conditional radio checkboxes and radio options (groups / followUps)
// default values

// tabbed forms
// field arrays ✅

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
  {
    Component: ControlledFieldArray,
    name: "import_countries",
    label: "Import contries",
    defaultValue: ["spain", "germany"],
  },
];

const App = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Typography variant="h6">Form Title</Typography>
      <Typography variant="body2">Contextual information</Typography>
      <EditableForm
        methods={methods}
        onSubmit={onSubmit}
        fields={fields}
        buttons={renderButtons}
      />
    </>
  );
};

export default App;
