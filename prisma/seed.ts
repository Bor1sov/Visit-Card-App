import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';


const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.profile.upsert({
        where: {
            github: 'https://github.com/Bor1sov'
        },
        update: {
            name: 'Egor Borisov',
            description: 'Full Stack Developer',
            skills: {
                deleteMany: {},
                create: [
                    { name: 'JavaScript' },
                    { name: 'TypeScript' },
                    { name: 'React' },
                    { name: 'Node.js' },
                    { name: 'PostgreSQL' },
                    { name: 'Git' },
                ]
            },
            experiences: {
                deleteMany: {},
                create: [
                    {
                        company: 'Savda',
                        position: 'Fullstack Developer',
                        startDate: new Date('2024-11-13'),
                        endDate: new Date('2025-12-24'),
                        achievements: 'Разработка и поддержка веб-приложений, включая создание новых функций, исправление ошибок и оптимизацию производительности. Работа с базами данных, настройка серверной инфраструктуры и обеспечение безопасности приложений. Взаимодействие с командой дизайнеров и менеджеров проектов для реализации требований клиентов.'
                    },
                    {
                        company: 'Rec studio',
                        position: 'Backend Developer',
                        startDate: new Date('2025-12-28'),
                        endDate: new Date('2026-09-20'),
                        achievements: 'Разработка и поддержка веб-приложений, включая создание новых функций, исправление ошибок и оптимизацию производительности. Работа с базами данных, настройка серверной инфраструктуры и обеспечение безопасности приложений. Взаимодействие с командой дизайнеров и менеджеров проектов для реализации требований клиентов.'
                    },
                ]
            },
            projects: {
                deleteMany: {},
                create: [
                    {
                        name: 'Labmovie',
                        link: 'https://labmovie-illusion.ru/',
                    },
                    {
                        name: 'Кюринская жемчужина',
                        link: 'https://k-zh.ru/',
                    },
                    {
                        name: 'Team finder add (Учебный)',
                        link: 'https://github.com/Bor1sov/team-finder-ad',
                    },
                    {
                        name: 'Белый медведь',
                        link: 'https://b-medved.ru/',
                    },
                    {
                        name: 'ZRD',
                        link: 'https://zrdshop.ru/',
                    },
                ]
            }
        },
        create: {
            name: 'Egor Borisov',
            description: 'Full Stack Developer',
            github: 'https://github.com/Bor1sov',
            skills: {
                create: [
                    { name: 'JavaScript' },
                    { name: 'TypeScript' },
                    { name: 'React' },
                    { name: 'Node.js' },
                    { name: 'PostgreSQL' },
                    { name: 'Git' },
                ]
            },
            experiences: {
                create: [
                    {
                        company: 'Savda',
                        position: 'Fullstack Developer',
                        startDate: new Date('2024-11-13'),
                        endDate: new Date('2025-12-24'),
                        achievements: 'Разработка и поддержка веб-приложений, включая создание новых функций, исправление ошибок и оптимизацию производительности. Работа с базами данных, настройка серверной инфраструктуры и обеспечение безопасности приложений. Взаимодействие с командой дизайнеров и менеджеров проектов для реализации требований клиентов.'
                    },
                    {
                        company: 'Rec studio',
                        position: 'Backend Developer',
                        startDate: new Date('2025-12-28'),
                        endDate: new Date('2026-09-20'),
                        achievements: 'Разработка и поддержка веб-приложений, включая создание новых функций, исправление ошибок и оптимизацию производительности. Работа с базами данных, настройка серверной инфраструктуры и обеспечение безопасности приложений. Взаимодействие с командой дизайнеров и менеджеров проектов для реализации требований клиентов.'
                    },
                ]
            },
            projects: {
                create: [
                    {
                        name: 'Labmovie',
                        link: 'https://labmovie-illusion.ru/',
                    },
                    {
                        name: 'Кюринская жемчужина',
                        link: 'https://k-zh.ru/',
                    },
                    {
                        name: 'Team finder add (Учебный)',
                        link: 'https://github.com/Bor1sov/team-finder-ad',
                    },
                    {
                        name: 'Белый медведь',
                        link: 'https://b-medved.ru/',
                    },
                    {
                        name: 'ZRD',
                        link: 'https://zrdshop.ru/',
                    },
                ]
            }
        }
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });