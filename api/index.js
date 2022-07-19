export default function index(req, res) {
    res.writeHead(302, {
        'Content-Type': 'text/html',
        'Location': 'https://www.google.com',
        'Cache-Control': 'max-age=259200'
    });
    res.end('test cache');
}