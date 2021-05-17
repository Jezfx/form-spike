import ControlledTextField from "../../components/ControlledTextField";
import ControlledDropdown from "../../components/ControlledDropdown";

const dropdownOptions = [
  { value: "Supplier Knowledge Base User", label: "GBP" },
  { value: "Supplier Read Only User", label: "EUR" },
  { value: "supplier", label: "supplier" },
];

export const model = [
  {
    name: "_id",
    type: "hidden",
    Component: ControlledTextField,
  },
  {
    name: "roles",
    label: "Roles",
    options: dropdownOptions,
    Component: ControlledDropdown,
  },
  {
    name: "email",
    label: "Email",
    Component: ControlledTextField,
  },
  {
    name: "first_name",
    label: "First Name",
    Component: ControlledTextField,
  },
  {
    name: "last_name",
    label: "Last Name",
    Component: ControlledTextField,
  },
];
