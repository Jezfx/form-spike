import React from "react";
import { useFormContext } from "react-hook-form";
import {
  getKey,
  getFollowUp,
  isConditionMet,
  hasFollowUp,
} from "./FollowUpField.utils";

export const renderFollowUpFields = (fields = []) =>
  fields.map(({ Component, ...props }) => (
    <div key={props.name}>
      <Component key={props.name} {...props} />

      {hasFollowUp(props) && (
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
  const showFollowUpFields = isConditionMet(condition, fieldValue);

  return showFollowUpFields ? renderFollowUpFields(fields) : null;
};

export default FollowUpField;
