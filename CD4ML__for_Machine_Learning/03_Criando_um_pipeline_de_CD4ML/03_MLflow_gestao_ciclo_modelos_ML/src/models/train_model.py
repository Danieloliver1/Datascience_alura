# -*- coding: utf-8 -*-

import pandas as pd
import math
import mlflow
import xgboost
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import argparse # para receber parametros



def parse_args():
    parser = argparse.ArgumentParser(description='house Prices ML')

    parser.add_argument(
        '--learning-rate',
        type=float,
        default=0.3,
        help='taxa de aprendizado para atuaizar o tamanho do passo em cada passa do boosting'
    )
    parser.add_argument(
        '--max-depth',
        type=int,
        default=6,
        help='profundidade maxima das arvores'
    )
    return parser.parse_args()


# Carregar os dados
# df = pd.read_csv('data/processed/casas.csv')
df = pd.read_csv(r'D:\javascripts\mlflow\mlflow\data\processed\casas.csv')


# Preparar os dados
X = df.drop('preco', axis=1)
y = df['preco'].copy()

# Dividir os dados em conjunto de treino e teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Criar DMatrix para XGBoost
dtrain = xgboost.DMatrix(X_train, label=y_train)
dtest = xgboost.DMatrix(X_test, label=y_test)


def main():
    args = parse_args()
    # Definir os parâmetros do modelo
    xbg_params = {
        'learning_rate': args.learning_rate,
        'max_depth':args.max_depth,
        'seed': 42
    }

    # Iniciar o experimento no MLflow
    mlflow.set_experiment('house-prices-script')
    with mlflow.start_run():
        mlflow.xgboost.autolog()  # Ativar logging automático
        xgb = xgboost.train(xbg_params, dtrain, evals=[(dtrain, 'train')])

        # Fazer previsões
        xgb_predicted = xgb.predict(dtest)

        # Calcular e salvar métricas
        mse = mean_squared_error(y_test, xgb_predicted)
        rmse = math.sqrt(mse)
        r2 = r2_score(y_test, xgb_predicted)

        mlflow.log_metric('mse', mse)
        mlflow.log_metric('rmse', rmse)
        mlflow.log_metric('r2', r2)

        # Salvar parâmetros do modelo
        # mlflow.log_params(xbg_params)

        # Salvar o modelo
        # mlflow.xgboost.log_model(xgb, 'xgboost_model')


if __name__ == '__main__':
    main()
