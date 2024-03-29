import Link from "next/link";
import { AiOutlineEdit, AiOutlineFileAdd } from "react-icons/ai";
import Head from "next/head";
function Index() {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <h1 className="text-4xl font-medium mb-8">Admin Panel</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <Link
            href="/admin/blogs/create"
            className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-md transition-all duration-200 hover:bg-gray-200"
          >
            <AiOutlineFileAdd className="text-4xl mb-2" />
            <span>Create Blog</span>
          </Link>

          <Link
            href="/admin/blogs/edit"
            className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-md transition-all duration-200 hover:bg-gray-200"
          >
            <AiOutlineEdit className="text-4xl mb-2" />
            <span>Edit/Delete Blog</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Index;
