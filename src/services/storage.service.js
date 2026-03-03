const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});
async function uploadFile(file , fileName) {
    const result = await imagekit.upload({
        file: file, // The file can be a base64 string or a buffer
        fileName: fileName, // The name of the file to be uploaded
    });
    return result.url; // Return the URL of the uploaded file
}
module.exports = {
    uploadFile
}