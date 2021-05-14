import React from "react";
import { FormProvider } from "react-hook-form";
import { Button, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import ControlledForm from "../ControlledForm";

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 400,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} key={`vertical-tabpanel-${index}`}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
};

const TabbedForm = ({
  model,
  fields,
  methods,
  onSubmit,
  buttons,
  onAppendField,
  renderTabLabelCallback,
}) => {
  const { handleSubmit } = methods;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <FormProvider {...methods}>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    <>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          className={classes.tabs}
        >
          {fields.map((field, index) => (
            <Tab
              key={index}
              {...a11yProps(index)}
              label={renderTabLabelCallback(field)}
            />
          ))}
        </Tabs>

        {fields.map((field, index) => (
          <TabPanel value={value} index={index} key={index}>
            <ControlledForm
              methods={methods}
              onSubmit={onSubmit}
              fields={model}
              buttons={buttons}
            />
          </TabPanel>
        ))}
      </div>
      <Button onClick={onAppendField} color="secondary" variant="outlined">
        Add new
      </Button>
    </>
    //   </form>
    // </FormProvider>
  );
};

export default TabbedForm;
