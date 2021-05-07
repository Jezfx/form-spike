import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short").required("Required"),
  checkboxes: Yup.array()
    .of(Yup.string())
    .compact()
    .min(1, "Please Select One"),
});

export default validationSchema;
