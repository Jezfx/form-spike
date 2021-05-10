import React from "react";
import { useFormContext } from "react-hook-form";
import {
  getGroupName,
  getFollowUp,
  isConditionMet,
  hasFollowUp,
} from "./FollowUpField.utils";

export const renderFollowUpFields = (fields = []) =>
  fields.map(({ Component, ...props }) => (
    <div key={props?.name}>
      <Component key={props?.name} {...props} />

      {hasFollowUp(props) && (
        <FollowUpField
          key={`${props?.name}(props)}-followUp`}
          fieldName={props?.name}
          followUp={getFollowUp(props)}
        />
      )}
    </div>
  ));

const FollowUpField = ({ fieldName, followUp }) => {
  const { watch } = useFormContext();
  const { condition, fields } = followUp || {};

  const fieldValue = watch(fieldName);
  const showFollowUpFields = isConditionMet(condition, fieldValue);

  return showFollowUpFields ? renderFollowUpFields(fields) : null;
};

export default FollowUpField;
