rm -fr build/aws
cp -r aws/ build/aws
npx babel aws --out-dir build/aws
cd build/aws/
sam build
cd ../..