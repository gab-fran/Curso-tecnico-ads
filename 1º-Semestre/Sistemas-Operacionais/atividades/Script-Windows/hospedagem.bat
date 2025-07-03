REM Script para hospedar uma página

git clone https://github.com/profRenatoOliveira1/pratica-cli-windows-tudoemum.git

cd pratica-cli-windows-tudoemum

mkdir js css pages images

move *.js js
move *.css css
move *.html pages
cd pages
move index.html ..
cd ..
move *.png images

move C:\xampp\htdocs C:\xampp\htdocs-original

cd ..

move pratica-cli-windows-tudoemum C:\xampp
cd C:\xampp
ren pratica-cli-windows-tudoemum htdocs

pause