import ControlledTextField from "../../components/ControlledTextField";
import ControlledRadioGroup from "../../components/ControlledRadioGroup";
import ControlledFieldArray from "../../components/ControlledFieldArray";
import ControlledCheckBox from "../../components/ControlledCheckBox";
import ControlledDropdown from "../../components/ControlledDropdown";

const dropdownOptions = [
  { id: 1, value: "GBP", label: "GBP" },
  { id: 2, value: "EUR", label: "EUR" },
  { id: 3, value: "USD", label: "USD" },
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
    group: {
      options: [
        {
          key: "name_same",
          name: "checkbox_one",
          label: "check box one",
          value: "foo",
        },
        {
          key: "other",
          name: "other",
          label: "Other",
          value: "other",
        },
      ],
      followUp: {
        condition: "other",
        fields: [
          {
            label: "Other Options...",
            Component: ControlledRadioGroup,
            name: "level_two",
            group: {
              key: "level_three",
              options: [
                {
                  key: "name_same",
                  name: "isSameName",
                  label: "Yes",
                  value: "yes",
                },
                {
                  key: "name_diff",
                  name: "isDifferentName",
                  label: "No",
                  value: "no",
                },
              ],
            },
          },
        ],
      },
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
    group: {
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
        condition: "no",
        fields: [
          {
            label: "Other Options...",
            Component: ControlledRadioGroup,
            name: "level_two",
            group: {
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
                condition: "no",
                fields: [
                  {
                    label: "Other Name...",
                    Component: ControlledTextField,
                    name: "level_three",
                  },
                ],
              },
            },
          },
        ],
      },
    },
  },
  {
    Component: ControlledDropdown,
    name: "uk_responsible_person_country",
    label: "Country *",
    options: dropdownOptions,
  },
];
