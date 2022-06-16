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
    title: "New Remix App",
    charSet: "utf-8",
    "color-scheme": "dark",
    viewport: "width=device-width, initial-scale=1",
    "twitter:card": "summary",
    "og:title": "",
    "twitter:title": "",
    "og:url": "",
    "og:image": "",
    "twitter:image": "",
    "og:image:alt": "",
    "twitter:image:alt": ""
    /**
     * <!-- Jetpack Open Graph Tags -->
<meta property="og:type" content="article" />
<meta property="og:title" content="Axiomatic CSS and Lobotomized Owls" />
<meta property="og:url" content="https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/" />
<meta property="og:description" content="Managing flow content can get unwieldy—too many class selectors can become a specificity headache, nested styling can get redundant, and content editors don’t always understand the presentational m…" />
<meta property="article:published_time" content="2014-10-21T14:00:00+00:00" />
<meta property="article:modified_time" content="2014-10-21T14:00:00+00:00" />
<meta property="og:site_name" content="A List Apart" />
<meta property="og:image" content="https://i0.wp.com/alistapart.com/wp-content/uploads/2014/10/ALA_406_Axiomatic-Owls.png?fit=1200%2C607&#038;ssl=1" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="607" />
<meta property="og:image:alt" content="" />
<meta property="og:locale" content="en_US" />
<meta name="twitter:site" content="@alistapart" />
<meta name="twitter:text:title" content="Axiomatic CSS and Lobotomized Owls" />
<meta name="twitter:image" content="https://i0.wp.com/alistapart.com/wp-content/uploads/2014/10/ALA_406_Axiomatic-Owls.png?fit=1200%2C607&#038;ssl=1&#038;w=640" />
<meta name="twitter:card" content="summary_large_image" />
     */
  };
};

export let links: LinksFunction = () => {
	return [
		{ rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,100&family=Roboto:wght@300;400&family=Rubik:wght@400;500;700&display=swap" },
		// { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "stylesheet", type: "text/css", href: GlobalStyles },
    { rel: "manifest", href: "/manifest.json"},
    { rel: "dns-prefetch", href: "//secure.gravatar.com" }, // https://secure.gravatar.com/
    // { rel: "alternate", type: "application/rss+xml", title: "A List Apart &raquo; Feed", href: "https://alistapart.com/main/feed/" }
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
      <body className="wrapper">
      <div className="corner">
          <img src="/corner.svg" alt="Corner icon" />
        </div>
        <Outlet />
        <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
