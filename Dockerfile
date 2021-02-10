FROM circleci/node:13.8.0
RUN npm install -g angular-cli
RUN ls -la && npm install
COPY https://github.com/ahmedadell94/python-circleci-docker.git /root
RUN cd /root
RUN ls -larth /root
CMD ["echo","Hello"]