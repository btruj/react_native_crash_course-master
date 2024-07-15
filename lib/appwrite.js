import {   Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage, } from 'react-native-appwrite';

export const config = {
    endpoint: 'http://cloud.appwrite.io/v1',
    platform: 'com.funCode.aora',
    projectId: '6693fa7c00000b10aa70',
    databaseId: '66941532001752607092',
    userCollectionId: '6694159d00099be91eb0',
    videoCollectionId: '669415d5000482053d52',
    storageId: '66941bf60003c4922e74'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

// Register User
export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

