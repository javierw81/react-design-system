import styled from 'styled-components'
import { IStyledProps } from "./commons/StyledInterfaces"

const labelFloatingAllowedInputTypes = ['text', 'password']

export const Field = styled.div<IStyledProps>` 
position:relative; 
margin-bottom:20px; 

input[type="radio"] ~ label, 
input[type="checkbox"]  ~ label{
  margin-left: 5px;
}

${labelFloatingAllowedInputTypes.map(x => `input[type=${x}]`).join(',')}, 
select, 
textarea {  
  padding:4px 4px;
  display:block;
  width:100%;
  height:30px;
  background-color: transparent;
  border:none;
  border-bottom:1px solid #757575;
  :focus {
    outline:none;
    border-bottom:2px solid #000; 
  }
}

textarea {
  min-height: 30px;
  max-height: 260px; 
  overflow:hidden;
  overflow-x: hidden; 
}

${labelFloatingAllowedInputTypes.map(x => `input[type=${x}] ~ label`).join(',')}, 
select ~ label,
textarea ~ label {
  color:#999;  
  position:absolute;
  pointer-events:none;
  left:5px;
  top:5px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

${labelFloatingAllowedInputTypes.map(x => `input[type=${x}]:focus ~ label`).join(',')},  
${labelFloatingAllowedInputTypes.map(x => `input[type=${x}]:not(:placeholder-shown) ~ label`).join(',')} {
  top:-18px; 
  color:#000;
}

select:focus ~ label, 
select:required:valid ~ label, 
select.selected:valid ~ label {
  top:-18px;
  color:#000;
}

textarea:focus ~ label, 
textarea:not(:placeholder-shown) ~ label {
  top:-18px;
  color:#000;
}

${labelFloatingAllowedInputTypes.map(x => `input[type=${x}]:required:invalid + label:before`).join(',')},  
textarea:required:invalid + label:before, 
select:required:invalid + label:before{
  content: '*';
}

`
