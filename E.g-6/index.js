const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  if( ctx.path === "/" ) ctx.body = "<h1>Ana Sayfaya Hoşgeldiniz !</h1>" ;
  else if ( ctx.path === "/about" )
    ctx.body = "<h1>Hakkımızda Sayfasına Hoşgeldiniz !</h1>" ;
  else if ( ctx.path === "/contcat" )
    ctx.body = "<h1>İletişim Sayfasına Hoşgeldiniz !</h1>" ;
  else ctx.body = "<h1>404 NOT FOUND</h1>" ; 
});


port = 3000 ;
app.listen( port,()=>{
    console.log(`${port}'u başarılı bir şekilde dinleniyor.`);
});