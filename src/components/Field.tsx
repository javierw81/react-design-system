import styled from 'styled-components'
import { IStyledProps } from "./commons/StyledInterfaces"

export const Field = styled.div<IStyledProps>` 
position:relative; 
margin-bottom:20px; 

input[type="radio"] ~ label, 
input[type="checkbox"]  ~ label{
  margin-left: 5px;
}

input[type="text"], 
input[type="password"], 
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

input[type="text"] ~ label, 
input[type="password"] ~ label, 
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

input[type="text"]:focus ~ label, 
input[type="password"]:focus ~ label, 
input[type="text"]:not(:placeholder-shown) ~ label, 
input[type="password"]:not(:placeholder-shown) ~ label {
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

input[type="text"]:required:invalid + label:before, 
input[type="password"]:required:invalid + label:before, 
textarea:required:invalid + label:before, 
select:required:invalid + label:before{
  content: '*';
}

`
