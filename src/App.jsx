import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./screens/Main";
import { Purchase } from "./screens/Purchase";
import { HistoryList } from "./screens/HistoryList";
import { PurchaseConfirm } from "./screens/PurchaseConfirm";
import { RewardWin } from "./screens/RewardWin";
import { ResultWin } from "./screens/ResultWin";
import { StompSessionProvider } from "react-stomp-hooks";
import { getUserById } from "./api/api";
import { setUserInfo } from "./models/user";

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <StompSessionProvider
        url={"wss://b58a5de725ad.ngrok.app/crypto-battlenet"}
      >
        <Main />
      </StompSessionProvider>
    ),
  },
  {
    path: "/main",
    element: (
      <StompSessionProvider
        url={"wss://b58a5de725ad.ngrok.app/crypto-battlenet"}
      >
        <Main />
      </StompSessionProvider>
    ),
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/history-list",
    element: <HistoryList />,
  },
  // {
  //   path: "/purchase-confirm",
  //   element: <PurchaseConfirm />,
  // },
  // {
  //   path: "/reward-win",
  //   element: <RewardWin />,
  // },
  // {
  //   path: "/ResultWin",
  //   element: <ResultWin />,
  // },
]);

export const App = () => {
  useEffect(() => {
    getUserById(1)
      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch((error) => console.error("Failed to sign in", error));
  }, []);
  return <RouterProvider router={router} />;
};
