import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

function UserBox() {
  return (
    <div className="text-lg font-medium text-white">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default UserBox
