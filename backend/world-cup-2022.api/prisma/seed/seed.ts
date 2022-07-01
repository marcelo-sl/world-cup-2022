import { PrismaClient } from '@prisma/client';

import { groups } from './groupSeeder';
import { matches } from './matchSeeder';
import { teams } from './teamSeeder';

const prisma = new PrismaClient();

async function seed() {
    // await createGroups();
    // await createTeams();
    await createMatches();
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

async function createMatches() {
    await prisma.match.createMany({
        data: matches
    });
}

seed().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
});