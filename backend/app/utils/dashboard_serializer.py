from app.utils.model_serializer import serialize_list


def serialize_dashboard(data: dict):
    return {
        "crowd": serialize_list(data["crowd"]),
        "parking": serialize_list(data["parking"]),
        "food": serialize_list(data["food"]),
        "weather": serialize_list(data["weather"]),
        "volunteers": serialize_list(data["volunteers"]),
        "alerts": serialize_list(data["alerts"]),
    }