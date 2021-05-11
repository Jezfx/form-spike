import React from "react";
import ControlledCheckBox from "./ControlledCheckBox";
import { renderWithReactHookForm } from "../../test-utils";

describe("ControlledCheckBox", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithReactHookForm(<ControlledCheckBox />);

    expect(asFragment()).toMatchSnapshot();
  });
});
