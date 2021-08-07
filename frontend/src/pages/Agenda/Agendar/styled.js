import styled from "styled-components";

export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 20px; 
    a {
        text-decoration: none;
        color: #000000;
    }
`;

export const TitlePage = styled.h1`
    font-size: 15px;
`;

export const ContainerForm = styled.div`
    width: 60%;
    margin: 0 20px 0 20px;
    align-items: left;
`;

export const Form = styled.form`
    width: 100%;
    font-family: "Arial", Times, serif;
`;

export const Input = styled.input`
    width: 100%;
    color: #292929;
    font-size: 18px;
    background-color: #E9E9E9;
    border: 1px solid #E9E9E9;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    height: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    text-indent: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  color: #292929;
  font-size: 18px;
  background-color: #E9E9E9;
  border: 1px solid #E9E9E9;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  height: 200px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  text-indent: 20px;
  padding-top: 16px;
  padding-left: 0;
  padding-right: 0;
  font-family: "Arial", Times, serif;

`;

export const Button = styled.button`
  width: 100%;
  font-size: 18px;
  border-radius: 4px;
  color: #fff;
  height: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  background: #7E3033;
  display: block;
  border: none;
  border-bottom: 1px solid #500707;
  border-right: 1px solid #500707;
  transition: 1s;
`;
