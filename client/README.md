run this command first : 
docker build -f Dockerfile -t client .

then run the second :
docker run -it -p 4001:3000 client