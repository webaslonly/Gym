import { FaGithub, FaGoogle } from "react-icons/fa"
import { Button } from "../ui/button"

function Social() {
  return (
    <div>
      <div className="grid  grid-cols-2 mt-3 gap-3">
     
        <Button className="w-full flex items-center gap-2" >
          <FaGoogle size={18} />
          <span>Google</span>
        </Button>
        <Button className="flex items-center gap-2" >
          <FaGithub size={18} />
          <span>GitHub</span>
        </Button>
      </div>
    </div>
  )
}

export default Social