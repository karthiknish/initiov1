import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
function Id({ data }) {
  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.title} />
        <meta
          name="keywords"
          content="Initio Solutions, Web development,Web solutions"
        />
        <meta name="author" content="Initio Solutions" />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.title} />
        <meta property="og:image" content={data?.imageUrl} />
        <meta property="og:image:alt" content={data?.title} />
        <meta
          property="og:url"
          content={`https://www.intiosolutions.com/blog/${data?._id}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InitioSolutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.title} />
        <meta name="twitter:description" content={data?.title} />
        <meta name="twitter:image" content={data?.imageUrl} />
        <meta name="twitter:site" content="@karthiknish" />
        <meta name="twitter:creator" content="@karthiknish" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="InitioSolutions" />
        <meta name="google" content="notranslate" />
        <link
          rel="canonical"
          href={`https://www.initiosolutions.com/blog/${data?._id}`}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {data && (
          <div className="flex flex-col">
            <Image
              className="object-cover h-32 w-full"
              alt="headimage"
              width={400}
              height={400}
              src={data.imageUrl}
            />

            <div className="flex flex-col p-2">
              <h1 className="text-4xl p-2 text-black">{data?.title}</h1>
              {data && data.content && (
                <div
                  className="p-3 prose-strong:text-2xl prose-p:m-2 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                ></div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(`${process.env.URL}/api/blog?id=${id}`);
  const blogData = await response.json();
  const data = blogData.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
export default Id;
