import { 
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration 
} from '@remix-run/react';
import { json } from '@remix-run/node';
import type { MetaFunction, LinksFunction, LoaderFunction } from '@remix-run/node';

import GlobalStyles from "~/styles/global.css";

export const meta: MetaFunction = () => {
  return { 
    title: 'New Remix App',
    charSet: "utf-8",
    'color-scheme': 'dark',
    viewport: "width=device-width, initial-scale=1"
  };
};

export let links: LinksFunction = () => {
	return [
		{ rel: 'preconnect', href: "https://fonts.gstatic.com" },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,100&family=Roboto:wght@300;400&family=Rubik:wght@400;500;700&display=swap" },
		{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: "stylesheet", href: GlobalStyles }
	];
};

export let loader: LoaderFunction = async () => {
  return json({
    date: new Date()
  });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="container">
      <div className="corner">
          <img src="/corner.svg" alt="Corner icon" />
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
