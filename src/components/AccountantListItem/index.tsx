import { AccountantType } from '../../types';
import {
  Avatar,
  Body,
  Currency,
  Header,
  Heading,
  HeadingGroup,
  Label,
  Row,
  SubHeading,
  Value,
  Wrapper,
} from './AccountantListItem.styles';

type Props = AccountantType;

export const AccountantListItem = ({ picture, name, email, cell, ...props }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Avatar alt="profile picture" src={picture.medium} />
        <HeadingGroup>
          <SubHeading>Twoja Księgowa</SubHeading>
          <Heading>{`${name.first} ${name.last}`}</Heading>
        </HeadingGroup>
      </Header>
      <Body>
        <Row>
          <Label>E-mail</Label>
          <Value hasUnderline>{email}</Value>
        </Row>
        <Row>
          <Label>Telefon</Label>
          <Value>{cell}</Value>
        </Row>
        <Row>
          <Label>Średnia cena netto usuługi / m-c</Label>
          <Value>
            {`${350}`} <Currency>pln</Currency>
          </Value>
        </Row>
      </Body>
    </Wrapper>
  );
};
