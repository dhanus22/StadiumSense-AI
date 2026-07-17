import { Users, Car, UtensilsCrossed, AlertTriangle } from "lucide-react";

export default function StatisticsBar({ dashboard }) {

    const totalCrowd = dashboard.crowd.reduce(
        (sum, gate) => sum + gate.occupancy,
        0
    );

    const totalParking = dashboard.parking.reduce(
        (sum, lot) => sum + lot.occupied,
        0
    );

    const totalFoodQueue = dashboard.food.reduce(
        (sum, food) => sum + food.queue_length,
        0
    );

    return (

        <div className="bg-white rounded-xl shadow p-5">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                <div>
                    <Users className="text-blue-600 mb-2"/>
                    <h3 className="text-2xl font-bold">
                        {totalCrowd}
                    </h3>
                    <p>Total Visitors</p>
                </div>

                <div>
                    <Car className="text-green-600 mb-2"/>
                    <h3 className="text-2xl font-bold">
                        {totalParking}
                    </h3>
                    <p>Parked Vehicles</p>
                </div>

                <div>
                    <UtensilsCrossed className="text-orange-600 mb-2"/>
                    <h3 className="text-2xl font-bold">
                        {totalFoodQueue}
                    </h3>
                    <p>People in Food Queues</p>
                </div>

                <div>
                    <AlertTriangle className="text-red-600 mb-2"/>
                    <h3 className="text-2xl font-bold">
                        {dashboard.alerts.length}
                    </h3>
                    <p>Active Alerts</p>
                </div>

            </div>

        </div>

    );

}