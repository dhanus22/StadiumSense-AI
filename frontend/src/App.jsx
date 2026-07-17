import './App.css'

import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return <>
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100">

      <AppRoutes />;
    </div>
  </>
}