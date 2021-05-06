import React from "react";
import { FormProvider } from "react-hook-form";
import { Button, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const TabbedForm = ({
  values,
  fields,
  methods,
  onSubmit,
  buttons,
  onAppendField,
}) => {
  const { handleSubmit } = methods;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
          >
            {values.map((field) => (
              <Tab label={field?.firstName} {...a11yProps(field.id)} />
            ))}
          </Tabs>

          {values.map((field, index) => (
            <TabPanel value={value} index={index}>
              {fields.map(({ Component, ...props }) => (
                <div key={props.name}>
                  <Component
                    {...props}
                    name={`contacts[${index}].${props.name}`}
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </div>
        <Button onClick={onAppendField} color="secondary" variant="outlined">
          Add new
        </Button>
        <br />
        <br />
        <br />
        {buttons()}
      </form>
    </FormProvider>
  );
};

export default TabbedForm;
