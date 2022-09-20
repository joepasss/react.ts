## docker

docker-compose up
docker-compose up-d (background)
docker-compose stop
docker-compose down (remove container)

---

## dotenv

(in root)
touch .env.local

```
MYSQL_HOST=localhost
MYSQL_USER=development
MYSQL_DATABASE=task_mate
MYSQL_PASSWORD=development
```

merge with process.env.NODE_ENV

```
env: ProcessEnv;

interface ProcessEnv {
  readonly NODE_ENV: 'development' | 'production' | 'test'
}

interface ProcessEnv {
  [key: string]: string | undefined;
}

/***        ADD       ***/

// in root
// custom.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    MYSQL_HOST: string;
    MYSQL_USER: string;
    MYSQL_DATABASE: string;
    MYSQL_PASSWORD: string;
  }
}
```

---

## TEST

```
// localhost:3000/api/graphql

query {
   tasks {
    id
    title
    status
  }
}

```
