step 1: cleanup the network
1. cd test-network
2. ./network.sh down

step 2: start the network
1. cd fabcar
2. ./startFabric.sh javascript//take time around 5 minutes
3. check the network (docker ps -a)
4. login into couchdb leadger(http://localhost:5984/_utils/#)
    username: admin pass: adminpw
5. open two leadger in two window
6. access network.do transaction

step 3:
1. enroll admin (cd fabcar/javascript/$ node enrollAdmin.js)
2. register user (node registerUser.js)
3. issue a document (node createDoc.js)
4. get a document (node getDoc.js)


