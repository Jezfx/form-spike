import ControlledTextField from "../../components/ControlledTextField";
import ControlledRadioGroup from "../../components/ControlledRadioGroup";
import ControlledFieldArray from "../../components/ControlledFieldArray";
import ControlledCheckBox from "../../components/ControlledCheckBox";
import ControlledDropdown from "../../components/ControlledDropdown";

import { isEqualToNo, isEqualToYes, isOtherIncluded } from "./SingleForm.utils";

const dropdownOptions = [
  { label: "Please select", disabled: true },
  { value: "GBP", label: "GBP" },
  { value: "EUR", label: "EUR" },
  { value: "USD", label: "USD" },
];

export const fields = [
  {
    Component: ControlledTextField,
    name: "firstName",
    label: "Text Field",
  },
  {
    Component: ControlledCheckBox,
    name: "checkboxes",
    label: "CheckBoxes",
    options: [
      {
        value: "foo",
        name: "checkbox_one",
        label: "Foo",
      },
      {
        label: "Other",
        name: "other",
        value: "other",
      },
    ],
    followUp: {
      condition: isOtherIncluded,
      fields: [
        {
          label: "Other Options...",
          Component: ControlledRadioGroup,
          name: "level_two",
          options: [
            {
              name: "isSameName",
              label: "Yes",
              value: "yes",
            },
            {
              name: "isDifferentName",
              label: "No",
              value: "no",
            },
          ],
        },
      ],
    },
  },
  {
    Component: ControlledFieldArray,
    name: "import_countries",
    label: "Import contries",
  },
  {
    Component: ControlledRadioGroup,
    name: "level_one",
    label: "Level one (check yes to see level 2)",
    options: [
      {
        name: "isSameName",
        label: "Yes",
        value: "yes",
      },
      {
        name: "isDifferentName",
        label: "No",
        value: "no",
      },
    ],
    followUp: {
      condition: isEqualToYes,
      fields: [
        {
          label: "Other Options...",
          Component: ControlledRadioGroup,
          name: "other_options",
          options: [
            {
              name: "isSameName",
              label: "Yes",
              value: "yes",
            },
            {
              name: "isDifferentName",
              label: "No",
              value: "no",
            },
          ],
          followUp: {
            condition: isEqualToNo,
            fields: [
              {
                label: "Other Name...",
                Component: ControlledTextField,
                name: "level_three",
              },
            ],
          },
        },
      ],
    },
  },
  {
    Component: ControlledDropdown,
    name: "uk_responsible_person_country",
    label: "Country *",
    options: dropdownOptions,
  },
];
