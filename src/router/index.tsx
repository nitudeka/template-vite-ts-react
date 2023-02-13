import { NotificationsProvider } from "@mantine/notifications";
import App from "App";
import { QueryClientProvider } from "react-query";
import { createBrowserRouter } from "react-router-dom";
import { queryClient } from "utils/queryclient";
import getRoutes from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </QueryClientProvider>
    ),
    children: getRoutes(),
  },
]);

export default router;
