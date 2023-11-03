import UserProfile from "../components/profile/UserProfile";


export default function Profile() {
  return (
    <div
      className="relative overflow-y-auto h-[calc(100vh-82px)] w-full p-4 gap-6"
    >
        <UserProfile />
    </div>
      
  )
}
