'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";


export default function LoginForm() {
  const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const response = await signIn('credentials',{
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        })
        if (!response?.error) {
          router.push("/")
          router.refresh()
        }
    
      }
    return(
      <>
      <div className="max-w-3xl w-full mx-auto p-4">

      
        <form onSubmit={handleSubmit}>
        <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Zaloguj się</h2>
        </div>
        <div className="mb-6">
          <Label htmlFor="email">Adres email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="nazwa@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="password">Hasło</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        <Button type="submit" variant="outline" className="w-full">Zaloguj się</Button>
      </form>
      <Separator className="my-6"/>
      <div className="flex justify-between mt-4">
      <Link href="/register" className="underline underline-offset-4 hover:text-primary">Nie masz konta?</Link>
      <Link href="/home" className="underline underline-offset-4 hover:text-primary">Przejdz do aplikacji</Link>
      </div>
      
      </div>
      </>
    )
}