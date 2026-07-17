import { Activity, ShieldCheck } from "lucide-react";

export default function DashboardHeader() {
    return (
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-xl p-6 shadow">

            <div className="flex justify-between items-center">

                <div>
                    <h1 className="text-3xl font-bold">
                        StadiumSense AI
                    </h1>

                    <p className="mt-2 text-blue-100">
                        Real-time Smart Stadium Operations Dashboard
                    </p>
                </div>

                <div className="flex gap-6">

                    <div className="flex items-center gap-2">
                        <Activity size={24} />
                        <span>Live Monitoring</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <ShieldCheck size={24} />
                        <span>AI Decision Support</span>
                    </div>

                </div>

            </div>

        </div>
    );
}