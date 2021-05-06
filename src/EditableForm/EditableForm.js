import React, { useCallback } from "react";
import { FormProvider } from "react-hook-form";

import FollowUpField from "./FollowUpField";
import { hasFollowUp, getKey, getFollowUp } from "./EditableForm.utils";

export const renderFields = (fields = []) =>
  fields.map(({ Component, ...props }) => (
    <div key={props.name}>
      <Component {...props} />
      {hasFollowUp(props) && (
        <FollowUpField
          key={getKey(props)}
          fieldKey={getKey(props)}
          followUp={getFollowUp(props)}
        />
      )}
    </div>
  ));

const EditableForm = ({ onSubmit, buttons, methods, fields }) => {
  const { handleSubmit } = methods;
  const renderFormFields = useCallback(() => renderFields(fields), [fields]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFormFields()}
        {buttons()}
      </form>
    </FormProvider>
  );
};

EditableForm.defaultProps = {
  fields: [],
};

export default EditableForm;
