#!/bin/bash

yarn deploy
sed -i '' 's/\/js/js/g' docs/index.html
sed -i '' 's/\/css/css/g' docs/index.html
sed -i '' 's/\/img/img/g' docs/index.html

cd docs
FILES=**/*.js
for f in $FILES; do
  echo $f
  sed -i '' 's/\/js/js/g' $f
  sed -i '' 's/\/css/css/g' $f
  sed -i '' 's/\/img/img/g' $f
done

FILES=**/*.css
for f in $FILES; do
  echo $f
  sed -i '' 's/\/js/js/g' $f
  sed -i '' 's/\/css/css/g' $f
  sed -i '' 's/\/img/img/g' $f
done
echo "Done!"