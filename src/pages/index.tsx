import { BellIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import Img from "next/image";
import { PropsWithChildren, useState } from "react";

import AuthShowcase from "../core/components/AuthShowcase";
import Button from "../core/components/Button";
import Head from "../core/components/Head";
import Layout from "../core/components/Layout";
import Link from "../core/components/Link";
import StyledSeparator from "../core/components/Separator";
import type { Config } from "../core/lib/config";
import getConfig from "../core/lib/config";
import image from "../core/resources/image.jpg";

import { trpc } from "../core/utils/trpc";

const H2: React.FC<PropsWithChildren<>> = ({ children }) => (
  <h2 className="mt-4 mb-4">{children}</h2>
);

const Home: NextPage<{ config: Config }> = ({ config }) => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const [active, setActive] = useState<boolean>(false);

  const [linkActive, setLinkActive] = useState<boolean>(false);

  return (
    <Layout config={config}>
      <div className="prose mt-8">
        <Head
          title={config.site.title}
          defaultTitle={config.site.defaultTitle}
          description={config.site.description}
          canonical={config.site.url}
          image={config.site.image}
          site={config.site.url}
        />
        <h1>Next Starter</h1>
        <div>
          <H2>tRPC</H2>
          {hello.data ? (
            <pre>
              <code>{JSON.stringify(hello.data, null, 2)}</code>
            </pre>
          ) : (
            "Loading tRPC query..."
          )}
        </div>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <div>
          <H2>Next Auth</H2>
          <AuthShowcase />
        </div>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <div>
          <H2>Typography</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <div className="flex items-center gap-2">
          <H2>Link</H2>
          <div>
            <Button
              variant="outlined"
              onClick={() => setLinkActive(!linkActive)}
              active={linkActive}
            >
              <span className="p-2">active</span>
            </Button>
          </div>
        </div>
        <h3>Normal</h3>
        <Link active={linkActive} href="#">
          This is a link
        </Link>
        <h3>Soft</h3>
        <Link active={linkActive} variant="soft" href="#">
          This is a link
        </Link>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <div className="flex items-center gap-2">
          <H2>Button</H2>
          <div>
            <Button
              variant="outlined"
              onClick={() => setActive(!active)}
              active={active}
            >
              <span className="p-2">active</span>
            </Button>
          </div>
        </div>
        <h3>Text</h3>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: "5px",
            }}
          >
            <Button variant="text" active={active}>
              <BellIcon />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="text" active={active} fillWidth>
              <BellIcon />
            </Button>
          </div>
        </div>
        <h3>Soft</h3>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: "5px",
            }}
          >
            <Button variant="soft" active={active}>
              <BellIcon />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="soft" active={active} fillWidth>
              <BellIcon />
            </Button>
          </div>
        </div>
        <h3>Outlined</h3>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: "5px",
            }}
          >
            <Button variant="outlined" active={active}>
              <BellIcon />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="outlined" active={active} fillWidth>
              <BellIcon />
            </Button>
          </div>
        </div>
        <h3>Inverted Outlined</h3>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: "5px",
            }}
          >
            <Button variant="outlined-inverted" active={active}>
              <BellIcon />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="outlined-inverted" active={active} fillWidth>
              <BellIcon />
            </Button>
          </div>
        </div>
        <h3>Contained</h3>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: "5px",
            }}
          >
            <Button variant="contained" active={active}>
              <BellIcon />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="contained" active={active} fillWidth>
              <BellIcon />
            </Button>
          </div>
        </div>
        <h3>Unstyled</h3>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: "5px",
            }}
          >
            <Button variant="unstyled" active={active}>
              <BellIcon />
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="unstyled" active={active} fillWidth>
              <BellIcon />
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <StyledSeparator orientation="horizontal" />
        </div>
        <H2>DaisyUI</H2>
        <div className="flex gap-2">
          <button className="btn-primary btn">Primary</button>
          <button className="btn-secondary btn">Secondary</button>
          <button className="btn-accent btn">Accent</button>
          <button className="btn">Neutral</button>
          <button className="btn-ghost btn">Ghost</button>
          <button className="btn-link btn">Link</button>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      config: getConfig(),
    },
  };
};

export default Home;
