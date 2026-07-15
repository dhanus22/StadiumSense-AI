def serialize_dashboard(data: dict):
    return {
        "crowd": [
            {
                "gate_name": gate.gate_name,
                "occupancy": gate.occupancy,
                "capacity": gate.capacity,
            }
            for gate in data["crowd"]
        ],
        "parking": [
            {
                "lot_name": lot.lot_name,
                "occupied": lot.occupied,
                "capacity": lot.capacity,
            }
            for lot in data["parking"]
        ],
        "food": [
            {
                "food_court": food.food_court,
                "queue_length": food.queue_length,
                "average_wait": food.average_wait,
            }
            for food in data["food"]
        ],
        "weather": [
            {
                "condition": weather.condition,
                "temperature": weather.temperature,
                "humidity": weather.humidity,
                "wind_speed": weather.wind_speed,
            }
            for weather in data["weather"]
        ],
        "volunteers": [
            {
                "name": volunteer.name,
                "location": volunteer.location,
                "status": volunteer.status,
                "assigned_task": volunteer.assigned_task,
                "available": volunteer.available,
            }
            for volunteer in data["volunteers"]
        ],
        "alerts": [
            {
                "alert_type": alert.alert_type,
                "location": alert.location,
                "severity": alert.severity,
                "description": alert.description,
            }
            for alert in data["alerts"]
        ],
    }