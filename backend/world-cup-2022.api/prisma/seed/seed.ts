import { PrismaClient } from '@prisma/client';

import { groups } from './groupSeeder';
import { teams } from './teamSeeder';

const prisma = new PrismaClient();

async function seed() {
    await createGroups();
    await createTeams();
}

async function createGroups() {
    await prisma.group.createMany({
        data: groups
    });
}

async function createTeams() {
    await prisma.team.createMany({
        data: teams
    });
}

seed().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
});