import ControlledTextField from "./ControlledTextField";
import ControlledRadioGroup from "./ControlledRadioGroup";
import ControlledFieldArray from "./ControlledFieldArray";
import ControlledCheckBox from "./ControlledCheckBox";

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
];
