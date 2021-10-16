// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Show All Bootcamps`,
        hello: req.hello
    })
}

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Get Bootcamp ${req.params.id}`
    })
}

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamp
// @access      Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Create a New Bootcamp`
    })
}

// @desc        Update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update Bootcamp ${req.params.id}`
    })
}

// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete Bootcamp ${req.params.id}`
    })
}