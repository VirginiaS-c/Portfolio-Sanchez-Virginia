from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Configuración mejorada de caché
@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

@app.route("/")
def home():
    return render_template("index.html")

# Ruta para PDFs (versión óptima)
@app.route('/pdf/<filename>')
def serve_pdf(filename):
    certs_dir = os.path.join(app.static_folder, 'img', 'certificados')
    return send_from_directory(certs_dir, filename, as_attachment=False)
    
if __name__ == "__main__":
    app.run(debug=True, port=5000)