import React from "react";
import ControlledRadioGroup from "./ControlledRadioGroup";
import { renderWithReactHookForm } from "../../test-utils";

describe("ControlledRadioGroup", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithReactHookForm(
      <ControlledRadioGroup options={[]} name="" label="" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
