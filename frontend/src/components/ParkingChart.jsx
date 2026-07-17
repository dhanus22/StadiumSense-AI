import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const COLORS = [
    "#2563eb",
    "#16a34a",
    "#ea580c",
    "#dc2626"
];

export default function ParkingChart({ parking }) {

    return (

        <div className="bg-white rounded-xl shadow p-5">

            <h2 className="text-xl font-semibold mb-4">
                Parking Utilization
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={parking}
                        dataKey="occupied"
                        nameKey="lot_name"
                        outerRadius={100}
                    >

                        {parking.map((entry, index) => (

                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />

                        ))}

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}