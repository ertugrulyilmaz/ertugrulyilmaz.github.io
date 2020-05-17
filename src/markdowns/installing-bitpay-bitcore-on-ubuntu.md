# Installing Bitpay Bitcore on Ubuntu

_December 14, 2018_ **One minute read**

> I have installed Bitcore and Insight API on Ubuntu 18.04 LTS.

## Installation Steps

```
$ sudo apt-get update
$ sudo apt-get install libzmq3-dev build-essential
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install gcc g++ make
$ sudo apt-get install -y npm
$ sudo apt-get install -y nodejs
$ sudo npm install -g --unsafe-perm=true bitcore@latest
$ bitcore create mynode
$ cd mynode
$ bitcore install insight-api
$ bitcore start
```
