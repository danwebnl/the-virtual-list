import { useEffect, useState } from "react";
import List from "./components/List";
import Item from "./components/Item";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContext, { User } from "./components/AppContext";
import fetchUsers from "./utils/fetchUsers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
    },
    {
      path: "/item/:itemId",
      element: <Item />,
      loader: async ({ params }) => {
        const result = list.find((element) => element.id === params.itemId);
        if (result) {
          return result;
        }
        throw new Response("Not Found", { status: 404 });
      },
    },
  ]);

  const [list, setList] = useState<User[]>([]);
  const [lastPage, setLastPage] = useState<number>(0);
  const contextValues = {
    list,
    setList,
    lastPage,
    setLastPage,
  };

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers({ page: 1 });
      setLastPage(1);
      setList(users);
    };

    getUsers();
  }, []);

  return (
    <AppContext.Provider value={contextValues}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </AppContext.Provider>
  );
}

export default App;
