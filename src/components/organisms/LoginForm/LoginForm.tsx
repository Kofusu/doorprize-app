import { PrimaryButton } from "@/components/atoms/Buttons";
import { MediumText } from "@/components/atoms/Texts";
import { Button, Form, Input, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FC } from "react";

interface Props {
  onSubmit: () => void;
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: FC<Props> = ({
  onSubmit,
  onUsernameChange,
  onPasswordChange,
}) => {
  return (
    <Form onFinish={onSubmit} style={{ width: "50%", marginTop: "2rem" }}>
      <Form.Item
        name="username"
      >
        <label><MediumText className="text-2xl text-white">Username</MediumText></label>
        <Input type="text" className="py-4 px-4 text-xl" onChange={onUsernameChange} />
      </Form.Item>
      <Form.Item
        name="password"
      >
        <label><MediumText className="text-2xl text-white">Password</MediumText></label>
        <Input.Password className="py-4 px-4 text-xl" onChange={onPasswordChange} />
      </Form.Item>

      <Form.Item className="flex">
          <PrimaryButton className="px-12 py-3 text-xl">Login</PrimaryButton>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
