import React, { ReactNode, useCallback } from "react";
import Head from "next/head";
import classNames from "classnames";

export interface ILayout {
  children?: ReactNode;
  as?: string;
  title?: string;
  description?: string;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  noindex?: boolean;
  [key: string]: any;
}

const Layout: React.FC<ILayout> = (props) => {
  const {
    children,
    title,
    description = null,
    paddingTop = true,
    paddingBottom = true,
    noindex = false,
  } = props;
  const mainClassess = classNames("flex-1", {
    "pt-10": paddingTop,
    "pb-10": paddingBottom,
  });

  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} - Oğuzhan Yılmaz`
            : "Oğuzhan Yılmaz - Frontend Developer"}
        </title>
        {description !== null && (
          <meta name="description" content={description} />
        )}
        {noindex && <meta name="robots" content="noindex" />}
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
