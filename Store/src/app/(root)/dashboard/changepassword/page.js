import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

export default function ChangePasswordPage() {
  return (
    <div className="w-full rounded-lg border p-10">
      <form action="" className="w-full md:w-80 lg:w-[450px]">
        <h1 className="mb-3 text-xl font-medium">Change Password</h1>
        <Input
          type="email"
          id="_email_change_password"
          label="E-mail Address"
        />
        <Input
          type="password"
          id="_current_password_change_password"
          label="Current Password"
        />
        <Input
          type="password"
          id="_new_password_change_password"
          label="New Password"
        />
        <Button className="ml-auto mr-0 mt-3 w-fit">Change Password</Button>
      </form>
    </div>
  );
}
