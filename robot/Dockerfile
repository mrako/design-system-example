FROM --platform=linux/amd64 alpine:3.12

# PYTHON
RUN apk add --no-cache python3 py-pip

# CHROME
RUN apk add --no-cache chromium chromium-chromedriver

# ROBOT + LIBRARIES
COPY requirements.txt /tmp/requirements.txt
RUN  pip install -r /tmp/requirements.txt
