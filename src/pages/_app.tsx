import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@mui/material";
import theme from "themes/theme";

import Header from "components/Surfaces/Header/Header";
import Footer from "components/Surfaces/Footer/Footer";
import { AppContainer } from "styles/pages/_app.style";

import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Procure diaristas na sua região por Pedro Barbosa" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                {/* eslint-disable @next/next/no-page-custom-font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                {/* eslint-disable @next/next/no-css-tags */}
                <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
                <title>e-diaristas</title>
            </Head>
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </AppContainer>
            </ThemeProvider>
        </>
    );
}
export default MyApp;
