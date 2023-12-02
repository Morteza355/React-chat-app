import { HiMagnifyingGlass } from "react-icons/hi2"
import { Input } from "../ui/Input"

export const SearchInput = () => {
  return (
    <div className="relative">
      <label htmlFor="search" className="absolute left-2 ">
        <HiMagnifyingGlass size={20} />
      </label>
      <Input placeholder="Search" id="search" className="border rounded-md pl-6"/>
    </div>
  )
}

