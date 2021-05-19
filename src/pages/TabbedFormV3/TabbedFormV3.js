import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import { tabbedFormValidationResolver } from "./validationSchema";

import TabbedFormV3 from "../../components/TabbedFormV3";
import { model } from "./fields";

const supplier = [
  // {
  //   roles: ["Supplier Knowledge Base User"],
  //   active: true,
  //   _id: "609258d5f193547011335cdf",
  //   email: "Fiona68@gmail.com",
  //   first_name: "Junius",
  //   last_name: "Huel",
  // },
  // {
  //   roles: ["Supplier Read Only User"],
  //   active: true,
  //   _id: "609258d5f193547011335cde",
  //   email: "Gerry.Kertzmann92@hotmail.com",
  //   first_name: "Jerome",
  //   last_name: "Hansen",
  // },
  // {
  //   roles: ["Supplier Read Only User"],
  //   active: true,
  //   _id: "609258d5f193547011335ce0",
  //   email: "Mariana88@hotmail.com",
  //   first_name: "Marcelle",
  //   last_name: "Flatley",
  // },
  {
    roles: ["supplier"],
    active: true,
    _id: "609258d5f193547011335cd8",
    email: "1@supplier.com",
    first_name: "Jairo",
    last_name: "Bailey",
  },
];

const renderButtons = () => (
  <Button type="submit" variant="contained" color="primary">
    Save
  </Button>
);

const SingleForm = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: { contacts: supplier },
    resolver: tabbedFormValidationResolver,
  });

  const { append, fields: arrayFields } = useFieldArray({
    name: "contacts",
    control: methods.control,
  });

  const handleOnAppendField = () => {
    append({});
  };

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  const renderTabLabel = (field) => field?.first_name || "new member";

  return (
    <TabbedFormV3
      model={model}
      methods={methods}
      fields={arrayFields}
      buttons={renderButtons}
      fieldArrayKey="contacts"
      onSubmit={handleOnSubmit}
      onAppendField={handleOnAppendField}
      renderTabLabelCallback={renderTabLabel}
    />
  );
};

export default SingleForm;
