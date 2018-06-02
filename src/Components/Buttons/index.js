import styled from 'styled-components'

export const PrimaryButton = styled.div.attrs({
    width: props => props.width || '150px',
    height: props => props.height || '100%'
})`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #f50057;
    border-radius: ${props => (props.borderRadius ? '4px' : '0')};
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
`