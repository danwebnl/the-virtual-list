const limit = 10
// https://64f7b288824680fd217ed1ab.mockapi.io/users - mock API

const fetchUsers = async ({ page }: { page: number }) => {
  try {
    const response = await fetch(
      `http://localhost:4000/users?page=${page}&limit=${limit}`
    )
    const json = await response.json()

    console.log("page", page)
    console.log("users", json)
    console.log("=====")

    return json
  } catch (error) {
    console.error(`There has been an error: ${error}`)
  }
}

export default fetchUsers
