const user = require("../Model/userSchema");

exports.adminLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const adminDetails = await user.findOne({ username: username })
        if (!adminDetails) return res.status(404).json("no such admin is present")
        if (adminDetails.password == password && adminDetails.username == username) {
            return res.status(201).json(adminDetails._id)
        }
        return res.status(404).json("invalid password")
    }
    catch (err) {
        res.status(501).json(err)
    }
}