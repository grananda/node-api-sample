class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await this.model.find(id);
  }

  async getAll(pageSize = 5, pageNumber = 1) {
    const skips = pageSize * (pageNumber - 1);
    return await this.model.find().skip(skips).limit(pageSize);
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(id, entity) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    await this.model.findByIdAndDelete(id);

    return true;
  }
}

module.exports = BaseRepository;
