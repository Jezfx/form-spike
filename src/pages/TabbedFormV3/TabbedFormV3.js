import React, { useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import { merge } from "lodash";

import TabbedFormV3 from "../../components/TabbedFormV3";
import { model } from "./fields";

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
  suppliers: [
    {
      firstName: "jez",
    },
    {
      firstName: "cam",
    },
  ],
};

const renderButtons = () => (
  <Button type="submit" variant="contained" color="primary">
    Save
  </Button>
);

const SingleForm = () => {
  const [values, setValues] = useState(defaultValues);

  const methods = useForm({
    mode: "onChange",
    defaultValues: values,
  });

  const { getValues } = methods;

  // const { fields, insert } = useFieldArray({ control, name: "suppliers" });

  const handleOnAppendField = (data) => {
    setValues({ suppliers: [...values?.suppliers, { firstName: "foo" }] });
  };

  const handleOnSubmit = (values) => {
    // console.log(values?.contacts);
    console.log(values);
  };

  const renderTabLabel = (field) => field?.firstName || "new member";

  // console.log(fields);

  // console.log(fields);

  return (
    <>
      <TabbedFormV3
        methods={methods}
        onSubmit={handleOnSubmit}
        model={model}
        values={values?.suppliers}
        buttons={renderButtons}
        onAppendField={handleOnAppendField}
        renderTabLabelCallback={renderTabLabel}
      />
    </>
  );
};

export default SingleForm;
