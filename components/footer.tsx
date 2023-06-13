import Link from "next/link";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    { label: "Doxing", href: "/doxing", target: "_self" },
    { label: "NFT Collection", href: "/ned-nft-collection", target: "_self" },
    { label: "Roadmap", href: "/roadmap", target: "_self" },
    { label: "Docs", href: "https://docs.ned.finance", target: "_blank" },
    { label: "Blog", href: "https://blog.ned.finance", target: "_blank" },
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-ned-green-500 dark:text-gray-100">
                  <span>
                    <img
                      src="/img/logo.svg"
                      alt="N"
                      width="48"
                      height="48"
                      className="w-16"
                    />
                  </span>
                </span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Ned Finance is a DeFi Wallet and payments platform built to help
              new users to use web3 and blockchain world in an easy and secure
              way.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href={item.href} className="w-full" target={item.target}>
                  <span className="flex px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-ned-green-500 focus:text-ned-green-500 focus:bg-ned-green-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="/" className="w-full">
                  <span className="flex px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-ned-green-500 focus:text-ned-green-500 focus:bg-ned-green-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://ned.finance"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Ned Finance
        </div>
      </Container>
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);
