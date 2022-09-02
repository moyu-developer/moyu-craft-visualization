import { MantineProvider } from "@mantine/core";
import { Link, Outlet } from "umi";
import NavSide from "./NavSide";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import useStyles from "./index.css";
import { modeState } from "@/store";

export default function Layout() {
  const { classes } = useStyles();
  const colorScheme = useRecoilValue(modeState);

  console.log(colorScheme, 'colorScheme')

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme
      }}
    >
      <RecoilRoot>
        <div className={classes.layout}>
          <NavSide />
          <div className={classes.outlet}>
            <Outlet />
          </div>
        </div>
      </RecoilRoot>
    </MantineProvider>
  );
}
