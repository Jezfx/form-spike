import React from "react";
import ControlledRadioGroup from "./ControlledRadioGroup";
import { renderWithProviders } from "../../test-utils";

describe("ControlledRadioGroup", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithProviders(
      <ControlledRadioGroup options={[]} name="foo" label="Foo" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
