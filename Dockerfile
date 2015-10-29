FROM mhart/alpine-node:4.2.1

ADD tslint /opt/tslint
RUN \
	cd /opt/tslint \
	&& npm install

ENTRYPOINT ["node", "/opt/tslint/node_modules/gulp/bin/gulp.js", "--gulpfile", "/opt/tslint/gulpfile.js", "default", "--cwd", "."]