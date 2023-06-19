# Base image
FROM python:3.11.3-slim-buster

# Working directory
WORKDIR /app

# Copy the entrie application
COPY . .
RUN pip install --no-cache-dir -r notes.txt

# Expose the application port 
EXPOSE 5000

# Set enviroment variables
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Start the application
CMD ["flask", "run"]