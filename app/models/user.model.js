module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
          },
          email: {
            type: String,
            required: true,
            unique: true
          },
          password: {
            type: String,
            required: true
          }
        });
    
   
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user", schema);
    return User;
};
