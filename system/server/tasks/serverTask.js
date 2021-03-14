import {adminServer, frontServer} from "../server";

export default function( $, options ) {
    $.gulp.task('admin', () =>{
        adminServer( $, options );
    });

    $.gulp.task('front', () =>{
        frontServer( $, options );
    });
}