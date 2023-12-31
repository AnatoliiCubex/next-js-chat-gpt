import React, { PropsWithChildren } from "react";
import Head from "next/head";

import { Sidebar } from "@components/Sidebar";

import styles from "./Layout.module.scss";

export const LayoutComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
      <main className={styles.layout}>{children}</main>
    </>
  );
};

LayoutComponent.displayName = "Layout";
