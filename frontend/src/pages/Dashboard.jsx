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
            <StatisticsBar dashboard={dashboard} />
            <div className="flex justify-between items-center mb-4">

                <h1 className="text-3xl font-bold">
                    Smart Stadium Dashboard
                </h1>

                <p className="text-sm text-gray-500">
                    Last Updated
                    <br />
                    <span className="font-semibold">
                        {lastUpdated.toLocaleTimeString()}
                    </span>
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">

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
            <div></div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <CrowdTable crowd={dashboard.crowd} />

                <ParkingTable parking={dashboard.parking} />

                <FoodTable food={dashboard.food} />

                <AlertsPanel alerts={dashboard.alerts} />

            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <CrowdChart
                    crowd={dashboard.crowd}
                />

                <ParkingChart
                    parking={dashboard.parking}
                />

            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <AISummaryCard />

                <AIChat />

            </div>
        </MainLayout>
    );
}