FROM alpine

ENV ANSIBLE_VERSION=2.9.12

RUN apk add --no-cache \
    ansible python3-dev py3-pip \
    openssl-dev libffi-dev libc-dev gcc

RUN pip3 install \
    boto3 boto botocore

ENTRYPOINT ["ansible-playbook"]
