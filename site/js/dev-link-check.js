;(function(){
  function collectResources(){
    var links = Array.from(document.querySelectorAll('a[href]')).map(a=>({type:'link',url:a.href}));
    var imgs = Array.from(document.querySelectorAll('img[src]')).map(img=>({type:'img',url:img.src}));
    var scripts = Array.from(document.querySelectorAll('script[src]')).map(s=>({type:'script',url:s.src}));
    var styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l=>({type:'style',url:l.href}));
    var videos = Array.from(document.querySelectorAll('video source[src]')).map(v=>({type:'video',url:v.src}));
    return [].concat(links, imgs, scripts, styles, videos);
  }
  function check(url){
    return fetch(url, {method:'HEAD'}).then(r=>({url, ok:r.ok, status:r.status})).catch(()=>({url, ok:false, status:0}));
  }
  function run(){
    var resources = collectResources();
    Promise.all(resources.map(r=>check(r.url))).then(results=>{
      var failures = results.filter(x=>!x.ok);
      if(failures.length){
        console.table(failures);
      } else {
        console.log('Tous les liens et ressources répondent correctement');
      }
    });
  }
  if (location.hostname === '127.0.0.1' || location.hostname === 'localhost') {
    window.addEventListener('load', run);
  }
})(); 
