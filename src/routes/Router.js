import { AxiosInterceptor } from "../axios";
import {
  AddSortPage,
  DashboardPage,
  DocumentationPage,
  HomePage,
  LoginPage,
  UsersPage,
  SortListPage,
  DeleteUsersPage,
  EditSortPage,
} from "../pages";
import RegisterPage from "../pages/RegisterPage";
import AdminRoute from "./AdminRoute";
import MainLayout from "./MainLayout";
import PrivateRoute from "./PrivateRoute";

const ThemeRoutes = [
  {
    path: "",
    element: (
      <AxiosInterceptor>
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      </AxiosInterceptor>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "/sort/:id", element: <DocumentationPage /> },
    ],
  },
  {
    path: "",
    element: (
      <AxiosInterceptor>
        <AdminRoute>
          <MainLayout />
        </AdminRoute>
      </AxiosInterceptor>
    ),
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/dashboard/users", element: <UsersPage /> },
      { path: "/dashboard/users/edit", element: <DeleteUsersPage /> },
      { path: "/dashboard/sort", element: <SortListPage /> },
      { path: "/dashboard/sort/add", element: <AddSortPage /> },
      { path: "/dashboard/sort/:id/edit", element: <EditSortPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
];

export default ThemeRoutes;
