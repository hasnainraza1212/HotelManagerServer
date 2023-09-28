const rooms = require("../model/roomsModel");
const roomsController = {
  async createRoom(req, res) {
    try {
      const { name, description, capacity, price, booked } = req.body;
      if (!name || !description || !capacity) {
        return res.status(400).json({ message: "all fields required" });
      }
      const existingRoom = await rooms.findOne({ name });
      console.log("existingRoom",existingRoom)
      if (existingRoom) {
        return res.status(400).json({ message: "Room already existing" });
      }
      const newRoom = new rooms({
        name,
        description,
        capacity,
        price,
        booked,
      });
      await newRoom.save();
     return res.json(newRoom);
    } catch (err) {
      throw new Error(err);
    }
  },
  async getRooms(req, res) {
    try {
      const allRooms = await rooms.find();
     return res.json({ allRooms });
    } catch (err) {
      throw new Error({ message: "can not get rooms" + err });
    }
  },
};
module.exports = roomsController;
