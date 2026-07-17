export default function ParkingTable({ parking = [] }) {

    if (!parking.length) {

        return (

            <div className="bg-white rounded-xl shadow p-5">

                <h2 className="text-xl font-semibold mb-4">
                    Parking Status
                </h2>

                <p className="text-gray-500">
                    No parking data available.
                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow p-5">

            <h2 className="text-xl font-semibold mb-5">

                Parking Status

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-2">

                            Parking Lot

                        </th>

                        <th>

                            Utilization

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {parking.map((lot) => {

                        const percentage =
                            (lot.occupied / lot.capacity) * 100;

                        return (

                            <tr
                                key={lot.id}
                                className="border-b"
                            >

                                <td className="py-4">

                                    {lot.lot_name}

                                </td>

                                <td className="py-4">

                                    <div className="w-full bg-gray-200 rounded-full h-3">

                                        <div
                                            className="bg-blue-600 h-3 rounded-full"
                                            style={{
                                                width: `${percentage}%`
                                            }}
                                        />

                                    </div>

                                    <p className="text-sm mt-1">

                                        {lot.occupied} / {lot.capacity}
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