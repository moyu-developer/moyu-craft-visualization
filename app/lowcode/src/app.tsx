import React from "react";
import { RecoilRoot as RecoilRootProvider } from "recoil";

export function rootContainer(container: React.ReactNode) {
  return <RecoilRootProvider>
    {container}
  </RecoilRootProvider>
}