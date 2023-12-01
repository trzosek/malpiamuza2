'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FormEvent } from "react";



export default function RegisterForm() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const response = await fetch("/api/auth/register",{
          method: 'POST',
          body: JSON.stringify({
            email: formData.get('email'),
            name: formData.get('name'),
            password: formData.get('password'),
            password2: formData.get('password'),
          })
        })
        if (response.ok) {
            const data = await response.json();
            if (!data.ok && !data.message) alert("błąd")
            else alert("stworzono konto")

          } 
    
      }
    return (
      <div className="max-w-3xl w-full mx-auto p-4">
        <form onSubmit={handleSubmit}>
        <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Zarejestruj się</h2>
        </div>
        <div className="mb-6">
          <Label htmlFor="email">Adres email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="nazwa@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="name">Nazwa</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="twoja nazwa"
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
        <div className="mb-6">
          <Label htmlFor="password2">Powtórz hasło</Label>
          <Input
            type="password"
            id="password2"
            name="password2"
            placeholder="********"
            required
          />
        </div>
        <Button type="submit" variant="outline" className="w-full">Stwórz konto</Button>
      </form>
      <Separator className="my-6"/>
      <div className="flex justify-between mt-4">
      <Link href="/login" className="underline underline-offset-4 hover:text-primary">Zaloguj się</Link>
      <Link href="/home" className="underline underline-offset-4 hover:text-primary">Przejdz do aplikacji</Link>
      </div>
      </div>
    )
}