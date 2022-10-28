import { PrismaClient, type } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const java = await prisma.course.create({
    data: {
      courseName: "java",
      modules: {
        create: [
          {
            moduleName: "Variables and Operations",
            order: 1,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "ActivityName",
                  url: "someurl",
                },
                {
                  type: type.EXAMPLE,
                  name: "ActivityName",
                  url: "someurl",
                },
              ],
            },
          },
        ],
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
