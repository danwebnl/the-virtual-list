import { Link } from "react-router-dom"
import "./Page.css"

// basic page template
function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <Link to="/">
        <h1 className="cursor-pointer">
          The Virtual List {import.meta.env.PORT}
        </h1>
      </Link>
      {children}
    </div>
  )
}

export default Page
