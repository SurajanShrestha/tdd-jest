import { Field, Form, Formik } from "formik";

type Props = {
  onSubmit: (values?: any) => void;
};

const sleep = (ms?: number) => new Promise((r) => setTimeout(r, ms));

const FormBlock = ({ children }: { children: JSX.Element[] }) => {
  const sx: React.CSSProperties = {
    display: "flex",
    gap: "24px",
    alignItems: "center",
    marginBottom: 10,
  };

  return <div style={sx}>{children}</div>;
};

export const LoginForm = ({ onSubmit }: Props) => {
  const handleSubmit = async (values?: any) => {
    await sleep(500);
    onSubmit(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h3>Testing Form 📑</h3>
          <FormBlock>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />
          </FormBlock>
          <FormBlock>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />
          </FormBlock>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
