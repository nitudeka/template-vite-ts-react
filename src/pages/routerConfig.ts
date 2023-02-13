import { IRoute } from "../router/routes";

// import routes
import authRoutes from "./auth/routerConfig";

export interface IRouterConfig extends IRoute {
  isPublic?: boolean;
}

const config: IRouterConfig[] = [...authRoutes];

export default config;
