import React from "react";

import { Button, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";

import EditableForm from "./EditableForm";
import ControlledTextField from "./ControlledTextField";
import ControlledRadioGroup from "./ControlledRadioGroup";
import ControlledCheckboxGroup from "./ControlledCheckboxGroup";
import ControlledFieldArray from "./ControlledFieldArray";

// QUESTIONS
// radio fields ✅
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
  },
  {
    title: "Is this is the same as the name you trade under? *",
    Component: ControlledRadioGroup,
    group: {
      key: "trade_name_company_name_same",
      options: [
        {
          key: "name_same",
          label: "Yes",
          value: "yes",
        },
        {
          key: "name_diff",
          label: "No",
          value: "no",
        },
      ],
    },
  },
  {
    title: "Which of the following are you able to produce? *",
    Component: ControlledCheckboxGroup,
    group: {
      key: "production_types",
      options: [
        {
          key: "plus",
          value: "Plus",
          label: "Plus",
        },
        {
          key: "petite",
          value: "Petite",
          label: "Petite",
        },
      ],
    },
  },
];

const App = () => {
  const methods = useForm({
    defaultValues: { import_countries: [{ id: 1, value: "spain" }] },
  });

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
