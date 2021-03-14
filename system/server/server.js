const port_front = 5000, port_admin = 6000;
let app;

function adminServer($, options){
    app = $.express();
    app.use($.express.static(options.paths.admin));

    app.use((req, res, next) => { // 404 처리 부분
        res.status(404).send('일치하는 주소가 없습니다!');
    });

    app.use((err, req, res, next) => { // 에러 처리 부분
        console.error(err.stack); // 에러 메시지 표시
        res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
    });

    app.listen(port_admin, () => {
        console.log(`start!!! Express listening on port ${port_admin}`);
    });

    $.browserSync({
        proxy: `http://localhost:${port_admin}/${options.paths.adminDefault}`,
        port: port_admin
    });
}

function frontServer($, options){
    app = $.express();
    app.use($.express.static(options.paths.front));

    app.use((req, res, next) => { // 404 처리 부분
        res.status(404).send('일치하는 주소가 없습니다!');
    });

    app.use((err, req, res, next) => { // 에러 처리 부분
        console.error(err.stack); // 에러 메시지 표시
        res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
    });

    app.listen(port_front, () => {
        console.log(`start!!! Express listening on port ${port_front}`);
    });

    $.browserSync({
        proxy: `http://localhost:${port_front}/${options.paths.frontDefault}`,
        port: port_front
    });
}

export {adminServer, frontServer};