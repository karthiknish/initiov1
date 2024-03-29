import { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import {
  MdWorkOutline,
  MdAttachMoney,
  MdDoubleArrow,
  MdBackupTable,
  MdContacts,
} from "react-icons/md";
function Nav({ variable }) {
  useEffect(() => {
    const query = window.location.pathname;
    if (query === "/admin") {
      Router.push("/admin/projects");
    }
  }, []);
  return (
    <>
      <div className="flex justify-left p-2 h-screen">
        <nav id="nav" className="w-56 relative">
          {variable === "projects" && (
            <span className="absolute h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"></span>
          )}
          <ul className="relative">
            <li>
              <button
                onClick={() => Router.push("/admin/projects")}
                type="button"
                className="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
              >
                <MdWorkOutline className="text-2xl" />
                <span className="ml-2 text-sm font-medium transition-all ease-out transition-medium">
                  Projects
                </span>
              </button>
            </li>
            {variable === "blogs" && (
              <span className="absolute -z-10 h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"></span>
            )}
            <li>
              <button
                onClick={() => Router.push("/admin/blogs")}
                type="button"
                className="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
              >
                <MdBackupTable className="text-2xl" />
                <span className="ml-2 text-sm font-medium transition-all ease-out transition-medium">
                  Blogs
                </span>
              </button>
            </li>
            {variable === "contacts" && (
              <span className="absolute -z-10 h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"></span>
            )}
            <li>
              <button
                onClick={() => Router.push("/admin/contacts")}
                type="button"
                className="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
              >
                <MdContacts className="text-2xl" />
                <span className="ml-2 text-sm font-medium transition-all ease-out transition-medium">
                  Contacts
                </span>
              </button>
            </li>
            {variable === "expenses" && (
              <span className="absolute -z-10 h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"></span>
            )}
            <li>
              <button
                onClick={() => Router.push("/admin/expenses")}
                type="button"
                className="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
              >
                <MdAttachMoney className="text-2xl" />
                <span className="ml-2 text-sm font-medium transition-all ease-out transition-medium">
                  Expenses
                </span>
              </button>
            </li>
            {variable === "leads" && (
              <span className="absolute -z-10 h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"></span>
            )}
            <li>
              <button
                onClick={() => Router.push("/admin/leads")}
                type="button"
                className="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
              >
                <MdDoubleArrow className="text-2xl" />

                <span className="ml-2 text-sm font-medium transition-all ease-out transition-medium">
                  Leads
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
