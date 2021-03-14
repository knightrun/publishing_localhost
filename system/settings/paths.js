import path from 'path';

const root = process.cwd();
const obj = {
    tasks : './system/',
    settings : path.join(root,`/system/settings`),
    system : path.join(root,`/system`),
    server : path.join(root,`/system/server/server.js`),
    front : path.join(root,`/front`),
    frontDefault : path.join(`/front/app.html`),
    admin : path.join(root,`/admin`),
    adminDefault : path.join(`/admin/index.html`),
};
const target = obj;

export { target };