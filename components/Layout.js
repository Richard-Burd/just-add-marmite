// https://tailwindcss.com/docs/installation/play-cdn

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        {/* <!-- Alpine Plugins https://alpinejs.dev/plugins/collapse --> */}
        <script
          defer
          src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"
        ></script>

        {/* <!-- Alpine Core --> */}
        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  );
}
