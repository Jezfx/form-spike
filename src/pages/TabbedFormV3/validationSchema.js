import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const tabbedFormValidationResolver = yupResolver(
  Yup.object().shape({
    first_name: Yup.string().min(2, "Too Short").required("Required"),
  })
);
