import Header from "@/components/Header";
import Home from "@/components/Home";

export default function App() {
  return (
    // Your JSX code
    <div className="relative bg-[#dee4e7] min-h-screen">
      <div className="fixed top-0 left-0 w-full">
        <Header />
      </div>
      <div className="mt-[header-height] overflow-y-auto">
        <Home />
      </div>
    </div>

  )
}