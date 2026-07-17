import { TrendingUp } from "lucide-react";

export default function KPICard({
    title,
    value,
    color = "text-blue-600",
}) {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-5">

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-gray-500 text-sm font-medium">
                        {title}
                    </p>

                    <h2 className={`text-3xl font-bold mt-3 ${color}`}>
                        {value}
                    </h2>

                </div>

                <div className="bg-gray-100 p-2 rounded-lg">
                    <TrendingUp className={color} size={22} />
                </div>

            </div>

        </div>
    );
}