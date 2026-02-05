# Configuration Serveur (exemples)

## NGINX (extrait)
```
location / {
  try_files $uri $uri/ =404;
}
types {
  text/css css;
  application/javascript js;
  image/jpeg jpg jpeg;
  image/png png;
  video/mp4 mp4;
}
gzip on;
gzip_types text/css application/javascript application/json image/svg+xml;
```

## Apache (.htaccess)
```
AddType text/css .css
AddType application/javascript .js
AddType video/mp4 .mp4
Header set Cache-Control \"public, max-age=31536000\"
```
