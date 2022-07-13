const cache = require('memory-cache');

export default function index(req, res) {
    let cacheData = cache.get('cacheTime');
    console.log(cacheData);
    if (cacheData === null) {
        cache.put('cacheTime', Date.now())
        res.send('Cache is empty');
    } else {
        res.send(cacheData);
    }
}