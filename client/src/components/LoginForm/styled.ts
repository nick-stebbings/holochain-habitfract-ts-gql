// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.dgray};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem
    flex: 1;
    min-height: 406px;
    min-width: 347px;
    text-align: center;
    font-family: 'Lexend Deca', sans-serif;
`

export const Top = styled.div`
  margin: 1rem 0;
`

export const Middle = styled.div`
  margin: 0 0 1rem 0;
`

export const TopText = styled.div`
  font-size: 64px;
  line-height: 80px;
  color: ${({ theme }) => theme.colors.offwhite};
`

export const SubText = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.offwhite};
`

export const Bottom = styled.div`
  form {
    margin: 0 0 1rem 0;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
