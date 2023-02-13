import { IRouterConfig } from "../routerConfig";
import Login from "./Login";

const config: IRouterConfig[] = [
  {
    path: "/login",
    element: <Login />,
    isPublic: true,
  },
];

export default config;
