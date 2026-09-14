import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let p=path.resolve(root,'.'+pathname);if(!p.startsWith(root+path.sep)&&p!==root)throw Error();if(!path.extname(p))p=path.join(p,'index.html');const data=await readFile(p);res.setHeader('Content-Type',({'html':'text/html; charset=utf-8','css':'text/css','js':'text/javascript','webp':'image/webp','png':'image/png','svg':'image/svg+xml'})[p.split('.').pop()]||'application/octet-stream');res.end(data);}catch{res.writeHead(404);res.end('페이지를 찾을 수 없습니다.');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
