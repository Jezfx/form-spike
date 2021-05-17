import React from "react";
import { Grid } from "@material-ui/core";
import { useWatch, useFormContext } from "react-hook-form";

import { useTabbedFormContext } from "../TabbedFormV3.context";

const TabbenFormFields = ({ index }) => {
  const { control } = useFormContext();
  const { model = [], fieldArrayKey } = useTabbedFormContext();

  const values = useWatch({
    control,
    name: `${fieldArrayKey}[${index}]`,
  });

  return (
    <Grid direction="column" spacing={3} container>
      {model?.map(({ Component, ...props }, index) => (
        <Grid key={index} item>
          <Component {...props} defaultValue={values?.[props?.name]} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TabbenFormFields;
