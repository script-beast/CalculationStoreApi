import Calculations from "../models/Calculationdata.js";
import mongoose from "mongoose";

const routes = {};

routes.findbyid = async (req, res) => {
  const { id } = req.params;

  //validate id is of mongoose object id type
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(401).send([]);

  const allCalculations = await Calculations.find({ userid: id });

  res.status(200).send(allCalculations);
};

routes.addcalculation = async (req, res) => {
  const { name, calculation, result, userid } = req.body;

  const newCalculation = new Calculations({
    name: name,
    calculation: calculation,
    result: result,
    userid: userid,
  });

  const savedCalculation = await newCalculation.save();

  if (savedCalculation) {
    res.status(200).send(savedCalculation);
  } else {
    res.status(500).send("Error");
  }
};

routes.deletecalculation = async (req, res) => {
  const { id } = req.params;

  //validate id is of mongoose object id type
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(401).send("Invalid ID");

  const deletedCalculation = await Calculations.findByIdAndRemove(id);

  if (deletedCalculation) {
    res.status(200).send("Calculation Deleted");
  } else {
    res.status(500).send("Error");
  }
};

export default routes;
