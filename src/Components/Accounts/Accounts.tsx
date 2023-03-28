import Account from "./Account/Account";
import { AccountsPropTypes } from "./propTypes";

export interface AccountType {
  title: string,
  amount: string,
  description: string
}

interface Props {
  accounts: AccountType[]
}

/**
 * Display each account
 */

const Accounts = ({ accounts }: Props) => {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => {
        return <Account key={account.title} {...account} />;
      })}
    </>
  );
};

Accounts.propTypes = AccountsPropTypes;

export default Accounts;