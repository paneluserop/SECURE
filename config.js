const data = {
    "token": "" || process.env.token,
    "mongo": "mongodb+srv://jeet:jeet2010@security.rg97z.mongodb.net/?retryWrites=true&w=majority&appName=Security"|| process.env.mongo,
 
}
console.log('got connected from database ..!!')
module.exports = data;
