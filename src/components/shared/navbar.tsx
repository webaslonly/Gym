import { navLinks } from "@/constants"
import ThemeMode from "./theme-mode"
import UserBox from "./user-box"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

function Navbar() {
  return (
    <div className="flex items-center fixed inset-0 w-full h-20 justify-between px-24">
        <div>
            <Link to={'/'}>
            <span className="text-3xl font-bold text-white">WORKOUT</span>
            </Link>
        </div>

        <div className="flex gap-6 items-start">
            {navLinks.map((item) =>(
                <div key={item.label}>
                    <h3 className="text-lg font-medium text-white">{item.label}</h3>
                </div>
            ))}
            <ThemeMode />
            {/* <UserBox /> */}
            <Link to={'/auth'}>
        <Button className="w-fit font-bold h-10"size={'lg'}>Join club now</Button>
        </Link>
        </div>

    </div>
  )
}

export default Navbar
