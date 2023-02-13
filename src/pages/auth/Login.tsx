import { Button, Divider, Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FiAtSign, FiLock } from "react-icons/fi";
import { useAuthentication } from "hooks/query/useAuthentication";

const Login: React.FC = () => {
  const { logIn, logginIn } = useAuthentication();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: { email: string; password: string }) => {
    logIn(values);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={form.onSubmit(onSubmit)}
        className="bg-gray-100 p-4 rounded-lg w-64 shadow"
      >
        <Input
          icon={<FiAtSign />}
          placeholder="Email"
          type="email"
          {...form.getInputProps("email")}
        />
        <Divider my="sm" variant="dashed" />
        <Input
          icon={<FiLock />}
          placeholder="Password"
          type="password"
          {...form.getInputProps("password")}
        />
        <Divider my="sm" variant="dashed" />
        <Button fullWidth type="submit" loading={logginIn}>
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Login;
