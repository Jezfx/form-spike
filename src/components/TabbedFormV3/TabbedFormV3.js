import React, { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { Button, Tabs, Tab } from "@material-ui/core";

import TabbedFormPanel from "./TabbedFormPanel";
import TabbenFormFields from "./TabbenFormFields";

import { useStyles } from "./TabbedFormV3.styles";
import { TabbedFormProvider } from "./TabbedFormV3.context";

import { a11yProps } from "./TabbedFormV3.utils";

const TabbedFormV3 = ({
  model,
  methods,
  onSubmit,
  buttons,
  onAppendField,
  fieldArrayKey,
  renderTabLabelCallback,
}) => {
  const classes = useStyles();
  const { handleSubmit, watch } = methods;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const values = watch(fieldArrayKey);

  const renderTabs = useMemo(
    () => (
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        {values.map((field, index) => (
          <Tab
            key={index}
            {...a11yProps(index)}
            label={renderTabLabelCallback(field)}
          />
        ))}
      </Tabs>
    ),
    [classes.tabs, renderTabLabelCallback, value, values]
  );

  const renderFormFields = useMemo(
    () =>
      values.map((field, index) => (
        <TabbedFormPanel value={value} index={index} key={index}>
          <TabbenFormFields index={index} />
          {buttons()}
        </TabbedFormPanel>
      )),
    [buttons, value, values]
  );

  return (
    <TabbedFormProvider value={{ model, fieldArrayKey }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.root}>
            {renderTabs}
            {renderFormFields}
          </div>
          <Button onClick={onAppendField} color="secondary" variant="outlined">
            Add new
          </Button>
        </form>
      </FormProvider>
    </TabbedFormProvider>
  );
};

export default TabbedFormV3;
