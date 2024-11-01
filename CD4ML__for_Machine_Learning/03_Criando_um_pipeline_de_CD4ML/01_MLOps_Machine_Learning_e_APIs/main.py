from flask import Flask
from googletrans import Translator
from textblob import TextBlob
import pandas as pd  # tranformação de dados
from sklearn.model_selection import train_test_split  # tratamento dos dados
from sklearn.linear_model import LinearRegression # modelo

# Tratamento dos dados
df = pd.read_csv('casas.csv')
colunas = ['tamanho', 'preco']
df = df[colunas]
X = df.drop('preco', axis= 1)
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


@app.route('/sentimento/<frase>')
def sentimento(frase):
    # from_lang='pt_br',
    frase_en = translator.translate(frase, dest='en')
    tb_en = TextBlob(frase_en.text)
    return f"Polaridade: {tb_en.sentiment.polarity}"


@app.route('/cotacao/<int:tamanho>')
def cotacao(tamanho):
    preco_previsto = modelo.predict([[tamanho]])
    return f"Preço previsto: {preco_previsto[0]}"


# debug =True significa que cada alteração ele atualiza automaticamente.
app.run(debug=True)
