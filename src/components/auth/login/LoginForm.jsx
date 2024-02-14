"use client";

import styles from "./login.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
// import { login } from "@/services/actions";

const LoginForm = () => {
  // const [state, formAction] = useFormState(login, undefined);
  const [state, formAction] = useFormState(undefined);
  
  return (
    <form className={styles.form} action={formAction}>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm;