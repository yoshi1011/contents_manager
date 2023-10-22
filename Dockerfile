FROM ruby:3.2.2-slim

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential postgresql-client curl git libpq-dev libssl-dev libvips node-gyp pkg-config

ARG NODE_VERSION=18.18.2
ARG YARN_VERSION=1.22.17
ENV PATH=/usr/local/node/bin:$PATH
RUN curl -sL https://github.com/nodenv/node-build/archive/master.tar.gz | tar xz -C /tmp/ && \
    /tmp/node-build-master/bin/node-build "${NODE_VERSION}" /usr/local/node && \
    npm install -g yarn@$YARN_VERSION && \
    rm -rf /tmp/node-build-master

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000
