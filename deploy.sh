yarn deploy
sed -i '' 's/\/js/js/g' docs/index.html
sed -i '' 's/\/css/css/g' docs/index.html
sed -i '' 's/\/img/img/g' docs/index.html
echo "Done!"