import { Link, useLoaderData } from "react-router-dom";
import Page from "./Page";
import dateFormat from "../utils/dateFormat";
import { User } from "./AppContext";

function Item() {
  const loaderData = useLoaderData();
  const { id, name, avatar, createdAt } = loaderData as User;

  return (
    <Page>
      <div className="flex items-center justify-center">
        <div className="max-w-xs mt-10">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={avatar}
                alt={name}
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {name}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>ID: {id}</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Registration Date:
                    </td>
                    <td className="px-2 py-2">{dateFormat(createdAt)}</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3 italic">
                <Link to="/">&#x2B05; Back to the list</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Item;
