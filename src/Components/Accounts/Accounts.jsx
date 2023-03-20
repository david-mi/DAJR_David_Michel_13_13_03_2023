import Account from "./Account/Account";
import { AccountsPropTypes } from "./propTypes";

/**
 * Display each account
 * 
 * @param {Object} props
 * @param {Array<Object>} props.accounts
 * @returns {JSX.Element}
 */

const Accounts = ({ accounts }) => {
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