import React from "react";
import ControlledDropdown from "./ControlledDropdown";
import { renderWithProviders } from "../../test-utils";

describe("ControlledDropdown", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithProviders(
      <ControlledDropdown options={[]} name="" label="" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
