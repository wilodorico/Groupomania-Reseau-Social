import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { BiCommentDetail, BiEdit } from "react-icons/bi";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #15cdfc;
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  width: 98%;
  background: ${({ bgAuthor }) => bgAuthor };
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  min-height: 35px;
`

export const Icon = styled(FaUserCircle)`
  width: 20px;
  height: 20px;
  color: #000;
  margin-right: 5px;
`

export const CardUsername = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-right: 10px;
`

export const CardText = styled.p`
  font-size: 1rem;
  margin: 5px;
`

export const CardPicture = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  color: #57606f;
  padding-top: 10px;
`

export const IconComment = styled(BiCommentDetail)`
  width: 24px;
  height: 24px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    transition: 0.1s;
    transform: scale(1.20);
  }
`

export const UpdateIcon = styled(BiEdit)`
  width: 24px;
  height: 24px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    transition: 0.1s;
    transform: scale(1.20);
  }
`

export const IconWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const DatePosted = styled.p`
  font-size: 0.8rem;
  color: #7f8c8d;
`

export const LoadingIcon = styled.div`
display: flex;
justify-content: center;
font-size: 2rem;
color: #7f8c8d;
`