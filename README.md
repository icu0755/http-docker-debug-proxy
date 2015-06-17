# Http debug proxy on Docker

This docker image runs an HTTP proxy that logs all communication.

To run it:

```bash
docker run \
    -t \
    --rm \
    --link routific-vrp:dst \
    -e PORT=8688 \
    -p 8000:8000 \
    acroca:http-docker-debug
```

The `dst` linked container will be the container receiving the proxied data. the `PORT` env variable is the target port in `dst` that will receive the data.
