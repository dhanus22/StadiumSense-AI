import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">

      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        StadiumSense AI
      </div>

      <nav className="flex-1 p-4 space-y-3">

        <Link
          to="/"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/ai"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Bot size={20} />
          AI Assistant
        </Link>

      </nav>

    </aside>
  );
}