import ControlledTextField from "../../components/ControlledTextField";
import ControlledDropdown from "../../components/ControlledDropdown";
import ControlledCheckBox from "../../components/ControlledCheckBox";

const dropdownOptions = [
  { value: "Supplier Knowledge Base User", label: "GBP" },
  { value: "Supplier Read Only User", label: "EUR" },
  { value: "supplier", label: "supplier" },
];

const checkboxes = [
  {
    value: "Supplier Knowledge Base User",
    label: "Supplier Knowledge Base User",
  },
  { value: "Supplier Read Only User", label: "Supplier Read Only User" },
  { value: "supplier", label: "supplier" },
];

export const model = [
  {
    name: "roles",
    label: "Roles",
    options: checkboxes,
    Component: ControlledCheckBox,
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
  {
    name: "_id",
    type: "hidden",
    Component: ControlledTextField,
  },
];
