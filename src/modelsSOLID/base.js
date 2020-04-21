import Sequelize from "sequelize";

class Base extends Sequelize.Model {
  static init(sequelize, options = {}) {
    super.init(this.schema, { sequelize, ...this.options });
  }

  static initRelationsAndHooks() {
    if (initRelations) this.initRelations();
    if (initHooks) this.initHooks();
  }

  static async findAll(attributes) {
    const query = {
      attributes
    };

    const entity = await this.findAll(query);

    if (!entity) throw new Error("WRONG_ATTRIBUTES");

    return entity;
  }

  static async findById(id) {
    const entity = await this.findOne({ where: { id } });

    if (!entity) throw new Error("WRONG_ID");

    return entity;
  }

  static async findByEmail(email) {
    const entity = await this.findOne({
      where: { email }
    });

    if (!entity) throw new Error("WRONG_EMAIL");

    return entity;
  }

  static async findAll(attributes) {
    const query = {
      attributes
    };

    const entity = await this.findAll(query);

    if (!entity) throw new Error("WRONG_ATTRIBUTES");

    return entity;
  }
}

export default Base;
