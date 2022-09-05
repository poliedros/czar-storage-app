import type { NextPage } from "next";
import Head from "next/head";

import useSWR from "swr";

import { StorageDTO } from "./api/storage";

//import Router from 'next/router';

import Link from "next/link";

import Button from "react-bootstrap/Button";

const Home: NextPage = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: storage, error } = useSWR<StorageDTO[]>(
        "/api/storage",
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (!storage) return <div>loading...</div>;

    return (
        <div className="container mx-auto">
            <Head>
                <title>Czar Storage App</title>
                <meta
                    name="description"
                    content="Czar Storage App - Czar.dev"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Button variant="primary" onClick={() => Router.push('/csIntro')}>Primary</Button> */}
            <Link
                href={{
                    pathname: "/csSelect",
                    query: JSON.stringify(storage),
                }}
            >
                <a>Some text</a>
            </Link>
            <h1
                className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800"
                style={{ fontFamily: "'amazone-regular', sans-serif" }}
            >
                Tailwind Starter Kit
            </h1>
        </div>
    );
};

export default Home;
