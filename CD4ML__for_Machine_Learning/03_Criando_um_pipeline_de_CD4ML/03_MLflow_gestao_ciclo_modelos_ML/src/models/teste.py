# -*- coding: utf-8 -*-
import pandas as pd



# Carregar os dados
df = pd.read_csv(r'D:\javascripts\mlflow\mlflow\data\processed\casas.csv')

df.drop('preco',axis=1).to_csv(r'D:\javascripts\mlflow\mlflow\data\processed\casas_X.csv',index=False)

print('Sucesso')
print(pd.read_csv(r'D:\javascripts\mlflow\mlflow\data\processed\casas_X.csv'))