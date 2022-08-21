import type { NextPage } from "next";
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootswatch/dist/superhero/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Czar Storage App</title>
        <meta name="description" content="Czar Storage App - Czar.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="primary">Primary</Button>
      <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
        Tailwind Starter Kit
      </h1>
    </div>
  );
};

export default Home;
