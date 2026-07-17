import { Wifi } from "lucide-react";

export default function LiveBadge() {

    return (
        <div className="flex items-center gap-2 text-green-600 font-semibold">

            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

            <Wifi size={18} />

            LIVE

        </div>
    );
}