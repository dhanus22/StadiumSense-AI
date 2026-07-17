export default function FoodTable({ food = [] }) {

    if (!food.length) {

        return (

            <div className="bg-white rounded-xl shadow p-5">

                <h2 className="text-xl font-semibold mb-4">

                    Food Queue Status

                </h2>

                <p className="text-gray-500">

                    No food queue information available.

                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow p-5">

            <h2 className="text-xl font-semibold mb-5">

                Food Queue Status

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-2">

                            Court

                        </th>

                        <th>

                            Queue

                        </th>

                        <th>

                            Wait

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {food.map((court) => (

                        <tr
                            key={court.id}
                            className="border-b"
                        >

                            <td className="py-3">

                                {court.food_court}

                            </td>

                            <td className="text-center">

                                {court.queue_length}

                            </td>

                            <td className="text-center">

                                {court.average_wait} mins

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}