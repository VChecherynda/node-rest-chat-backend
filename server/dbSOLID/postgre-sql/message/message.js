export default function makeMessageDb({ makeDb }) {
  async function findOne({ userTwoId = "" } = {}) {
    const db = await makeDb();

    const query = {
      where: {
        userTwoId: Number(userTwoId)
      },
      attributes: ["id", "userOneId", "userTwoId"]
    };

    const result = await db.collection("conversations").findOne(query);
    const { id } = result;
    return { id };
  }

  async function findAll() {
    const db = await makeDb();

    const query = {
      attributes: ["id", "userOneId", "userTwoId"]
    };

    const result = await db.collection("conversations").findAll(query);
    return result;
  }

  return Object.freeze({
    findOne,
    findAll
  });
}
