export class NoWalletConnectedError extends Error {
  constructor() {
    super('No wallet connected. Please connect a wallet and try again.');
  }
}

export class UnauthorizedForContractMethodError extends Error {
  constructor() {
    super(
      'Contract is in readonly mode, please connect a valid wallet and try again.',
    );
  }
}

export class ZeroAmountError extends Error {
  constructor() {
    super('Action failed, please specify an amount greater than 0.');
  }
}

export const didUserRejectTransaction = (error: any) => {
  if (!error?.message) return false;

  return error.message.includes('user rejected transaction');
};

export class UserRejectedTransactionError extends Error {
  originalError: any;

  constructor(e: any) {
    super('The user rejected transaction');
    this.originalError = e;
  }
}
