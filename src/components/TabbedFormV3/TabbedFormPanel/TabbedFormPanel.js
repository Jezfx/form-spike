import React from "react";
import { Grid, Box } from "@material-ui/core";

const TabbedFormPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <>
        {value === index && (
          <Grid item p={3} key={`vertical-tabpanel-${index}`}>
            <>{children}</>
          </Grid>
        )}
      </>
    </div>
  );
};

export default TabbedFormPanel;
