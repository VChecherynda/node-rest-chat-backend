export default function buildConversationDataAccess({ connectDb, model }) {
  async function findOne({ userTwoId = "" } = {}) {
    const db = await connectDb();

    const query = {
      where: {
        userTwoId: Number(userTwoId)
      },
      attributes: ["id", "userOneId", "userTwoId"]
    };

    const result = await db.collection("conversation").findOne(query);
    const { id } = result;
    return { id };
  }

  async function findAll() {
    const db = await connectDb();

    const query = {
      attributes: ["id", "userOneId", "userTwoId"]
    };

    const result = await db.collection("conversation").findAll(query);
    return result;
  }

  async function create(data) {
    const db = await connectDb();

    const result = await db.collection("conversation").create(data);
    return result;
  }

  return Object.freeze({
    findOne,
    findAll,
    create
  });
}
