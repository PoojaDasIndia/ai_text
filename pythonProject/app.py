from flask import Flask, render_template, request
import openai
import random
from apps import domain_check

app = Flask(__name__)
openai.api_key = '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'

Extension_list = ['.com', '.net', '.org', '.io', '.co', '.us', '.info', '.site', '.biz', '.app', '.gov',
                  '.me', '.bar', '.edu', '.xyz',
                  '.tech']

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/generate', methods=['POST'])
def generate():
    description = request.form['description']
    brand_names = generate_brand_names(description, num_names=20)
    return render_template('index.html', brand_names=brand_names)


def generate_brand_names(description, num_names):
    prompt = "Generate " + str(
        num_names) + " brand names for a tea and coffee shop in Delhi.\n\nDescription: " + description
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        max_tokens=100,
        n=num_names,
        stop=None,
        temperature=0.7
    )
    brand_name_list = [choice['text'].strip() for choice in response.choices]
    brand_names = [o.split(". ") for i in brand_name_list for o in i.split('\n')]

    random.shuffle(brand_names[0:150])
    return brand_names


@app.route('/generator/<domain_name>', methods=['POST', 'GET'])
def process(domain_name):
    domain_input = request.form.get('domain_input')
    domain = [[(domain_input + ex).lower(),
               domain_check.check_domain_availability((domain_input + ex).lower())] for ex in Extension_list]

    return render_template('index.html', domain=domain, domain_input=domain_input)


if __name__ == '__main__':
    app.run(debug=True, host='192.168.0.115')
