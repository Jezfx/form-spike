import React, { useMemo } from "react";
import { FormProvider } from "react-hook-form";

import FollowUpField from "./FollowUpField";
import {
  hasFollowUp,
  getName,
  getFollowUp,
  formatValues,
} from "./ControlledForm.utils";

export const renderFields = (fields = []) =>
  fields.map(({ Component, ...props }, index) => (
    <div key={getName(props) || index}>
      <Component {...props} />

      {hasFollowUp(props) && (
        <FollowUpField
          key={`${getName(props)}-followUp`}
          fieldName={getName(props)}
          followUp={getFollowUp(props)}
        />
      )}
    </div>
  ));

const ControlledForm = ({ onSubmit, buttons, methods, fields }) => {
  const { handleSubmit } = methods;
  const renderFormFields = useMemo(() => renderFields(fields), [fields]);
  const renderButtons = useMemo(() => (!!buttons ? buttons() : null), [
    buttons,
  ]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((values) => onSubmit(formatValues(values)))}>
        {renderFormFields}
        {renderButtons}
      </form>
    </FormProvider>
  );
};

ControlledForm.defaultProps = {
  fields: [],
};

export default ControlledForm;
