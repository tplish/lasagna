from flask import Flask
import pandas as pd

app = Flask(__name__)

f_movies_csv = 'datasource/movielens/ml-25m/movies.csv'
f_ratings_csv = 'datasource/movielens/ml-25m/ratings.csv'

movies_pd = pd.read_csv(f_movies_csv)
ratings_pd = pd.read_csv(f_ratings_csv)


