export default function CrowdTable({ crowd = [] }) {

    if (!crowd.length) {
        return (
            <div className="bg-white rounded-xl shadow p-5">
                <h2 className="text-xl font-semibold mb-4">
                    Crowd Status
                </h2>

                <p className="text-gray-500">
                    No crowd data available.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow p-5">

            <h2 className="text-xl font-semibold mb-5">
                Crowd Status
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-2">
                            Gate
                        </th>

                        <th>
                            Occupancy
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {crowd.map((gate) => {

                        const percentage =
                            (gate.occupancy / gate.capacity) * 100;

                        return (

                            <tr
                                key={gate.id}
                                className="border-b"
                            >

                                <td className="py-4">

                                    {gate.gate_name}

                                </td>

                                <td className="py-4">

                                    <div className="w-full bg-gray-200 rounded-full h-3">

                                        <div
                                            className={`h-3 rounded-full ${
                                                percentage > 90
                                                    ? "bg-red-500"
                                                    : percentage > 70
                                                    ? "bg-yellow-500"
                                                    : "bg-green-500"
                                            }`}
                                            style={{
                                                width: `${percentage}%`
                                            }}
                                        />

                                    </div>

                                    <p className="text-sm mt-1">

                                        {gate.occupancy} / {gate.capacity}
                                        &nbsp;
                                        ({percentage.toFixed(0)}%)

                                    </p>

                                </td>

                            </tr>

                        );

                    })}

                </tbody>

            </table>

        </div>
    );

}