# Http debug proxy on Docker

This docker image runs an HTTP proxy that logs all communication.

To run it:

```bash
docker run \
    -t \
    --rm \
    --link YOUR_CONTAINER:dst \
    -e PORT=8688 \
    -e HOST=example.local \
    -p 8000:8000 \
    http-debug-proxy
```

The `dst` linked container will be the container receiving the proxied data. 
The `PORT` and `HOST` env variables are the target port and host in `dst` 
that will receive the data.
