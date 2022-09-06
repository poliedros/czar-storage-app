import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { HomePage } from "components/homepage";
import { StorageDTO } from "./api/storage";
import Layout from "components/layout";

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: storage, error } = useSWR<StorageDTO[]>(
    "/api/storage",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!storage) return <div>loading...</div>;

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Home;
