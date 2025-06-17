// RootLayout.jsx
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      {/* Add Header/Nav if needed here */}
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
