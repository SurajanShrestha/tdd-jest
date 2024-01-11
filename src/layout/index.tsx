import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="App-header">
      <Outlet />
    </div>
  );
};
