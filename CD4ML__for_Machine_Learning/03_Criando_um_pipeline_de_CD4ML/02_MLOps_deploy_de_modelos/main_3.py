from flask import Flask, request, jsonify
from googletrans import Translator
from textblob import TextBlob
import pandas as pd  # tranformação de dados
from sklearn.linear_model import LinearRegression  # modelo
import pickle  # para carregar o modelo salvo

modelo = pickle.load(open('modelo.sav', 'rb'))

colunas = ['tamanho', 'ano', 'garagem']


# instanciando flask
app = Flask(__name__)
translator = Translator()


@app.route('/')
def home():
    return "Minha primeira API."

# ponte de acesso de aplicação tem.


@app.route('/cotacao/', methods=['POST'])
def cotacao():
    dados = request.get_json()
    dados_input = [dados[col] for col in colunas]
    preco_previsto = modelo.predict([dados_input])
    return jsonify(preco=preco_previsto[0])


# debug =True significa que cada alteração ele atualiza automaticamente.
app.run(debug=True)
