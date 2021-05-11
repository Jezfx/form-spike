import React from "react";
import {
  wait,
  fireEvent,
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { Button } from "@material-ui/core";

import ControlledForm from "./ControlledForm";
import { fields } from "../../pages/SingleForm/fields";
import { withForm } from "../../test-utils";

describe("Controlled Form", () => {
  afterEach(cleanup);

  const props = {
    buttons: () => <Button type="submit">Submit</Button>,
    fields,
    onSubmit: jest.fn(),
  };

  const CompWithForm = withForm(ControlledForm);
  it("matches snapshot", () => {
    const { asFragment } = render(<CompWithForm {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls on submit", async () => {
    render(<CompWithForm {...props} />);

    const button = screen.getByText("Submit");
    fireEvent.click(button);

    await wait(() => {
      expect(props.onSubmit).toHaveBeenCalled();
    });
  });
});
