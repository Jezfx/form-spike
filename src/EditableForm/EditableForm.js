import React, { useCallback } from "react";
import { FormProvider } from "react-hook-form";

const EditableForm = ({ onSubmit, buttons, methods, fields }) => {
  const { handleSubmit } = methods;

  const renderFields = useCallback(
    () =>
      fields.map(({ Component, ...props }) => (
        <div key={props.name}>
          <Component {...props} />
        </div>
      )),
    [fields]
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFields()}
        <div>{buttons()}</div>
      </form>
    </FormProvider>
  );
};

export default EditableForm;
