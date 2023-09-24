import { AccountantType } from '../../types';
import { Avatar, Header, Heading, HeadingGroup, SubHeading, Wrapper } from './AccountantListItem.styles';

type Props = AccountantType;

export const AccountantListItem = ({ picture, name, ...props }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Avatar alt="profile picture" src={picture.medium} />
        <HeadingGroup>
          <SubHeading>Twoja Księgowa</SubHeading>
          <Heading>{`${name.first} ${name.last}`}</Heading>
        </HeadingGroup>
      </Header>
    </Wrapper>
  );
};
