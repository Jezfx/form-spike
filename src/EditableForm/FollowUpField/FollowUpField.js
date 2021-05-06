import React from "react";
import { useFormContext } from "react-hook-form";
import { getKey, getFollowUp } from "./FollowUpField.utils";

export const renderFields = (fields = []) =>
  fields.map(({ Component, ...props }) => (
    <div key={props.name}>
      <Component key={props.name} {...props} />
      {props?.group?.followUp && (
        <FollowUpField
          key={getKey(props)}
          fieldKey={getKey(props)}
          followUp={getFollowUp(props)}
        />
      )}
    </div>
  ));

const FollowUpField = ({ fieldKey, followUp }) => {
  const { watch } = useFormContext();
  const { condition, fields } = followUp || {};

  const fieldValue = watch(fieldKey);
  const isConditionMet = fieldValue === condition;

  return isConditionMet ? renderFields(fields) : null;
};

export default FollowUpField;
