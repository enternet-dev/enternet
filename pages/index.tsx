import type { NextPage } from "next";
import Head from "next/head";
import * as S from "./index.styles";

const Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Enternet.dev</title>
        <meta name="description" content="Enternet.dev marketing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Main>
        <S.Title>Welcome to Enternet!</S.Title>

        <S.Description>We are under construction</S.Description>
      </S.Main>
    </S.Container>
  );
};

export default Home;
