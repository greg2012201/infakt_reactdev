import { AccountantListItem } from '../AccountantListItem';
import { Button } from '../Button';
import { List, Wrapper } from './AccountantList.styles';
import useAccountantList from './useAccountantList';

export const AccountantList = () => {
  const { accountants, isLoading, isLoadingMore, fetchMore, error } = useAccountantList();

  if (error) {
    return (
      <Wrapper>
        <p>{error}</p>
      </Wrapper>
    );
  }

  if (isLoading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <List>
        {accountants.map(accountant => {
          return <AccountantListItem key={accountant.login.uuid} {...accountant} />;
        })}
      </List>
      <Button type="button" onClick={() => fetchMore()}>
        {isLoadingMore ? 'Pobieranie...' : 'Pobierz więcej'}
      </Button>
    </Wrapper>
  );
};
