import { AccountantListItem } from "../AccountantListItem";
import { List } from "./AccountantList.styles";
import useAccountantList from "./useAccountantList";

export const AccountantList = () => {
    const { accountants, isLoading, isLoadingMore, fetchMore, error } = useAccountantList();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <List>
                {accountants.map((accountant) => {
                    return <AccountantListItem key={accountant.login.uuid} {...accountant} />;
                })}
            </List>
            <button type="button" onClick={() => fetchMore()}>
                {isLoadingMore ? "fetching more" : "fetch more"}
            </button>
        </>
    );
};
