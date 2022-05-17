FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY requirements.txt .
RUN pip install pip --upgrade
RUN pip install -r requirements.txt
COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# FROM python:3

# COPY . /app
# WORKDIR /app

# RUN python3 -m venv /opt/venv

# RUN /opt/venv/bin/pip install pip --upgrade && \
#     /opt/venv/bin/pip install -r requirements.txt && \
#     chmod +x entrypoint.sh

# CMD ["/app/entrypoint.sh"]
