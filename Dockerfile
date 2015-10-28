FROM mhart/alpine-node:4.2.1

RUN \
	npm install -g tslint

ENTRYPOINT ["tslint"]