FROM alpine

RUN apk add --no-cache \
    ansible python3-dev py3-pip \
    openssl-dev libffi-dev libc-dev gcc

RUN pip3 install boto3 boto botocore python-dateutil

ENV PY_COLORS=1
ENV ANSIBLE_FORCE_COLOR=1
ENV ANSIBLE_STDOUT_CALLBACK=yaml

ENTRYPOINT ["ansible-playbook"]
