import { MantineProvider } from "@mantine/core";
import { Outlet, useLocation } from "umi";
import NavSide from "./NavSide";
import { useRecoilValue } from "recoil";
import useStyles from "./index.css";
import { modeState } from "@/store";
import { useMemo } from "react";
import { WHITE_ROUTE_PATHNAMES } from "@/constant";

export default function Layout() {
  const { classes } = useStyles();
  const colorScheme = useRecoilValue(modeState);
  const location = useLocation();

  /** 是否显示Side */
  const hasSide = useMemo(
    () =>
      location.pathname !== "/" && WHITE_ROUTE_PATHNAMES.includes(location.pathname),
    [location.pathname]
  );

  console.log(hasSide, "hasSide");

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme,
      }}
    >
      {hasSide ? (
        <Outlet />
      ) : (
        <div className={classes.layout}>
          <NavSide />
          <div className={classes.outlet}>
            <Outlet />
          </div>
        </div>
      )}
    </MantineProvider>
  );
}
