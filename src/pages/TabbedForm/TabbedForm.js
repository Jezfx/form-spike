import React, { useMemo } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button, Typography } from "@material-ui/core";
import { merge } from "lodash";

import TabbedForm from "../../components/TabbedForm";
import { fields } from "./fields";

const supplier = [
  {
    roles: ["Supplier Knowledge Base User"],
    active: true,
    _id: "609258d5f193547011335cdf",
    email: "Fiona68@gmail.com",
    first_name: "Junius",
    last_name: "Huel",
  },
  {
    roles: ["Supplier Read Only User"],
    active: true,
    _id: "609258d5f193547011335cde",
    email: "Gerry.Kertzmann92@hotmail.com",
    first_name: "Jerome",
    last_name: "Hansen",
  },
  {
    roles: ["Supplier Read Only User"],
    active: true,
    _id: "609258d5f193547011335ce0",
    email: "Mariana88@hotmail.com",
    first_name: "Marcelle",
    last_name: "Flatley",
  },
  {
    roles: ["supplier"],
    active: true,
    _id: "609258d5f193547011335cd8",
    email: "1@supplier.com",
    first_name: "Jairo",
    last_name: "Bailey",
  },
];

const defaultValues = {
  contacts: [
    {
      firstName: "jez",
    },
    {
      firstName: "cam",
    },
  ],
};

const SingleForm = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues,
  });

  const { fields: arrayFields, append } = useFieldArray({
    control: methods.control,
    name: "contacts",
  });

  const handleOnAppendField = (event, newValue) => {
    append({
      firstName: "new member",
    });
  };

  const values = methods.watch();

  const updatedFields = useMemo(() => {
    const { contacts } = merge(defaultValues, values) || {};
    return contacts;
  }, [values]);

  const handleOnSubmit = () => {
    console.log(updatedFields);
  };

  const renderButtons = () => (
    <Button type="submit" variant="contained" color="primary">
      Save
    </Button>
  );

  return (
    <>
      <TabbedForm
        methods={methods}
        onSubmit={handleOnSubmit}
        values={updatedFields}
        fields={fields}
        buttons={renderButtons}
        onAppendField={handleOnAppendField}
      />
    </>
  );
};

export default SingleForm;
