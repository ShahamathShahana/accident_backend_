const report = require('../Model/reportSchema')

exports.addReport = async (req, res) => {
    const filename = req.file.filename
    const { name,email,location } = req.body;
    try {
        const newReport = new report({
            name:name,
            email:email,
            location:location,
            file:filename,
            date:new Date(),

        })
        await newReport.save()
        return res.status(201).json(newReport)
    }
    catch (err) {
        return res.status(501).json(err)
    }
}

exports.allreport = async(req,res)=>{
    try{
        const reports = await report.find({})
        return res.status(200).json(reports)
    }
    catch(err){
        return res.status(501).json(err)
    }
}
