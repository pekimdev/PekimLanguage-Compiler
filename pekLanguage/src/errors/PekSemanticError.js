class PekSemanticError extends Error {
  constructor(msg, line, column) {
    super(`Semantic Error - ${msg}, ${line}:${column}`);
  }
}

exports.PekSemanticError = PekSemanticError;
