# Visit Card Backend

Backend-приложение цифровой визитной карточки, разработанное на **NestJS**, **GraphQL**, **Prisma** и **PostgreSQL**.

Приложение предоставляет GraphQL API с информацией о профиле разработчика:

- основная информация;
- профессиональные ссылки;
- навыки;
- опыт работы;
- проекты.

## Используемые технологии

- TypeScript
- Node.js
- NestJS
- GraphQL
- Apollo Server
- Apollo Sandbox
- Prisma ORM
- PostgreSQL
- Docker
- Docker Compose

## Запуск проекта через Docker

### Требования

Для запуска проекта необходимы:

- Docker;
- Docker Compose.

### Запуск

В корневой директории проекта выполните:

```bash
docker compose up --build
```

При запуске Docker Compose автоматически:

1. запускает PostgreSQL;
2. ожидает готовности базы данных;
3. запускает backend-приложение;
4. применяет миграции Prisma;
5. заполняет базу начальными данными;
6. запускает NestJS-приложение.

После успешного запуска GraphQL API будет доступен по адресу:

`http://localhost:3000/graphql`

По этому же адресу доступен **Apollo Sandbox**, через который можно выполнять GraphQL-запросы.

## Пример GraphQL-запроса

Для получения полной информации о профиле можно выполнить следующий запрос:

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

Пример возвращаемой структуры:

```text
Profile
├── основная информация
├── профессиональные ссылки
├── Skills
├── Experiences
└── Projects
```

## Структура проекта

```text
src/
├── profile/
│   ├── profile.model.ts
│   ├── profile.module.ts
│   ├── profile.resolver.ts
│   └── profile.service.ts
│
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── app.module.ts
└── main.ts

prisma/
├── migrations/
├── schema.prisma
└── seed.ts
```

### Модуль профиля

`profile.model.ts` содержит GraphQL-модели данных.

`profile.resolver.ts` содержит GraphQL-запросы и передаёт выполнение необходимой логики сервису.

`profile.service.ts` отвечает за получение данных профиля из базы данных через Prisma.

`profile.module.ts` объединяет компоненты модуля профиля.

### Работа с базой данных

`prisma.service.ts` предоставляет доступ к Prisma Client внутри NestJS.

`prisma.module.ts` позволяет использовать `PrismaService` в других модулях приложения.

`prisma/schema.prisma` содержит описание структуры базы данных и связей между моделями.

`prisma/migrations/` содержит миграции базы данных.

`prisma/seed.ts` отвечает за первоначальное заполнение базы информацией профиля.

## Модели данных

В базе данных используются четыре основные модели:

- `Profile` — основная информация о разработчике и профессиональные ссылки;
- `Skill` — навыки;
- `Experience` — опыт работы;
- `Project` — проекты.

`Profile` связан с навыками, опытом работы и проектами отношениями «один ко многим».

## Инициализация базы данных

При запуске приложения в Docker автоматически выполняются:

```bash
prisma migrate deploy
prisma db seed
```

`prisma migrate deploy` применяет существующие миграции и подготавливает структуру базы данных.

`prisma db seed` заполняет базу начальными данными.

Seed реализован идемпотентно: повторный запуск не создаёт дубликаты профиля и связанных с ним данных.

## Остановка приложения

Для остановки контейнеров выполните:

```bash
docker compose down
```

Для остановки контейнеров с удалением локального Docker volume базы данных:

```bash
docker compose down -v
```