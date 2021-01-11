rm -fr build/aws
cp -r aws/ build/aws
cp -r ./build/aws/database build/aws/.aws-sam/build/database
npx babel aws --out-dir build/aws
cd build/aws/
sam build
cd ../..