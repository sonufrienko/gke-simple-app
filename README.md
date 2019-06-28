# Deploy a simple Node.js app to Kubernetes (GKE)

![](kubernetes.png)

## Deploy to Kubernetes



## App

The app built with Node.js and allow AES encryption/decryption using HTTP request.

#### Browser

Encrypt a "message" with "secret"

```http://localhost:4000/encrypt?secret=8650&message=i-love-you```

Decrypt a "message" with "secret"

```http://localhost:4000/decrypt?secret=8650&message=12840030619419b8d8ec4fe61e275d99```

#### CURL

Encrypt a "message" with "secret"

```shell
curl -G 'http://localhost:4000/encrypt' \
-d secret=8650 \
-d message=i-love-you
```

Decrypt a "message" with "secret"

```shell
curl -G 'http://localhost:4000/decrypt' \
-d secret=8650 \
-d message=12840030619419b8d8ec4fe61e275d99
```
