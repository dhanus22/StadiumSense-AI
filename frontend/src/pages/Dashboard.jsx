import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import KPICard from "../components/KPICard";
import { getDashboard } from "../services/dashboardService";
import CrowdTable from "../components/CrowdTable";
import ParkingTable from "../components/ParkingTable";
import FoodTable from "../components/FoodTable";
import AlertsPanel from "../components/AlertsPanel";
import AISummaryCard from "../components/AISummaryCard";
import AIChat from "../components/AIChat";
import CrowdChart from "../components/CrowdChart";
import ParkingChart from "../components/ParkingChart";
import DashboardHeader from "../components/DashboardHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import StatisticsBar from "../components/StatisticsBar";

// Small helper so every section of the page gets the same label
// treatment instead of each block inventing its own heading style.
function SectionHeading({ eyebrow, title }) {
    return (
        <div className="mb-4">
            {eyebrow && (
                <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase mb-1">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
    );
}

export default function Dashboard() {
    const [dashboard, setDashboard] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const data = await getDashboard();
                setDashboard(data);
                setLastUpdated(new Date());
            } catch (error) {
                console.error(error);
            }
        };

        fetchDashboard();

        const interval = setInterval(fetchDashboard, 10000);

        return () => clearInterval(interval);
    }, []);

    if (!dashboard) {
        return <LoadingSpinner />;
    }

    return (
        <MainLayout>
            <DashboardHeader />

            <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-10 max-w-[1600px] mx-auto">
                <StatisticsBar dashboard={dashboard} />

                {/* Page title + freshness indicator */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-gray-200 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                            Smart Stadium Dashboard
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Live operations overview, refreshed automatically every 10 seconds.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span>
                            Last updated{" "}
                            <span className="font-semibold text-gray-700">
                                {lastUpdated.toLocaleTimeString()}
                            </span>
                        </span>
                    </div>
                </div>

                {/* KPI overview */}
                <section>
                    <SectionHeading eyebrow="Overview" title="Key metrics" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        <KPICard
                            title="Crowd Gates"
                            value={dashboard.crowd.length}
                            color="text-blue-600"
                        />
                        <KPICard
                            title="Parking Lots"
                            value={dashboard.parking.length}
                            color="text-green-600"
                        />
                        <KPICard
                            title="Food Courts"
                            value={dashboard.food.length}
                            color="text-orange-600"
                        />
                        <KPICard
                            title="Weather"
                            value={dashboard.weather?.[0]?.condition ?? "N/A"}
                            color="text-sky-600"
                        />
                        <KPICard
                            title="Volunteers"
                            value={dashboard.volunteers.length}
                            color="text-purple-600"
                        />
                        <KPICard
                            title="Alerts"
                            value={dashboard.alerts.length}
                            color="text-red-600"
                        />
                    </div>
                </section>

                {/* Operational detail tables */}
                <section>
                    <SectionHeading eyebrow="Operations" title="Live status" />
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <CrowdTable crowd={dashboard.crowd} />
                        <ParkingTable parking={dashboard.parking} />
                        <FoodTable food={dashboard.food} />
                        <AlertsPanel alerts={dashboard.alerts} />
                    </div>
                </section>

                {/* Trend charts */}
                <section>
                    <SectionHeading eyebrow="Trends" title="Crowd & parking over time" />
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <CrowdChart crowd={dashboard.crowd} />
                        <ParkingChart parking={dashboard.parking} />
                    </div>
                </section>

                {/* AI assistance */}
                <section>
                    <SectionHeading eyebrow="Assistant" title="AI insights" />
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <AISummaryCard />
                        <AIChat />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}