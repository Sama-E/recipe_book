import LoginForm from "@/components/auth/login/LoginForm"
import styles from "./login.module.css";
import { signIn } from "@/lib/auth";

const Login = async () => {

  const session = await auth();

  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login