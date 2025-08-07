import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import React from "react"
import { Button } from "./ui/button"
import Image from "next/image"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça o login</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do google
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image alt="Google Login" src="/google.svg" width={18} height={18} />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
