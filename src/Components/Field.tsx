import styled from 'styled-components'
import { IStyledProps } from "./commons/StyledInterfaces"







export const Field = styled.div<IStyledProps>` 
position:relative; 
margin-bottom:20px; 

input, select, textarea {
  font-size:14px;
  padding:4px 4px;
  display:block;
  width:100%;
  height:30px;
  background-color: transparent;
  border:none;
  border-bottom:1px solid #757575;
}

textarea {
  min-height: 30px;
  max-height: 260px; 
  overflow:hidden;
  overflow-x: hidden; 
}

input:focus , select:focus, textarea:focus {
  outline:none;
  border-bottom:2px solid #000; 
}

label {
  color:#999; 
  font-size:14px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:5px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

input:focus ~ label, input:not(:placeholder-shown) ~ label {
  top:-18px;
  font-size:14px;
  color:#000;
}

select:focus ~ label, select:required:valid ~ label, select.selected:valid ~ label {
  top:-18px;
  font-size:14px;
  color:#000;
}

textarea:focus ~ label, textarea:not(:placeholder-shown) ~ label {
  top:-18px;
  font-size:14px;
  color:#000;
}

input:required:invalid + label:before, textarea:required:invalid + label:before, select:required:invalid + label:before{
  content: '*';
}

*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
`
