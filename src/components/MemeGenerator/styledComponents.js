import styled from 'styled-components'

export const Maincont = styled.div`
display: flex;
flex-direction:row;
justify-content: center; 
align-items: center;
`

export const Inputcont = styled.form`
display: flex;
flex-direction:column;
margin:10px;
justify-content: center;
align-self: flex-start;
`
export const Imagecont = styled.div`
background-image : url(${props => props.imgUrl});
background-size : cover;
height: 500px;
width: 500px;
`
export const Custombutton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff; /* Text color */
  background-color: #007bff;
`
export const Secondcont = styled.div`
display: ${props => (props.disp ? 'flex' : 'none')}
`
export const Parastyle = styled.p`
color: white;
font-size: ${props => props.fontstyle}px; 
`
