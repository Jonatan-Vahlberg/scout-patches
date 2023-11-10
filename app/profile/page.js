import { AchivementProvider } from "@/context/Achivements";
import UserPatches from "../components/profile/UserPatches";
import UserProfile from "../components/profile/UserProfile";


export default function Profile() {
  return (
    <AchivementProvider>

      <div
        className="relative h-[calc(100vh-82px)] w-full p-4 gap-6"
        >
        <div className="flex flex-col min-h-full">
          <UserProfile />
          <UserPatches />
        </div>
      </div>
    </AchivementProvider>
      
  )
}
