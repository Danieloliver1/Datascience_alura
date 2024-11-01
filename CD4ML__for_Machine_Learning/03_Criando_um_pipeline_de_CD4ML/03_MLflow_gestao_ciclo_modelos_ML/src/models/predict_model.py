import mlflow
logged_model = 'runs:/e2459ecfa7134416bdfe03b6f0102c75/model'

# Load model as a PyFuncModel.
loaded_model = mlflow.pyfunc.load_model(logged_model)

# Predict on a Pandas DataFrame.
import pandas as pd

data = pd.read_csv(r'D:\javascripts\mlflow\mlflow\data\processed\casas_X.csv')

predicted = loaded_model.predict(data)

data['predicted'] = predicted

data.to_csv(r'D:\javascripts\mlflow\mlflow\data\processed\precos.csv')