import { LoginForm } from "../components/LoginForm";

export const FormPage = () => {
  const onSubmit = (values?: any) => {
    console.log("Submission Successful: ", values);
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
