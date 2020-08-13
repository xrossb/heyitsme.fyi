FROM alpine

ENV ANSIBLE_VERSION=2.9.9

RUN apk add --no-cache \
    ansible=${ANSIBLE_VERSION}-r0 \
    python3-dev py3-pip openssl-dev \
    libffi-dev libc-dev gcc

RUN pip3 install boto3 boto botocore

ENTRYPOINT ["ansible-playbook"]
