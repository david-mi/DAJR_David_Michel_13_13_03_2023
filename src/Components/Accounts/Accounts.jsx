import Account from "./Account/Account";

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

export default Accounts;