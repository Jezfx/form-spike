import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@material-ui/core";

import singleFormValidationResolver from "./validationSchema";
import ControlledForm from "../../components/ControlledForm";
import { fields } from "./fields";

const renderButtons = () => (
  <Button type="submit" variant="contained" color="primary">
    Submit
  </Button>
);

const defaultValues = {
  checkboxes: ["foo"],
  import_countries: [
    {
      value: "spain",
    },
  ],
  firstName: "sad",
  level_one: "yes",
  level_three: "no",
  level_three_input: "asdad",
  uk_responsible_person_country: "USD",
};

const SingleForm = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: singleFormValidationResolver,
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Typography variant="h6">Form Title</Typography>
      <Typography variant="body2">Contextual information</Typography>
      <ControlledForm
        methods={methods}
        onSubmit={onSubmit}
        fields={fields}
        buttons={renderButtons}
      />
    </>
  );
};

export default SingleForm;
