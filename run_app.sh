if [ ! -d "./node_modules" ]
then
    npm install --force
fi
npm run start