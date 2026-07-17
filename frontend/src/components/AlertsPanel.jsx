export default function AlertsPanel({ alerts = [] }) {

    if (!alerts.length) {

        return (

            <div className="bg-white rounded-xl shadow p-5">

                <h2 className="text-xl font-semibold mb-4">

                    Active Alerts

                </h2>

                <p className="text-gray-500">

                    No active alerts.

                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow p-5">

            <h2 className="text-xl font-semibold mb-5">

                Active Alerts

            </h2>

            <div className="space-y-4">

                {alerts.map((alert) => (

                    <div
                        key={alert.id}
                        className="border rounded-lg p-4 hover:shadow transition"
                    >

                        <div className="flex justify-between">

                            <h3 className="font-semibold">

                                {alert.alert_type}

                            </h3>

                            <span
                                className={`text-white text-xs px-3 py-1 rounded-full ${
                                    alert.severity === "High"
                                        ? "bg-red-600"
                                        : alert.severity === "Medium"
                                        ? "bg-yellow-500"
                                        : "bg-green-600"
                                }`}
                            >

                                {alert.severity}

                            </span>

                        </div>

                        <p className="text-sm text-gray-600 mt-2">

                            📍 {alert.location}

                        </p>

                        <p className="text-gray-700 mt-2">

                            {alert.description}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}