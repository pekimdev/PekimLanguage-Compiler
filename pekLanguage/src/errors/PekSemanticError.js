class PekSemanticError extends Error {
  constructor(msg) {
    super(`Semantic Error - ${msg}`);
  }
}

exports.PekSemanticError = PekSemanticError;
