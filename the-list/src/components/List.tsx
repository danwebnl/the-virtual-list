import { useContext, UIEvent, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AppContext from "./AppContext"
import Page from "./Page"
import fetchUsers from "../utils/fetchUsers"
import dateFormat from "../utils/dateFormat"

function List() {
  const { list, lastPage, setList, setLastPage } = useContext(AppContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(true)

  const handleOnClick = ({ id }: { id: string }) => navigate(`/item/${id}`)

  const handleScroll = async (e: UIEvent<HTMLDivElement>) => {
    const bottom =
      (e.target as HTMLInputElement).scrollHeight -
        (e.target as HTMLInputElement).scrollTop ===
      (e.target as HTMLInputElement).clientHeight
    if (bottom) {
      if (list.length === 100) return
      setLoading(true)
      const users = await fetchUsers({ page: lastPage + 1 })
      setLastPage(lastPage + 1)
      setList([...list, ...users])
      setLoading(false)
    }
  }

  useEffect(() => {
    if (list.length > 0) {
      setLoading(false)
    }
  }, [list])

  return (
    <Page>
      <div className="flex items-center justify-center">
        <table className="text-left w-full">
          <thead className="bg-[#113f67] flex text-white w-full">
            <tr className="flex w-full mb-4">
              <th className="p-4 w-1/4">ID</th>
              <th className="p-4 w-1/4">Name</th>
              <th className="p-4 w-1/4">Registration Date</th>
              <th className="p-4 w-1/4">Avatar</th>
            </tr>
          </thead>
          <tbody
            className="bg-[#e0e0e0] flex flex-col items-center justify-between overflow-y-scroll w-full h-[600px]"
            onScroll={handleScroll}
          >
            {list.map(({ createdAt, name, avatar, id }) => (
              <tr
                className="flex w-full mb-4 cursor-pointer"
                key={id}
                onClick={() => handleOnClick({ id })}
              >
                <td className="p-4 w-1/4">{id}</td>
                <td className="p-4 w-1/4">{name}</td>
                <td className="p-4 w-1/4">{dateFormat(createdAt)}</td>
                <td className="p-4 w-1/4">
                  <img src={avatar} className="object-cover h-16 w-32"></img>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && (
          <div className="font-semibold uppercase pt-10 pb-10">Loading...</div>
        )}
      </div>
    </Page>
  )
}

export default List
