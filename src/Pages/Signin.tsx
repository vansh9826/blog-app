import { useState } from "react"
import { Button } from "../Components/ui/button"
import { Input } from "../Components/ui/input"
import { Label } from "../Components/ui/label"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SigninPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }
  const sendReq = async()=>{
    try {
      const response = await axios.post("https://medium1.vanshchabra786.workers.dev/api/v1/users/signin",formData)
      const jwt = response.data
      localStorage.setItem("token", jwt)
     
      navigate("/blogs")
     


    } catch (error) {
      alert("error while signing up")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-card shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Signin Form */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit" onClick={sendReq} className="w-full bg-black">
                Sign In
              </Button>
            </form>
            <div className="mt-4 text-sm text-center space-y-2">
              <p>
                <a href="#" className="text-primary hover:underline">
                  Forgot password?
                </a>
              </p>
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <a href="/signup" className="text-primary hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-black text-primary-foreground p-8 flex items-center justify-center">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              "The only way to do great work is to love what you do."
              <footer className="mt-4 text-lg font-normal">— Steve Jobs</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}