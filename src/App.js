import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "./app/features";
import { Protected } from "./app/common/sharedComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
