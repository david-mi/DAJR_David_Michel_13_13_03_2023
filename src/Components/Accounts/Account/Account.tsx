import { AccountPropTypes } from "./propTypes";
import type { AccountType } from "../Accounts";

/**
 * Account component
 */

const Account = ({ title, amount, description }: AccountType) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

Account.propTypes = AccountPropTypes;

export default Account;