

//caclulates square and returns response
exports.rectangleArea = async (req,res) => {
    try {
        if (req.method == "GET"){
            var area = req.query.base * req.query.height;
        }
        else if (req.method == "POST") {
            var area = req.body.base * req.body.height
        }
        
        res.status(200).json({
            status: 'success',
            'rectangle_area': area, 
        });
    }
    catch (err) {
        res.status(404).json({
            status:'fail',
            message: err,
        });
    }
};
