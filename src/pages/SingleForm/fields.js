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
      key: "checkboxes",
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
      key: "level_one",
      followUp: {
        condition: "yes",
        fields: [
          {
            label: "Level Two (check no to see level 3)",
            Component: ControlledRadioGroup,
            name: "level_two",
            group: {
              key: "level_three",
              followUp: {
                condition: "no",
                fields: [
                  {
                    Component: ControlledTextField,
                    name: "level_three_input",
                    label: "Level Three Input",
                  },
                ],
              },
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
  {
    Component: ControlledDropdown,
    name: "uk_responsible_person_country",
    label: "Country *",
    options: dropdownOptions,
  },
];