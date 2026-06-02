FROM python:3.10-slim

WORKDIR /app

# Instalar dependências de sistema necessárias para o Piper e download
RUN apt-get update && apt-get install -y wget && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Fazer download do modelo na hora do build do Docker para otimizar cold starts
RUN python -c "import main; main.download_model()"

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
