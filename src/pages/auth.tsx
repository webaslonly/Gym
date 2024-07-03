// import Register from "@/components/auth/register"
import Login from "@/components/auth/login"
import { Card } from "@/components/ui/card"

function Auth() {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-foreground to-background flex items-center justify-center">
      <Card className="p-8 w-1/3 relative">
        {/* <Register /> */}
        <Login />
      </Card>
    </div>
  )
}

export default Auth
