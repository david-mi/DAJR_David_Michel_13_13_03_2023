import Account from "./Account/Account";
import { AccountsPropTypes } from "./propTypes";

export interface Account {
  title: string,
  amount: string,
  description: string
}

interface Props {
  accounts: Account[]
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