from flask import Flask, request, jsonify
from googletrans import Translator
from textblob import TextBlob
import pandas as pd  # tranformação de dados
from sklearn.model_selection import train_test_split  # tratamento dos dados
from sklearn.linear_model import LinearRegression  # modelo
import pickle

# Tratamento dos dados
df = pd.read_csv('casas.csv')
colunas = ["tamanho", "ano", "garagem"]

X = df.drop('preco', axis=1)
y = df['preco']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42)

# Modelo
modelo = LinearRegression()
modelo.fit(X_train, y_train)


# instanciando flask
app = Flask(__name__)
translator = Translator()

# definindo rota


@app.route('/')
def home():
    return "Minha primeira API."

# ponte de acesso de aplicação tem.


@app.route('/cotacao/', methods=['POST'])
def cotacao():
    dados = request.get_json()
    dados_input = [dados[col] for col in colunas]
    preco_previsto = modelo.predict([dados_input])
    return jsonify(preco = preco_previsto[0])


# debug =True significa que cada alteração ele atualiza automaticamente.
app.run(debug=True)
