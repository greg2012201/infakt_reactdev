import { styled } from 'styled-components';

export const Wrapper = styled.li`
  width: 300px;
  height: 376px;
  padding: 24px;
  border: 1px solid;
  border-color: ${({ theme }) => `${theme.colors.grey[200]}`};
  border-radius: 16px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  gap: 16px;
`;
export const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Heading = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: ${({ theme }) => theme.font.lineHeight.lg};
  line-break: anywhere;
`;

export const SubHeading = styled.p`
  color: ${({ theme }) => theme.colors.grey[800]};
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: ${({ theme }) => theme.font.lineHeight.md};
`;
