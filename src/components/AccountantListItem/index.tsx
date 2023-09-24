import { AccountantType } from '../../types';
import { Button } from '../Button';
import {
  Avatar,
  Body,
  Currency,
  Footer,
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

export const AccountantListItem = ({ picture, name, email, cell, login }: Props) => {
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
          <Value>
            <a href={`mailto:${email}`}>{email}</a>
          </Value>
        </Row>
        <Row>
          <Label>Telefon</Label>
          <Value noUnderline>
            <a href={`tel:${cell}`}>{cell}</a>
          </Value>
        </Row>
        <Row>
          <Label>Średnia cena netto usuługi / m-c</Label>
          <Value>
            {`${350}`} <Currency>pln</Currency>
          </Value>
        </Row>
      </Body>
      <Footer>
        <Button type="button" onClick={() => console.log('read more for user id', login.uuid)}>
          Dowiedz się więcej
        </Button>
      </Footer>
    </Wrapper>
  );
};
