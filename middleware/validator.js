const { check, validationResult } = require("express-validator");

const cowValidationRules = () => {
  return [
    check("numar_crotalii").notEmpty().withMessage("1"),
    check("categorie").notEmpty().withMessage("2"),
    check("sex").notEmpty().withMessage("3"),
    check("rasa").notEmpty().withMessage("4"),
    check("varsta").notEmpty().withMessage("5"),
    check("masa_corporala").notEmpty().withMessage("6"),
    check("dieta").notEmpty().withMessage("infoPanel is required"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors,
  });
};



module.exports = {
  cowValidationRules,
  validate,
};