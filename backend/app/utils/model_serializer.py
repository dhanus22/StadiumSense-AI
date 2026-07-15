from sqlalchemy.inspection import inspect


def model_to_dict(model):
    return {
        column.key: getattr(model, column.key)
        for column in inspect(model).mapper.column_attrs
    }


def serialize_list(models):
    return [model_to_dict(model) for model in models]