# 環境構築

### 1. `.env`ファイルを作成

```
DATABASE_URL="postgresql://nestjsuser:nestjspass@localhost:5432/todoapp?schema=public"

JWT_SECRET="7d62037d4e74a30a61a9c470ab8ed6afcc4149b24c44e5bf8856409b99e0135d"
```

### 2.docker compose upで起動

### 3.マイグレーション実行

```
npx prisma migrate dev --name init
```

### 4.起動

```
export $(grep -v '^#' .env | xargs)
npm start
```

# API確認

### USER登録

URL

```
http://localhost:3000/auth/signup

```

Body(JSON)

```
{
  "name": "taro",
  "email": "taro@example.com",
  "password": "Abcd1234!"
}
```

### USERログイン

URL

```
http://localhost:3000/auth/signin

```

Body(JSON)

```
{
  "email": "taro@example.com",
  "password": "Abcd1234!"
}
```

### 認証確認

URL

```
http://localhost:3000/auth/authentication

```

Header

```
Authorization: Bearer <token>
```

### TODO一覧取得

URL

```
http://localhost:3000/todos

```

Header

```
Authorization: Bearer <token>
```

### TODO詳細取得

URL

```
http://localhost:3000/todos/1

```

### TODO作成

URL

```
http://localhost:3000/todos

```

Header

```
Authorization: Bearer <token>
```

Body(JSON)

```
{
  "title": "買い物",
  "content": "牛乳を買う"
}
```

### TODO更新

URL

```
http://localhost:3000/todos/1

```

Header

```
Authorization: Bearer <token>
```

Body(JSON)

```
{
  "title": "買い物",
  "content": "牛乳とパンを買う"
}
```

### TODO削除

URL

```
http://localhost:3000/todos/1

```

Header

```
Authorization: Bearer <token>
```
