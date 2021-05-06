import React from "react";

import { Button, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";

import EditableForm from "./EditableForm";
import { fields } from "./fields";

// QUESTIONS
// radio fields ✅
// checkboxes ✅
// dropdpwns
// conditional radio checkboxes and radio options (groups / followUps) ✅
// default values ✅
// upload document https://share.getcloudapp.com/7KuPNR05

// tabbed forms
// field arrays ✅

const renderButtons = () => (
  <Button type="submit" variant="contained" color="primary">
    Submit
  </Button>
);

const defaultValues = {
  import_countries: [
    {
      value: "spain",
    },
  ],
  firstName: "sad",
  level_one: "yes",
  level_three: "no",
  level_three_input: "asdad",
};

const App = () => {
  const methods = useForm({
    defaultValues,
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
