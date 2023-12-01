import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import LoginForm from "./form";


export default async function Page() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return (
    <>
      <LoginForm/>
    </>
  );
}
