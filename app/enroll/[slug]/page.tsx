"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function EnrollPage({ params }: { params: Promise<{ slug: string }> }) {
  const [loading, setLoading] = useState(false)
  const {slug} = await params
  const handleEnroll = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    // Here you would integrate with your backend API and Midtrans
    // For demonstration purposes, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to a payment page or show a success message
    alert("Enrollment successful! Redirecting to payment...")
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Enroll in {decodeURIComponent(slug)}</h1>
      <form onSubmit={handleEnroll} className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" type="text" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Processing..." : "Proceed to Payment"}
        </Button>
      </form>
    </div>
  )
}

