import React from "react";
import ControlledFieldArray from "./ControlledFieldArray";
import { renderWithReactHookForm } from "../../test-utils";

describe("ControlledFieldArray", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithReactHookForm(<ControlledFieldArray />);

    expect(asFragment()).toMatchSnapshot();
  });
});
