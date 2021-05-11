import React from "react";
import ControlledDropdown from "./ControlledDropdown";
import { renderWithReactHookForm } from "../../test-utils";

describe("ControlledDropdown", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithReactHookForm(
      <ControlledDropdown options={[]} name="" label="" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
