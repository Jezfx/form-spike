import ControlledTextField from "../../components/ControlledTextField";
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
    Component: ControlledDropdown,
    name: "uk_responsible_person_country",
    label: "Country *",
    options: dropdownOptions,
  },
];
