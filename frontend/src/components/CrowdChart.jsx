import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar
} from "recharts";

export default function CrowdChart({ crowd }) {

    return (

        <div className="bg-white rounded-xl shadow p-5">

            <h2 className="text-xl font-semibold mb-4">
                Crowd Occupancy
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart data={crowd}>

                    <XAxis dataKey="gate_name" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="occupancy"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}