FROM ubuntu

EXPOSE 8000

WORKDIR /home/stilo

COPY requirements.txt requirements.txt

RUN apt-get install apache2 -y
RUN apt-get instal python-pip
RUN apt-get update -y
RUN apt-get install git -y
RUN apt-get install mysql-server -y
RUN pip install -r requirements.txt
RUN mkdir stilo


COPY . /home/stilo

CMD ["./run.sh"]

