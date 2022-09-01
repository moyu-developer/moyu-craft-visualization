import { MantineProvider } from "@mantine/core";
import { Link, Outlet } from "umi";
import NavSide from "./NavSide";

export default function Layout() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul> */}
        <NavSide />
        <Outlet />
      </div>
    </MantineProvider>
  );
}
