import React from "react";
import ControlledTextField from "./ControlledTextField";
import { renderWithProviders } from "../../test-utils";

describe("ControlledTextField", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithProviders(
      <ControlledTextField name="" label="" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
