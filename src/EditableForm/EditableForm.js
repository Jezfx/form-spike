import React from "react";
import { FormProvider } from "react-hook-form";

const EditableForm = ({ onSubmit, buttons, methods, fields }) => {
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ Component, ...props }) => (
          <div key={props.name}>
            <Component {...props} />
          </div>
        ))}
        <div>{buttons()}</div>
      </form>
    </FormProvider>
  );
};

export default EditableForm;
