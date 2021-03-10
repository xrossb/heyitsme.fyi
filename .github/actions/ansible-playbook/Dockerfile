FROM alpine

ENV ANSIBLE_VERSION=2.10.6-r0

RUN apk add --no-cache \
    ansible=${ANSIBLE_VERSION} \
    python3-dev py3-pip openssl-dev \
    libffi-dev libc-dev gcc

RUN pip3 install boto3 boto botocore

ENV PY_COLORS=1
ENV ANSIBLE_FORCE_COLOR=1
ENV ANSIBLE_STDOUT_CALLBACK=yaml

ENTRYPOINT ["ansible-playbook"]
