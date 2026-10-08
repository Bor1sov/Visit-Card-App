# Visit Card Backend

Backend-приложение цифровой визитной карточки.

API предоставляет информацию о профиле разработчика:
- основная информация и профессиональные ссылки;
- навыки;
- опыт работы;
- проекты.

## Tech Stack

- TypeScript
- Node.js
- NestJS
- GraphQL
- Apollo Server / Apollo Sandbox
- Prisma ORM
- PostgreSQL
- Docker / Docker Compose

## Running with Docker

Requirements:

- Docker
- Docker Compose

Start the application:

```bash
docker compose up --build

После запуска:
- GraphQL API: http://localhost:3000/graphql
- Apollo Sandbox: http://localhost:3000/graphql

Откройте Apollo Sandbox at:

`http://localhost:3000/graphql`

Пример запроса (Из ТЗ):

```graphql
query {
  profile {
    name
    description
    github
    linkedin

    skills {
      name
    }

    experiences {
      company
      position
      startDate
      endDate
      achievements
    }

    projects {
      name
      link
    }
  }
}
```

## Project Structure

```text
src/
├── profile/
│   ├── profile.model.ts
│   ├── profile.module.ts
│   ├── profile.resolver.ts
│   └── profile.service.ts
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── app.module.ts
└── main.ts

prisma/
├── migrations/
├── schema.prisma
└── seed.ts
```

The application separates:

- GraphQL schema and models;
- GraphQL resolvers;
- application/data-access logic;
- Prisma infrastructure;
- database schema, migrations and seed data.