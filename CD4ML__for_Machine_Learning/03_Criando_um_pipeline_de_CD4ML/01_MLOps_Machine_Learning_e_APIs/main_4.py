from flask import Flask, request, jsonify
from textblob import TextBlob
from googletrans import Translator
from sklearn.linear_model import LinearRegression  # modelo
import pickle  # para carregar o modelo salvo
from flask_basicauth import BasicAuth


modelo = pickle.load(open('modelo.sav', 'rb'))

colunas = ['tamanho', 'ano', 'garagem']


# instanciando flask
app = Flask(__name__)
app.config['BASIC_AUTH_USERNAME'] = 'julio'
app.config['BASIC_AUTH_PASSWORD'] = 'alura'


basic_auth = BasicAuth(app)
translator = Translator()


@app.route('/')
def home():
    return "Minha primeira API."

# ponte de acesso de aplicação tem.


@app.route('/sentimento/<frase>')
@basic_auth.required
def sentimento(frase):
    # from_lang='pt_br',
    frase_en = translator.translate(frase, dest='en')
    tb_en = TextBlob(frase_en.text)
    return f"Polaridade: {tb_en.sentiment.polarity}"


@app.route('/cotacao/', methods=['POST'])
@basic_auth.required
def cotacao():
    dados = request.get_json()
    dados_input = [dados[col] for col in colunas]
    preco_previsto = modelo.predict([dados_input])
    return jsonify(preco=preco_previsto[0])


# debug =True significa que cada alteração ele atualiza automaticamente.
app.run(debug=True)
