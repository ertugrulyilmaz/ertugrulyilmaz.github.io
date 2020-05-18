# Installing jenv and java on mac os with brew

_May 18, 2018_ **One minute read**

> How jenv and java can install with brew

## Installation Steps

```
$ brew update
$ brew install jenv
$ echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(jenv init -)"' >> ~/.zshrc
$ brew tap homebrew/cask-versions
$ brew tap adoptopenjdk/openjdk
$ brew search java
$ brew search jdk
$ brew cask info java
$ brew cask info adoptopenjdk
$ brew cask install java
$ brew cask install adoptopenjdk14
$ jenv add /Library/Java/JavaVirtualMachines/adoptopenjdk-14.jdk/Contents/Home/
```
