import { Chat } from "../features/chat/Chat"
import { Sidebar } from "../features/chat/Sidebar"

export const MainPage = () => {
  return (
    <div className="px-16 flex bg-dark">
      <Sidebar />
      <Chat />
    </div>
  )
}
